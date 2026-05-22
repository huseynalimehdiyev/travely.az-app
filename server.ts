import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI, Type } from '@google/genai';
import {
  PLACES_BY_CITY,
  FOOD_BY_CITY,
  MUSEUMS_BY_CITY,
  ACCOMMODATIONS_BY_CITY,
  SHOPPING_BY_CITY
} from './src/data.ts';

// Load environment variables
dotenv.config();


const app = express();
app.use(express.json());

// Lazy-loaded Gemini AI client helper to avoid crashes if GEMINI_API_KEY is not configured
let aiClient: any = null;
function getGeminiClient(): { ai: any | null; hasKey: boolean } {
  const apiKey = process.env.GEMINI_API_KEY;
  const isPlaceholder = !apiKey || apiKey === 'MY_GEMINI_API_KEY' || apiKey.trim() === '';
  
  if (isPlaceholder) {
    return { ai: null, hasKey: false };
  }

  if (!aiClient) {
    aiClient = new GoogleGenAI({
      apiKey: apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        }
      }
    });
  }
  return { ai: aiClient, hasKey: true };
}

// -------------------------------------------------------------
// Core Static Data & Fallback Content Source (Azerbaijan database)
// -------------------------------------------------------------
const CITIES_LIST = ['Baku', 'Gabala', 'Ismayilli', 'Sheki', 'Guba', 'Lankaran'];

