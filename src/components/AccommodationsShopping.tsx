import React, { useState } from 'react';
import { 
  Building2, MapPin, Star, DollarSign, Gem, ShieldAlert,
  ShoppingBag, Check, Bookmark, Heart, Sparkles, Filter 
} from 'lucide-react';
import { City, Language, Accommodation, ShoppingSpot } from '../types';
import { ACCOMMODATIONS_BY_CITY, SHOPPING_BY_CITY } from '../data';

interface AccommodationsShoppingProps {
  city: City;
  lang: Language;
}

export default function AccommodationsShopping({ city, lang }: AccommodationsShoppingProps) {
  const [activeCatalog, setActiveCatalog] = useState<'stays' | 'shopping'>('stays');
  const [selectedTier, setSelectedTier] = useState<'all' | 'luxury' | 'mid-range' | 'budget'>('all');
  const [selectedShopType, setSelectedShopType] = useState<'all' | 'mall' | 'bazaar' | 'souvenirs'>('all');
  const [bookmarkedItems, setBookmarkedItems] = useState<string[]>([]);

  const toggleBookmark = (id: string) => {
    if (bookmarkedItems.includes(id)) {
      setBookmarkedItems(bookmarkedItems.filter(v => v !== id));
    } else {
      setBookmarkedItems([...bookmarkedItems, id]);
    }
  };

  const stays: Accommodation[] = ACCOMMODATIONS_BY_CITY[city]?.[lang] || [];
  const shops: ShoppingSpot[] = SHOPPING_BY_CITY[city]?.[lang] || [];

  const filteredStays = stays.filter(s => selectedTier === 'all' || s.tier === selectedTier);
  const filteredShops = shops.filter(sp => selectedShopType === 'all' || sp.type === selectedShopType);

  const labels = {
    en: {
      staysTab: "🏨 Elite Stays & Hotels",
      shopTab: "🛍️ Regional Bazaars & Malls",
      address: "Address:",
      price: "Price Range:",
      rating: "Local Rating:",
      all: "All Alternatives",
      luxury: "💎 Luxury Stargazers",
      mid: "🏢 Comfort Mid-Range",
      budget: "🎒 Budget & Hostels",
      shop_all: "All Markets",
      shop_mall: "🏙️ Premium Malls",
      shop_baz: "🍅 Organic Bazaars",
      shop_souv: "🏺 Souvenir Crafts",
      no_results: "No local spots matches current filters.",
      verified: "SaaS Vetted",
      bookmarked: "Bookmarked Location",
      bookmarkBtn: "Bookmark Spot"
    },
    ru: {
      staysTab: "🏨 Отели и Размещение",
      shopTab: "🛍️ Базары и Торговые Центры",
      address: "Адрес:",
      price: "Диапазон цен:",
      rating: "Местный рейтинг:",
      all: "Все Варианты",
      luxury: "💎 Премиальный Люкс",
      mid: "🏢 Комфорт / Средний",
      budget: "🎒 Бюджетные Хостелы",
      shop_all: "Все Торговые Точки",
      shop_mall: "🏙️ Современные Моллы",
      shop_baz: "🍅 Восточные Базары",
      shop_souv: "🏺 Лавки Сувениров",
      no_results: "В этом городе нет объектов по выбранным фильтрам.",
      verified: "Проверено ИИ",
      bookmarked: "В закладках",
      bookmarkBtn: "В закладки"
    },
    tr: {
      staysTab: "🏨 Konaklama & Oteller",
      shopTab: "🛍️ Alışveriş & Çarşılar",
      address: "Adres:",
      price: "Fiyat Aralığı:",
      rating: "Yerel Derece:",
      all: "Tüm Alternatifler",
      luxury: "💎 Ultra Lüks Oteller",
      mid: "🏢 Orta Segment Konfor",
      budget: "🎒 Ekonomik Hosteller",
      shop_all: "Tüm Pazarlar",
      shop_mall: "🏙️ Lüks Alışveriş Merkezleri",
      shop_baz: "🍅 Organik Halk Pazarları",
      shop_souv: "🏺 Otantik Hediyelik Esnaf",
      no_results: "Filtrelere uygun mekan bulunamadı.",
      verified: "Vaka Analizli",
      bookmarked: "Kaydedildi",
      bookmarkBtn: "Kaydet"
    },
    ar: {
      staysTab: "🏨 الفنادق وأماكن الإقامة",
      shopTab: "🛍️ الأسواق والمراكز التجارية",
      address: "العنوان:",
      price: "متوسط السعر:",
      rating: "التقييم المحلي:",
      all: "جميع الخيارات والأسعار",
      luxury: "💎 القصور والمنتجعات الفاخرة",
      mid: "🏢 الفنادق المتوسطة المريحة",
      budget: "🎒 الفنادق الموفرة والنزل",
      shop_all: "جميع مراكز التسوق",
      shop_mall: "🏙️ المولات الكبرى والحديثة",
      shop_baz: "🍅 أسواق الخضار والفاكهة الشعبية",
      shop_souv: "🏺 شوارع الهياكل التذكارية",
      no_results: "لا توجد نتائج مطابقة في هذه المدينة حالياً.",
      verified: "تم التحقق محلياً",
      bookmarked: "تم الحفظ كوجهة مفضلة",
      bookmarkBtn: "حفظ كوجهة مفضلة"
    }
  };

  return (
    <div className="mx-auto w-full max-w-6xl p-4 md:p-6 space-y-8 pb-20 animate-fade-in">
      
      {/* Tab Selectors Segment */}
      <div className="flex border border-slate-200/50 bg-slate-100 p-1 rounded-2xl max-w-lg mx-auto">
        <button
          onClick={() => setActiveCatalog('stays')}
          className={`flex-1 py-3 px-4 text-xs md:text-sm font-extrabold rounded-xl transition-all select-none cursor-pointer ${
            activeCatalog === 'stays'
              ? 'bg-slate-900 text-white shadow-md'
              : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          {labels[lang].staysTab}
        </button>
        <button
          onClick={() => setActiveCatalog('shopping')}
          className={`flex-1 py-3 px-4 text-xs md:text-sm font-extrabold rounded-xl transition-all select-none cursor-pointer ${
            activeCatalog === 'shopping'
              ? 'bg-slate-900 text-white shadow-md'
              : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          {labels[lang].shopTab}
        </button>
      </div>

      {/* Primary Category Filters Panel */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-3">
        <div className="flex items-center gap-2">
          <Filter className="h-4 w-4 text-slate-400 shrink-0" />
          <span className="text-xs font-bold text-slate-700 uppercase tracking-widest">Filters Panel</span>
        </div>

        {activeCatalog === 'stays' ? (
          <div className="flex flex-wrap gap-1.5 bg-slate-50 p-1.5 border border-slate-100 rounded-xl">
            {[
              { id: 'all', text: labels[lang].all },
              { id: 'luxury', text: labels[lang].luxury },
              { id: 'mid-range', text: labels[lang].mid },
              { id: 'budget', text: labels[lang].budget }
            ].map(tier => (
              <button
                key={tier.id}
                onClick={() => setSelectedTier(tier.id as any)}
                className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${
                  selectedTier === tier.id
                    ? 'bg-white text-slate-800 shadow-sm border border-slate-100'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                {tier.text}
              </button>
            ))}
          </div>
        ) : (
          <div className="flex flex-wrap gap-1.5 bg-slate-50 p-1.5 border border-slate-100 rounded-xl">
            {[
              { id: 'all', text: labels[lang].shop_all },
              { id: 'mall', text: labels[lang].shop_mall },
              { id: 'bazaar', text: labels[lang].shop_baz },
              { id: 'souvenirs', text: labels[lang].shop_souv }
            ].map(type => (
              <button
                key={type.id}
                onClick={() => setSelectedShopType(type.id as any)}
                className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${
                  selectedShopType === type.id
                    ? 'bg-white text-slate-800 shadow-sm border border-slate-100'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                {type.text}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Main Catalog View List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {activeCatalog === 'stays' ? (
          filteredStays.length > 0 ? (
            filteredStays.map((item) => {
              const bookmarked = bookmarkedItems.includes(item.id);
              return (
                <div 
                  key={item.id} 
                  className="group relative flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white shadow-sm hover:shadow-md hover:border-slate-350 transition-all duration-300"
                >
                  {/* Image/Decoration placeholder */}
                  <div className="relative h-44 w-full bg-slate-100 overflow-hidden rounded-t-2xl">
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent z-10"></div>
                    
                    {/* Visual badges over placeholder */}
                    <div className="absolute top-3 left-3 z-10 flex gap-1">
                      <span className="flex items-center gap-1.5 rounded-lg bg-amber-500 px-2 py-1 text-[10px] font-extrabold text-white uppercase tracking-tight shadow-md">
                        <Gem className="h-3 w-3" />
                        <span>{item.tier}</span>
                      </span>
                    </div>

                    <button 
                      onClick={() => toggleBookmark(item.id)}
                      className="absolute top-3 right-3 z-20 flex h-7 w-7 items-center justify-center rounded-full bg-white/90 text-slate-700 hover:bg-white active:scale-90 transition-all shadow-sm"
                    >
                      <Heart className={`h-4 w-4 ${bookmarked ? 'fill-red-500 text-red-500' : 'text-slate-700'}`} />
                    </button>

                    {/* Immersive design overlay */}
                    <div className="absolute bottom-3 left-3 z-10">
                      <h4 className="font-extrabold text-sm text-white tracking-tight leading-tight">
                        {item.name}
                      </h4>
                    </div>
                  </div>

                  {/* Body details info */}
                  <div className="p-4 flex-1 flex flex-col justify-between space-y-4">
                    <p className="text-xs text-slate-500 leading-relaxed font-normal">
                      {item.description}
                    </p>

                    <div className="space-y-2 pt-2 border-t border-slate-50">
                      <div className="flex justify-between items-center text-xs">
                        <span className="font-bold text-slate-400">{labels[lang].price}</span>
                        <span className="font-extrabold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-100">
                          {item.price}
                        </span>
                      </div>

                      <div className="flex justify-between items-center text-xs">
                        <span className="font-bold text-slate-400">{labels[lang].rating}</span>
                        <span className="flex items-center gap-1 font-extrabold text-amber-600 bg-amber-50 px-2.5 py-1 rounded-lg border border-amber-100">
                          <Star className="h-3 w-3 fill-amber-500 stroke-0 shrink-0" />
                          <span>{item.rating} / 5</span>
                        </span>
                      </div>

                      <div className="flex items-start gap-1 text-[10px] text-slate-400 font-medium leading-none max-w-full pt-1">
                        <MapPin className="h-3.5 w-3.5 text-slate-300 shrink-0" />
                        <span className="leading-tight truncate">{item.address}</span>
                      </div>
                    </div>
                  </div>

                  {/* Vetted Footer tab buttons */}
                  <div className="bg-slate-50/50 p-3 rounded-b-2xl border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-500 font-semibold">
                    <span className="flex items-center gap-1 text-slate-400">
                      <Sparkles className="h-3 w-3 text-amber-500" />
                      <span>{labels[lang].verified}</span>
                    </span>
                    <button 
                      onClick={() => toggleBookmark(item.id)}
                      className="text-amber-600 hover:text-amber-700 active:scale-95 leading-none bg-white py-1 px-2 border border-slate-100 rounded-lg shadow-inner select-none cursor-pointer"
                    >
                      {bookmarked ? labels[lang].bookmarked : labels[lang].bookmarkBtn}
                    </button>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="col-span-full py-12 text-center rounded-2xl border border-dashed border-slate-200">
              <p className="text-xs text-slate-400 font-bold">{labels[lang].no_results}</p>
            </div>
          )
        ) : (
          filteredShops.length > 0 ? (
            filteredShops.map((item) => {
              const bookmarked = bookmarkedItems.includes(item.id);
              return (
                <div 
                  key={item.id} 
                  className="group relative flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white shadow-sm hover:shadow-md hover:border-slate-350 transition-all duration-300"
                >
                  {/* Image/Decoration placeholder */}
                  <div className="relative h-44 w-full bg-slate-100 overflow-hidden rounded-t-2xl">
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent z-10"></div>
                    
                    {/* Visual badges over placeholder */}
                    <div className="absolute top-3 left-3 z-10 flex gap-1">
                      <span className="flex items-center gap-1.5 rounded-lg bg-indigo-505 bg-indigo-500 px-2 py-1 text-[10px] font-extrabold text-white uppercase tracking-tight shadow-md">
                        <ShoppingBag className="h-3 w-3" />
                        <span>{item.type}</span>
                      </span>
                    </div>

                    <button 
                      onClick={() => toggleBookmark(item.id)}
                      className="absolute top-3 right-3 z-20 flex h-7 w-7 items-center justify-center rounded-full bg-white/90 text-slate-700 hover:bg-white active:scale-90 transition-all shadow-sm"
                    >
                      <Heart className={`h-4 w-4 ${bookmarked ? 'fill-red-500 text-red-500' : 'text-slate-700'}`} />
                    </button>

                    {/* Immersive design overlay */}
                    <div className="absolute bottom-3 left-3 z-10">
                      <h4 className="font-extrabold text-sm text-white tracking-tight leading-tight">
                        {item.name}
                      </h4>
                    </div>
                  </div>

                  {/* Body details info */}
                  <div className="p-4 flex-1 flex flex-col justify-between space-y-4">
                    <p className="text-xs text-slate-500 leading-relaxed font-normal">
                      {item.description}
                    </p>

                    <div className="space-y-2 pt-2 border-t border-slate-55">
                      <div className="flex justify-between items-center text-xs">
                        <span className="font-bold text-slate-400">{labels[lang].rating}</span>
                        <span className="flex items-center gap-1 font-extrabold text-amber-600 bg-amber-50 px-2.5 py-1 rounded-lg border border-amber-100">
                          <Star className="h-3 w-3 fill-amber-500 stroke-0 shrink-0" />
                          <span>{item.rating} / 5</span>
                        </span>
                      </div>

                      <div className="flex items-start gap-1 text-[10px] text-slate-400 font-medium leading-none max-w-full pt-1">
                        <MapPin className="h-3.5 w-3.5 text-slate-300 shrink-0" />
                        <span className="leading-tight truncate">{item.address}</span>
                      </div>
                    </div>
                  </div>

                  {/* Vetted Footer tab buttons */}
                  <div className="bg-slate-50/50 p-3 rounded-b-2xl border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-500 font-semibold">
                    <span className="flex items-center gap-1 text-slate-400">
                      <Sparkles className="h-3 w-3 text-amber-500" />
                      <span>{labels[lang].verified}</span>
                    </span>
                    <button 
                      onClick={() => toggleBookmark(item.id)}
                      className="text-amber-600 hover:text-amber-700 active:scale-95 leading-none bg-white py-1 px-2 border border-slate-100 rounded-lg shadow-inner select-none cursor-pointer"
                    >
                      {bookmarked ? labels[lang].bookmarked : labels[lang].bookmarkBtn}
                    </button>
                  </div>
                </div>
              );
            })
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
