import os
import json
from datetime import datetime
from typing import List, Optional, Dict, Any
from fastapi import FastAPI, HTTPException, Body
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field
from dotenv import load_dotenv

# Load any active local environmental variables
load_dotenv()

app = FastAPI(
    title="Travely.az API Gateway",
    description="Python FastAPI engine for the automated customizable travel itineraries of beautiful Azerbaijan.",
    version="1.0.0"
)

# Standard cross-origin resource sharing middleware configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# -------------------------------------------------------------
# Lazy client helper for Google Gemini AI SDK
# -------------------------------------------------------------
_genai_client = None

def get_gemini_client():
    """
    Safely retrieves the official Gemini Client using the modern 'google-genai' SDK.
    Prevents runtime server failure if the key is not defined.
    """
    global _genai_client
    api_key = os.getenv("GEMINI_API_KEY")
    
    # Check if empty, placeholder, or undefined
    if not api_key or api_key == "MY_GEMINI_API_KEY" or api_key.strip() == "":
        return None, False
        
    if not _genai_client:
        try:
            # Importing lazyly to prevent environment crash if missing from the core
            from google import genai
            from google.genai import types
            _genai_client = genai.Client(api_key=api_key)
        except Exception as e:
            print(f"Error initializing Google Gemini Client in Python: {e}")
            return None, False
            
    return _genai_client, True

# -------------------------------------------------------------
# Data Models and schemas corresponding to client specs
# -------------------------------------------------------------
class PlanTripRequest(BaseModel):
    city: str = Field(default="Baku", description="The Target Azerbaijan city (Baku, Sheki, Gabala, Ismayilli, etc.)")
    days: int = Field(default=3, ge=1, le=14, description="Number of days (1 to 14)")
    budget: str = Field(default="medium", description="Selected budget type: budget, medium, luxury")
    interests: List[str] = Field(default_factory=lambda: ["culture", "food"])
    lang: str = Field(default="en")

class Activity(BaseModel):
    time: str
    place: str
    description: str
    cost: str

class DayItinerary(BaseModel):
    day: int
    theme: str
    activities: List[Activity]

class PlanTripResponse(BaseModel):
    itinerary: List[DayItinerary]
    tips: List[str]

class ChatMessagePayload(BaseModel):
    sender: str
    text: str

class ChatRequest(BaseModel):
    city: str
    message: str
    history: List[ChatMessagePayload] = []
    lang: str

# -------------------------------------------------------------
# Offline Fallback system to ensure robust offline-preview mode
# -------------------------------------------------------------
CITIES_LIST = ['Baku', 'Gabala', 'Ismayilli', 'Sheki', 'Guba', 'Lankaran']