// Quick fallback helper in case the LLM key is not provided yet or errors out
function getFallbackPlan(city: string, days: number, budget: string, interests: string[], lang: string) {
  const isEn = lang === 'en';
  const isRu = lang === 'ru';
  const isTr = lang === 'tr';
  const isAr = lang === 'ar';

  const welcomeMsg = {
    en: `Here is your offline-generated local travel itinerary for ${city}. (Setup Gemini API Key for dynamic real-time customized itineraries!)`,
    ru: `Это ваш локальный оффлайн-маршрут по городу ${city}. (Настройте Gemini API Key для создания умных путешествий в реальном времени!)`,
    tr: `Bu, ${city} için yerel seyahat planınızdır. (Gerçek zamanlı yapay zeka planları için Gemini API Anahtarını kurun!)`,
    ar: `هذا هو برنامج السفر المحلي غير المتصل بالإنترنت لمدينة ${city}.`
  };

  const dayThemes = {
    en: ['City Exploration & Landmarks', 'Cultural Highlights & History', 'Nature Escape & Traditional Gastronomy', 'Local Hidden Gems & Artisan Markets'],
    ru: ['Знакомство с городом и главные достопримечательности', 'Культурное наследие и история', 'Выезд на природу и традиционная кухня', 'Скрытые сокровища и ремесленные лавки'],
    tr: ['Şehir Keşfi ve Simgeler', 'Kültürel Önemli Noktalar ve Tarih', 'Doğa Gezisi ve Geleneksel Tatlar', 'Yerel Gizli Hazineler ve El Sanatları Pazarı'],
    ar: ['استكشاف المدينة والمعالم الرئيسية', 'الجوانب الثقافية والتاريخية', 'الهروب إلى الطبيعة والمطبخ التقليدي', 'الجواهر الخفية والأسواق الحرفية المحلية']
  };

  const getTheme = (dayIndex: number) => {
    const arr = dayThemes[lang as 'en' | 'ru' | 'tr' | 'ar'] || dayThemes.en;
    return arr[dayIndex % arr.length];
  };

  const itinerary: any[] = [];
  for (let i = 1; i <= days; i++) {
    itinerary.push({
      day: i,
      theme: getTheme(i - 1),
      activities: [
        {
          time: '10:00',
          place: i === 1 ? `${city} Center Explorer` : `Scenic view in ${city}`,
          description: isEn 
            ? `Start your day at the local visitor landmark. Explore the surrounding architecture, enjoy panoramic spots, and have traditional Azerbaijani tea.`
            : isRu 
            ? `Начните день у главной достопримечательности. Осмотрите окружающую архитектуру и насладитесь традиционным азербайджанским чаем.`
            : isTr 
            ? `Güne yerel simge yapıda başlayın. Çevredeki mimariyi keşfedin ve geleneksel Azerbaycan çayının tadını çıkarın.`
            : `ابدأ يومك في معلم المغامرات المحلي. تذوق الشاي الأذربيجاني والتقط أجمل الصور البانورامية.`,
          cost: budget === 'budget' ? '3 AZN' : budget === 'medium' ? '12 AZN' : '30 AZN'
        },
        {
          time: '13:30',
          place: `Authentic Lunch Spot`,
          description: isEn 
            ? `Enjoy a premium meal featuring local culinary highlights (e.g. delicious Plov, fresh hot Qutab, and homemade Compote).`
            : isRu 
            ? `Попробуйте традиционный обед: сочный шах-плов, горячие кутабы с зеленью и домашний компот.`
            : isTr 
            ? `Geleneksel bir öğle yemeğinin tadını çıkarın: lezzetli Şah Pilavı, taze sıcak Kutab ve ev yapımı komposto.`
            : `تناول وجبة غداء فاخرة تشمل أشهى المأكولات مثل الشاه بلوف وفطائر القطاب الطازجة.`,
          cost: budget === 'budget' ? '8 AZN' : budget === 'medium' ? '20 AZN' : '50 AZN'
        },
        {
          time: '16:00',
          place: `Cultural Landmark / Nature Park`,
          description: isEn 
            ? `Immerse yourself in history or enjoy scenic relaxing landscapes. Take standard souvenir photos, learn regional history.`
            : isRu 
            ? `Погрузитесь в историю или отдохните на природе. Сделайте красивые фотографии и узнайте больше о регионе.`
            : isTr 
            ? `Kendinizi tarihe bırakın veya manzaranın tadını çıkarın. Güzel fotoğraflar çekin ve bölge tarihi hakkında bilgi edinin.`
            : `انغمس في التاريخ أو استمتع بالمناظر الطبيعية الخلابة. التقط صوراً تذكارية واستمتع بالأجواء.`,
          cost: 'Free'
        }
      ]
    });
  }

  const tips = {
    en: [
      `Welcome! Ensure you have local cash (Azerbaijani Manat - AZN) as remote mountain venues may not accept cards.`,
      `Download 'Bolt' or 'Yango' apps for safe and affordable ride-hailing services in major areas.`,
      `Always order tea 'with lemon' (limonlu çay) for an authentic local culinary service experience!`
    ],
    ru: [
      `Добро пожаловать! Имейте при себе наличные манаты (AZN), так как в регионах карты принимают не везде.`,
      `Используйте приложения 'Bolt' или 'Yango' для заказа такси по выгодным тарифам.`,
      `Обязательно закажите традиционный чай с лимоном (лимонлу чай) и местным вареньем!`
    ],
    tr: [
      `Hoş geldiniz! Kartlar her yerde geçmeyebileceğinden yanınızda her zaman nakit Azerbaycan Manatı (AZN) bulundurun.`,
      `Konforlu ve güvenilir ulaşım için 'Bolt' veya 'Yango' uygulamalarını kullanın.`,
      `Geleneksel çay deneyimi için çayınızı mutlaka 'limonlu çay' olarak sipariş edin!`
    ],
    ar: [
      `مرحباً بك! تأكد من حمل العملة المحلية مانات نقداً حيث لا تتوفر شبكات الدفع الإلكتروني في بعض الأرياف.`,
      `اطلب الشاي الأذربيجاني التقليدي مع الليمون والمربى المحلي الشهير لتجربة سياحية حقيقية!`,
      `استخدم تطبيقات Bolt أو Yango للتنقل بأسعار ممتازة وبأمان.`
    ]
  };

  return {
    itinerary,
    tips: [welcomeMsg[lang as 'en' | 'ru' | 'tr' | 'ar'] || welcomeMsg.en, ...(tips[lang as 'en' | 'ru' | 'tr' | 'ar'] || tips.en)]
  };
}

