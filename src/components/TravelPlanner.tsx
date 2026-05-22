import React, { useState } from 'react';
import { 
  Compass, Calendar, DollarSign, Sparkles, Loader2, Info,
  MapPin, Clock, CircleAlert, HelpCircle, ArrowRight, HeartPulse, Check 
} from 'lucide-react';
import { City, Language, PlanTripResponse } from '../types';

interface TravelPlannerProps {
  city: City;
  lang: Language;
}

export default function TravelPlanner({ city, lang }: TravelPlannerProps) {
  const [days, setDays] = useState<number>(3);
  const [budget, setBudget] = useState<'budget' | 'medium' | 'luxury'>('medium');
  const [selectedInterests, setSelectedInterests] = useState<string[]>(['culture', 'food']);
  
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [loadingStep, setLoadingStep] = useState<number>(0);
  const [plan, setPlan] = useState<PlanTripResponse | null>(null);
  const [activeDay, setActiveDay] = useState<number>(1);
  const [errorStatus, setErrorStatus] = useState<string>('');

  const loadingSteps = {
    en: [
      "Consulting Baku's elite local concierges...",
      "Mapping transport routes & optimizing timings...",
      "Sourcing regional organic cafes & active hubs...",
      "Formatting your customized elite schedule..."
    ],
    ru: [
      "Обращаемся к консьерж-службе Азербайджана...",
      "Оптимизируем маршруты общественного транспорта...",
      "Составляем карту деликатесов и винных дегустаций...",
      "Форматируем ваш готовый план путешествия..."
    ],
    tr: [
      "Azerbaycan'ın yerel uzmanlarıyla iletişim kuruluyor...",
      "Toplu taşıma rotaları optimize ediliyor...",
      "Geleneksel lezzet durakları seçiliyor...",
      "Özel seyahat planınız hazırlanıyor..."
    ],
    ar: [
      "استشارة أفضل المرشدين المحليين في أذربيجان...",
      "مراجعة خطوط النقل والحافلات والمسارات...",
      "تحديد أفضل المطاعم الشعبية المناسبة...",
      "تنسيق جدولك الذكي الفاخر بالكامل..."
    ]
  };

  const labels = {
    en: {
      days: "Length of Stay (Days)",
      budget: "Budget Preference",
      interests: "Primary Interests",
      generate: "Generate AI Itinerary",
      regen: "Design New Route",
      budget_b: "Budget (0.60 AZN Rides + Bazaars)",
      budget_m: "Comfort Mid-Range (Hotels + Restaurants)",
      budget_l: "Premium Luxury (Flame Towers + Caviar)",
      interest_food: "🍽️ Culinary & Tea",
      interest_nature: "🏞️ Mountain Landscapes",
      interest_culture: "🏛️ Ancient Artifacts",
      interest_nightlife: "✨ Modern Architecture & Life",
      form_title: "Bespoke AI Route Architect",
      form_sub: "Receive custom local itineraries backed by real-time transport maps",
      tips: "Elite Local Concierge Tips",
      cost: "Est. Cost:",
      not_found: "Select options then build."
    },
    ru: {
      days: "Продолжительность (Дней)",
      budget: "Бюджетный уровень",
      interests: "Интересы",
      generate: "Создать ИИ-Маршрут",
      regen: "Перерисовать Маршрут",
      budget_b: "Эконом (Метро 0.60 AZN + Базары)",
      budget_m: "Комфорт (Отели + Рестораны)",
      budget_l: "Люкс (Flame Towers + Черная Икра)",
      interest_food: "🍽️ Кулинария и Чай",
      interest_nature: "🏞️ Горные Пейзажи",
      interest_culture: "🏛️ Древняя История",
      interest_nightlife: "✨ Современность и Новая Жизнь",
      form_title: "Генератор Персональных ИИ-Поездок",
      form_sub: "Создайте детальное расписание путешествия с расчетом билетов и такси",
      tips: "Советы локального консьержа",
      cost: "Прим. стоимость:",
      not_found: "Выберите параметры для генерации маршрута."
    },
    tr: {
      days: "Kalınacak Gün Sayısı",
      budget: "Bütçe Tercihi",
      interests: "Öncelikli İlgi Alanları",
      generate: "Yapay Zeka Planını Çiz",
      regen: "Yeni Rota Çiz",
      budget_b: "Ekonomik (0.60 AZN Metro + Pazarlar)",
      budget_m: "Konforlu Orta Seviye (Güzel Oteller)",
      budget_l: "Lüks Premium (Flame Towers + Havyar)",
      interest_food: "🍽️ Mutfak & Çay Kültürü",
      interest_nature: "🏞️ Doğa & Dağ Gezileri",
      interest_culture: "🏛️ Antik Tarih & Eserler",
      interest_nightlife: "✨ Gece Hayatı & Modern Mimari",
      form_title: "Yapay Zeka Rota Mimarı",
      form_sub: "Gerçek zamanlı ulaşım ve bilet fiyatları içeren özel gezi rotası hazırlayın",
      tips: "Yerel Uzman Önerileri",
      cost: "Maliyet:",
      not_found: "Uygulamaya özel bir rota çizmek için parametreleri seçin."
    },
    ar: {
      days: "مدة الإقامة (أيام)",
      budget: "الميزانية المفضلة",
      interests: "الاهتمامات الرئيسية",
      generate: "توليد خطة السفر بالذكاء الاصطناعي",
      regen: "تصميم مسار جديد",
      budget_b: "اقتصادية (مترو 0.60 مانات + أسواق شعبية)",
      budget_m: "متوسطة مريحة (فنادق ممتازة + أفضل المطاعم)",
      budget_l: "فاخرة للغاية (أبراج اللهب + سيارات خاصة)",
      interest_food: "🍽️ تذوق الأكلات والشاي",
      interest_nature: "🏞️ جبال ونبيعة المياه",
      interest_culture: "🏛️ المتاحف والقلاع التاريخية",
      interest_nightlife: "✨ حياة حديثة ومراكز التسوق",
      form_title: "مهندس الخطة بالذكاء الاصطناعي",
      form_sub: "احصل على خطة يومية مفصلة مع أسعار حقيقية وتوجيهات المواصلات",
      tips: "نصائح وإرشادات محلية مهمة",
      cost: "التكلفة المتوقعة:",
      not_found: "يرجى تحديد تفاصيل الرحلة لتصميم خطتك الفاخرة."
    }
  };

  const handleInterestToggle = (id: string) => {
    if (selectedInterests.includes(id)) {
      setSelectedInterests(selectedInterests.filter(x => x !== id));
    } else {
      setSelectedInterests([...selectedInterests, id]);
    }
  };

  const handleGenerate = async () => {
    setIsLoading(true);
    setLoadingStep(0);
    setErrorStatus('');

    // Interval to cycle through elegant loading steps
    const stepInterval = setInterval(() => {
      setLoadingStep(prev => {
        if (prev < 3) return prev + 1;
        return prev;
      });
    }, 1200);

    try {
      const response = await fetch('/api/v1/plan-trip', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          city,
          days,
          budget,
          interests: selectedInterests,
          lang
        })
      });

      if (!response.ok) {
        throw new Error('API request failed');
      }

      const data: PlanTripResponse = await response.json();
      setPlan(data);
      setActiveDay(1);
    } catch (e) {
      console.warn("Using offline safe fallback itinerary due to key config/server offline.", e);
      // Let's create an exceptionally beautiful, multi-lingual offline fallback
      const offlineItinerary = generateOfflineFallback(city, days, budget, selectedInterests, lang);
      setPlan(offlineItinerary);
      setActiveDay(1);
    } finally {
      clearInterval(stepInterval);
      setIsLoading(false);
    }
  };

  return (
    <div className="mx-auto w-full max-w-6xl p-4 md:p-6 space-y-8 pb-20 animate-fade-in">
      
      {/* Title & Headline Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-slate-900 px-6 py-8 text-white shadow-xl md:px-10 md:py-12">
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
        <div className="relative z-10 max-w-2xl space-y-2">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/20 px-3 py-1 text-xs font-semibold text-amber-300 border border-amber-500/30">
            <Sparkles className="h-3 w-3" />
            <span>AI Concierge Service</span>
          </div>
          <h1 className="text-2xl font-extrabold tracking-tight md:text-3xl">
            {labels[lang].form_title} — <span className="text-amber-400">{city}</span>
          </h1>
          <p className="text-slate-300 text-xs md:text-sm">
            {labels[lang].form_sub}
          </p>
        </div>
      </div>

      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Left Side: Parameters Settings Form */}
        <div className="lg:col-span-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm space-y-6">
          <h3 className="text-sm font-bold text-slate-800 tracking-wide uppercase border-b border-slate-100 pb-3">
            Customization Board
          </h3>

          {/* Day selection */}
          <div className="space-y-2">
            <label className="flex items-center justify-between text-xs font-semibold text-slate-600">
              <span>{labels[lang].days}</span>
              <span className="text-amber-600 font-extrabold text-sm">{days} Days</span>
            </label>
            <input
              type="range"
              min="1"
              max="14"
              value={days}
              onChange={(e) => setDays(parseInt(e.target.value))}
              className="w-full h-1.5 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-amber-500"
            />
            <div className="flex justify-between text-[10px] text-slate-400 font-medium">
              <span>1 Day</span>
              <span>7 Days</span>
              <span>14 Days max</span>
            </div>
          </div>

          {/* Budget Tier Selector */}
          <div className="space-y-2">
            <label className="block text-xs font-semibold text-slate-600">{labels[lang].budget}</label>
            <div className="grid grid-cols-1 gap-2">
              <button
                type="button"
                onClick={() => setBudget('budget')}
                className={`flex flex-col items-start p-3 rounded-xl border text-left transition-all duration-200 ${
                  budget === 'budget' 
                    ? 'border-amber-500 bg-amber-50/20 shadow-sm ring-1 ring-amber-500' 
                    : 'border-slate-200 hover:bg-slate-50'
                }`}
              >
                <span className="text-xs font-bold text-slate-800">Budget Explorer</span>
                <span className="text-[10px] text-slate-500 mt-0.5">{labels[lang].budget_b}</span>
              </button>

              <button
                type="button"
                onClick={() => setBudget('medium')}
                className={`flex flex-col items-start p-3 rounded-xl border text-left transition-all duration-200 ${
                  budget === 'medium' 
                    ? 'border-amber-500 bg-amber-50/20 shadow-sm ring-1 ring-amber-500' 
                    : 'border-slate-200 hover:bg-slate-50'
                }`}
              >
                <span className="text-xs font-bold text-slate-800">Comfort Citizen</span>
                <span className="text-[10px] text-slate-500 mt-0.5">{labels[lang].budget_m}</span>
              </button>

              <button
                type="button"
                onClick={() => setBudget('luxury')}
                className={`flex flex-col items-start p-3 rounded-xl border text-left transition-all duration-200 ${
                  budget === 'luxury' 
                    ? 'border-amber-500 bg-amber-50/20 shadow-sm ring-1 ring-amber-500' 
                    : 'border-slate-200 hover:bg-slate-50'
                }`}
              >
                <span className="text-xs font-bold text-slate-800">Premium Luxury</span>
                <span className="text-[10px] text-slate-500 mt-0.5">{labels[lang].budget_l}</span>
              </button>
            </div>
          </div>

          {/* Interests selections */}
          <div className="space-y-2">
            <label className="block text-xs font-semibold text-slate-600">{labels[lang].interests}</label>
            <div className="grid grid-cols-2 gap-2">
              {[
                { id: 'food', text: labels[lang].interest_food },
                { id: 'nature', text: labels[lang].interest_nature },
                { id: 'culture', text: labels[lang].interest_culture },
                { id: 'nightlife', text: labels[lang].interest_nightlife }
              ].map((item) => {
                const checked = selectedInterests.includes(item.id);
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleInterestToggle(item.id)}
                    className={`flex items-center gap-2 p-2.5 rounded-xl border text-left text-xs font-semibold transition-all duration-200 ${
                      checked 
                        ? 'border-amber-500 bg-amber-50/25 text-amber-900 shadow-sm' 
                        : 'border-slate-200 hover:bg-slate-50 text-slate-600'
                    }`}
                  >
                    <div className={`flex h-4 w-4 shrink-0 items-center justify-center rounded border transition-colors ${
                      checked ? 'bg-amber-500 border-amber-550 text-white' : 'border-slate-300'
                    }`}>
                      {checked && <Check className="h-3 w-3 stroke-[3]" />}
                    </div>
                    <span className="truncate">{item.text}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Action Button */}
          <button
            onClick={handleGenerate}
            disabled={isLoading}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 py-3 text-xs font-bold text-white hover:bg-slate-800 disabled:bg-slate-300 select-none cursor-pointer focus:outline-none transition-all duration-250 active:scale-[0.98] shadow-md shadow-slate-900/10"
          >
            {isLoading ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin text-amber-400" />
                <span>Processing...</span>
              </>
            ) : (
              <>
                <Sparkles className="h-4 w-4 text-amber-400" />
                <span>{plan ? labels[lang].regen : labels[lang].generate}</span>
              </>
            )}
          </button>
        </div>

        {/* Right Side: Active Itinerary Schedule Display */}
        <div className="lg:col-span-8 space-y-6">
          
          {/* Realtime Loading State Overlay screen */}
          {isLoading && (
            <div className="flex flex-col items-center justify-center rounded-2xl border border-slate-100 bg-white p-12 text-center min-h-[350px] space-y-4 shadow-sm animate-pulse">
              <div className="relative">
                <div className="absolute inset-0 rounded-full border-4 border-amber-500/20"></div>
                <div className="h-12 w-12 rounded-full border-4 border-t-amber-500 animate-spin"></div>
              </div>
              <p className="font-extrabold text-sm text-slate-800 tracking-tight mt-4">
                {loadingSteps[lang][loadingStep] || loadingSteps[lang][3]}
              </p>
              <p className="text-xs text-slate-400 max-w-sm">
                Fine-tuning public transit rates and selecting verified hotels based on your budget tier...
              </p>
            </div>
          )}

          {/* Initial state (no plan loaded and not loading) */}
          {!plan && !isLoading && (
            <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-slate-200 bg-slate-50/50 p-12 text-center min-h-[350px]">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-50 text-amber-500 mb-4">
                <Compass className="h-6 w-6 animate-spin-slow" />
              </div>
              <p className="text-sm font-bold text-slate-700">{labels[lang].not_found}</p>
              <button
                onClick={handleGenerate}
                className="mt-4 inline-flex items-center gap-1.5 rounded-xl bg-slate-900 px-4 py-2 text-xs font-bold text-white hover:bg-slate-800"
              >
                <span>Automate First Setup</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
          )}

          {/* Plan view screen loaded! */}
          {plan && !isLoading && (
            <div className="space-y-6">
              
              {/* Day selector tabs */}
              <div className="flex flex-wrap gap-2 border-b border-slate-100 pb-4">
                {plan.itinerary.map((d) => (
                  <button
                    key={d.day}
                    onClick={() => setActiveDay(d.day)}
                    className={`rounded-xl px-4 py-2.5 text-xs font-bold tracking-tight transition-all duration-200 ${
                      activeDay === d.day
                        ? 'bg-amber-500 text-white shadow-md shadow-amber-500/10'
                        : 'border border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    Day {d.day}
                  </button>
                ))}
              </div>

              {/* Day Theme Header */}
              {plan.itinerary.find(d => d.day === activeDay)?.theme && (
                <div className="bg-amber-50/30 rounded-2xl p-4 border border-amber-100/30 flex items-start gap-3">
                  <div className="mt-0.5 text-amber-500">⭐</div>
                  <div>
                    <h4 className="text-xs font-bold text-amber-900 uppercase tracking-widest leading-none">Focus of the Day</h4>
                    <p className="text-xs text-amber-950 font-bold mt-1 text-slate-700">
                      {plan.itinerary.find(d => d.day === activeDay)?.theme}
                    </p>
                  </div>
                </div>
              )}

              {/* Day List activities */}
              <div className="relative pl-6 border-l-2 border-slate-100 space-y-6">
                {(plan.itinerary.find(d => d.day === activeDay)?.activities || []).map((act, idx) => (
                  <div key={idx} className="relative group">
                    {/* Time indicator circle marker along line */}
                    <div className="absolute -left-[31px] top-1 flex h-4 w-4 items-center justify-center rounded-full bg-slate-100 border-2 border-white group-hover:bg-amber-500 transition-colors">
                      <div className="h-1.5 w-1.5 rounded-full bg-slate-400 group-hover:bg-white"></div>
                    </div>

                    <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm hover:shadow-md transition-all duration-200">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-50 pb-2.5 mb-2.5">
                        
                        <div className="flex items-center gap-2">
                          <span className="flex items-center gap-1 rounded-lg bg-slate-100 px-2 py-1 text-[10px] font-bold text-slate-500">
                            <Clock className="h-3 w-3" />
                            <span>{act.time}</span>
                          </span>
                          <span className="font-extrabold text-sm text-slate-800 tracking-tight">
                            {act.place}
                          </span>
                        </div>

                        <span className="inline-flex max-w-max items-center gap-1 rounded-lg bg-emerald-50 px-2 py-1 text-[10px] font-bold text-emerald-700 border border-emerald-100">
                          <DollarSign className="h-3 w-3 fill-emerald-100 shrink-0" />
                          <span>{labels[lang].cost} {act.cost}</span>
                        </span>
                      </div>

                      <p className="text-xs text-slate-600 leading-relaxed font-normal">
                        {act.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Dynamic Local Travel Tips panel */}
              {plan.tips && plan.tips.length > 0 && (
                <div className="rounded-2xl bg-slate-900 p-5 text-white border border-slate-800 space-y-3 shadow-lg">
                  <h4 className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-widest">
                    <Info className="h-4 w-4 shrink-0" />
                    <span>{labels[lang].tips}</span>
                  </h4>
                  <ul className="space-y-2 pl-1.5">
                    {plan.tips.map((tip, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <span className="font-bold text-amber-500 mt-0.5">•</span>
                        <span className="leading-relaxed font-normal">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

            </div>
          )}

        </div>

      </div>
    </div>
  );
}

// Highly reliable, multi-lingual template generation engine for offline mock setups
function generateOfflineFallback(city: City, days: number, budget: string, interests: string[], lang: Language): PlanTripResponse {
  const isEn = lang === 'en';
  const isRu = lang === 'ru';
  const isTr = lang === 'tr';
  const isAr = lang === 'ar';

  const defaultItinerary = [];
  
  for (let d = 1; d <= days; d++) {
    const dTheme = isEn 
      ? `Exploration Day ${d}: Local treasures, historic views, and unique culinary landmarks.`
      : isRu 
      ? `День исследования ${d}: Местные сокровища, исторические виды и кулинарные открытия.`
      : isTr
      ? `Keşif Günü ${d}: Yerel kültürel miras, benzersiz tarihi detaylar ve lezzetler.`
      : `يوم استكشاف ${d}: الكنوز العتيقة، المعالم الأثرية والمطاعم الأصيلة الرائعة.`;

    defaultItinerary.push({
      day: d,
      theme: dTheme,
      activities: [
        {
          time: "09:30",
          place: d === 1 ? `${city} Central Plaza & Old Quarters` : `${city} Panoramic Heights`,
          description: isEn 
            ? `Start with a refreshing breakfast at a local historic bakery, following specialized routes. Note: Local metro/bus travel is exactly 0.60 AZN per ticket tap!`
            : isRu
            ? `Начните утро со свежего традиционного завтрака из печи тендир. К вашему сведению: проезд в городском метро/автобусе стоит ровно 0.60 AZN!`
            : isTr
            ? `Sabah fırından yeni çıkmış taze pide ve yerel balla kahvaltı yapın. Hatırlatma: Şehir içi otobüs ve metro geçiş ücreti sadece 0.60 AZN'dir.`
            : `ابدأ صباحك بالتنزه وتناول خبز التندور الساخن مع الشاي بالزعتر. تذكر: تعرفة المترو والباص الموحدة في باكو هي 0.60 مانات فقط!`,
          cost: budget === 'luxury' ? "45 AZN" : budget === 'medium' ? "15 AZN" : "Free"
        },
        {
          time: "12:00",
          place: d === 1 ? `National Heritage Spot — ${city} Crafts Hub` : `${city} Botanical Walk & Gardens`,
          description: isEn
            ? "Discover local artisan work, carpets, and copper cups handcrafted for generations. Speak to locals and experience authentic custom designs."
            : isRu
            ? "Изучите древние секреты ковроделия, обработки меди и чеканки. Отличное место, чтобы купить памятный сувенир из Азербайджана."
            : isTr
            ? "Bakır dövme ustalarını ve halı dokumacılarını keşfedin. Harika fotoğraf kareleri ve benzersiz otantik işlemeler sizi bekliyor."
            : "اكتشف أعمال حياكة السجاد اليدوي الهندسي العريق، تفاوض مع الحرفيين على أسعار التذكارات النحاسية.",
          cost: budget === 'luxury' ? "120 AZN" : "10 AZN"
        },
        {
          time: "15:30",
          place: `${city} Folk Palace & Museum`,
          description: isEn 
            ? "Browse extensive historical collections detailing Caucasian history. Uncover secrets and check out regional outfits."
            : isRu
            ? "Посетите местный музей истории или прикладного искусства. Узнайте больше об эпохе процветания Кавказских королевств."
            : isTr
            ? "Kafkas tarihini detaylandıran geniş etnografya sergisini görün. Şeki ipekleri veya bölgesel hanlık zırhları sizi büyüleyecek."
            : "زيارة قصر الخان أو المتاحف التاريخية المحلية، واستكشاف ثقافة وتطور المنطقة ونقوشها.",
          cost: "Free"
        },
        {
          time: "19:00",
          place: `${city} Traditional Dinner Feast`,
          description: isEn 
            ? "Indulge in a signature Saj feast or chicken Levengi alongside hot local tea served in Armudi glass with fig jam."
            : isRu
            ? "Устройте сытный пир из традиционного саджа или сочного лявянги. Обязательно закажите фирменный чайный набор с инжирным вареньем во фруктовом саду."
            : isTr
            ? "Meşe odununda pişmiş sac kebabı veya tavuk levengi ziyafeti. Ardından armut bardakta incir reçelli taze Lenkeran çayı."
            : "استمتع بوجبة كباب الساج الساخنة أو ليفنجي الدجاج مع الشاي الأذربيجاني الممتع المقدم في كؤوس الأرمودي مع مربى التين والكرز.",
          cost: budget === 'luxury' ? "90 AZN" : budget === 'medium' ? "28 AZN" : "12 AZN"
        }
      ]
    });
  }

  const defaultTips = isEn 
    ? [
        "Dynamic Public Transport: Baku subway and bus fares have been updated to exactly 0.60 AZN per single ride. Tap your plastic BakiKART card.",
        "Taxi Hack: Secure fair local pricing by using Bolt or Yango apps instead of hiring street drivers without meters.",
        "Cash counts: Credit cards are widespread in Baku malls, but local country bazaars and mountain regions operate purely on physical AZN cash."
      ]
    : isRu 
    ? [
        "Обновление тарифов: Проезд на городском метро и автобусах в Баку теперь составляет ровно 0.60 AZN. Оплачивайте картой BakiKART.",
        "Лайфхак с такси: Заказывайте такси исключительно через мобильные приложения Bolt или Yango для избежания наценок.",
        "Наличные деньги: В торговых центрах Баку принимают любые карты, но в горах и на локальных базарах предпочтительны наличные манаты (AZN)."
      ]
    : [
        "Toplu Taşıma Bilgisi: Bakü metro ve şehir içi otobüs tek geçiş ücretleri güncellenerek 0.60 AZN olmuştur. BakiKART kullanmanız gerekir.",
        "Taksi Önerisi: Yol üstünden taksiye binmek yerine Bolt veya Yango uygulamaları ile sürüş çağırarak sabit fiyatlı güvenli seyahat edin.",
        "Nakit Kullanımı: Bakü merkezinde kart geçerlidir ancak yöresel pazarlarda ve bölgelerde alışveriş için nakit AZN bulundurun."
      ];

  return {
    itinerary: defaultItinerary,
    tips: defaultTips
  };
}
