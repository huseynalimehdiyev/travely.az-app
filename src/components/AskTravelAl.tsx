import React, { useState, useEffect, useRef } from 'react';
import { 
  Send, MessageSquare, Sparkles, Loader2, RefreshCw, X, ShieldAlert,
  ThumbsUp, UserCheck, Trash2, MapPin, Compass, AlertCircle
} from 'lucide-react';
import { City, Language, ChatMessage } from '../types';

interface AskTravelAIProps {
  city: City;
  lang: Language;
}

export default function AskTravelAI({ city, lang }: AskTravelAIProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputText, setInputText] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  // Auto scroll to latest messaging
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  // Welcome banner on startup depending on active selected city and language
  useEffect(() => {
    const welcomeMessages = {
      en: `Welcome to ${city}! I am your elite local concierge. Ask me anything about local restaurants, public transportation maps (metro fare is exactly 0.60 AZN), safety highlights, or weather details! How can I help you today?`,
      ru: `Добро пожаловать в город ${city}! Я ваш персональный гид-консьерж. Спросите меня о лучших ресторанах, ценах на проезд (билет в метро/автобусе стоит ровно 0.60 AZN), секретных местах или погоде! Чем могу помочь?`,
      tr: `Sizinle ${city} şehrinde tanışmaktan ötürü çok mutluyum! Yerel restoranlar, ulaşım haritaları (şehir içi bilet ücreti tam 0.60 AZN'dir), hava durumu veya güvenlik detayları hakkında bana istediğinizi de sorabilirsiniz!`,
      ar: `مرحباً بك في مدينة ${city} الساحرة! أنا مستشارك السياحي الذكي المعتمد. اسألني عن أي شيء يخص المزارات، الحافلات والمترو بتسعيرته الحديثة (0.60 مانات)، الطقس، أو المطاعم التاريخية.`
    };

    setMessages([
      { sender: 'ai', text: welcomeMessages[lang] || welcomeMessages['en'], timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }
    ]);
  }, [city, lang]);

  const handleSendMessage = async (customText?: string) => {
    const textToSend = customText || inputText;
    if (!textToSend.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      sender: 'user',
      text: textToSend,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/v1/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          city,
          message: textToSend,
          history: messages.map(m => ({ sender: m.sender, text: m.text })),
          lang
        })
      });

      if (!response.ok) {
        throw new Error('Chat API failed');
      }

      const data = await response.json();
      
      setMessages(prev => [...prev, {
        sender: 'ai',
        text: data.reply,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }]);
    } catch (e) {
      console.warn("Using offline safe chat matcher fallback.", e);
      const offlineReply = matchOfflineChat(textToSend, city, lang);
      
      setMessages(prev => [...prev, {
        sender: 'ai',
        text: offlineReply,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const clearChatHistory = () => {
    setMessages([
      {
        sender: 'ai',
        text: lang === 'ru' 
          ? `Диалог перезапущен. Спросите меня о городе ${city}!` 
          : lang === 'tr' 
          ? `Sohbet sıfırlandı. Bana ${city} hakkında bir soru yöneltin.` 
          : `Chat reset. Ask me anything else regarding your travel in ${city}!`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ]);
  };

  const suggestions = {
    en: [
      { text: "Baku Metro & bus card guide", label: "🚇 BakiKART Guide (0.60 AZN)" },
      { text: "Best traditional dishes to try", label: "🍽️ Local Dishes" },
      { text: "GYD Airport red AeroExpress bus route", label: "🚍 Airport Transit" },
      { text: "Is Uber or Boltタクシー better in Baku?", label: "🚗 Taxi & Bolt Safety" }
    ],
    ru: [
      { text: "Цены на проезд в метро и автобусах в Баку", label: "🚇 Проезд по Баку (0.60 AZN)" },
      { text: "Посоветуй лучшие национальные блюда", label: "🍽️ Национальная кухня" },
      { text: "Как добраться из аэропорта GYD на экспрессе", label: "🚍 Автобус-экспресс" },
      { text: "Какое такси лучше скачать (Bolt или Yango)", label: "🚗 Безопасность такси" }
    ],
    tr: [
      { text: "Bakü toplu taşıma metro ücretleri", label: "🚇 Bakü Ulaşım (0.60 AZN)" },
      { text: "Burada hangi yemekleri yemeliyim?", label: "🍽️ Geleneksel Tatlar" },
      { text: "GYD havalimanından merkeze otobüs", label: "🚍 Havalimanı Otobüsü" },
      { text: "Bakü'de hangi taksi uygulaması güvenli?", label: "🚗 Taksi Önerileri" }
    ],
    ar: [
      { text: "بطاقة باكو كارت للمواصلات وأسعار المترو", label: "🚇 كارت باكو (0.60 مانات)" },
      { text: "ما هي الأكلات والحلويات التقليدية التي يجب تجربتها؟", label: "🍽️ الأطعمة الشعبية" },
      { text: "حافلة المطار السريعة غايد", label: "🚍 باص المطار السريع" },
      { text: "ما هو أفضل تطبيق تكسي معتمد (بولت أو يانجو)؟", label: "🚗 تاكسي بولت الآمن" }
    ]
  };

  const activeChips = suggestions[lang] || suggestions['en'];

  return (
    <div className="mx-auto w-full max-w-5xl p-4 md:p-6 flex flex-col h-[calc(100vh-5rem)] pb-12 animate-fade-in justify-between">
      
      {/* Mini Active Chat Header */}
      <div className="rounded-2xl border border-slate-200 bg-white p-3.5 shadow-sm flex items-center justify-between shrink-0">
        <div className="flex items-center gap-2.5">
          <div className="relative">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center text-white text-xs font-bold animate-pulse">
              🤖
            </div>
            <div className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-emerald-500 border-2 border-white"></div>
          </div>
          <div>
            <h3 className="text-xs font-bold text-slate-800 tracking-tight flex items-center gap-1.5">
              <span>Ask Travel AI Concierge</span>
              <span className="rounded-full bg-amber-50 border border-amber-100 px-2 py-0.5 text-[8px] font-extrabold text-amber-600 uppercase">Interactive</span>
            </h3>
            <p className="text-[10px] text-slate-400 font-medium">Verified active in {city} (Local Time ready)</p>
          </div>
        </div>

        <button 
          onClick={clearChatHistory}
          title="Clear Chat History"
          className="flex h-8 w-8 items-center justify-center rounded-xl bg-slate-50 border border-slate-200 text-slate-400 hover:text-red-500 hover:bg-red-50 hover:border-red-200 transition-colors"
        >
          <Trash2 className="h-4 w-4" />
        </button>
      </div>

      {/* Suggestion Quick Chips */}
      {messages.length <= 1 && (
        <div className="my-3 space-y-2 shrink-0">
          <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest block text-center">Starter Queries</span>
          <div className="flex flex-wrap gap-2 justify-center">
            {activeChips.map((chip, cid) => (
              <button
                key={cid}
                onClick={() => handleSendMessage(chip.text)}
                className="rounded-xl border border-slate-200/80 bg-white px-3.5 py-2 text-xs font-bold text-slate-700 hover:border-amber-400 hover:bg-amber-500/[0.02] shadow-sm select-none cursor-pointer transition-all active:scale-[0.98]"
              >
                {chip.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Chat History Panel */}
      <div className="flex-1 overflow-y-auto my-4 py-4 px-1 space-y-4 max-h-[500px] border border-slate-50 bg-slate-50/[0.15] rounded-3xl p-4">
        {messages.map((m, idx) => {
          const isAi = m.sender === 'ai';
          return (
            <div 
              key={idx} 
              className={`flex w-full items-start gap-3 ${isAi ? 'justify-start' : 'justify-end'}`}
            >
              {isAi && (
                <div className="h-7 w-7 rounded-xl bg-slate-900 text-white flex items-center justify-center text-xs shrink-0 font-bold shadow-md shadow-slate-900/10">
                  AI
                </div>
              )}
              
              <div className="flex flex-col max-w-[80%] space-y-1">
                <div className={`rounded-2xl px-4 py-3 text-xs leading-relaxed font-normal shadow-sm ${
                  isAi
                    ? 'bg-white border border-slate-100 text-slate-700'
                    : 'bg-slate-900 text-slate-50'
                }`}>
                  {m.text}
                </div>
                <span className={`text-[9px] text-slate-400 font-medium ${isAi ? 'text-left' : 'text-right'}`}>
                  {m.timestamp}
                </span>
              </div>

              {!isAi && (
                <div className="h-7 w-7 rounded-xl bg-amber-500 text-white flex items-center justify-center text-xs shrink-0 font-bold shadow-md shadow-amber-500/10 uppercase">
                  U
                </div>
              )}
            </div>
          );
        })}

        {/* Typing loading indicators */}
        {isLoading && (
          <div className="flex w-full justify-start items-center gap-3 animate-pulse">
            <div className="h-7 w-7 rounded-xl bg-slate-900 text-white flex items-center justify-center text-xs shrink-0 font-bold">
              AI
            </div>
            <div className="rounded-2xl px-4 py-3 text-xs text-slate-400 bg-white border border-slate-100 flex items-center gap-2">
              <Loader2 className="h-3 w-3 animate-spin text-amber-500" />
              <span>Formulating local advice...</span>
            </div>
          </div>
        )}

        <div ref={bottomRef} />
      </div>

      {/* Input Form area */}
      <form 
        onSubmit={(e) => { e.preventDefault(); handleSendMessage(); }}
        className="relative flex items-center mt-2 shrink-0 bg-white border border-slate-200 rounded-2xl px-3 py-1.5 focus-within:border-amber-500 focus-within:ring-1 focus-within:ring-amber-500 transition-all duration-200"
      >
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder={lang === 'ru' ? 'Спросите меня о чем угодно, например: сколько стоит проезд?' : lang === 'tr' ? 'Bana sorun yöneltin: metro ücreti ne kadar?' : 'Type your travel query (e.g., airport bus fare / taxi safety)...'}
          className="flex-1 bg-transparent py-2 px-1 text-xs focus:outline-none text-slate-800 placeholder-slate-400 font-medium"
        />
        <button
          type="submit"
          disabled={!inputText.trim() || isLoading}
          className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-900 text-white hover:bg-slate-800 disabled:bg-slate-100 disabled:text-slate-400 transition-colors select-none cursor-pointer"
        >
          <Send className="h-4 w-4" />
        </button>
      </form>

    </div>
  );
}

// Client keyword-based smart translation matching for chat while in offline mode
function matchOfflineChat(text: string, city: City, lang: Language): string {
  const query = text.toLowerCase();
  const isBaku = city === 'Baku';

  if (lang === 'ru') {
    if (query.includes('погод') || query.includes('дожд') || query.includes('температур')) {
      return `Погода в ${city} сейчас замечательная! Благодаря каспийскому или горному микроклимату, весной и осенью здесь держится комфортная температура около 18-24°C с легким ветерком. Рекомендуем захватить легкую ветровку!`;
    }
    if (query.includes('ед') || query.includes('ресторан') || query.includes('кухн') || query.includes('кутаб') || query.includes('плов')) {
      return `В городе ${city} гастрономия — это искусство! Обязательно попробуйте Шах Плов (королевский плов в хрустящем лаваше), сочный Садж на углях и свежие кутабы с зеленью и сыром. На десерт закажите чайный сет (çay dəsgahı) с домашним вареньем из белого инжира!`;
    }
    if (query.includes('транспорт') || query.includes('метро') || query.includes('автобус') || query.includes('карт') || query.includes('проезд')) {
      return isBaku 
        ? "Система городского транспорта в Баку очень удобна! Стоимость проезда на метро и автобусах строго зафиксирована и составляет ровно 0.60 AZN за поездку. Оплата производится пластиковой картой BakiKART, которую можно купить в желтых терминалах у входа на станции за 2 AZN." 
        : `В городе ${city} транспорт в основном представлен местными маршрутками (Marshrutka) или лицензированными такси. Поездки на такси по центру города стоят всего 3-5 AZN. Прекрасно работает мобильное приложение Bolt!`;
    }
    if (query.includes('такси') || query.includes('машина') || query.includes('bolt') || query.includes('yango')) {
      return `Для безопасных поездок в ${city} настоятельно рекомендуем использовать официальные приложения Bolt или Yango. Избегайте частников возле вокзалов и лобби аэропорта, которые часто называют нереальные цены до 50 AZN, тогда как поездка в приложении стоит всего 10-15 AZN.`;
    }
    return `Спасибо за вопрос! Как ваш персональный гид в ${city}, я подтверждаю, что это отличный выбор для вашей поездки. Азербайджан славится гостеприимством и безопасностью! Попробуйте также сгенерировать полный план поездки во вкладке "Travel Planner".`;
  }

  if (lang === 'tr') {
    if (query.includes('hava') || query.includes('yağmur') || query.includes('sıcak')) {
      return `${city} havası genellikle mükemmeldir! İlkbahar ve sonbahar aylarında serinletici hafif bir rüzgar eşliğinde 18-24°C sıcaklıklar hakimdir. Dağlık bölgelerde akşamları serin olabileceği için yanınıza kalın giysiler almanızı tavsiye ederiz.`;
    }
    if (query.includes('yemek') || query.includes('restoran') || query.includes('lezzet') || query.includes('piti') || query.includes('levengi')) {
      return `${city} gezinizde mutlaka Şah Pilavı, sac kavurma, qutab ve yöresel çay setini denemelisiniz. Şeki'de iseniz Piti çorbasını, Lenkeran'da iseniz Levengi yemeğini mutlaka meşe fırınlarında pişmiş olarak tadın!`;
    }
    if (query.includes('ulaşım') || query.includes('metro') || query.includes('otobüs') || query.includes('kart') || query.includes('bilet')) {
      return isBaku
        ? "Bakü'de metro ve şehir içi otobüs biniş ücretleri kesin olarak güncellenmiş olup tek geçiş 0.60 AZN'dir. Sarı otomatlardan 2 AZN karşılığında fiziksel BakiKART alabilir ve dilediğiniz miktarda bakiye yükleyerek ucuza seyahat edebilirsiniz."
        : `${city} içinde ulaşım genel olarak Marşrutka adı verilen minibüslerle sağlanmaktadır. Şehir içi kısa taksi mesafeleri ise yaklaşık 3-5 AZN civarındadır.`;
    }
    if (query.includes('taksi') || query.includes('bolt') || query.includes('yango') || query.includes('uber')) {
      return `Bakü ve genel olarak Azerbaycan genelinde en güvenli taksi kullanım yöntemi Bolt veya Yango uygulamalarıdır. Havalimanında sizi karşılamak isteyen korsan taksiciler yerine uygulamayı kullanarak adil fiyatla (GYD Havalimanı - Merkez yaklaşık 11-15 AZN) seyahat edin.`;
    }
    return `${city} hakkında harika bir soru! Azerbaycan konukseverliği, lezzetli yemekleri ve güvenli sokaklarıyla sizi bekliyor. Dilerseniz "Travel Planner" sekmesinden bütçenize özel günlük detaylı rota da çizebilirsiniz.`;
  }

  if (lang === 'ar') {
    if (query.includes('طقس') || query.includes('جو') || query.includes('حرار')) {
      return `الطقس في ${city} يشتهر باعتداله وهو مناسب جداً للسياحة! في الربيع والخريف تتراوح درجات الخرارة بين 18-24 درجة مئوية مع نسيم عليل. ننصحك بارتداء سترة خفيفة في المساء إذا زرت الجبال الخضراء.`;
    }
    if (query.includes('أكل') || query.includes('طعام') || query.includes('مطعم') || query.includes('كباب')) {
      return `المطبخ الأذربيجاني غني جداً بالنكهات الأصيلة الممتازة! في ${city}، نوصيك بتجربة الشاه بلوف (أرز بالزعفران مطهو بورق الفطير)، فطائر القطاب الخفيفة، واللحم المطهي بالساج. تذوق الشاي مع مربى التين الكرزي!`;
    }
    if (query.includes('مواصلات') || query.includes('مترو') || query.includes('باص') || query.includes('كرت') || query.includes('بطاقة')) {
      return isBaku
        ? "شبكة المواصلات في باكو ممتازة ورخيصة جداً! تم رفع تعرفة المترو والباص الموحدة لتصبح 0.60 مانات أذربيجاني فقط لكل رحلة. ستحتاج لشراء بطاقة باكو كارت البلاستيكية (BakiKART) من مخرط المطار أو المحطة بـ 2 مانات وشحنها."
        : `في مدينة ${city}، التنقل يتم بالأساس عبر الحافلات الصغيرة (مارشروتكا) أو التاكسي المشترك. الرحلات الداخلية القصيرة تكلف عادة حوالي 3-5 مانات فقط.`;
    }
    if (query.includes('تاكسي') || query.includes('بولت') || query.includes('يانو') || query.includes('توصيل')) {
      return `للتنقل الآمن والمريح داخل ${city}، نوصي بشدة باستخدام تطبيق Bolt أو Yango. تجنب السائقين العشوائيين في صالة الاستقبال بالمطار إذ يطلبون ما يقارب 50 مانات، في حين تبلغ التسعيرة الرسمية بالبرنامج حوالي 11-15 مانات فقط.`;
    }
    return `نشكرك على هذا السؤال الرائع عن مدينة ${city}! أذربيجان بلد آمن ومضياف للغاية ومثالي للعوائل والشباب. يمكنك التوجه لقسم "Travel Planner" لتخطيط رحلتك بالتفصيل.`;
  }

  // Default English fallback
  if (query.includes('weather') || query.includes('temp') || query.includes('rain') || query.includes('wind')) {
    return `The weather in ${city} is lovely right now! It benefits from a beautiful fresh microclimate (especially in mountain regions). Spring/Autumn temperature stands at a perfect 18-24°C. Local breeze ensures highly pleasant walks.`;
  }
  if (query.includes('food') || query.includes('restaurant') || query.includes('eat') || query.includes('plov') || query.includes('kebab')) {
    return `In ${city}, food is a sacred tradition! You must try Shah Plov, Saj dishes, and fresh hot Qutabs. Do not leave without experiencing a local tea set (çay dəsgahı) complete with organic lemon and thick white-fig preserve fruit jams!`;
  }
  if (query.includes('transport') || query.includes('metro') || query.includes('bus') || query.includes('bakikart') || query.includes('fare')) {
    return isBaku
      ? "Public transport in Baku is incredibly practical and cheap! Metro and city bus rides are fixed at exactly 0.60 AZN per single ride. Purchase a reusable plastic BakiKART inside stations or at airport gates for 2 AZN, and load some credit."
      : `In ${city}, local transit runs mainly on regional mini-vans called 'Marshrutka'. Taxi trips within city centers are very inexpensive, typically 3-5 AZN. We recommend ordering via Bolt.`;
  }
  if (query.includes('taxi') || query.includes('uber') || query.includes('bolt') || query.includes('yango') || query.includes('safety')) {
    return `For safe and metered taxi travels inside ${city}, please always depend on Bolt or Yango apps. Refuse street lobby drivers inside the airport who might offer highly elevated flat rates up to 50 AZN, whereas app-based runs cost only 10-15 AZN.`;
  }
  return `Thank you for asking! As your local concierge expert in ${city}, I can reassure you that Azerbaijan is extremely safe, warm, and rich with history. Navigate to the "Travel Planner" tab to design custom multi-day plans!`;
}