// -------------------------------------------------------------
// POST /plan-trip & POST /api/plan-trip & POST /api/v1/plan-trip
// -------------------------------------------------------------
const handlePlanTrip = async (req: express.Request, res: express.Response): Promise<void> => {
  try {
    const { city, days, budget, interests, lang } = req.body;

    const validatedCity = CITIES_LIST.includes(city) ? city : 'Baku';
    const validatedDays = Math.min(Math.max(Number(days) || 1, 1), 14); // constraint to max 14 days
    const validatedBudget = ['budget', 'medium', 'luxury'].includes(budget) ? budget : 'medium';
    const validatedInterests = Array.isArray(interests) && interests.length > 0 ? interests : ['culture', 'nature'];
    const validatedLang = ['en', 'ru', 'tr', 'ar'].includes(lang) ? lang : 'en';

    // Try Gemini AI trip planning
    const { ai, hasKey } = getGeminiClient();
    
    if (!hasKey) {
      // Return high quality structured offline fallback
      const offlinePlan = getFallbackPlan(validatedCity, validatedDays, validatedBudget, validatedInterests, validatedLang);
      res.json(offlinePlan);
      return;
    }

    const languageNames: Record<string, string> = {
      en: 'English',
      ru: 'Russian',
      tr: 'Turkish',
      ar: 'Arabic'
    };
    const targetLangName = languageNames[validatedLang] || 'English';

    const prompt = `Create a custom, highly practical and exciting ${validatedDays}-day travel itinerary for visiting ${validatedCity}, Azerbaijan.
Profile of the traveler:
- Budget Tier: ${validatedBudget} (budget/medium/luxury)
- Interests: ${validatedInterests.join(', ')}
- Target Language: ${targetLangName}

Instructions for the plan:
1. Act as a passionate local travel guide who knows everything about Azerbaijan, its local cafes, pricing, travel hacks, and hidden gems.
2. The response MUST be generated in the requested language: ${targetLangName}.
3. The response MUST be valid JSON adhering STRICTLY to the following schema:
{
  "itinerary": [
    {
      "day": number,
      "theme": "Catchy theme of the day",
      "activities": [
        {
          "time": "HH:MM",
          "place": "Attraction/Place Name",
          "description": "Short, vivid description in ${targetLangName} of what to do there, what to look for, local tip",
          "cost": "Estimated cost in AZN (e.g. Free, 10 AZN, 40 AZN)"
        }
      ]
    }
  ],
  "tips": [
    "Useful localized safety/culture/transport tip 1 in ${targetLangName}",
    "Useful localized safety/culture/transport tip 2 in ${targetLangName}"
  ]
}

Ensure all descriptions are written beautifully in ${targetLangName}. Stay practical: include transport details (like taking a metro vs taxi) and realistic prices in AZN (manat). Avoid any markdown format tags inside your JSON, return direct JSON string.`;

    // Define response schema
    const planTripResponseSchema = {
      type: Type.OBJECT,
      properties: {
        itinerary: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              day: { type: Type.INTEGER, description: "The day number, starting at 1" },
              theme: { type: Type.STRING, description: "Theme for the day (e.g., Old City Secrets)" },
              activities: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    time: { type: Type.STRING, description: "Time of day (e.g., 10:00)" },
                    place: { type: Type.STRING, description: "Attraction or eatery name" },
                    description: { type: Type.STRING, description: "Fascinating local guidance in the selected language" },
                    cost: { type: Type.STRING, description: "Estimated cost in Azerbaijani Manat (AZN) or 'Free'" }
                  },
                  required: ["time", "place", "description", "cost"]
                }
              }
            },
            required: ["day", "activities"]
          }
        },
        tips: {
          type: Type.ARRAY,
          items: { type: Type.STRING },
          description: "4-5 highly specific, actionable local travel advice in the chosen language"
        }
      },
      required: ["itinerary", "tips"]
    };

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: planTripResponseSchema,
        temperature: 0.7,
      }
    });

    const textResult = response.text || '';
    const parsedData = JSON.parse(textResult.trim());
    res.json(parsedData);
  } catch (err: any) {
    console.error('Error in plan-trip API:', err);
    // Silent fallback to keep app absolutely active
    try {
      const offline = getFallbackPlan(req.body.city || 'Baku', Number(req.body.days) || 3, req.body.budget || 'medium', req.body.interests || [], req.body.lang || 'en');
      res.json(offline);
    } catch {
      res.status(500).json({ error: 'Failed to build itinerary' });
    }
  }
};