def get_fallback_plan(city: str, days: int, budget: str, interests: List[str], lang: str) -> dict:
    is_en = lang == 'en'
    is_ru = lang == 'ru'
    is_tr = lang == 'tr'
    is_ar = lang == 'ar'

    welcome_msg = {
        'en': f"Here is your offline-generated local travel itinerary for {city}. (Setup Gemini API Key for dynamic real-time customized itineraries!)",
        'ru': f"Это ваш локальный оффлайн-маршрут по городу {city}. (Настройте Gemini API Key для создания умных путешествий в реальном времени!)",
        'tr': f"Bu, {city} için yerel seyahat planınızdır. (Gerçek zamanlı yapay zeka planları için Gemini API Anahtarını kurun!)",
        'ar': f"هذا هو برنامج السفر المحلي غير المتصل بالإنترنت لمدينة {city}."
    }

    day_themes = {
        'en': ['City Exploration & Landmarks', 'Cultural Highlights & History', 'Nature Escape & Traditional Gastronomy', 'Local Hidden Gems & Artisan Markets'],
        'ru': ['Знакомство с городом и главные достопримечательности', 'Культурное наследие и история', 'Выезд на природу и традиционная кухня', 'Скрытые сокровища и ремесленные лавки'],
        'tr': ['Şehir Keşfi ve Simgeler', 'Kültürel Önemli Noktalar ve Tarih', 'Doğa Gezisi ve Geleneksel Tatlar', 'Yerel Gizli Hazineler ve El Sanatları Pazarı'],
        'ar': ['استكشاف المدينة والمعالم الرئيسية', 'الجوانب الثقافية والتاريخية', 'الهروب إلى الطبيعة والمطبخ التقليدي', 'الجواهر الخفية والأسواق الحرفية المحلية']
    }

    themes = day_themes.get(lang, day_themes['en'])

    itinerary_list = []
    for idx in range(1, days + 1):
        theme_str = themes[(idx - 1) % len(themes)]
        
        # Build 3 solid daily items
        activities_list = [
            {
                "time": "10:00",
                "place": f"{city} Center Explorer" if idx == 1 else f"Scenic view in {city}",
                "description": (
                    "Start your day at the local visitor landmark. Explore the surrounding architecture, enjoy panoramic spots, and have traditional Azerbaijani tea." if is_en 
                    else "Начните день у главной достопримечательности. Осмотрите окружающую архитектуру и насладитесь традиционным азербайджанским чаем." if is_ru
                    else "Güne yerel simge yapıda başlayın. Çevredeki mimariyi keşfedin ve geleneksel Azerbaycan çayının tadını çıkarın." if is_tr
                    else "ابدأ يومك في معلم المغامرات المحلي. تذوق الشاي الأذربيجاني والتقط أجمل الصور البانورامية."
                ),
                "cost": "3 AZN" if budget == "budget" else "12 AZN" if budget == "medium" else "30 AZN"
            },
            {
                "time": "13:30",
                "place": "Authentic Lunch Spot",
                "description": (
                    "Enjoy a premium meal featuring local culinary highlights (e.g. delicious Plov, fresh hot Qutab, and homemade Compote)." if is_en
                    else "Попробуйте традиционный обед: сочный шах-плов, горячие кутабы с зеленью и домашний компот." if is_ru
                    else "Geleneksel bir öğle yemeğinin tadını çıkarın: lezzetli Şah Pilavı, taze sıcak Kutab ve ev yapımı komposto." if is_tr
                    else "تناول وجبة غداء فاخرة تشمل أشهى المأكولات مثل الشاه بلوف وفطائر القطاب الطازجة."
                ),
                "cost": "8 AZN" if budget == "budget" else "20 AZN" if budget == "medium" else "50 AZN"
            },
            {
                "time": "16:00",
                "place": "Cultural Landmark / Nature Park",
                "description": (
                    "Immerse yourself in history or enjoy scenic relaxing landscapes. Take standard souvenir photos, learn regional history." if is_en
                    else "Погрузитесь в историю или отдохните на природе. Сделайте красивые фотографии и узнайте больше о регионе." if is_ru
                    else "Kendinizi tarihe bırakın veya manzaranın tadını çıkarın. Güzel fotoğraflar çekin ve bölge tarihi hakkında bilgi edinin." if is_tr
                    else "انغمس في التاريخ أو استمتع بالمناظر الطبيعية الخلابة. التقط صوراً تذكارية واستمتع بالأجواء."
                ),
                "cost": "Free"
            }
        ]
        
        itinerary_list.append({
            "day": idx,
            "theme": theme_str,
            "activities": activities_list
        })

    tips_dict = {
        'en': [
            "Welcome! Ensure you have local cash (Azerbaijani Manat - AZN) as remote mountain venues may not accept cards.",
            "Download 'Bolt' or 'Yango' apps for safe and affordable ride-hailing services in major areas.",
            "Always order tea 'with lemon' (limonlu çay) for an authentic local culinary service experience!"
        ],
        'ru': [
            "Добро пожаловать! Имейте при себе наличные манаты (AZN), так как в регионах карты принимают не везде.",
            "Используйте приложения 'Bolt' или 'Yango' для заказа такси по выгодным тарифам.",
            "Обязательно закажите традиционный чай с лимоном (лимонлу чай) и местным вареньем!"
        ],
        'tr': [
            "Hoş geldiniz! Kartlar her yerde geçmeyebileceğinden yanınızda her zaman nakit Azerbaycan Manatı (AZN) bulundurun.",
            "Konforlu ve güvenilir ulaşım için 'Bolt' veya 'Yango' uygulamalarını kullanın.",
            "Geleneksel çay deneyimi için çayınızı mutlaka 'limonlu çay' olarak sipariş edin!"
        ],
        'ar': [
            "مرحباً بك! تأكد من حمل العملة المحلية مانات نقداً حيث لا تتوفر شبكات الدفع الإلكتروني في بعض الأرياف.",
            "اطلب الشاي الأذربيجاني التقليدي مع الليمون والمربى المحلي الشهير لتجربة سياحية حقيقية!",
            "استخدم تطبيقات Bolt أو Yango للتنقل بأسعار ممتازة وبأمان."
        ]
    }

    selected_tips = tips_dict.get(lang, tips_dict['en'])
    welcome_message = welcome_msg.get(lang, welcome_msg['en'])

    return {
        "itinerary": itinerary_list,
        "tips": [welcome_message] + selected_tips
    }

