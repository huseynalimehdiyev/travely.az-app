import React, { useState, useEffect } from 'react';
import { 
  PlaneTakeoff, Ticket, Phone, ArrowLeftRight, Navigation, Info, 
  MapPin, HelpCircle, ShieldCheck, Wifi, Sparkles, AlertTriangle, 
  RefreshCw, DollarSign, Euro, CircleDot, Flame, Play, Eye
} from 'lucide-react';
import { City, Language } from '../types';

interface IJustLandedProps {
  city: City;
  lang: Language;
}

export default function IJustLanded({ city, lang }: IJustLandedProps) {
  // Exchange calculator states
  const [exchangeFrom, setExchangeFrom] = useState<string>('USD');
  const [exchangeAmount, setExchangeAmount] = useState<number>(100);
  
  // Simulated Bus Tracker
  const [busMinutesLeft, setBusMinutesLeft] = useState<number>(18);
  const [simulationActive, setSimulationActive] = useState<boolean>(false);
  const [simulationStep, setSimulationStep] = useState<number>(0);

  // Active SIM tab
  const [activeSim, setActiveSim] = useState<string>('Azercell');

  useEffect(() => {
    // Basic countdown simulator
    const interval = setInterval(() => {
      setBusMinutesLeft(prev => {
        if (prev <= 1) return 30; // resets every 30 mins
        return prev - 1;
      });
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  const rates: Record<string, { label: string; rate: number; icon: string }> = {
    USD: { label: "US Dollar", rate: 1.70, icon: "💵" },
    EUR: { label: "Euro Zone", rate: 1.84, icon: "💶" },
    RUB: { label: "Russian Ruble", rate: 0.018, icon: "🪙" },
    TRY: { label: "Turkish Lira", rate: 0.052, icon: "🇹🇷" },
    AED: { label: "UAE Dirham", rate: 0.46, icon: "🇦🇪" }
  };

  const getExchangeResult = () => {
    const rateData = rates[exchangeFrom];
    if (!rateData) return "0.00";
    // Convert foreign amount to AZN
    return (exchangeAmount * rateData.rate).toFixed(2);
  };

  const sims = {
    en: [
      { name: "Azercell", desc: "Premium regional coverage, best choice for visiting high mountains like Guba, Lahij, and Sheki.", deal: "Tourist Welcome eSIM / SIM", price: "29 AZN (~$17)", data: "20 GB LTE", sms: "50 local mins" },
      { name: "Bakcell", desc: "Highest internet speeds inside Baku city, extremely stable in cafes and Old City boulevard zones.", deal: "Tourist Speed Pack", price: "22 AZN (~$13)", data: "15 GB LTE", sms: "30 local mins" },
      { name: "Nar", desc: "The budget choice, great core values for travelers mainly relying on urban hotel Wi-Fi networks.", deal: "Visitor Economy Pack", price: "18 AZN (~$10)", data: "10 GB LTE", sms: "No local mins" }
    ],
    ru: [
      { name: "Azercell", desc: "Лучшее покрытие в горах. Идеально для поездок в Губу, Лагич, Исмаиллы и Шеки.", deal: "Tourist Welcome eSIM / SIM", price: "29 AZN", data: "20 ГБ LTE", sms: "50 мин местных" },
      { name: "Bakcell", desc: "Самый быстрый интернет в центре Баку. Отлично работает на бульваре и в кафе.", deal: "Tourist Speed Pack", price: "22 AZN", data: "15 ГБ LTE", sms: "30 мин местных" },
      { name: "Nar", desc: "Бюджетный лидер. Отлично подходит, если вы в основном используете гостиничный Wi-Fi.", deal: "Visitor Economy Pack", price: "18 AZN", data: "10 ГБ LTE", sms: "Без минут" }
    ],
    tr: [
      { name: "Azercell", desc: "En iyi kırsal dağ kapsama alanı. Gence, Guba ve Lahıç turları için ideal seçenektir.", deal: "Tourist Welcome Kart", price: "29 AZN", data: "20 GB LTE", sms: "50 yerel dakika" },
      { name: "Bakcell", desc: "Bakü genelinde yüksek hızlı 4.5G internet. Şehir merkezlerinde oldukça hızlıdır.", deal: "Tourist Speed Pack", price: "22 AZN", data: "15 GB LTE", sms: "30 yerel dakika" },
      { name: "Nar", desc: "Kısıtlı bütçeler için ideal. Şehir merkezlerinde temel iletişim ihtiyaçlarını sorunsuz karşılar.", deal: "Visitor Ekonomi Paketi", price: "18 AZN", data: "10 GB LTE", sms: "Paket içi dakika yok" }
    ],
    ar: [
      { name: "Azercell", desc: "أقوى شبكة تغطية في الأرياف والمناطق الجبلية المرتفعة مثل قباء وإسماعيلي.", deal: "باقة الترحيب بالسائحين eSIM", price: "29 مانات", data: "20 جيجابايت", sms: "50 دقيقة محلية" },
      { name: "Bakcell", desc: "أعلى وبأسرع سرعات إنترنت الـ LTE داخل باكو، ومناسبة جداً لتغطية المقاهي والمشاة.", deal: "باقة السرعة للسائح", price: "22 مانات", data: "15 جيجابايت", sms: "30 دقيقة محلية" },
      { name: "Nar", desc: "الباقة الأكثر اقتصاداً وتوفيراً، خيار ممتاز لمن يعتمد بشكل أساسي على واي فاي الفندق.", deal: "باقة زائر الموفرة", price: "18 مانات", data: "10 جيجابايت", sms: "بدون دقائق محلية" }
    ]
  };

  const labels = {
    en: {
      airport: "Active Hub:",
      heading: "New Arrival Companion & Airport Guide",
      sub: "Bypass typical terminal stress with live route modeling, transport fares, SIM plans, and embassy helplines",
      exchange: "Instant Currency Converter (CBAR peg)",
      enter_amount: "Enter Foreign Amount:",
      result: "CBAR Official Exchange Result:",
      sim_section: "Tourist SIM Card Operators & Deals",
      emergencies: "Emergency Contacts",
      sim: "SIM Pack:",
      bakiKartTitle: "BakiKART Smart Guide (Baku Metro & Buses)",
      bakiKartDesc: "To board civic transport (metro/bus), you MUST purchase a plastic card. Digital NFC relies on local apps, but physical cards are bulletproof:",
      step1: "Locate yellow BakiKART terminal immediately at GYD exit.",
      step2: "Insert exactly 2.00 AZN cash for the physical card itself.",
      step3: "Load balance. Travel is exactly 0.60 AZN per trip! Load ~5 AZN.",
      step4: "Tap at turnstiles. Note: Up to 4 family members can share 1 card!",
      taxiTitle: "Taxi Tariffs (AeroExpress vs Apps)",
      taxiSubtitle: "Never hire private airport drivers inside the arriving lobby - they carry a 400% tourist markup!",
      routeTracker: "AeroExpress Airport Bus Simulator",
      routeTrackerBtn: "Simulate Live Transit Journey",
      routeTrackerStep1: "1. Boarding GYD exit Terminal 1...",
      routeTrackerStep2: "2. Traveling on the fast Airport Highway...",
      routeTrackerStep3: "3. Disembarking safely at 28 May Station city center! (Standard Metro connections ready now...)"
    },
    ru: {
      airport: "Активный терминал:",
      heading: "Руководство для новоприбывших туристов",
      sub: "Избегайте ненужных хлопот в терминале. Живые симуляции маршрутов, цены, выбор SIM-карт и экстренные службы",
      exchange: "Калькулятор обмена валют (Курс ЦБА)",
      enter_amount: "Сумма в валюте:",
      result: "Официальный результат ЦБА:",
      sim_section: "Сравнение туристических SIM-карт",
      emergencies: "Телефоны экстренных служб",
      sim: "SIM-Пакет:",
      bakiKartTitle: "Инструкция по карте BakiKART (Метро и автобусы)",
      bakiKartDesc: "Для проезда в метро и обычных автобусах обязательна пластиковая карта BakiKART. Она продается в желтых автоматах в аэропорту:",
      step1: "Найдите желтый терминал BakiKART на выходе из аэропорта GYD.",
      step2: "Внесите ровно 2 AZN наличными для покупки самой карты.",
      step3: "Пополните баланс. Поездка в метро/автобусе стоит ровно 0.60 AZN!",
      step4: "Просто приложите карту. Одной картой могут пользоваться до 4 человек!",
      taxiTitle: "Тарифы на такси (AeroExpress или Приложения)",
      taxiSubtitle: "Никогда не берите такси в зале прилета у неофициальных зазывал. Переплата составит до 4 раз!",
      routeTracker: "Трекер автобуса AeroExpress",
      routeTrackerBtn: "Запустить симуляцию пути в город",
      routeTrackerStep1: "1. Посадка у выхода из Терминала 1...",
      routeTrackerStep2: "2. Быстрая поездка по шоссе Аэропорт-Баку...",
      routeTrackerStep3: "3. Прибытие на станцию вокзала '28 Мая'! (Метро рядом, поездка за 0.60 AZN...)"
    },
    tr: {
      airport: "Giriş Noktası:",
      heading: "Yeni İnen Yolcular ve Havalimanı Rehberi",
      sub: "BakiKART otomat kılavuzları, güncel toplu taşıma tarifeleri, turistik SIM paketleri ve acil durum hatları",
      exchange: "Anlık Döviz Çevirici (CBAR Resmi Kuru)",
      enter_amount: "Yabancı Para Tutarı enter:",
      result: "Resmi AZN Kur Karşılığı:",
      sim_section: "Turistik SIM Kart Karşılaştırması",
      emergencies: "Acil Durum Numaraları",
      sim: "SIM Seçeneği:",
      bakiKartTitle: "BakiKART Akıllı Kullanım Rehberi (Metro & Otobüs)",
      bakiKartDesc: "Toplu taşımaya binmek için havalimanındaki veya duraklardaki sarı otomatlardan plastik BakiKART almalısınız:",
      step1: "GYD çıkışındaki sarı renkli BakiKART kioskunu bulun.",
      step2: "Fiziksel kart basımı için tam 2.00 AZN nakit yerleştirin.",
      step3: "Bakiye yükleyin. Her şehir içi metro/buse binişi tam 0.60 AZN tutar!",
      step4: "Turnikede okutun. Öneri: Aynı kartı 4 arkadaş sırayla okutup binebilir!",
      taxiTitle: "Taksi Fiyatları (AeroExpress ve Taksi Uygulamaları)",
      taxiSubtitle: "Terminal çıkışında bekleyen resmi olmayan ayaküstü taksicilerden uzak durun. En az 4 kat fiyat söylerler!",
      routeTracker: "AeroExpress Havalimanı Otobüs Simülasyonu",
      routeTrackerBtn: "Canlı Ulaşım Simülatörünü Aç",
      routeTrackerStep1: "1. GYD Terminal 1 çıkışından otobüse biniliyor...",
      routeTrackerStep2: "2. Havalimanı otoyolundan hızlı transit geçiş...",
      routeTrackerStep3: "3. '28 May' Şehir Merkezine varıldı! (Metro bağlantıları hazır, tek biniş 0.60 AZN...)"
    },
    ar: {
      airport: "نقطة الوصول الرئيسية:",
      heading: "دليل المطار والوافدين الجدد للتنقل المريح",
      sub: "تجنب الارتباك والأسعار المرتفعة، إليك خطة طيران حقيقية، بطاقة باكو كارت بالتسعيرة المحدثة ومقارنة شرائح الهاتف",
      exchange: "محول العملات المباشر (أسعار البنك المركزي الأذربيجاني)",
      enter_amount: "أدخل المبلغ بالعملة الأجنبية:",
      result: "القيمة التعادلية بالمانات (AZN):",
      sim_section: "مقارنة باقات شرائح الاتصال السياحية",
      emergencies: "أرقام الإغاثة والطورائ",
      sim: "باقة SIM سحابية:",
      bakiKartTitle: "دليل بطاقة باكو كارت الذكي (BakiKART للمترو والحافلات)",
      bakiKartDesc: "لركوب المترو أو الحافلات العامة، يجب عليك حتماً شراء بطاقة بلاستيكية من المحطة وشحنها بالعملة المحلية:",
      step1: "ابحث عن جهاز صفقات BakiKART الأصفر عند مخرج مطار باكو GYD.",
      step2: "أدخل 2 مانات نقداً لشراء البطاقة البلاستيكية الفارغة.",
      step3: "قم بشحن رصيد إضافي. تذكر أن سعر الرحلة الموحد هو 0.60 مانات فقط!",
      step4: "امسح البطاقة بالبوابة، يمكن ببطاقة واحدة ركوب حتى 4 أشخاص سوية!",
      taxiTitle: "تسعيرة التاكسي (Bolt ونظام السفر المعتمد)",
      taxiSubtitle: "لا تتفق أبداً مع السائقين غير المرخصين داخل صالة الاستقبال - يطلبون مبالغ خيالية بنسبة 400%!",
      routeTracker: "محاكي حافلات المطار AeroExpress المباشر",
      routeTrackerBtn: "تشغيل محاكاة ركوب الحافلة للمدينة",
      routeTrackerStep1: "1. ركوب الحافلة من مخرج صالة بمطار GYD...",
      routeTrackerStep2: "2. المرور السريع عبر طريق المطار السريع الواسع...",
      routeTrackerStep3: "3. الوصول الآمن لمحطة '28 مايو' وسط باكو! (مترو باكو للمشاة جاهز بـ 0.60 مانات...)"
    }
  };

  const selectedSims = sims[lang] || sims['en'];

  const triggerSimulation = () => {
    setSimulationActive(true);
    setSimulationStep(1);
    
    setTimeout(() => setSimulationStep(2), 2000);
    setTimeout(() => setSimulationStep(3), 4000);
    setTimeout(() => {
      setSimulationActive(false);
      setSimulationStep(0);
    }, 6000);
  };

  return (
    <div className="mx-auto w-full max-w-6xl p-4 md:p-6 space-y-8 pb-20 animate-fade-in">
      
      {/* City Airport adaptation banner */}
      <div className="rounded-3xl bg-slate-900 border border-slate-800 p-6 text-white shadow-xl relative overflow-hidden">
        <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none">
          <PlaneTakeoff className="h-44 w-44" />
        </div>
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="space-y-1">
            <h2 className="text-xl md:text-2xl font-extrabold tracking-tight">
              {labels[lang].heading}
            </h2>
            <p className="text-xs text-slate-300 max-w-2xl">
              {labels[lang].sub}
            </p>
          </div>
          <div className="rounded-2xl bg-slate-800/80 p-3.5 border border-slate-700 max-w-max shrink-0">
            <span className="text-[10px] text-amber-400 font-bold uppercase tracking-wider block">{labels[lang].airport}</span>
            <span className="text-sm font-extrabold text-white">
              {city === 'Baku' ? 'Heydar Aliyev Int\'l Airport (GYD) ✈️' : city === 'Gabala' ? 'Gabala Int\'l Airport (GBB) ✈️' : `Regional Autovaghzal Connection`}
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Side: Route and transit options */}
        <div className="lg:col-span-8 space-y-6">
          
          {city === 'Baku' ? (
            <>
              {/* BakiKART Interactive Guide with 0.60 AZN tooltip info */}
              <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm space-y-4">
                <div className="flex items-center gap-2.5 border-b border-indigo-50 pb-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-50 text-indigo-500 font-bold">
                    K
                  </div>
                  <div>
                    <h3 className="text-sm font-extrabold text-slate-800">{labels[lang].bakiKartTitle}</h3>
                    <p className="text-[11px] text-slate-500 font-medium">Baku public subway/metro and city buses fare system</p>
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {labels[lang].bakiKartDesc}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 pt-1">
                  {[
                    { title: "Step 1: Kiosk Purchase", desc: labels[lang].step1, highlight: false },
                    { title: "Step 2: Card Cost", desc: labels[lang].step2, highlight: false },
                    { title: "Step 3: Charge Rate", desc: labels[lang].step3, highlight: true },
                    { title: "Step 4: Smart Sharing", desc: labels[lang].step4, highlight: false }
                  ].map((step, idx) => (
                    <div 
                      key={idx} 
                      className={`rounded-xl p-3.5 border text-left flex flex-col justify-between ${
                        step.highlight 
                          ? 'border-amber-500 bg-amber-500/[0.04] ring-1 ring-amber-500' 
                          : 'border-slate-100 bg-slate-50/[0.3] hover:bg-slate-50/70'
                      }`}
                    >
                      <h4 className="text-xs font-bold text-slate-800 flex items-center gap-2">
                        <span className="flex h-4 w-4 items-center justify-center rounded-full bg-slate-200 text-[9px] font-bold text-slate-700">
                          {idx + 1}
                        </span>
                        <span>{step.title}</span>
                      </h4>
                      <p className="text-[11px] text-slate-600 font-normal leading-relaxed mt-1.5">
                        {step.desc}
                      </p>
                      {step.highlight && (
                        <div className="mt-2.5 inline-flex items-center gap-1.5 rounded-lg bg-red-50 px-2.5 py-1 text-[9px] font-extrabold text-red-650 tracking-tight border border-red-100">
                          <Flame className="h-3 w-3 animate-bounce shrink-0 text-red-500" />
                          <span>Strictly Updated Rate: 0.60 AZN / Trip</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* AeroExpress Interactive tracker simulator */}
              <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm space-y-4">
                <div className="flex items-center justify-between border-b border-rose-50 pb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-rose-50 text-rose-500">
                      <Navigation className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-extrabold text-slate-800">{labels[lang].routeTracker}</h3>
                      <p className="text-[11px] text-slate-500 font-medium">Bridges GYD Airport Terminal to 28 May Railway Hub</p>
                    </div>
                  </div>
                  <div className="rounded-xl bg-rose-50/50 px-3 py-1 text-center shrink-0 border border-rose-100">
                    <span className="text-[9px] text-rose-500 font-bold uppercase tracking-wider block">Next Departure</span>
                    <span className="text-xs font-extrabold text-rose-600 animate-pulse">{busMinutesLeft} Mins Left</span>
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  The AeroExpress red bus departs outside GYD arrivals every 30 minutes. Secure your trip and trace the virtual highway crossing now:
                </p>

                {/* Simulated Transit Map representation */}
                <div className="relative mt-4 border border-slate-100 bg-slate-50/50 rounded-2xl p-5 overflow-hidden">
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-red-600/10 border border-red-500 flex items-center justify-center text-red-600 shrink-0">
                        🚍
                      </div>
                      <div className="text-left">
                        <span className="text-[9px] text-slate-400 font-bold block leading-none uppercase">TRANSPORT CAR</span>
                        <span className="text-xs font-bold text-slate-800">Caspian Red Express Route</span>
                      </div>
                    </div>

                    <button
                      onClick={triggerSimulation}
                      disabled={simulationActive}
                      className="inline-flex items-center gap-1.5 rounded-xl bg-slate-900 px-4 py-2 text-xs font-bold text-white hover:bg-slate-850 cursor-pointer disabled:bg-slate-400 select-none transition-all duration-200"
                    >
                      <Play className="h-3 w-3 text-red-500" />
                      <span>{labels[lang].routeTrackerBtn}</span>
                    </button>
                  </div>

                  {/* Simulator path cards */}
                  {simulationActive && (
                    <div className="mt-4 p-4 rounded-xl border border-amber-200 bg-amber-50/20 text-xs font-semibold text-slate-700 space-y-2 animate-bounce-slow">
                      {simulationStep === 1 && (
                        <p className="flex items-center gap-2"><CircleDot className="h-3 w-3 text-amber-500 animate-ping" /> {labels[lang].routeTrackerStep1}</p>
                      )}
                      {simulationStep === 2 && (
                        <p className="flex items-center gap-2"><CircleDot className="h-3 w-3 text-sky-500 animate-pulse" /> {labels[lang].routeTrackerStep2}</p>
                      )}
                      {simulationStep === 3 && (
                        <p className="flex items-center gap-2"><ShieldCheck className="h-3.5 w-3.5 text-emerald-500" /> {labels[lang].routeTrackerStep3}</p>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </>
          ) : (
            /* Regional city arrival guidance card */
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm space-y-4">
              <div className="flex items-center gap-2.5 border-b border-indigo-50 pb-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-50 text-indigo-500">
                  <Navigation className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-extrabold text-slate-800">Baku to {city} Regional Connection</h3>
                  <p className="text-[11px] text-slate-500 font-medium">Marshrutka, private regional taxis, and scenic mountain roads</p>
                </div>
              </div>

              <div className="space-y-4 pt-2">
                <div className="rounded-xl border border-slate-100 bg-slate-50/50 p-4 flex flex-col md:flex-row justify-between gap-4">
                  <div className="space-y-1">
                    <h4 className="text-xs font-extrabold text-slate-800">🎟️ Baku International Autovaghzal Bus</h4>
                    <p className="text-xs text-slate-500 leading-relaxed font-normal">
                      Comfortable, large shared regional buses leave from the Baku Bus Terminal (near Avtovağzal metro) going directly to {city}. 
                    </p>
                  </div>
                  <div className="rounded-xl bg-emerald-50 border border-emerald-100 px-4 py-2.5 text-center shrink-0 min-w-[120px]">
                    <span className="text-[9px] text-emerald-600 font-bold block uppercase tracking-wider">Estimated Fare</span>
                    <span className="text-xs font-extrabold text-emerald-800">8.00 - 12.00 AZN</span>
                  </div>
                </div>

                <div className="rounded-xl border border-slate-100 bg-slate-50/50 p-4 flex flex-col md:flex-row justify-between gap-4">
                  <div className="space-y-1">
                    <h4 className="text-xs font-extrabold text-slate-800">🚗 Private Regional Taxi Ride-Sharing</h4>
                    <p className="text-xs text-slate-500 leading-relaxed font-normal">
                      Hire a shared taxi seat at Shamakhinka crossing or Autovaghzal station exit. Speak directly with drivers and join regional commuters.
                    </p>
                  </div>
                  <div className="rounded-xl bg-indigo-50 border border-indigo-100 px-4 py-2.5 text-center shrink-0 min-w-[120px]">
                    <span className="text-[9px] text-indigo-600 font-bold block uppercase tracking-wider">Shared Taxi Fare</span>
                    <span className="text-xs font-extrabold text-indigo-800">15.00 - 25.00 AZN</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Secure Taxi Tariffs & App Safety Benchmarks */}
          <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm space-y-4">
            <div className="flex items-center gap-2.5 border-b border-rose-50 pb-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-rose-50 text-rose-500 shrink-0">
                <AlertTriangle className="h-4 w-4" />
              </div>
              <div className="text-left">
                <h3 className="text-sm font-extrabold text-slate-800">{labels[lang].taxiTitle}</h3>
                <p className="text-[11px] text-slate-500 font-medium">Avoid unmetered street lobbies</p>
              </div>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              {labels[lang].taxiSubtitle}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 pt-1">
              <div className="rounded-xl border border-slate-100 bg-slate-50/40 p-3.5 space-y-2">
                <h4 className="text-xs font-bold text-red-600 flex items-center gap-1.5">
                  <span>❌ Street / Airport Lobby Drivers</span>
                </h4>
                <p className="text-[11px] text-slate-500 font-medium leading-tight">
                  Flat unmetered price requests for short hops to central Baku hotels.
                </p>
                <div className="text-xs font-extrabold text-red-700">Cost: 40.00 - 80.00 AZN</div>
              </div>

              <div className="rounded-xl border border-emerald-100 bg-emerald-500/[0.02] p-3.5 space-y-2">
                <h4 className="text-xs font-bold text-emerald-600 flex items-center gap-1.5">
                  <span>✅ Ride-Hailing Apps (Bolt / Yango)</span>
                </h4>
                <p className="text-[11px] text-slate-500 font-medium leading-tight">
                  Stable calculated rates, GPS maps, and credit-card payments inside the app.
                </p>
                <div className="text-xs font-extrabold text-emerald-800">Cost: 10.00 - 16.00 AZN</div>
              </div>
            </div>
          </div>

        </div>

        {/* Right Side: Currency Calculator, emergencies, and SIM cards */}
        <div className="lg:col-span-4 space-y-6">
          
          {/* Currency Calculator */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm space-y-4">
            <h3 className="text-xs font-bold text-slate-800 uppercase tracking-widest border-b border-slate-100 pb-2.5">
              {labels[lang].exchange}
            </h3>

            <div className="space-y-3 pt-1">
              {/* Currency Source selection */}
              <div>
                <label className="block text-[10px] font-bold text-slate-500 uppercase">Select Source Currency</label>
                <div className="grid grid-cols-3 gap-1.5 mt-1">
                  {Object.keys(rates).map((code) => (
                    <button
                      key={code}
                      onClick={() => setExchangeFrom(code)}
                      className={`py-1.5 text-xs font-extrabold rounded-lg border text-center transition-all ${
                        exchangeFrom === code
                          ? 'border-amber-500 bg-amber-50 text-amber-900 shadow-sm'
                          : 'border-slate-100 bg-slate-50 hover:bg-slate-100'
                      }`}
                    >
                      <span className="mr-1">{rates[code].icon}</span>
                      <span>{code}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Enter Amount input fields */}
              <div>
                <label className="block text-[10px] font-bold text-slate-500 uppercase mt-2">{labels[lang].enter_amount}</label>
                <div className="relative mt-1">
                  <input
                    type="number"
                    value={exchangeAmount}
                    onChange={(e) => setExchangeAmount(Math.max(0, parseFloat(e.target.value) || 0))}
                    className="w-full rounded-xl border border-slate-200 py-2.5 pl-3 pr-12 text-xs font-bold text-slate-800 focus:border-amber-500 focus:outline-none"
                  />
                  <span className="absolute inset-y-0 right-3 flex items-center text-xs font-bold text-slate-400">
                    {exchangeFrom}
                  </span>
                </div>
              </div>

              {/* Conversion Result indicators */}
              <div className="rounded-xl bg-slate-900 p-3 text-white border border-slate-800 text-center">
                <span className="text-[9px] text-amber-400 font-bold block uppercase tracking-wide leading-none mb-1">
                  {labels[lang].result}
                </span>
                <span className="text-lg font-extrabold text-white">
                  {getExchangeResult()} <span className="text-xs text-amber-500">AZN</span>
                </span>
              </div>
            </div>
          </div>

          {/* SIM Card Deals */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm space-y-4">
            <h3 className="text-xs font-bold text-slate-800 uppercase tracking-widest border-b border-slate-100 pb-2.5">
              {labels[lang].sim_section}
            </h3>

            <div className="flex gap-1 border border-slate-100 bg-slate-50 p-1 rounded-xl">
              {selectedSims.map((simOption) => (
                <button
                  key={simOption.name}
                  onClick={() => setActiveSim(simOption.name)}
                  className={`flex-1 py-1 px-1.5 text-xs font-bold rounded-lg transition-all ${
                    activeSim === simOption.name
                      ? 'bg-white text-slate-800 shadow-sm'
                      : 'text-slate-400 hover:text-slate-700'
                  }`}
                >
                  {simOption.name}
                </button>
              ))}
            </div>

            {/* Active option details */}
            {selectedSims.find(s => s.name === activeSim) && (
              <div className="rounded-xl bg-amber-500/[0.02] border border-amber-100/50 p-4 space-y-2 text-xs">
                <div className="flex justify-between items-center">
                  <span className="font-extrabold text-slate-800 text-sm">
                    {selectedSims.find(s => s.name === activeSim)?.deal}
                  </span>
                  <span className="rounded-lg bg-amber-500 px-2 py-0.5 text-[9px] font-extrabold text-white">
                    {selectedSims.find(s => s.name === activeSim)?.price}
                  </span>
                </div>
                <p className="text-[11px] text-slate-500 font-normal leading-relaxed">
                  {selectedSims.find(s => s.name === activeSim)?.desc}
                </p>
                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-100/60 mt-1">
                  <div className="rounded-lg bg-white p-2 border border-slate-100 text-center">
                    <span className="text-[8px] text-slate-400 font-bold uppercase block leading-none">LTE Core Data</span>
                    <span className="text-xs font-extrabold text-slate-800 tracking-tight mt-1 inline-block">
                      {selectedSims.find(s => s.name === activeSim)?.data}
                    </span>
                  </div>
                  <div className="rounded-lg bg-white p-2 border border-slate-100 text-center">
                    <span className="text-[8px] text-slate-400 font-bold uppercase block leading-none">Local Speech</span>
                    <span className="text-xs font-extrabold text-slate-800 tracking-tight mt-1 inline-block">
                      {selectedSims.find(s => s.name === activeSim)?.sms}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Regional Assistance Hotline contacts */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm space-y-4">
            <h3 className="text-xs font-bold text-slate-800 uppercase tracking-widest border-b border-slate-100 pb-2.5">
              {labels[lang].emergencies}
            </h3>

            <div className="grid grid-cols-1 gap-2">
              {[
                { label: lang === 'ru' ? "МЧС / Спасатели" : lang === 'tr' ? "İtfaiye / Acil" : "Police (Baku City)", phone: "102" },
                { label: lang === 'ru' ? "Скорая Медицинская" : lang === 'tr' ? "Ambulans / Acil" : "Ambulance Desk", phone: "103" },
                { label: lang === 'ru' ? "Служба Пожарных" : lang === 'tr' ? "Yangın İhbarı" : "Fire Department", phone: "101" },
                { label: lang === 'ru' ? "Миграционная Служба" : lang === 'tr' ? "Devlet Göç İdaresi" : "State Migration", phone: "919" }
              ].map((contact, idx) => (
                <div key={idx} className="flex justify-between items-center rounded-xl border border-slate-50 bg-slate-50/[0.2] p-2.5 hover:bg-slate-50 transition-colors">
                  <span className="text-xs font-medium text-slate-600 leading-none">{contact.label}</span>
                  <a 
                    href={`tel:${contact.phone}`} 
                    className="rounded-lg bg-slate-900 px-3 py-1.5 text-xs font-extrabold text-white hover:bg-slate-800"
                  >
                    {contact.phone}
                  </a>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