app.post('/plan-trip', handlePlanTrip);
app.post('/api/plan-trip', handlePlanTrip);
app.post('/api/v1/plan-trip', handlePlanTrip);

// -------------------------------------------------------------
// POST /chat & POST /api/chat & POST /api/v1/chat
// -------------------------------------------------------------
const handleChat = async (req: express.Request, res: express.Response): Promise<void> => {
  try {
    const { message, city, history, lang } = req.body;
    const userMsg = message || '';
    const validatedCity = CITIES_LIST.includes(city) ? city : 'Baku';
    const validatedLang = ['en', 'ru', 'tr', 'ar'].includes(lang) ? lang : 'en';

    const { ai, hasKey } = getGeminiClient();

    if (!hasKey) {
      let reply = "";
      const text = userMsg.toLowerCase();
      if (validatedLang === 'en') {
        reply = `I am currently in local offline-preview mode because the Gemini API Key is not set in Secrets. However, I can tell you that ${validatedCity} has amazing hospitality! For detailed realtime answers, please provide your GEMINI_API_KEY.`;
        if (text.includes('weather') || text.includes('rain') || text.includes('temp')) {
          reply = `The weather in ${validatedCity} is typically beautiful! In spring and autumn, expect comfortable temperatures around 18-24°C with a pleasant breeze.`;
        } else if (text.includes('food') || text.includes('restaurant') || text.includes('dine') || text.includes('eat')) {
          reply = `Excellent choice! In ${validatedCity}, you must try traditional Shah Plov, Saj dishes, fresh Qutabs, and Dolma. Make sure to experience a local tea set (çay dəsgahı) served with delicious fruit preserves!`;
        } else if (text.includes('transport') || text.includes('bus') || text.includes('metro') || text.includes('taksi')) {
          reply = `To get around ${validatedCity}, download the Bolt or Yango apps for quick and safe taxis. For public transport in Baku, purchase a plastic BakiKART card at airport or station ticket terminals (metro/bus rides are incredibly cheap, only 0.60 AZN per trip).`;
        }
      } else if (validatedLang === 'ru') {
        reply = `Я нахожусь в локальном демо-режиме, так как API-ключ Gemini не настроен. Азербайджан и город ${validatedCity} всегда рады гостям! Настройте GEMINI_API_KEY в панели Secrets, чтобы разблокировать полноценный ИИ.`;
        if (text.includes('погод') || text.includes('дожд') || text.includes('градус')) {
          reply = `Погода в ${validatedCity} обычно отличная! Весной и осенью здесь около 18-24°C, дует освежающий ветер. Летом тепло, это лучшее время для поездок в горы или на побережье Каспия.`;
        } else if (text.includes('ед') || text.includes('ресторан') || text.includes('кухн') || text.includes('блюд')) {
          reply = `Обязательно попробуйте Шах Плов, свежие кутабы, долму и сочный люля-кебаб на углях. Запейте это ароматным чаем с местным вареньем в армуды!`;
        } else if (text.includes('транспорт') || text.includes('такси') || text.includes('метро') || text.includes('автобус')) {
          reply = `В ${validatedCity} выгоднее всего перемещаться на такси Bolt/Yango или на метро и автобусах, купив проездную карту BakiKART (поездка стоит всего 0.60 AZN).`;
        }
      } else if (validatedLang === 'tr') {
        reply = `Şu an yerel önizleme modundayım çünkü Gemini API Anahtarı girilmemiş. Ancak ${validatedCity} şehrinin harika bir misafirperverliği olduğunu söyleyebilirim! Canlı yapay zeka cevapları için Secrets panelinden API anahtarını tanımlayabilirsiniz.`;
        if (text.includes('hava') || text.includes('yağmur') || text.includes('sıcak')) {
          reply = `${validatedCity} havası genellikle rüzgarlı ve çok güzeldir! İlkbahar ve sonbaharda 18-24°C sıcaklıklar görülür. Yazlar sıcak geçer, yaylalar ve dağ gezileri için harikadır.`;
        } else if (text.includes('yemek') || text.includes('restoran') || text.includes('lezzet')) {
          reply = `Harika bir tercih! ${validatedCity} ziyaretinizde efsanevi Şah Pilavı, sıcak sac yemekleri ve dumanı üstünde Kutab yemeden dönmeyin. Şerbet ve çayı mutlaka deneyin!`;
        } else if (text.includes('ulaşım') || text.includes('taksi') || text.includes('otobüs') || text.includes('metro')) {
          reply = `${validatedCity} içinde seyahat etmek için Bolt veya Yango taksi uygulamalarını kurun. Otobüs ve metro için havalimanı ve istasyonlardaki makinelerden BakiKART kartı alabilirsiniz (tek geçiş sadece 0.60 AZN).`;
        }
      } else {
        reply = `مرحباً بك! أنا حالياً في وضع عدم الاتصال التجريبي بسبب عدم إعداد مفتاح API لـ Gemini. أذربيجان ومدينة ${validatedCity} ترحب بالزوار دائماً! يرجى إدخال مفتاح الـ API الخاص بك في لوحة Secrets للتمتع بكامل إمكانيات الذكاء الاصطناعي الكامله في خدمة الإرشادات السياحية.`;
        if (text.includes('طقس') || text.includes('جو') || text.includes('مطر')) {
          reply = `الطقس في ${validatedCity} رائع وممتع للغاية! في الربيع والخريف تتراوح درجات الحرارة بين 18-24 درجة مئوية مع نسيم عليل.`;
        } else if (text.includes('أكل') || text.includes('طعام') || text.includes('مطعم')) {
          reply = `في ${validatedCity}، يجب عليك تجربة الشاه بلوف الأذربيجاني الفاخر، الساج التقليدي، وفطائر القطاب الطازجة، وتذوق الشاي المميز مع المربيات المتنوعة!`;
        } else if (text.includes('مواصلات') || text.includes('تاكسي') || text.includes('باص') || text.includes('مترو')) {
          reply = `للتنقل في ${validatedCity}، ننصح بتحميل تطبيق Bolt أو Yango. لرحلات المترو والباص المريحة، قم بشراء بطاقة BakiKART البلاستيكية من المطار أو المحطات بسعر 2 مانات وشحنها (الرحلة الواحدة بـ 0.60 مانات فقط!).`;
        }
      }
      res.json({ reply });
      return;
    }

    const languageNames: Record<string, string> = {
      en: 'English',
      ru: 'Russian',
      tr: 'Turkish',
      ar: 'Arabic'
    };
    const targetLangName = languageNames[validatedLang] || 'English';

    const sysInstruction = `You are Travely's ultimate local Azerbaijani travel expert and assistant. 
Your goal is to provide warm, helpful, highly practical and realistic travel advice for tourists visiting Azerbaijan, specifically focusing on the city of ${validatedCity}.
Include off-the-beaten-path hidden gems, local customs, bargaining tips, currency calculations, transit routes, and local expressions when relevant.
You MUST write your response entirely in the requested language: ${targetLangName} (Language code: ${validatedLang}).
Keep response friendly, warm, clearly formatted in simple markdown paragraphs, never too long, structured with concise bullet points if explaining multiple items. Respond professionally without meta-commentary.`;

    const contents: any[] = [];
    if (Array.isArray(history)) {
      history.slice(-6).forEach((h: any) => {
        contents.push({
          role: h.sender === 'user' ? 'user' : 'model',
          parts: [{ text: h.text }]
        });
      });
    }

    contents.push({
      role: 'user',
      parts: [{ text: userMsg }]
    });

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: contents,
      config: {
        systemInstruction: sysInstruction,
        temperature: 0.8,
      }
    });

    res.json({ reply: response.text });
  } catch (err: any) {
    console.error('Error in chat API:', err);
    res.json({ 
      reply: `I ran into a small speedbump compiling that AI tip, but let me reassure you that traveling inside Azerbaijan is incredibly safe and enjoyable! Feel free to rephrase or try again.` 
    });
  }
};