# -------------------------------------------------------------
# REST Endpoints Matching our React Frontend expectations
# -------------------------------------------------------------
@app.get("/api/health")
def health_endpoint():
    """Simple health-check diagnostics for container systems"""
    return {"status": "healthy", "server": "FastAPI (Python)", "timestamp": datetime.now().isoformat()}

@app.post("/plan-trip", response_model=PlanTripResponse)
@app.post("/api/plan-trip", response_model=PlanTripResponse)
async def generate_itinerary_endpoint(req_body: PlanTripRequest):
    """
    Builds dynamic multi-day travel plans.
    Integrates directly with Google Gemini AI models to generate reliable itineraries.
    Fails over gracefully to cached Azerbaijani travel configurations.
    """
    city = req_body.city if req_body.city in CITIES_LIST else 'Baku'
    days = min(max(req_body.days, 1), 14)
    budget = req_body.budget if req_body.budget in ['budget', 'medium', 'luxury'] else 'medium'
    interests = req_body.interests if req_body.interests else ['culture', 'nature']
    lang = req_body.lang if req_body.lang in ['en', 'ru', 'tr', 'ar'] else 'en'

    client, has_key = get_gemini_client()
    
    if not has_key:
        fallback = get_fallback_plan(city, days, budget, interests, lang)
        return PlanTripResponse(**fallback)

    language_names = {
        'en': 'English',
        'ru': 'Russian',
        'tr': 'Turkish',
        'ar': 'Arabic'
    }
    target_lang = language_names.get(lang, 'English')

    prompt = f"""Create a custom, highly practical and exciting {days}-day travel itinerary for visiting {city}, Azerbaijan.
Profile of the traveler:
- Budget Tier: {budget} (budget/medium/luxury)
- Interests: {', '.join(interests)}
- Target Language: {target_lang}

Instructions for the plan:
1. Act as a passionate local travel guide who knows everything about Azerbaijan, its local cafes, pricing, travel hacks, and hidden gems.
2. The response MUST be generated in the requested language: {target_lang}.
3. Respond in strict JSON adhering to the exact PlanTripResponse schema.

Ensure all descriptions are written beautifully in {target_lang}. Stay practical: include transport details (like taking a metro vs taxi) and realistic prices in AZN (manat)."""

    try:
        from google.genai import types
        
        # Configure the structured output schema schema matching JSON responses
        response = client.models.generate_content(
            model='gemini-2.5-flash',
            contents=prompt,
            config=types.GenerateContentConfig(
                response_mime_type="application/json",
                response_schema=PlanTripResponse,
                temperature=0.7,
            ),
        )
        
        parsed_data = json.loads(response.text)
        return PlanTripResponse(**parsed_data)
        
    except Exception as e:
        print(f"Exception while talking to Gemini model in Python: {e}")
        # Graceful fallback to maintain applet accessibility
        fallback = get_fallback_plan(city, days, budget, interests, lang)
        return PlanTripResponse(**fallback)

