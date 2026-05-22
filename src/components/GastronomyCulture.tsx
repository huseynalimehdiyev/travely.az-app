import React, { useState } from 'react';
import { 
  Utensils, BookOpen, Clock, Ticket, MapPin, 
  HelpCircle, Star, Sparkles, AlertTriangle, ChevronRight, Compass
} from 'lucide-react';
import { City, Language, FoodItem, Museum } from '../types';
import { FOOD_BY_CITY, MUSEUMS_BY_CITY } from '../data';

interface GastronomyCultureProps {
  city: City;
  lang: Language;
}

export default function GastronomyCulture({ city, lang }: GastronomyCultureProps) {
  const [activeTab, setActiveTab] = useState<'cuisine' | 'heritage'>('cuisine');

  const foods: FoodItem[] = FOOD_BY_CITY[city]?.[lang] || [];
  const museums: Museum[] = MUSEUMS_BY_CITY[city]?.[lang] || [];

  const labels = {
    en: {
      culinaryTab: "🍽️ Culinary Landmarks & National dishes",
      placesTab: "🏛️ Ancient Heritage & Museums",
      restaurants: "Suggested Places to Taste:",
      hours: "Opening Hours:",
      fee: "Admission Fee:",
      no_results: "We are currently mining historical records for this location.",
      vetted: "Verified recipe",
      cuisineSubtitle: "A culinary journey inside the ancient tastes of",
      heritageSubtitle: "Historic sights, galleries, and ancient domes in"
    },
    ru: {
      culinaryTab: "🍽️ Шедевры Кулинарии и блюда",
      placesTab: "🏛️ Великое Наследие и Музеи",
      restaurants: "Рекомендуемые рестораны:",
      hours: "Часы работы:",
      fee: "Входной билет:",
      no_results: "В данный момент исторические записи дополняются.",
      vetted: "Рецепт проверен",
      cuisineSubtitle: "Кулинарное путешествие по лучшим вкусам города",
      heritageSubtitle: "Исторические места, галереи и купола в городе"
    },
    tr: {
      culinaryTab: "🍽️ Geleneksel Mutfak & Milli Yemekler",
      placesTab: "🏛️ Kültürel Miras & Tarihi Müzeler",
      restaurants: "Denemek İçin En İyi Adresler:",
      hours: "Ziyaret Saatleri:",
      fee: "Giriş Ücreti:",
      no_results: "Bu şehir için tarihi detaylar henüz güncellenmektedir.",
      vetted: "Özel Lezzet",
      cuisineSubtitle: "Geleneksel lezzetlerin ve otantik çay kültürünün keşif noktaları:",
      heritageSubtitle: "Kadim odalar, saray kompleksleri ve müzeler:"
    },
    ar: {
      culinaryTab: "🍽️ روائع الطهي الأذربيجاني والمأكولات الشعبية",
      placesTab: "🏛️ القلاع والمتاحف والمواقع الأثرية بالتفصيل",
      restaurants: "أبرز المطاعم المقترحة للتجربة:",
      hours: "أوقات العمل اليومية:",
      fee: "رسوم الدخول المقررة:",
      no_results: "يتم العمل على جمع السجلات التاريخية لهذه المدينة حالياً.",
      vetted: "طبق تقليدي معتمد",
      cuisineSubtitle: "رحلة طهي استثنائية لاستكشاف نكهات ومذاق مدينة",
      heritageSubtitle: "القصور والصروح الأثرية التي تروي قصص التاريخ والحضارة في"
    }
  };

  return (
    <div className="mx-auto w-full max-w-6xl p-4 md:p-6 space-y-8 pb-20 animate-fade-in">
      
      {/* Split Tab Header controllers */}
      <div className="flex border border-slate-200/50 bg-slate-100 p-1 rounded-2xl max-w-lg mx-auto">
        <button
          onClick={() => setActiveTab('cuisine')}
          className={`flex-1 py-3 px-4 text-xs md:text-sm font-extrabold rounded-xl transition-all select-none cursor-pointer ${
            activeTab === 'cuisine'
              ? 'bg-slate-900 text-white shadow-md'
              : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          {labels[lang].culinaryTab}
        </button>
        <button
          onClick={() => setActiveTab('heritage')}
          className={`flex-1 py-3 px-4 text-xs md:text-sm font-extrabold rounded-xl transition-all select-none cursor-pointer ${
            activeTab === 'heritage'
              ? 'bg-slate-900 text-white shadow-md'
              : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          {labels[lang].placesTab}
        </button>
      </div>

      {/* Narrative Intro banners */}
      <div className="text-center max-w-xl mx-auto space-y-2">
        <span className="text-[10px] text-amber-500 font-bold uppercase tracking-widest block">Explore and Discover</span>
        <h3 className="text-xl font-extrabold text-slate-800 tracking-tight">
          {activeTab === 'cuisine' ? labels[lang].cuisineSubtitle : labels[lang].heritageSubtitle} <span className="text-amber-500">{city}</span>
        </h3>
      </div>

      {/* Dynamic item lists content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
        {activeTab === 'cuisine' ? (
          foods.length > 0 ? (
            foods.map((food) => (
              <div 
                key={food.id} 
                className="group flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-300"
              >
                <div className="space-y-3.5">
                  <div className="flex justify-between items-center">
                    <span className="rounded-lg bg-amber-50 px-2.5 py-1 text-[10px] font-extrabold text-amber-600 border border-amber-150 uppercase tracking-tight">
                      {food.category}
                    </span>
                    <span className="flex items-center gap-1 text-[10px] text-slate-400 font-bold">
                      <Sparkles className="h-3.5 w-3.5 text-amber-400 shrink-0" />
                      <span>{labels[lang].vetted}</span>
                    </span>
                  </div>

                  <h4 className="text-base font-extrabold text-slate-800 tracking-tight leading-tight">
                    {food.name}
                  </h4>

                  <p className="text-xs text-slate-500 leading-relaxed font-normal">
                    {food.description}
                  </p>
                </div>

                {/* Suggested Restaurants list */}
                {food.suggestedRestaurants && food.suggestedRestaurants.length > 0 && (
                  <div className="pt-4 mt-4 border-t border-slate-50 space-y-2">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                      {labels[lang].restaurants}
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {food.suggestedRestaurants.map((rest, rid) => (
                        <span 
                          key={rid} 
                          className="inline-flex items-center gap-1 rounded-lg bg-slate-50 border border-slate-100 px-2.5 py-1 text-[10px] font-bold text-slate-700 hover:bg-slate-100 transition-colors"
                        >
                          <Utensils className="h-3 w-3 text-amber-500 shrink-0" />
                          <span>{rest}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className="col-span-full py-12 text-center rounded-2xl border border-dashed border-slate-200">
              <p className="text-xs text-slate-400 font-bold">{labels[lang].no_results}</p>
            </div>
          )
        ) : (
          museums.length > 0 ? (
            museums.map((mus) => (
              <div 
                key={mus.id} 
                className="group flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-300"
              >
                <div className="space-y-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900 text-white font-bold text-sm shadow-md shadow-slate-900/10">
                    🏛️
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-base font-extrabold text-slate-800 tracking-tight leading-tight">
                      {mus.name}
                    </h4>
                    <p className="text-xs text-slate-500 leading-relaxed font-normal">
                      {mus.description}
                    </p>
                  </div>
                </div>

                {/* Opening Hours & Admission details */}
                <div className="grid grid-cols-2 gap-3.5 pt-4 mt-4 border-t border-slate-50">
                  <div className="rounded-xl bg-slate-50/50 p-2 text-left border border-slate-50 flex flex-col justify-between">
                    <span className="text-[9px] text-slate-400 font-bold uppercase tracking-wider block">{labels[lang].hours}</span>
                    <span className="text-[11px] font-bold text-slate-700 tracking-tight mt-1 truncate">
                      {mus.hours || "09:00 - 18:00"}
                    </span>
                  </div>
                  <div className="rounded-xl bg-slate-50/50 p-2 text-left border border-slate-50 flex flex-col justify-between">
                    <span className="text-[9px] text-slate-400 font-bold uppercase tracking-wider block">{labels[lang].fee}</span>
                    <span className="text-[11px] font-extrabold text-slate-800 tracking-tight mt-1 truncate">
                      {mus.fee || "Free Admission"}
                    </span>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full py-12 text-center rounded-2xl border border-dashed border-slate-200">
              <p className="text-xs text-slate-400 font-bold">{labels[lang].no_results}</p>
            </div>
          )
        )}
      </div>

    </div>
  );
}