app.post('/chat', handleChat);
app.post('/api/chat', handleChat);
app.post('/api/v1/chat', handleChat);

// -------------------------------------------------------------
// GET /api/v1/destinations
// -------------------------------------------------------------
app.get('/api/v1/destinations', (req, res) => {
  const city = (req.query.city as string) || 'Baku';
  const category = (req.query.category as string) || 'all';
  const lang = (req.query.lang as string) || 'en';

  const validatedCity = CITIES_LIST.includes(city) ? city : 'Baku';
  const validatedLang = ['en', 'ru', 'tr', 'ar'].includes(lang) ? lang : 'en';

  const places = PLACES_BY_CITY[validatedCity as any]?.[validatedLang as any] || [];
  const food = FOOD_BY_CITY[validatedCity as any]?.[validatedLang as any] || [];
  const museums = MUSEUMS_BY_CITY[validatedCity as any]?.[validatedLang as any] || [];
  const hotels = ACCOMMODATIONS_BY_CITY[validatedCity as any]?.[validatedLang as any] || [];
  const shopping = SHOPPING_BY_CITY[validatedCity as any]?.[validatedLang as any] || [];

  if (category === 'places') {
    return res.json(places);
  } else if (category === 'food') {
    return res.json(food);
  } else if (category === 'museums') {
    return res.json(museums);
  } else if (category === 'hotels' || category === 'accommodation') {
    return res.json(hotels);
  } else if (category === 'shopping') {
    return res.json(shopping);
  } else {
    return res.json({
      places,
      food,
      museums,
      accommodation: hotels,
      shopping
    });
  }
});