@app.post("/chat")
@app.post("/api/chat")
async def chat_interaction_endpoint(chat_request: ChatRequest):
    """
    Handles conversational threads in real-time.
    Perfectly maps dialogue histories to Gemini AI context.
    """
    city = chat_request.city if chat_request.city in CITIES_LIST else 'Baku'
    lang = chat_request.lang if chat_request.lang in ['en', 'ru', 'tr', 'ar'] else 'en'
    user_msg = chat_request.message
    
    client, has_key = get_gemini_client()
    
    if not has_key:
        # Offline localized smart responders
        text_lower = user_msg.lower()
        reply = ""
        if lang == 'en':
            reply = f"I am currently in local offline-preview mode because the Gemini API Key is not set in Secrets. However, I can tell you that {city} has amazing hospitality! For detailed realtime answers, please provide your GEMINI_API_KEY."
            if 'weather' in text_lower:
                reply = f"The weather in {city} is typically beautiful! In spring and autumn, expect comfortable temperatures around 18-24°C with a pleasant breeze."
            elif 'food' in text_lower or 'restaurant' in text_lower:
                reply = f"Excellent choice! In {city}, you must try local Shah Plov, kebab on coal, and Dolma. Make sure to buy a local tea set (çay dəsgahı)!"
        elif lang == 'ru':
            reply = f"Я нахожусь в локальном демо-режиме, так как API-ключ Gemini не настроен. Азербайджан и город {city} всегда рады гостям!"
        elif lang == 'tr':
            reply = f"Şu an yerel önizleme modundayım çünkü Gemini API Anahtarı girilmemiş. Ancak {city} şehrinin harika bir misafirperverliği olduğunu söyleyebilirim!"
        else:
            reply = "مرحباً بك! أنا حالياً في وضع عدم الاتصال التجريبي بسبب عدم إعداد مفتاح API. أذربيجان بلاد مضيافة وجميلة!"
            
        return {"reply": reply}

    language_names = {
        'en': 'English',
        'ru': 'Russian',
        'tr': 'Turkish',
        'ar': 'Arabic'
    }
    target_lang = language_names.get(lang, 'English')

    sys_instruction = f"""You are Travely's ultimate local Azerbaijani travel expert and assistant. 
Your goal is to provide warm, helpful, highly practical and realistic travel advice for tourists visiting Azerbaijan, specifically focusing on the city of {city}.
Include off-the-beaten-path hidden gems, local customs, bargaining tips, currency calculations, transit routes, and local expressions when relevant.
You MUST write your response entirely in the requested language: {target_lang} (Language code: {lang}).
Keep response friendly, warm, clearly formatted in simple markdown paragraphs, never too long, structured with concise bullet points if explaining multiple items."""

    try:
        from google.genai import types
        
        # Build contents structure tracking dialogue history
        contents = []
        for history_msg in chat_request.history[-6:]:
            role = "user" if history_msg.sender == 'user' else "model"
            contents.append(
                types.Content(
                    role=role,
                    parts=[types.Part.from_text(text=history_msg.text)]
                )
            )
            
        # Append latest message
        contents.append(
            types.Content(
                role="user",
                parts=[types.Part.from_text(text=user_msg)]
            )
        )

        response = client.models.generate_content(
            model='gemini-2.5-flash',
            contents=contents,
            config=types.GenerateContentConfig(
                system_instruction=sys_instruction,
                temperature=0.8,
            )
        )
        return {"reply": response.text}
        
    except Exception as e:
        print(f"Exception occurred in chat endpoint: {e}")
        return {
            "reply": "I ran into a small speedbump compiling that AI tip, but let me reassure you that traveling inside Azerbaijan is incredibly safe and enjoyable! Please try again!"
        }

if __name__ == "__main__":
    import uvicorn
    # Boot server on port 3000 to match production environments
    uvicorn.run("main:app", host="0.0.0.0", port=3000, reload=True)