// -------------------------------------------------------------
// GET /api/v1/arrival-guide
// -------------------------------------------------------------
app.get('/api/v1/arrival-guide', (req, res) => {
  const city = (req.query.city as string) || 'Baku';
  const lang = (req.query.lang as string) || 'en';

  const validatedCity = CITIES_LIST.includes(city) ? city : 'Baku';
  const validatedLang = ['en', 'ru', 'tr', 'ar'].includes(lang) ? lang : 'en';

  const isEn = validatedLang === 'en';
  const isRu = validatedLang === 'ru';
  const isTr = validatedLang === 'tr';
  const isAr = validatedLang === 'ar';

  let airportName = "Heydar Aliyev International Airport (GYD) - Baku";
  if (validatedCity === 'Gabala') airportName = "Gabala International Airport (GBB)";
  else if (validatedCity === 'Guba') airportName = "Heydar Aliyev International Airport (GYD) or Ganja Regional Hub";

  const routeToCenter: any[] = [];
  if (validatedCity === 'Baku') {
    routeToCenter.push(
      {
        step: "1",
        title: isEn ? "Exit Terminals & Buy BakiKART" : isRu ? "Выход из терминала и покупка BakiKART" : isTr ? "Terminalden Çıkış ve BakiKART Alımı" : "الخروج من الصالة وشراء بطاقة باكو كارت",
        description: isEn 
          ? "Step out of Terminal 1 or 2 and locate the yellow BakiKART kiosk. Insert cash/card to buy a plastic card for 2 AZN, and load at least 5-10 AZN balance."
          : isRu 
          ? "Выйдите из Терминала 1 или 2 и найдите желтый автомат BakiKART. Купите пластиковую карту за 2 AZN и пополните баланс на 5-10 AZN."
          : isTr 
          ? "Terminal 1 veya 2 den çıkın ve sarı bilet makinesini bulun. 2 AZN karşılığında plastik kart alıp 5-10 AZN bakiye yükleyin."
          : "اخرج من مبنى الركاب 1 أو 2 وابحث عن كشك BakiKART الأصفر. اشترِ بطاقة بلاستيكية مقابل 2 مانات واشحنها برصيد 5-10 مانات."
      },
      {
        step: "2",
        title: isEn ? "Board the AeroExpress Bus" : isRu ? "Посадка на автобус AeroExpress" : isTr ? "AeroExpress Otobüsüne Biniş" : "ركوب حافلة AeroExpress المريحة",
        description: isEn 
          ? "Identify the modern red AeroExpress bus right in front of the terminal exit. Tap your BakiKART (1.50 AZN) to board. Buses leave every 30 minutes directly to '28 May' Railway Station. Standard city metro/bus rides from there are 0.60 AZN."
          : isRu 
          ? "Найдите современный красный автобус AeroExpress прямо перед выходом. Приложите BakiKART (1.50 AZN) для оплаты. Автобусы отправляются каждые 30 минут до станции метро '28 Мая'. Обычные поездки на метро/автобусе оттуда стоят 0.60 AZN."
          : isTr 
          ? "Terminal çıkışındaki kırmızı AeroExpress otobüsüne binin. Kartınızı okutun (1.50 AZN). Her 30 dakikada bir '28 May' metro/tren istasyonuna gider. Şehir içi metro ve otobüs tek geçişi 0.60 AZN'dir."
          : "ابحث عن حافلة AeroExpress الحمراء الحديثة أمام المخرج تماماً. امسح بطاقة باكو كارت (1.50 مانات) للركوب. تغادر الحافلة كل 30 دقيقة متجهةً مباشرة إلى محطة '28 مايو' للقطار والمترو. تبلغ رحلات المترو والاتوبيس العادية داخل المدينة 0.60 مانات."
      },
      {
        step: "3",
        title: isEn ? "Arrival at City Hub" : isRu ? "Прибытие на вокзал '28 Мая'" : isTr ? "Şehir Merkezine Ulaşım" : "الوصول إلى وسط المدينة",
        description: isEn 
          ? "Disembark at '28 May' station after a 30-minute smooth highway ride. From here, walk to your hotel, enter the underground metro system, or catch a Bolt/Yango."
          : isRu 
          ? "Выходите на конечной остановке через 30 минут. Отсюда вы можете дойти пешком до отеля, пересесть на метро или заказать Bolt/Yango."
          : "Yaklaşık 30 dakikalık konforlu bir yolculuktan sonra istasyonda inin. Buradan yürüyebilir, metroya binebilir veya Bolt çağırabilirsiniz."
      }
    );
  } else {
    routeToCenter.push(
      {
        step: "1",
        title: isEn ? "Take a Regional Bus (Marshrutka)" : isRu ? "Маршрутка из Баку" : isTr ? "Bölgesel Minibüs (Marşrutka)" : "ركوب الحافلة الإقليمية (مارشروتكا)",
        description: isEn
          ? `Most visitors arrive in ${validatedCity} via comfortable regional buses departing from Baku International Bus Terminal complex (approx. 8-12 AZN ticket, 3-4 hours scenic drive).`
          : `Большинство гостей добираются в ${validatedCity} на автобусах или маршрутках из Бакинского автовокзала (билет около 8-12 AZN, красивый маршрут занимает 3-4 часа).`
      },
      {
        step: "2",
        title: isEn ? "Local Taxi / Ride-Hailing" : isRu ? "Локальное такси" : isTr ? "Yerel Taksi Hizmetleri" : "التاكسي المحلي",
        description: isEn
          ? `Once in ${validatedCity}, negotiate a reasonable rate with local drivers at the bus station or order via Bolt app if connection is available. Standard short-runs must cost 3-5 AZN.`
          : `В городе ${validatedCity} договаривайтесь о фиксированной цене с местными водителями или пользуйтесь Bolt (если доступно). Короткие поездки по городу стоят 3-5 AZN.`
      }
    );
  }

  const emergencyContacts = [
    { label: isEn ? "Police" : isRu ? "Полиция" : isTr ? "Polis" : "الشرطة", phone: "102" },
    { label: isEn ? "Ambulance" : isRu ? "Скорая помощь" : isTr ? "Ambulans/Acil" : "الإسعاف والدعم الطبي", phone: "103" },
    { label: isEn ? "Fire Department" : isRu ? "Пожарная служба" : isTr ? "İtfaiye" : "İtfaiye Teşkilatı", phone: "101" },
    { label: isEn ? "State Migration Service" : isRu ? "Миграционная служба" : isTr ? "Göç İdaresi" : "إدارة الهجرة الحكومية", phone: "919" }
  ];

  const simCardOptions = [
    { operator: "Azercell", deal: isEn ? "Welcome Tour SIM (20 GB LTE + 50 mins) - ~29 AZN. Recommended for best regional coverage." : "Welcome Tour SIM (20 Гб + 50 мин) - около 29 AZN. Лучшее покрытие в горах." },
    { operator: "Bakcell", deal: isEn ? "Tourist Pack (15 GB + 30 mins) - ~22 AZN. Excellent speed in Baku and city centers." : "Tourist Pack (15 Гб + 30 мин) - около 22 AZN. Отличная скорость в Баку." },
    { operator: "Nar Mobile", deal: isEn ? "Visitor Bundle (10 GB LTE) - ~18 AZN. The most budget-friendly choice." : "Visitor Bundle (10 Гб) - около 18 AZN. Наиболее бюджетный вариант." }
  ];

  const exchangeRates = {
    base: "AZN",
    rates: {
      "USD": 1.70,
      "EUR": 1.84,
      "RUB": 0.018,
      "TRY": 0.052,
      "AED": 0.46
    }
  };

  const transitTips = [
    isEn 
      ? "Always check if your taxi runs on a taximeter, or agree on the price BEFORE embarking on the journey to prevent tourist markups."
      : "Всегда согласуйте стоимость такси ДО начала поездки, если не заказываете через мобильное приложение.",
    isEn
      ? "Buy a plastic BakiKART card at local ticket terminals for extremely cheap public metro and express bus rides (0.60 AZN per trip)."
      : "Купите пластиковую карту BakiKART в терминалах оплаты для недорогих поездок на метро и автобусах (всего 0.60 AZN за поездку)."
  ];

  res.json({
    airport: airportName,
    routeToCenter,
    transitTips,
    emergencyContacts,
    simCardOptions,
    exchangeRates
  });
});

// -------------------------------------------------------------
// GET Static Data Endpoints
// -------------------------------------------------------------
app.get('/api/places', (req, res) => {
  const city = (req.query.city as string) || 'Baku';
  const lang = (req.query.lang as string) || 'en';
  const validatedCity = CITIES_LIST.includes(city) ? city : 'Baku';
  const validatedLang = ['en', 'ru', 'tr', 'ar'].includes(lang) ? lang : 'en';
  res.json(PLACES_BY_CITY[validatedCity as any]?.[validatedLang as any] || []);
});

app.get('/api/food', (req, res) => {
  const city = (req.query.city as string) || 'Baku';
  const lang = (req.query.lang as string) || 'en';
  const validatedCity = CITIES_LIST.includes(city) ? city : 'Baku';
  const validatedLang = ['en', 'ru', 'tr', 'ar'].includes(lang) ? lang : 'en';
  res.json(FOOD_BY_CITY[validatedCity as any]?.[validatedLang as any] || []);
});

app.get('/api/museums', (req, res) => {
  const city = (req.query.city as string) || 'Baku';
  const lang = (req.query.lang as string) || 'en';
  const validatedCity = CITIES_LIST.includes(city) ? city : 'Baku';
  const validatedLang = ['en', 'ru', 'tr', 'ar'].includes(lang) ? lang : 'en';
  res.json(MUSEUMS_BY_CITY[validatedCity as any]?.[validatedLang as any] || []);
});

// -------------------------------------------------------------
// Serve Static Assets & SPA Router
// -------------------------------------------------------------
const PORT = 3000;

const startServer = async () => {
  if (process.env.NODE_ENV !== 'production') {
    // Integrate Vite development server middleware for hot module replacement and local dev asset bundler
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
    console.log(`Vite Dev Server integrated in middleware mode on port ${PORT}`);
  } else {
    // Serve production static assets compiled under dist/ folder
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
    console.log(`Serving static production folders from ${distPath}`);
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Travely server listening happily on http://0.0.0.0:${PORT}`);
  });
};

startServer().catch((err) => {
  console.error("Failed to start Travely Full Stack Express Server:", err);
});
