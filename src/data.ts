import { Language, City, Place, FoodItem, Museum, Accommodation, ShoppingSpot } from './types';

// Multilingual translations for the Travely UI
export const UI_TRANSLATIONS: Record<Language, Record<string, string>> = {
  en: {
    title: "Travely",
    subtitle: "Azerbaijan Travel Assistant",
    citySelect: "Select Destination City",
    langSelect: "Language",
    planTrip: "Plan My Trip",
    justLanded: "I Just Landed",
    askAi: "Ask Travel AI",
    places: "Places to Visit",
    food: "Gastronomy & Restaurants",
    museums: "Museums & Culture",
    duration: "Number of Days",
    days: "Days",
    budget: "Estimated Budget",
    budget_low: "Budget (Economical)",
    budget_med: "Medium (Comfort)",
    budget_high: "Luxury (Premium)",
    interests: "Select Interests",
    interest_food: "Food & Culinary",
    interest_nature: "Nature & Hiking",
    interest_culture: "History & Culture",
    interest_nightlife: "Nightlife & Modern",
    generateBtn: "Generate AI Itinerary",
    generating: "Generating your Azerbaijani adventure...",
    aiTips: "Local Travel Tips from Gemini",
    chatPlaceholder: "Ask about weather, transport, bookings, or customs...",
    chatSend: "Send",
    chatStartMsg: "Hi! I am your Azerbaijan travel expert. Ask me anything about ",
    landingTitle: "Welcome to Azerbaijan! (I Just Landed Mode)",
    airportToCity: "Getting from Baku Airport (GYD) to City Center",
    metroBus: "Public AeroExpress Bus",
    metroBusDesc: "The AeroExpress operates 24/7. It departs from Terminal 1 & 2 directly to 28 May Metro/Railway Station. Takes about 30 minutes.",
    taxiText: "Ride-hailing & Taxis",
    taxiDesc: "Avoid unsolicited drivers. Install 'Bolt' or 'Yango' apps for best rates (approx. 10-18 AZN / $6-$11) or use official white taxis.",
    bakikart: "BakiKART",
    bakikartDesc: "Buy a plastic BakiKART (2 AZN + balance) at airport ticket machines. It is mandatory for AeroExpress and Metro.",
    touristSteps: "Essential First Steps for Tourists in Azerbaijan",
    visaText: "Visa Check",
    visaDesc: "Many nationalities get visa on arrival or ASAN e-Visa. Keep your printed e-Visa with your passport at all times.",
    currencyText: "Currency & Cash",
    currencyDesc: "Local currency is Azerbaijani Manat (AZN). 1 USD = 1.70 AZN (fixed rate). Exchanging cash is best done at city banks; airport rates have slightly wider spreads.",
    simText: "Local SIM Card",
    simDesc: "Buy a tourist SIM at the airport Arrivals Hall from Azercell, Bakcell, or Nar. Azercell usually has the widest coverage in regions (approx. 20-30 AZN).",
    itineraryResult: "Your Tailored Itinerary",
    noPlacesFound: "No specific places registered for this city, but you can plan with our AI assistant!",
    backToHome: "Back to Dashboard",
    cuisineLabel: "Azerbaijani Traditional Cuisine",
    suggestedPlacesLabel: "Suggested Eateries",
    addressLabel: "Where to try",
    priceRange: "Price Tier",
    cheap: "Budget Friendly",
    local: "Authentic & Local",
    popular: "Very Popular / High Rating",
    hoursLabel: "Opening Hours",
    feeLabel: "Admission Fee",
    cityIntroBaku: "Baku is the vibrant, cosmopolitan capital of Azerbaijan, where futuristic skyscrapers meet the UNESCO-walled Old City.",
    cityIntroGabala: "Gabala is a scenic alpine escape with majestic Caucasus landscapes, forest waterfalls, and world-class mountain resorts.",
    cityIntroIsmayilli: "Ismayilli is a traditional heartland famous for the ancient cobblestoned copper-smith village of Lahij and pristine green forests.",
    cityIntroSheki: "Sheki is a historical jewel along the Silk Road, renowned for its majestic Khan's Palace, unique sweet halva, and warm people.",
    cityIntroGuba: "Guba is famous for its gorgeous apple orchards, spectacular Gachresh forest canyons, and the ancient mountain community of Khinalig.",
    cityIntroLankaran: "Lankaran is a lush southern city wedged between the Caspian Sea and Talysh Mountains, famous for citrus orchards, tea, and unique Levengi meat."
  },
  ru: {
    title: "Travely",
    subtitle: "Путеводитель по Азербайджану",
    citySelect: "Выберите город назначения",
    langSelect: "Язык",
    planTrip: "Спланировать поездку",
    justLanded: "Я только что прилетел",
    askAi: "Спросить ИИ",
    places: "Интересные места",
    food: "Кулинария и Рестораны",
    museums: "Музеи и Культура",
    duration: "Количество дней",
    days: "дней",
    budget: "Планируемый бюджет",
    budget_low: "Бюджетный (Эконом)",
    budget_med: "Средний (Комфорт)",
    budget_high: "Люкс (Премиум)",
    interests: "Сферы интересов",
    interest_food: "Кулинария и еда",
    interest_nature: "Природа и хайкинг",
    interest_culture: "История и культура",
    interest_nightlife: "Ночная жизнь и модерн",
    generateBtn: "Создать ИИ-Маршрут",
    generating: "Создаем ваше азербайджанское приключение...",
    aiTips: "Местные советы от Gemini",
    chatPlaceholder: "Спросите о погоде, транспорте, обычаях или бронировании...",
    chatSend: "Отправить",
    chatStartMsg: "Привет! Я эксперт по путешествиям в Азербайджан. Спросите меня о чем угодно, связанном с ",
    landingTitle: "Добро пожаловать в Азербайджан! (Режим 'Только прилетел')",
    airportToCity: "Как добраться из аэропорта Баку (GYD) в центр города",
    metroBus: "Общественный автобус AeroExpress",
    metroBusDesc: "AeroExpress работает круглосуточно. Отправляется от Терминалов 1 и 2 до станции метро/вокзала '28 Мая'. Время в пути около 30 минут.",
    taxiText: "Заказ такси через приложения",
    taxiDesc: "Не пользуйтесь услугами частных водителей-зазывал. Установите приложения 'Bolt' или 'Yango' (около 10-18 AZN / $6-$11) или возьмите официальное белое такси.",
    bakikart: "Карта BakiKART",
    bakikartDesc: "Купите пластиковую карту BakiKART (2 AZN + баланс) в автоматах аэропорта. Она обязательна для автобусов AeroExpress и метро.",
    touristSteps: "Важные первые шаги для туристов",
    visaText: "Визовый контроль",
    visaDesc: "Гражданам многих стран СНГ виза не нужна. Для других доступна e-Visa через портал ASAN. Всегда держите распечатку визы при себе.",
    currencyText: "Валюта и деньги",
    currencyDesc: "Местная валюта — азербайджанский манат (AZN). 1 USD = 1.70 AZN (фиксированный курс). Меняйте деньги в банках города, в аэропорту курс чуть хуже.",
    simText: "Местная сим-карта",
    simDesc: "Купите туристическую сим-карту в зале прилета у операторов Azercell, Bakcell или Nar. Azercell обладает лучшим покрытием в регионах (20-30 AZN).",
    itineraryResult: "Ваш персональный маршрут",
    noPlacesFound: "Для этого города нет готовых записей, но вы можете использовать ИИ-помощника для планирования!",
    backToHome: "Назад в меню",
    cuisineLabel: "Традиционная азербайджанская кухня",
    suggestedPlacesLabel: "Где поесть",
    addressLabel: "Где попробовать",
    priceRange: "Ценовая категория",
    cheap: "Недорого / Доступно",
    local: "Аутентично и местно",
    popular: "Популярно / Высокий рейтинг",
    hoursLabel: "Часы работы",
    feeLabel: "Стоимость входа",
    cityIntroBaku: "Баку — колоритная столица Азербайджана, где футуристические небоскребы гармонично сочетаются с древним Ичери Шехер.",
    cityIntroGabala: "Габала — уединенный альпийский курорт посреди вершин Кавказа с густыми лесами, озерами и канатными дорогами.",
    cityIntroIsmayilli: "Исмаиллы — традиционный ремесленный край, знаменитый мощеным селом медников Лагич и девственной дикой природой.",
    cityIntroSheki: "Шеки — историческая жемчужина Великого Шелкового пути с величественным Дворцом Шекинских ханов и знаменитой пахлавой.",
    cityIntroGuba: "Губа славится своими яблоневыми садами, дивным ущельем Гячреш и древнейшей горной общиной Хыналыг.",
    cityIntroLankaran: "Лянкяран — южный оазис у Каспийского моря, окруженный Талышскими горами, цитрусовыми садами, чаем и фирменным блюдом Лявянги."
  },
  tr: {
    title: "Travely",
    subtitle: "Azerbaycan Seyahat Asistanı",
    citySelect: "Gidilecek Şehri Seçin",
    langSelect: "Dil",
    planTrip: "Gezimi Planla",
    justLanded: "Yeni İndim",
    askAi: "Yapay Zekaya Sor",
    places: "Gezilecek Yerler",
    food: "Mutfak & Restoranlar",
    museums: "Müzeler & Kültür",
    duration: "Gün Sayısı",
    days: "Gün",
    budget: "Tahmini Bütçe",
    budget_low: "Düşük (Ekonomik)",
    budget_med: "Orta (Konforlu)",
    budget_high: "Lüks (Premium)",
    interests: "İlgi Alanları",
    interest_food: "Yemek ve Gastronomi",
    interest_nature: "Doğa ve Doğa Yürüyüşü",
    interest_culture: "Tarih ve Kültür",
    interest_nightlife: "Gece Hayatı & Modern",
    generateBtn: "Yapay Zeka Planı Oluştur",
    generating: "Azerbaycan maceranız oluşturuluyor...",
    aiTips: "Gemini'den Yerel Tavsiyeler",
    chatPlaceholder: "Hava durumu, ulaşım, adetler veya rezervasyonlar hakkında sorun...",
    chatSend: "Gönder",
    chatStartMsg: "Merhaba! Ben Azerbaycan seyahat uzmanıyım. Bana şunun hakkında her şeyi sorabilirsin: ",
    landingTitle: "Azerbaycan'a Hoş Geldiniz! (Yeni İndim Modu)",
    airportToCity: "Bakü Havalimanı (GYD) ile Şehir Merkezi Arası Ulaşım",
    metroBus: "AeroExpress Belediye Otobüsü",
    metroBusDesc: "AeroExpress 7/24 çalışır. Terminal 1 ve 2'den 28 May Metro ve Tren İstasyonu'na doğrudan gider. Yaklaşık 30 dakika sürer.",
    taxiText: "Taksimetre & Mobil Uygulamalar",
    taxiDesc: "Havalimanındaki serbest taksicilerden kaçının. En iyi fiyatlar için 'Bolt' veya 'Yango' uygulamalarını kurun (yaklaşık 10-18 AZN / $6-$11).",
    bakikart: "BakiKART",
    bakikartDesc: "Havalimanı bilet makinelerinden plastik bir BakiKART (2 AZN + bakiye) alın. AeroExpress ve Metro için zorunludur.",
    touristSteps: "Turistler İçin Önemli İlk Adımlar",
    visaText: "Vize Kontrolü",
    visaDesc: "Türkiye vatandaşları Azerbaycan'a vizesiz ve yeni çipli kimlikle 90 güne kadar seyahat edebilirler.",
    currencyText: "Para Birimi ve Nakit",
    currencyDesc: "Yerel para birimi Azerbaycan Manatı (AZN). 1 USD = 1.70 AZN (sabit kur). Şehir içindeki bankalarda döviz bozdurmak en karlı olanıdır.",
    simText: "Yerel SIM Kart",
    simDesc: "Gelen yolcu salonunda Azercell, Bakcell veya Nar bayilerinden turist SIM kartı satın alın. Azercell bölgelerde en iyi kapsama alanına sahiptir.",
    itineraryResult: "Kişisel Gezi Planınız",
    noPlacesFound: "Bu şehir için kayıtlı yer bulunmuyor ama Yapay Zeka asistanımızla planlama yapabilirsiniz!",
    backToHome: "Menüye Dön",
    cuisineLabel: "Geleneksel Azerbaycan Mutfağı",
    suggestedPlacesLabel: "Nerede Yenir",
    addressLabel: "Adres / Mekan",
    priceRange: "Fiyat Aralığı",
    cheap: "Ucuz / Bütçe Dostu",
    local: "Geleneksel & Yerel",
    popular: "Popüler / Yüksek Puanlı",
    hoursLabel: "Ziyaret Saatleri",
    feeLabel: "Giriş Ücreti",
    cityIntroBaku: "Bakü, fütüristik gökdelenlerin UNESCO korumasındaki tarihi İçerişehir ile harmanlandığı, rüzgarlı ve kozmopolit bir başkenttir.",
    cityIntroGabala: "Kabala, Kafkas dağlarının muhteşem manzaraları, ormanları, gölleri ve birinci sınıf kayak merkezleriyle şirin bir dağ kaçamağıdır.",
    cityIntroIsmayilli: "İsmayıllı, el yapımı bakır atölyeleriyle ünlü tarihi Lahıç köyü ve el değmemiş yemyeşil doğası ile meşhurdur.",
    cityIntroSheki: "Şeki, ihtişamlı Han Sarayı, kendine has tatlı helvası ve Güler yüzlü insanlarıyla İpek Yolu'nun tarihi mücevheridir.",
    cityIntroGuba: "Guba, göz alıcı elma bahçeleri, muazzam Geçreş orman kanyonları ve kadim dağ köyü Kınalık ile ünlüdür.",
    cityIntroLankaran: "Lenkeran, Hazar Denizi ile Talış Dağları arasında sıkışmış, narenciye bahçeleri, çay tarlaları ve meşhur Levengisi ile bilinen bir güney şehridir."
  },
  ar: {
    title: "ترافلي",
    subtitle: "مرشدك السياحي في أذربيجان",
    citySelect: "اختر المدينة الوجهة",
    langSelect: "اللغة",
    planTrip: "خطط لرحلتي",
    justLanded: "لقد وصلت للتو",
    askAi: "اسأل الذكاء الاصطناعي",
    places: "الأماكن السياحية",
    food: "المأكولات والمطاعم",
    museums: "المتاحف والثقافة",
    duration: "عدد الأيام",
    days: "أيام",
    budget: "الميزانية المتوقعة",
    budget_low: "اقتصادية",
    budget_med: "متوسطة (راحة)",
    budget_high: "فاخرة (ممتازة)",
    interests: "الاهتمامات",
    interest_food: "الطعام والمطبخ المحلّي",
    interest_nature: "الطبيعة والمغامرة",
    interest_culture: "التاريخ والثقافة",
    interest_nightlife: "الحياة العصرية والحديثة",
    generateBtn: "إنشاء مسار الرحلة بالذكاء الاصطناعي",
    generating: "جاري تصميم مغامرتك الأذربيجانية...",
    aiTips: "نصائح سفر محلية من جيميناي",
    chatPlaceholder: "اسأل عن الطقس، النقل، المطاعم، أو العادات...",
    chatSend: "إرسال",
    chatStartMsg: "مرحباً! أنا خبير السفر الخاص بك في أذربيجان. اسألني عن أي شيء يخص ",
    landingTitle: "مرحباً بك في أذربيجان! (شاشة القادمين الجدد)",
    airportToCity: "كيفية الانتقال من مطار باكو (GYD) إلى وسط المدينة",
    metroBus: "حافلات النقل العام AeroExpress",
    metroBusDesc: "تعمل حافلات AeroExpress على مدار 24 ساعة طوال أيام الأسبوع من المطار مباشرةً إلى محطة مترو '28 مايو'. تسغرق الرحلة حوالي 30 دقيقة.",
    taxiText: "سيارات الأجرة والتطبيقات",
    taxiDesc: "تجنب السائقين غير الرسميين في صالة الوصول. قم بتنزيل تطبيق 'Bolt' أو 'Yango' للحصول على أفضل الأسعار (نحو 10 إلى 18 مانات).",
    bakikart: "بطاقة باكو كارت (BakiKART)",
    bakikartDesc: "اشترِ بطاقة BakiKART البلاستيكية (قيمة البطاقة 2 مانات + الرصيد) من أجهزة البيع الآلي بالمطار للتنقل بالحافلة والمترو.",
    touristSteps: "خطوات أولى ضرورية للسياح في أذربيجان",
    visaText: "تأشيرة الدخول",
    visaDesc: "يمكن لمواطني العديد من الدول الحصول على تأشيرة إلكترونية مسبقة ASAN e-Visa أو الحصول عليها عند الوصول لبعض الجنسيات.",
    currencyText: "العملة المحلية والنقد",
    currencyDesc: "العملة الرسمية هي المانات الأذربيجاني (AZN). دولار أمريكي واحد يساوي 1.70 مانات وهو سعر صرف ثابت. يفضل تحويل الأموال في بنوك المدينة.",
    simText: "شريحة اتصال وإنترنت محلية",
    simDesc: "اشتر شريحة اتصال سياحية من صالة القادمين بالمطار من شركات Azercell أو Bakcell أو Nar. شركة Azercell هي الأفضل تغطية في الأقاليم.",
    itineraryResult: "مسار رحلتك المخصص",
    noPlacesFound: "لا توجد مواقع مسجلة مسبقاً لهذه المدينة، ولكن يمكنك استخدام المساعد الذكي لتخطيط برنامج مخصص!",
    backToHome: "العودة للرئيسية",
    cuisineLabel: "المطبخ الأذربيجاني التقليدي",
    suggestedPlacesLabel: "أبرز المطاعم المقترحة",
    addressLabel: "الموقع المجرب",
    priceRange: "فئة السعر",
    cheap: "اقتصادي / رخيص",
    local: "أصيل ومحلي",
    popular: "مشهور جداً / تقييم ممتاز",
    hoursLabel: "ساعات العمل",
    feeLabel: "رسوم الدخول",
    cityIntroBaku: "باكو هي العاصمة النابضة بالرياح والحياة، حيث تلتقي ناطحات السحاب المستقبلية الطابع ببلدة 'إيشيري شيهير' التاريخية القديمة المسجلة باليونسكو.",
    cityIntroGabala: "غابالا هي ملاذ جبلي خلاب وسط قمم القوقاز تنعم بالغابات الكثيفة وشلالات المياه الهادرة وتلفريك مميز للتزلج.",
    cityIntroIsmayilli: "إسماعيلي هي المهد التقليدي للصناعات النحاسية القديمة في قرية لإيج الحجرية والمناظر الطبيعية الخضراء العذراء.",
    cityIntroSheki: "شكي هي الجوهرة التاريخية على طريق الحرير الشهير، وتشتهر بقصر الخانات الفاخر وحلوى الشكي الفريدة والشعب الودود.",
    cityIntroGuba: "غوبا ريف رائع يشتهر بحدائق الكرز والتفاح، وممرات غابات غاشريش العميقة، والقرية الجبلية القديمة خيناليق.",
    cityIntroLankaran: "لنكران هي واحة الجنوب الساحل للحبر الأسود في بحر قزوين وتحيط بها جبال تاليش، وتشتهر بمزارع الشاي والحمضيات وطبق 'الليفنجي' المميز."
  }
};

// Cities database with localized parameters and intros
export const CITIES: { id: City; name: Record<Language, string> }[] = [
  { id: 'Baku', name: { en: 'Baku', ru: 'Баку', tr: 'Bakü', ar: 'باكو' } },
  { id: 'Gabala', name: { en: 'Gabala', ru: 'Габала', tr: 'Kabala', ar: 'غابالا' } },
  { id: 'Ismayilli', name: { en: 'Ismayilli', ru: 'Исмаиллы', tr: 'İsmayıllı', ar: 'إسماعيلي' } },
  { id: 'Sheki', name: { en: 'Sheki', ru: 'Шеки', tr: 'Şeki', ar: 'شكي' } },
  { id: 'Guba', name: { en: 'Guba', ru: 'Губа', tr: 'Guba', ar: 'غوبا' } },
  { id: 'Lankaran', name: { en: 'Lankaran', ru: 'Лянкяран', tr: 'Lenkeran', ar: 'لنكران' } }
];

export const PLACES_BY_CITY: Record<City, Record<Language, Place[]>> = {
  Baku: {
    en: [
      { id: 'b1', name: 'Icherisheher (Old City)', description: 'The historic heart of Baku, beautifully preserved within medieval fortress walls, boasting the Palace of the Shirvanshahs and Maiden Tower.', category: 'Historical', rating: '4.8' },
      { id: 'b2', name: 'Heydar Aliyev Center', description: 'Featuring Zaha Hadid\'s famous signature curved architecture, this center holds cultural state treasures and innovative exhibitions.', category: 'Modern Architecture', rating: '4.9' },
      { id: 'b3', name: 'Flame Towers & Highland Park', description: 'Three flame-shaped mega skyscrapers lighting up the Baku night sky, offering the absolute best panoramic view of Baku Bay.', category: 'Scenic Landmark', rating: '4.7' },
      { id: 'b4', name: 'Baku Boulevard', description: 'A century-old, scenic seaside promenade lined with cafés, amusement rides, and an adorable "Little Venice" waterway.', category: 'Nature & Parks', rating: '4.6' }
    ],
    ru: [
      { id: 'b1', name: 'Ичери Шехер (Старый город)', description: 'Историческое сердце Баку, окруженное средневековыми крепостными стенами. Здесь находятся Дворец Ширваншахов и Девичья башня.', category: 'Исторический', rating: '4.8' },
      { id: 'b2', name: 'Центр Гейдара Алиева', description: 'Уникальное футуристическое творение легендарной Захи Хадид, вмещающее в себя музеи и выставочные залы.', category: 'Современная Архитектура', rating: '4.9' },
      { id: 'b3', name: 'Пламенные Башни и Нагорный Парк', description: 'Три сверкающих небоскреба в виде языков пламени, откуда открывается самый завораживающий вид на Бакинскую бухту.', category: 'Смотровая площадка', rating: '4.7' },
      { id: 'b4', name: 'Приморский Бульвар', description: 'Старинный променад вдоль Каспийского моря с каруселями, кофейнями и очаровательной парковой зоной "Малая Венеция".', category: 'Природа и парки', rating: '4.6' }
    ],
    tr: [
      { id: 'b1', name: 'İçerişehir (Eski Şehir)', description: 'Bakü\'nün tarihi kalbi. Surlar içindeki bu bölgede Şirvanşahlar Sarayı ve efsanevi Kız Kalesi yer almaktadır.', category: 'Tarihi Yer', rating: '4.8' },
      { id: 'b2', name: 'Haydar Aliyev Merkezi', description: 'Zaha Hadid imzalı, kıvrımlı fütüristik yapısıyla ünlü, içinde sergiler ve müzeler barındıran kültür merkezi.', category: 'Modern Mimari', rating: '4.9' },
      { id: 'b3', name: 'Alev Kuleleri & Dağüstü Park', description: 'Bakü semalarında yükselen alev biçimli üç dev gökdelen. Bakü Körfezi\'nin en iyi manzarasını sunar.', category: 'Manzara Noktası', rating: '4.7' },
      { id: 'b4', name: 'Bakü Bulvarı', description: 'Hazar Denizi kıyısı boyunca uzanan, kafeler, parklar ve tatlı bir "Küçük Venedik" içeren kentsel sahil şeridi.', category: 'Doğa & Parklar', rating: '4.6' }
    ],
    ar: [
      { id: 'b1', name: 'إيشيري شيهير (البلدة القديمة)', description: 'القلب التاريخي لباكو المحاط بجدران القلعة العتيقة، وتضم قصر الشروانشاه وبرج العذراء الشهير.', category: 'تاريخي ومواقع أثرية', rating: '4.8' },
      { id: 'b2', name: 'مركز حيدر علييف', description: 'تحفة معمارية مذهلة للمصممة الراحلة زها حديد، يتميز بانحناءات فريدة ومتحف وطني.', category: 'عمارة حديثة', rating: '4.9' },
      { id: 'b3', name: 'أبراج اللهب ومنتزه هايلاند', description: 'ثلاثة أبراج شاهقة على شكل ألسنة لهب تضيء سماء المدينة، مع إطلالة بانورامية ساحرة على خليج باكو.', category: 'معلم سياحي', rating: '4.7' },
      { id: 'b4', name: 'بحر كاسبيان وبوليفارد باكو', description: 'ممشى ساحلي عريق يمتد لعدة كيلومترات، يضم قنوات مائية تسمى "فينيسيا المصغرة" ومقاهي راقية.', category: 'طبيعة وحدائق', rating: '4.6' }
    ]
  },
  Gabala: {
    en: [
      { id: 'ga1', name: 'Tufandag Mountain Resort', description: 'Offers scenic cable car rides, skiing in winter, and adrenaline sports with mountain panoramas in summer.', category: 'Adventure & Sports', rating: '4.8' },
      { id: 'ga2', name: 'Nohur Lake', description: 'A peaceful alpine lake ringed by dense forest pines. Ideal for rowboats, quiet walks, and local tea tastings.', category: 'Nature & Scenic', rating: '4.7' },
      { id: 'ga3', name: 'Yeddi Gozel (Seven Beauties) Waterfall', description: 'A multi-tiered cascades waterfall tucked deep within lush woodlands with wooden stairways leading higher.', category: 'Nature & Hiking', rating: '4.5' }
    ],
    ru: [
      { id: 'ga1', name: 'Горный курорт Туфандаг', description: 'Горнолыжный комплекс с канатной дорогой, зимними трассами и захватывающими дух панорамами Кавказа летом.', category: 'Спорт и экстрим', rating: '4.8' },
      { id: 'ga2', name: 'Озеро Нохур', description: 'Тихое лесное озеро, окруженное кавказскими хребтами. Здесь можно покататься на лодках и выпить ароматный чай.', category: 'Природа', rating: '4.7' },
      { id: 'ga3', name: 'Водопад Семь Красавиц (Йедди Гёзель)', description: 'Красивейший каскадный водопад из семи уровней, расположенный в густом лесу со смотровыми мостиками.', category: 'Природа и прогулки', rating: '4.5' }
    ],
    tr: [
      { id: 'ga1', name: 'Tufandağ Dağ Resortu', description: 'Muhteşem teleferik hatları, kışın harika kayak eğlencesi ve yazın heyecan verici dağ sporları sunar.', category: 'Macera & Spor', rating: '4.8' },
      { id: 'ga2', name: 'Nohur Gölü', description: 'Ormanlık Kafkas dağlarıyla çevrili huzurlu bir göl. sandal turları ve yerel çay evleri mevcuttur.', category: 'Doğa & Manzara', rating: '4.7' },
      { id: 'ga3', name: 'Yedi Güzel Şelalesi', description: 'Sık ormanların derinliklerinde, ahşap basamaklarla çıkılan yedi katlı şelale serisi.', category: 'Doğa & Yürüyüş', rating: '4.5' }
    ],
    ar: [
      { id: 'ga1', name: 'منتجع جبل توفانداغ', description: 'يوفر ركوب تلفريك ممتع عبر قمم الجبال، والتزلج شتاءً، والرياضات الجبلية صيفاً.', category: 'مغامرات ورياضة', rating: '4.8' },
      { id: 'ga2', name: 'بحيرة نوخور', description: 'بحيرة جبلية هادئة تعززها غابات الصنوبر، توفر جولات في الزوارق وشرب الشاي الأذربيجاني على ضفافها.', category: 'طبيعة ومناظر طبيعية', rating: '4.7' },
      { id: 'ga3', name: 'شلال الجميلات السبع (Yeddi Gozel)', description: 'شلال مائي متعدد المستويات ينبع من أعماق الجبال الخضراء، مجهز بسلالم خشبية رائعة.', category: 'طبيعة ومشي', rating: '4.5' }
    ]
  },
  Ismayilli: {
    en: [
      { id: 'is1', name: 'Lahij Ancient Artisans Village', description: 'A 5th-century mountain village featuring cobblestone lanes and ancient active copper-smith workshops.', category: 'Historical Village', rating: '4.9' },
      { id: 'is2', name: 'Ivanovka Village', description: 'The last active Russian Molokan collective farming village, with wooden cottages, delicious grapes, and organic sunflower oils.', category: 'Cultural Community', rating: '4.6' }
    ],
    ru: [
      { id: 'is1', name: 'Древнее село ремесленников Лагич', description: 'Уникальное горное поселение V века с мощеными улочками и действующими медными и ковровыми мастерскими.', category: 'Историческая деревня', rating: '4.9' },
      { id: 'is2', name: 'Село Ивановка', description: 'Последний действующий колхоз молокан. Деревянные избы, вкусный виноград, домашнее масло и хлеб.', category: 'Культурная община', rating: '4.6' }
    ],
    tr: [
      { id: 'is1', name: 'Tarihi Lahıç Bakırcılar Köyü', description: '5. yüzyıldan kalma, Arnavut kaldırımlı sokakları ve geleneksel bakırcı atölyeleriyle ünlü bir dağ köyü.', category: 'Tarihi Köy', rating: '4.9' },
      { id: 'is2', name: 'Ivanovka Köyü', description: 'Geleneksel yaşamlarını koruyan Rus kökenli Molokanların yaşadığı, üzüm bağları ve organik ürünleriyle ünlü son aktif komün.', category: 'Kültürel Topluluk', rating: '4.6' }
    ],
    ar: [
      { id: 'is1', name: 'قرية لإيج (Lahij) الحجرية القديمة', description: 'قرية جبلية قديمة تعود للقرن الخامس تتميز بشوارع مرصوفة بالحصى ومحلات حرفيي النحاس النشطة.', category: 'قرية تاريخية تراثية', rating: '4.9' },
      { id: 'is2', name: 'قرية إيفانوفكا الروسية الملولكانية', description: 'آخر قرية زراعية تعاونية حافظت على التقاليد السوفيتية، وتتميز بإنتاج العنب والخبز العضوي والزيوت.', category: 'مجتمع ثقافي فريد', rating: '4.6' }
    ]
  },
  Sheki: {
    en: [
      { id: 'sh1', name: 'Palace of Sheki Khans', description: 'A breathtaking 18th-century summer mansion decorated with intricate Shebeke (stained glass built without glue or nails).', category: 'Royal History', rating: '4.9' },
      { id: 'sh2', name: 'Sheki Karvansaray', description: 'A majestic double-story medieval stone caravansary hotel where Silk Road merchants rested.', category: 'Historical Hotel', rating: '4.8' },
      { id: 'sh3', name: 'Ancient Church of Kish', description: 'A gorgeous 12th-century Caucasian Albanian stone church nestled in a scenic mountain valley.', category: 'Archaeology', rating: '4.7' }
    ],
    ru: [
      { id: 'sh1', name: 'Дворец Шекинских Ханов', description: 'Потрясающий летний дворец XVIII века, украшенный искусными шебеке (витражами без единого гвоздя).', category: 'Королевская история', rating: '4.9' },
      { id: 'sh2', name: 'Шекинский Караван-сарай', description: 'Величественный каменный средневековый постоялый двор, который до сих пор работает как аутентичный отель.', category: 'Исторический памятник', rating: '4.8' },
      { id: 'sh3', name: 'Древний албанский храм в селении Киш', description: 'Прекрасная каменная церковь Кавказской Албании XII века в живописном горном ущелье.', category: 'Археология', rating: '4.7' }
    ],
    tr: [
      { id: 'sh1', name: 'Şeki Hanları Sarayı', description: '18. yüzyıldan kalma, tek bir çivi veya yapıştırıcı kullanılmadan yapılan muhteşem "Şebeke" vitray cam işçiliğine sahip saray.', category: 'Kraliyet Tarihi', rating: '4.9' },
      { id: 'sh2', name: 'Şeki Kervansarayı', description: 'İpek Yolu tüccarlarının dinlendiği, günümüzde nostaljik bir otel olarak da hizmet veren devasa taş han.', category: 'Tarihi Yapı', rating: '4.8' },
      { id: 'sh3', name: 'Tarihi Kiş Arnavut Kilisesi', description: 'Dağ yamacında bulunan, 12. yüzyıldan kalma inanılmaz Kafkas Albanyası taş kilisesi.', category: 'Arkeoloji', rating: '4.7' }
    ],
    ar: [
      { id: 'sh1', name: 'قصر خانات شكي (Palace of Sheki Khans)', description: 'قصر صيفي رائع يعود للقرن الثامن عشر مزين بزجاج "الشبكة" الملون يدوياً بالكامل دون صمغ أو مسامير.', category: 'قصور وتاريخ ملكي', rating: '4.9' },
      { id: 'sh2', name: 'خان شكي الأثري (Karvansaray)', description: 'نزل حجري تاريخي عريق من طابقين كان ملجأً لتجار طريق الحرير، يقدم الآن أجواءً ممتازة للإقامة والتصوير.', category: 'فندق تاريخي ومعام أثري', rating: '4.8' },
      { id: 'sh3', name: 'كنيسة كيش القديمة (Kish Church)', description: 'كنيسة حجرية ألبانية قوقازية قديمة تعود للقرن الثاني عشر تقع في وادٍ جبلي أخضر خلاب.', category: 'مواقع تاريخية', rating: '4.7' }
    ]
  },
  Guba: {
    en: [
      { id: 'gu1', name: 'Khinalig High Mountain Village', description: 'The highest and oldest remote village in Azerbaijan, perched at 2,20 stone terraces, built directly on cliffs.', category: 'Ancient Heritage', rating: '4.9' },
      { id: 'gu2', name: 'Kirmizi Kasaba (Red Town)', description: 'The absolute only purely Jewish community village outside Israel and US, rich in unique Mountain Jewish culture.', category: 'Cultural History', rating: '4.8' },
      { id: 'gu3', name: 'Gachresh Forest & Canyon', description: 'A scenic woodland where towering oak trees form green arches over roads, with active mountain river streams.', category: 'Nature & Adventure', rating: '4.7' }
    ],
    ru: [
      { id: 'gu1', name: 'Высокогорное село Хыналыг', description: 'Одно из старейших населенных мест в Европе, расположенное на высоте более 2200 метров среди скал.', category: 'Древнее наследие', rating: '4.9' },
      { id: 'gu2', name: 'Красная Слобода (Кырмызы Гасаба)', description: 'Единственное полностью еврейское горское поселение за пределами Израиля и США, богатое традициями.', category: 'История и культура', rating: '4.8' },
      { id: 'gu3', name: 'Лес и каньон Гечреш', description: 'Живописный густой лес, где кроны вековых дубов смыкаются над дорогой, образуя зеленый тоннель.', category: 'Природа и пикники', rating: '4.7' }
    ],
    tr: [
      { id: 'gu1', name: 'Kınalık Yüksek Dağ Köyü', description: 'Azerbaycan\'ın ve Avrupa\'nın en yüksek ve en eski yerleşimlerinden biri, Kafkasya yamaçlarında taş evleriyle meşhurdur.', category: 'Tarihi Miras', rating: '4.9' },
      { id: 'gu2', name: 'Kırmızı Kasaba (Gırmızı Gasaba)', description: 'İsrail dışındaki ne tek tamamen Yahudi yerleşimi. Dağ Yahudileri kültürünün yaşayan son merkezlerindendir.', category: 'Kültür Tarihi', rating: '4.8' },
      { id: 'gu3', name: 'Geçreş Ormanı', description: 'Yolları bir tünel gibi kaplayan devasa meşe ağaçları ve hemen dibinden akan gür sularıyla ünlü orman.', category: 'Doğa & Macera', rating: '4.7' }
    ],
    ar: [
      { id: 'gu1', name: 'قرية خيناليق الجبلية (Khinalig)', description: 'أعلى وأقدم قرية مأهولة في أذربيجان بارتفاع 2200 متر، بيوتها الحجرية مبنية على سفوح السحب كشرفات معلقة.', category: 'تراث قديم وحياة بدوية', rating: '4.9' },
      { id: 'gu2', name: 'البلدة الحمراء (Red Town)', description: 'المجتمع السكني اليهودي الوحيد بالكامل خارج إسرائيل وأمريكا، غني بثقافة "يهود الجبال" الفريدة.', category: 'ثقافة وتاريخ ديني', rating: '4.8' },
      { id: 'gu3', name: 'غابات ومنحدرات غاشريش (Gachresh)', description: 'غابات كثيفة مظللة بأشجار البلوط العملاقة المتراصة، تشتهر بوجود جداول مائية ونقاط للشواء والمقاهي.', category: 'طبيعة ومغامرة', rating: '4.7' }
    ]
  },
  Lankaran: {
    en: [
      { id: 'la1', name: 'Tea & Citrus Plantations', description: 'Scenic green fields of Azerbaijani black tea, lemons, and mandarins overlooking mountains and Caspian beaches.', category: 'Agro-Tourism', rating: '4.6' },
      { id: 'la2', name: 'Lankaran Fortress & Prison', description: 'Historically critical castle ruin which famously held Joseph Stalin inside in his early bank-robber days.', category: 'Historical Jail', rating: '4.5' },
      { id: 'la3', name: 'Khan’s House (Mirakhmad Khan Palace)', description: 'A gorgeous multi-story French-influenced palace built for the Lankaran royal family in 1913.', category: 'Ornate Palace', rating: '4.7' }
    ],
    ru: [
      { id: 'la1', name: 'Чайные и лимонные плантации', description: 'Живописные зеленые террасы вечнозеленого азербайджанского чая, лимонов и мандаринов у подножия Талышских гор.', category: 'Агротуризм', rating: '4.6' },
      { id: 'la2', name: 'Лянкяранская крепость и Зиндан', description: 'Остатки исторической крепости. В ее круглой тюрьме в начале XX века содержался Иосиф Сталин.', category: 'Исторический памятник', rating: '4.5' },
      { id: 'la3', name: 'Дом Ханского Мирахмед Хана', description: 'Роскошный трехэтажный особняк, построенный в 1913 году с чертами французского барокко и восточными деталями.', category: 'Дворцы', rating: '4.7' }
    ],
    tr: [
      { id: 'la1', name: 'Çay & Narenciye Bahçeleri', description: 'Talış Dağları gölgesinde uzanan yemyeşil Azerbaycan siyah çayı ve mandalina bahçeleri.', category: 'Tarım Turizmi', rating: '4.6' },
      { id: 'la2', name: 'Lenkeran Kalesi & Zindan', description: 'Tarihi kale kalıntıları ve gençlik yıllarında Stalin\'in hapsedildiği dairesel tuğla zindan kulesi.', category: 'Tarihi Hapishane', rating: '4.5' },
      { id: 'la3', name: 'Han Evi (Mirahmet Han Sarayı)', description: 'Lankaran hanedanı için 1913 yılında inşa edilmiş, Fransız mimarisi esintileri taşıyan süslü taş saray.', category: 'Saray & Tarihi Miras', rating: '4.7' }
    ],
    ar: [
      { id: 'la1', name: 'مزارع الشاي والحمضيات', description: 'حقول الشاي الأسود والليمون واليوسفي الخضراء التي تطل على سفوح جبال تاليش الشهيرة وبحر قزوين.', category: 'سياحة زراعية', rating: '4.6' },
      { id: 'la2', name: 'قلعة وسجن لنكران الدائري (Zindan)', description: 'حصن عتيق كان يضم سجناً دائرياً مشهوراً احتُجز فيه الزعيم السوفيتي جوزيف ستالين في شبابه.', category: 'تاريخ وسجون', rating: '4.5' },
      { id: 'la3', name: 'قصر مير أحمد خان (Khan\'s House)', description: 'بيت خان لنكران الرائع المزين بالزخارف الباروكية الفرنسية المتقاطعة مع الطرز الإسلامية التقليدية.', category: 'قصور ومعالم', rating: '4.7' }
    ]
  }
};

export const FOOD_BY_CITY: Record<City, Record<Language, FoodItem[]>> = {
  Baku: {
    en: [
      { id: 'bf1', name: 'Shah Plov (Crown Jewels of Rice)', description: 'Basmati rice with saffron, sweet apricots, prunes, lamb, cooked inside a glorious crispy lavash crust.', category: 'popular', suggestedRestaurants: ['Mugham Club', 'Xanandi', 'Sehrli Tendir'] },
      { id: 'bf2', name: 'Qutab ( savory stuffed crepes)', description: 'Paper-thin pan-fried flatbread dough stuffed with savory mountain greens, seasoned minced lamb, or pumpkin.', category: 'cheap', suggestedRestaurants: ['Sehrli Tendir', 'Fisincan', 'Qutab House'] },
      { id: 'bf3', name: 'Dushbere (Micro Meat Dumplings)', description: 'Traditional aromatic lamb-broth soup containing tiny micro-dumplings, served with vinegar & dried mint.', category: 'local', suggestedRestaurants: ['Nargiz Restaurant', 'Firuza', 'Dolma Restaurant'] }
    ],
    ru: [
      { id: 'bf1', name: 'Шах Плов (Король всех пловов)', description: 'Ароматный рис басмати с шафраном, сухофруктами, каштанами и мясом, запеченный в хрустящей корочке из лаваша.', category: 'popular', suggestedRestaurants: ['Mugham Club', 'Xanandi', 'Sehrli Tendir'] },
      { id: 'bf2', name: 'Кутабы (Тонкие лепешки)', description: 'Тончайшие лепешки из пресного теста, фаршированные рубленой зеленью, мясом ягненка или сладкой тыквой.', category: 'cheap', suggestedRestaurants: ['Sehrli Tendir', 'Fisincan', 'Бакинские кутабы'] },
      { id: 'bf3', name: 'Дюшбара (Микро-пельмени)', description: 'Насыщенный бульон из баранины с сотнями крошечных пельменей ручной лепки, подается с уксусом и мятой.', category: 'local', suggestedRestaurants: ['Nargiz Restaurant', 'Firuza', 'Dolma Restaurant'] }
    ],
    tr: [
      { id: 'bf1', name: 'Şah Pilavı', description: 'Safran, kaysı, kuru erik ve kuzu etiyle harmanlanan, çıtır bir yufka (lavaş) kabuğu içinde pişen efsanevi pilav.', category: 'popular', suggestedRestaurants: ['Mugham Club', 'Xanandi', 'Sehrli Tendir'] },
      { id: 'bf2', name: 'Kutab (Gözleme)', description: 'Çok ince açılmış hamurun taze dağ otları, kıyma veya bal kabağıyla doldurulup sac üzerinde yağsız pişirilmesi.', category: 'cheap', suggestedRestaurants: ['Sehrli Tendir', 'Fisincan', 'Eski Şehir Kutab Evleri'] },
      { id: 'bf3', name: 'Düşbere (Mantı Çorbası)', description: 'Minicik kaşık mantılarının nane, sirkeli sos eşliğinde enfes bir kuzu kemiği suyunda çorba şeklinde sunulması.', category: 'local', suggestedRestaurants: ['Nargiz Restaurant', 'Firuza', 'Dolma Restaurant'] }
    ],
    ar: [
      { id: 'bf1', name: 'شاه بلوف (تاج الأرز الأذربيجاني)', description: 'أرز البسمتي بالزعفران والمشمش والبرقوق واللحم البقري أو الضأن، يطهى ببطء داخل رقائق خبز اللواش المقرمشة كالكعكة.', category: 'popular', suggestedRestaurants: ['Mugham Club', 'Xanandi', 'Sehrli Tendir'] },
      { id: 'bf2', name: 'القطاب (Qutab / فطائر الصاج الخفيفة)', description: 'عجين رقيق جداً محشو باللحم المفروم والرمان، أو السبانخ والكزبرة البرية، يخبز على صاج ساخن.', category: 'cheap', suggestedRestaurants: ['Sehrli Tendir', 'Fisincan', 'Qutab Cafe'] },
      { id: 'bf3', name: 'دوشبرة (Dushbere - حساء العجين الصغير)', description: 'مرق لحم دافئ وحامض غني بقطع صغيرة جداً من العجين المحشو باللحم المفروم، يقدم مع النعناع المجفف لراحة المعدة.', category: 'local', suggestedRestaurants: ['Nargiz Restaurant', 'Firuza', 'Dolma Restaurant'] }
    ]
  },
  Gabala: {
    en: [
      { id: 'gf1', name: 'Gabala Oak-wood Kebab', description: 'Juicy local lamb cuts marinated in mountain herbs and grilled over fresh local oak charcoal.', category: 'popular', suggestedRestaurants: ['Qabala Xanlar', 'Soyuq Bulag', 'Gilan Restaurant'] },
      { id: 'gf2', name: 'Dovga', description: 'A nourishing smooth hot or cold soup made from thick organic yogurt, heavy fresh herbs, and chickpeas.', category: 'cheap', suggestedRestaurants: ['Nohur Gol Restaurant', 'Cascade Café'] }
    ],
    ru: [
      { id: 'gf1', name: 'Габалинский шашлык на дубовых углях', description: 'Нежнейший шашлык из местного ягненка, маринованный в горных травах, приготовленный на сухих дубовых дровах.', category: 'popular', suggestedRestaurants: ['Qabala Xanlar', 'Союг Булаг', 'Gilan Restaurant'] },
      { id: 'gf2', name: 'Довга', description: 'Традиционный кисломолочный суп на основе катыка, риса, нута и огромного количества свежей ароматной зелени.', category: 'cheap', suggestedRestaurants: ['Nohur Gol Restaurant', 'Cascade Café'] }
    ],
    tr: [
      { id: 'gf1', name: 'Kabala Meşe Kebabı', description: 'Meşe odunu kömüründe yavaş yavaş pişirilen, dağ kekikleriyle marine edilmiş taze kuzu şiş.', category: 'popular', suggestedRestaurants: ['Qabala Xanlar', 'Soyuq Bulag', 'Gilan Restaurant'] },
      { id: 'gf2', name: 'Dovga', description: 'Yoğurt, bol miktarda taze dereotu, kişniş, nohut ve pirinç ile yapılan ekşi, serinletici çorba.', category: 'cheap', suggestedRestaurants: ['Nohur Gol Restaurant', 'Cascade Café'] }
    ],
    ar: [
      { id: 'gf1', name: 'شواء غابالا على حطب البلوط', description: 'لحم ضأن غابالي طازج من مزارع جبلية متبل بأعشاب وتوابل برية ومطهي على جمر خشب البلوط.', category: 'popular', suggestedRestaurants: ['Qabala Xanlar', 'Soyuq Bulag', 'Gilan'] },
      { id: 'gf2', name: 'دوفغا (Dovga - حساء الزبادي الساخن)', description: 'حساء الحليب واللبن بالخضار والكزبرة والنعناع مع حب الحمص الصغير، يشرب دافئاً أو بارداً ليساعد على الاسترخاء.', category: 'cheap', suggestedRestaurants: ['Nohur Gol', 'Cascade Cafe'] }
    ]
  },
  Ismayilli: {
    en: [
      { id: 'isf1', name: 'Lahij Herb Pilaf', description: 'Organic rustic rice pilaf seasoned with unique dried thyme and wildflowers from the high mountains.', category: 'local', suggestedRestaurants: ['Lahich Guest House Diner', 'Hajy Baba Place'] },
      { id: 'isf2', name: 'Ismayilli Forest Honey & Cream', description: 'Thick local wild flower honeycomb served alongside clay-baked fresh tandoor bread for breakfast.', category: 'cheap', suggestedRestaurants: ['Roadside Ismayilli Breakfast Joints', 'Local Farmers Market'] }
    ],
    ru: [
      { id: 'isf1', name: 'Лагичский травяной плов', description: 'Плов из домашнего риса с диким чабрецом, мятой и горными цветами, собранными на окрестных лугах.', category: 'local', suggestedRestaurants: ['Lahich Guest House', 'Hajy Baba Place'] },
      { id: 'isf2', name: 'Исмаиллинский лесной мед и сливки', description: 'Редчайший дикий бортевой мед с лесных пасек с домашними густыми сливками гаймаг и горячим хлебом.', category: 'cheap', suggestedRestaurants: ['Придорожные кафе в лесу Исмаиллы', 'Рынок Исмаиллы'] }
    ],
    tr: [
      { id: 'isf1', name: 'Lahıç Yabani Otlu Pilavı', description: 'Lahıç dağlarından toplanan kurutulmuş kekik ve yabani otlarla aromalandırılan köy pilavı.', category: 'local', suggestedRestaurants: ['Lahich Guest House Diner', 'Hajy Baba Place'] },
      { id: 'isf2', name: 'Süzme Orman Balı & Kaymak', description: 'Mis kokulu Ismayilli ormanlarından süzülen taze bal ve taş fırın tandır ekmeğiyle sıcak kahvaltı keyfi.', category: 'cheap', suggestedRestaurants: ['Yol Kenarı Kahvaltı Durakları', 'Lokal Çiftçi Pazarı'] }
    ],
    ar: [
      { id: 'isf1', name: 'برنج لإيج بالأعشاب البرية', description: 'أرز ريفي محضر على الحطب ومطعم بالزعتر المجفف البري وأوراق الطرخون الطازجة المنبتة في الجبال.', category: 'local', suggestedRestaurants: ['Lahich Guest House', 'Hajy Baba'] },
      { id: 'isf2', name: 'عسل الغابات والكايمك (Ismayilli Honey & Kaymak)', description: 'أقراص عسل الجبال الغني المحصود من غابات البلوط مع حليب البقر المكثف (القشطة) الطازج وخبز الفرن.', category: 'cheap', suggestedRestaurants: ['أكشاك الإفطار على طريق إسماعيلي الخضراء', 'السوق المحلي'] }
    ]
  },
  Sheki: {
    en: [
      { id: 'shf1', name: 'Sheki Halva (Crispy Sugary Saffron Nest)', description: 'An sweet, crispy legendary local masterpiece layered with rice flour webs, hazelnuts, coriander, rich saffron syrup.', category: 'popular', suggestedRestaurants: ['Aliakhmed Sweets Palace', 'Sheki Sweet Center', 'Karvansaray Cafe'] },
      { id: 'shf2', name: 'Sheki Piti (The Majestic Clay Pot Lamb Stew)', description: 'Tender baby lamb, chickpeas, chest-nuts, and block fat cooked slowly for 8+ hours in an individual clay jar; eaten in two steps.', category: 'local', suggestedRestaurants: ['Gagarin Restaurant', 'Sheki Chalabi', 'Celebi Xan'] }
    ],
    ru: [
      { id: 'shf1', name: 'Шекинская Халва', description: 'Знаменитый десерт из рисовой лапши (сетки), грецких орехов или фундука, пропитанный густым сахарно-шафрановым сиропом.', category: 'popular', suggestedRestaurants: ['Пахлава у Алиахмеда', 'Магазины Шекинской халвы', 'Караван-сарай Кафе'] },
      { id: 'shf2', name: 'Шекинское Пити', description: 'Сытное национальное блюдо из ягненка, нута, каштанов и курдючного жира, томящееся в глиняных горшочках более 8 часов.', category: 'local', suggestedRestaurants: ['Ресторан Гагарин', 'Шеки Челеби', 'Целеби Хан'] }
    ],
    tr: [
      { id: 'shf1', name: 'Şeki Helvası', description: 'Pirinç unu gözenekleri, fındık, kişniş tohumu ve yoğun safranlı şerbetle yapılan, kat kat çıtır efsanevi Şeki tatlısı.', category: 'popular', suggestedRestaurants: ['Aliakhmed Helvacısı', 'Şeki Helva Evi', 'Kervansaray Cafe'] },
      { id: 'shf2', name: 'Şeki Piti Çorbası', description: 'Kuzu eti, nohut, kestane ve kuyruk yağının küçük toprak çömleklerde 8 saat pişmesiyle yapılan, iki aşamada yenen özel yemek.', category: 'local', suggestedRestaurants: ['Gagarin Restoran', 'Şeki Şelebi', 'Celebi Xan'] }
    ],
    ar: [
      { id: 'shf1', name: 'حلوى الشكي الشهيرة (Sheki Halva)', description: 'أهم الحلويات الأذربيجانية التاريخية، شبكة طبقات دقيقة من دقيق الأرز والمكسرات المحشوة ومغطاة بشراب الزعفران السكرى اللذيذ.', category: 'popular', suggestedRestaurants: ['حلويات علي أحمد الشهير (Aliakhmed)', 'متجر شكي للحلويات'] },
      { id: 'shf2', name: 'بيتي الشكي (Sheki Piti / حساء الفخار التقليدي)', description: 'لحم ضأن غني يذوب بالفم مطبوخ ببطء طوال الليل لحوالي 8 ساعات مع الحمص والكستناء ودهن الخروف داخل وعاء فخاري صغير ومغلق.', category: 'local', suggestedRestaurants: ['Gagarin Piti', 'Celebi Xan'] }
    ]
  },
  Guba: {
    en: [
      { id: 'guf1', name: 'Guba Pakhlava', description: 'Multi-layered rich sweet diamond-shaped pastry packed with walnuts and soaked in natural syrup.', category: 'popular', suggestedRestaurants: ['Guba Sweets House', 'Local Tea Gardens'] },
      { id: 'guf2', name: 'Guba Apple Cider Stew / Kebabs', description: 'Juicy minced meat cuts prepared with sweet-sour apples collected from the local Guba orchards.', category: 'local', suggestedRestaurants: ['Xanbagi Restaurant', 'Minaret Garden'] }
    ],
    ru: [
      { id: 'guf1', name: 'Губинская Пахлава', description: 'Хрупкая ромбовидная пахлава, обильно начиненная орехами с добавлением пряностей, более светлая и нежная чем бакинская.', category: 'popular', suggestedRestaurants: ['Дом сладостей Губы', 'Чайные сады города'] },
      { id: 'guf2', name: 'Шашлыки в яблоневом саду / Мясо с яблоками', description: 'Сочное жареное мясо, подаваемое с пикантным соусом из знаменитых губинских кисло-сладких яблок.', category: 'local', suggestedRestaurants: ['Ресторан Ханбаги', 'Сад Минарет'] }
    ],
    tr: [
      { id: 'guf1', name: 'Guba Baklavası (Pakhlava)', description: 'Bakü baklavasından daha farklı, ceviz ve baharatlarla yapılan, üzerinde renkli pirinç unu işlemeleri olan yöresel tatlı.', category: 'popular', suggestedRestaurants: ['Guba Tatlı Sarayı', 'Yerel Çay Bahçeleri'] },
      { id: 'guf2', name: 'Guba Elmalı Kebabı', description: 'Guba bahçelerinden toplanan ekşi-tatlı elmalarla aroma katılmış sulu, ağızda eriyen saç kavurma veya kuzu kebapları.', category: 'local', suggestedRestaurants: ['Xanbagi Restaurant', 'Minaret Garden'] }
    ],
    ar: [
      { id: 'guf1', name: 'بقلاوة غوبا (Guba Pakhlava)', description: 'حلوى شهيرة متعددة الطبقات رقيقة جداً، محشوة بالهيل ومفروم الجوز وتخبز ببطء ثم تسقى بالقطر الساخن.', category: 'popular', suggestedRestaurants: ['Guba Sweets', 'Local Cafe'] },
      { id: 'guf2', name: 'كباب غوبا بالتفاح الحمضي', description: 'أسياخ لحم الكباب المشوي مع مكعبات التفاح الحمضي الفاخر المقطوف من بساتين تفاح غوبا الشهيرة.', category: 'local', suggestedRestaurants: ['Xanbagi', 'Minaret Garden'] }
    ]
  },
  Lankaran: {
    en: [
      { id: 'laf1', name: 'Lankaran Chicken/Fish Levengi', description: 'The ultimate Southern Azerbaijani masterpiece: chicken or wild Caspian kutum stuffed with walnuts, onions, sour plum paste, baked in clay tandoor.', category: 'popular', suggestedRestaurants: ['Ojak Restaurant', 'Tendir Corner', 'Lankaran Forest Resort'] },
      { id: 'laf2', name: 'Lankaran Tea and Fig Jam', description: 'High-quality freshly harvested local black tea served in pear-shaped Armudi glasses accompanied by sweet organic fig fruit preserve.', category: 'cheap', suggestedRestaurants: ['Khazar Tea House', 'Beach Front Cafes'] }
    ],
    ru: [
      { id: 'laf1', name: 'Лянкяранское Лявянги', description: 'Курица или дикая каспийская рыба кутум, начиненная ореховым фаршем с луком, соусом наршараб и алычой, запеченная в тандыре.', category: 'popular', suggestedRestaurants: ['Ресторан Оджаг', 'Тендир Хона', 'Lankaran Forest Resort'] },
      { id: 'laf2', name: 'Лянкяранский чай с инжирным вареньем', description: 'Свежезаваренный крепкий локальный черный чай в стаканчиках армуду, подаваемый с домашним вареньем из белого инжира.', category: 'cheap', suggestedRestaurants: ['Чайхана Хазар', 'Прибрежные кафе у моря'] }
    ],
    tr: [
      { id: 'laf1', name: 'Levengi (Ceviz Dolgulu Tavuk/Balık)', description: 'Lenkeran yöresine ait ceviz, soğan, nar ekşisi ve kara erik ezmesiyle doldurulup tandırda kızartılan nefis tavuk veya sazan balığı.', category: 'popular', suggestedRestaurants: ['Ojak Restaurant', 'Tandır Köşesi', 'Lankaran Forest Resort'] },
      { id: 'laf2', name: 'Lenkeran Çayı ve İncir Reçeli', description: 'Hazar kıyısındaki ünlü çay tarlalarından toplanan siyah taze çay, armut bardakta ev yapımı taze incir reçeli ile sunulur.', category: 'cheap', suggestedRestaurants: ['Khazar Çay Evi', 'Sahil Kafeleri'] }
    ],
    ar: [
      { id: 'laf1', name: 'ليفنجي لنكران (Levengi - الدجاج أو السمك المحشو)', description: 'التحفة الجنوبية المطلقة: سمك كوتوم بحر قزوين أو دجاج بري محشو بمزيج غني من الجوز المفروم، البصل المشوي، ودبس الرمان الحامض، يخبز في فرن التنور الطيني.', category: 'popular', suggestedRestaurants: ['Ojak Restaurant', 'Tendir Corner'] },
      { id: 'laf2', name: 'شاي لنكران الساخن مع مربى التين والليمون', description: 'أوراق الشاي الأسود الطازج المحصود في جنوب أذربيجان يقدم في كؤوس الأرمودي مع عسل مربى التين واليوسفي اللذيذ.', category: 'cheap', suggestedRestaurants: ['Khazar Tea House', 'Beach Cafes'] }
    ]
  }
};

export const MUSEUMS_BY_CITY: Record<City, Record<Language, Museum[]>> = {
  Baku: {
    en: [
      { id: 'm1', name: 'Azerbaijan National Carpet Museum', description: 'Housed in an incredibly design structure shaped like a rolling giant carpet. Holds the world\'s largest collection of beautiful Azerbaijani carpet weaving techniques.', hours: '10:00 - 18:00 (Closed Mondays)', fee: '10 AZN (approx. $6)' },
      { id: 'm2', name: 'State Museum of Shirvanshahs Palace', description: 'An intricate, historical sand-stone complex built in 15th-century, displaying historical clothing, keys, coins, and the royal resting domes.', hours: '10:00 - 19:00 (Daily)', fee: '15 AZN' }
    ],
    ru: [
      { id: 'm1', name: 'Азербайджанский Национальный Музей Ковра', description: 'Уникальное футуристическое здание в форме свернутого ковра, хранящее богатейшую коллекцию ручных ковров разных эпох и стилей.', hours: '10:00 - 18:00 (Пн выходной)', fee: '10 AZN' },
      { id: 'm2', name: 'Музей-Дворец Ширваншахов', description: 'Исторический дворцовый комплекс Ширванских монархов XV века из песчаника, рассказывающий о династиях и быте Баку.', hours: '10:00 - 19:00', fee: '15 AZN' }
    ],
    tr: [
      { id: 'm1', name: 'Azerbaycan Halı Müzesi', description: 'Bükülmüş dev bir halı şeklinde inşa edilen ve dünya üzerindeki en nadide el dokuma Azerbaycan halısı koleksiyonuna sahip benzersiz müze.', hours: '10:00 - 18:00 (Pazartesi kapalı)', fee: '10 AZN' },
      { id: 'm2', name: 'Şirvanşahlar Sarayı Devlet Müzesi', description: 'Bakü eski şehir içindeki 15. yüzyıldan kalma kum taşı kraliyet saray kompleksi, tarihi giysiler, askeri zırhlar ve paraları sergiler.', hours: '10:00 - 19:00', fee: '15 AZN' }
    ],
    ar: [
      { id: 'm1', name: 'متحف السجاد الوطني الأذربيجاني', description: 'مبنى مميز جداً صُمم على شكل سجادة عملاقة ملتفة، يضم أضخم وأجود مجموعات وقطع النسيج والألوان التاريخية للسجاد الأذربيجاني.', hours: '10:00 - 18:00 (مغلق الاثنين)', fee: '10 مانات (حوالي 6 دولارات)' },
      { id: 'm2', name: 'متحف قصر شروانشاه (Palace of the Shirvanshahs)', description: 'قصر ملكي عتيق مشيد من الحجر الرملي يعود للقرن الخامس عشر في قلب المدينة القديمة، يعرض ملابس وحلي وتيجان حكام الدولة التاريخية.', hours: '10:00 - 19:00 (يومياً)', fee: '15 مانات' }
    ]
  },
  Gabala: {
    en: [
      { id: 'gm1', name: 'Gabala Historical Local Lore Museum', description: 'Features archeological discoveries and bronze weapons dug from Chubur Khidimli excavation sites, containing thousands of ancient artifacts.', hours: '09:00 - 18:00', fee: '3 AZN' }
    ],
    ru: [
      { id: 'gm1', name: 'Габалинский Историко-Краеведческий Музей', description: 'Краеведческий музей с коллекциями монет, оборонительного оружия эпохи Кавказской Албании и ценных археологических раскопок.', hours: '09:00 - 18:00', fee: '3 AZN' }
    ],
    tr: [
      { id: 'gm1', name: 'Kabala Tarih ve Etnografya Müzesi', description: 'Kafkas Albanyası döneminden kalan bronz silahlar, eski sikkeler ve kıyafetleri sergileyen binlerce yıllık eser barındıran müze.', hours: '09:00 - 18:00', fee: '3 AZN' }
    ],
    ar: [
      { id: 'gm1', name: 'متحف غابالا للتاريخ والآثار (Gabala Museum)', description: 'يضم مكتشفات غنية من النحاس والدروع والأسلحة التاريخية التي تم التنقيب عنها في مدينة غابالا التاريخية وأطلالها القديمة.', hours: '09:00 - 18:00', fee: '3 مانات' }
    ]
  },
  Ismayilli: {
    en: [
      { id: 'ism1', name: 'Lahij Local Ethnography & Historical Museum', description: 'Set inside an ancient former mosque, exhibiting hand-tooled copper pots, copper weaponry, and traditional carpets woven by Lahij women.', hours: '10:00 - 17:00 (Closed Mondays)', fee: '2 AZN' }
    ],
    ru: [
      { id: 'ism1', name: 'Лагичский краеведческий музей', description: 'Музей расположен в здании бывшей старинной мечети V века. Экспонирует уникальную старинную медную утварь, ковры и оружие ремесленников.', hours: '10:00 - 17:00 (Пн закрыто)', fee: '2 AZN' }
    ],
    tr: [
      { id: 'ism1', name: 'Lahıç Yerel Kültür Müzesi', description: 'Eski tarihi bir cami binasında yer alan müze. Lahıç usta bakırcılarının yaptığı binlerce yılı kapsayan kap kacak ve el aletlerini sergiler.', hours: '10:00 - 17:00 (Pazartesi kapalı)', fee: '2 AZN' }
    ],
    ar: [
      { id: 'ism1', name: 'متحف لإيج الإثنوغرافي التراثي', description: 'يقع المتحف داخل مبنى مسجد تاريخي قديم، يعرض الأواني النحاسية المحفورة وقصص تطور اللهجات الحرفية عبر التاريخ.', hours: '10:00 - 17:00 (مغلق الاثنين)', fee: '2 مانات' }
    ]
  },
  Sheki: {
    en: [
      { id: 'shm1', name: 'Sheki Museum of Folk and Applied Arts', description: 'Located within a stunning stone-walled circular historical temple castle. Exhibits traditional wood carving tools, Caucasian wear, and local crafts.', hours: '09:00 - 18:00', fee: '4   AZN' }
    ],
    ru: [
      { id: 'shm1', name: 'Шекинский Музей Народно-Прикладного Искусства', description: 'Расположен в круглом каменном здании древнего храма. Демонстрирует ковроделие, шелкопрядение, деревянные шебеке и изделия мастеров.', hours: '09:00 - 18:00', fee: '4 AZN' }
    ],
    tr: [
      { id: 'shm1', name: 'Şeki Halk Sanatları ve El Sanatları Müzesi', description: 'Tarihi dairesel taş tapınak kalesi içinde bulunan, Şeki ağaç oyma sanatlarını, şebeke yapımını ve yerel ipek ürünleri tanıtan müze.', hours: '09:00 - 18:00', fee: '4 AZN' }
    ],
    ar: [
      { id: 'shm1', name: 'متحف شكي للفنون والآثار المعمارية', description: 'يقع داخل مبنى تاريخي دائري رائع البنيان، يضم الآلات التقليدية للأشغال اليدوية والأوشحة الحريرية التي تشتهر بها شكي.', hours: '09:00 - 18:00', fee: '4 مانات' }
    ]
  },
  Guba: {
    en: [
      { id: 'gum1', name: 'Guba Genocide Memorial Complex', description: 'A deeply moving modern museum commemorating the events of 1918, with state-of-the-art displays and archaeological mass burial sites preserved under a modern concrete dome.', hours: '10:00 - 17:00 (Closed Mondays)', fee: 'Free Admission' }
    ],
    ru: [
      { id: 'gum1', name: 'Губинский Мемориальный Комплекс Геноцида', description: 'Впечатляющий современный музейно-мемориальный комплекс под бетонным куполом у реки Гудиалчай, посвященный трагическим событиям 1918 года.', hours: '10:00 - 17:00 (Пн закрыто)', fee: 'Бесплатно' }
    ],
    tr: [
      { id: 'gum1', name: 'Guba Soykırım Anıt Kompleks Müzesi', description: '1918 olaylarını anlatan, beton kubbeli çağdaş mimariye sahip, toplu mezar alanlarının yanında kurulan dokunaklı askeri ve sivil hafıza müzesi.', hours: '10:00 - 17:00 (Pazartesi kapalı)', fee: 'Ücretsiz' }
    ],
    ar: [
      { id: 'gum1', name: 'مجمع غوبا التذكاري (Guba Genocide Complex)', description: 'صرح تذكاري ومتحف حديث ومؤلم مشيد بتصميم خرساني معاصر ومفتوح للتأمل، يبرز الحوادث التاريخية لعام 1918.', hours: '10:00 - 17:00 (مغلق الاثنين)', fee: 'مجانّي' }
    ]
  },
  Lankaran: {
    en: [
      { id: 'lam1', name: 'Lankaran Local Lore History Museum', description: 'Located inside the majestic 1913 brick palace of Mirakhmad Khan, showing archeological findings from Bronze ages and traditional Persian-Talysh culture items.', hours: '09:30 - 17:30', fee: '3 AZN' }
    ],
    ru: [
      { id: 'lam1', name: 'Лянкяранский краеведческий музей', description: 'Исторический музей, расположенный в шикарном здании дома-дворца хана Мирахмед хана. Содержит экспонаты Талышской археологии и культуры.', hours: '09:30 - 17:30', fee: '3 AZN' }
    ],
    tr: [
      { id: 'lam1', name: 'Lenkeran Tarihi ve Kültür Müzesi', description: 'Mirahmet Han\'ın 1913 yılı yapımı kırmızı tuğlalı süslü malikanesinde kurulu, Tunç Çağı buluntularını ve Talış kültür eşyalarını gösteren müze.', hours: '09:30 - 17:30', fee: '3 AZN' }
    ],
    ar: [
      { id: 'lam1', name: 'متحف لنكران للتاريخ الوطني والأنثروبولوجيا', description: 'يقع داخل قصر مير أحمد خان المبني من الطوب الأحمر الجميل عام 1913، يعرض ثقافة قومية وطبيعية لشعوب جبال تاليش والساحل الجنوبي.', hours: '09:30 - 17:30', fee: '3 مانات' }
    ]
  }
};

export const ACCOMMODATIONS_BY_CITY: Record<City, Record<Language, Accommodation[]>> = {
  Baku: {
    en: [
      { id: 'bah1', name: 'Fairmont Baku, Flame Towers', description: 'Splendid luxury rooms offering superb floor-to-ceiling views of the glittering Baku Bay and Caspian Sea.', tier: 'luxury', price: '280-500 AZN', rating: '4.9', address: 'Mehdi Huseyn Street 1A' },
      { id: 'bah2', name: 'Shah Palace Luxury Museum Hotel', description: 'Stunning boutique hotel situated right in Icherisheher, featuring classic local stone architecture and carpets.', tier: 'mid-range', price: '120-180 AZN', rating: '4.7', address: 'Boyuk Gala Street 47' },
      { id: 'bah3', name: 'Sahil Hostel & Hotel', description: 'Clean, highly social, and budget-friendly rooms located just minutes away from pedestrian Nizami Street.', tier: 'budget', price: '25-45 AZN', rating: '4.5', address: 'Zarifa Aliyeva Street 55' }
    ],
    ru: [
      { id: 'bah1', name: 'Fairmont Baku, Flame Towers', description: 'Роскошные номера в Пламенных Башнях с шикарным панорамным видом на Бакинскую бухту и Каспий.', tier: 'luxury', price: '280-500 AZN', rating: '4.9', address: 'ул. Мехти Гусейна 1А' },
      { id: 'bah2', name: 'Shah Palace Luxury Museum Hotel', description: 'Потрясающий бутик-отель прямо в Ичери-Шехер, оформленный в классическом стиле с каменными арками.', tier: 'mid-range', price: '120-180 AZN', rating: '4.7', address: 'ул. Беюк Гала 47' },
      { id: 'bah3', name: 'Sahil Hostel & Hotel', description: 'Чистый, общительный и очень бюджетный хостел всего в паре минут от пешеходной улицы Низами.', tier: 'budget', price: '25-45 AZN', rating: '4.5', address: 'ул. Зарифы Алиевой 55' }
    ],
    tr: [
      { id: 'bah1', name: 'Fairmont Baku, Flame Towers', description: 'Alev Kuleleri içinde, Bakü Körfezi ve Hazar Denizi nin nefis manzarasını sunan lüks ve prestijli odalar.', tier: 'luxury', price: '280-500 AZN', rating: '4.9', address: 'Mehdi Hüseyn Caddesi 1A' },
      { id: 'bah2', name: 'Shah Palace Luxury Museum Hotel', description: 'İçerişehir göbeğinde, klasik taş işçiliği ve antika halılarla süslü muhteşem butik otel deneyimi.', tier: 'mid-range', price: '120-180 AZN', rating: '4.7', address: 'Büyük Kale Caddesi 47' },
      { id: 'bah3', name: 'Sahil Hostel & Hotel', description: 'Nizami yürüyüş caddesine ve Bulvar a sadece birkaç dakika mesafede yer alan temiz ve sosyal ekonomik otel.', tier: 'budget', price: '25-45 AZN', rating: '4.5', address: 'Zerife Aliyeva Caddesi 55' }
    ],
    ar: [
      { id: 'bah1', name: 'فندق فيرمونت باكو، أبراج اللهب', description: 'غرف فاخرة تقع في أبراج اللهب الشهيرة مع إطلالة بانورامية ساحرة على خليج باكو الجميل.', tier: 'luxury', price: '280-500 AZN', rating: '4.9', address: 'شارع مهدي حسين 1A' },
      { id: 'bah2', name: 'فندق متحف قصر الشاه الفاخر', description: 'فندق بوتيك ساحر بنمط ريفي عريق في قلب البلدة القديمة، يجسد الفخامة والأصالة الأذربيجانية.', tier: 'mid-range', price: '120-180 AZN', rating: '4.7', address: 'شارع بويوك غالا 47' },
      { id: 'bah3', name: 'فندق ونزل ساحل (Sahil Hostel)', description: 'نزل هادئ ونظيف واقتصادي للغاية على بعد خطوات من شارع نظامي للمشاة والبوليفارد الساحلي.', tier: 'budget', price: '25-45 AZN', rating: '4.5', address: 'شارع ظريفة علييفا 55' }
    ]
  },
  Gabala: {
    en: [
      { id: 'gah1', name: 'Qafqaz Tufandag Mountain Resort Hotel', description: 'A luxury 5-star ski-in, ski-out resort located directly on Tufandag slopes with state-of-the-art lifts.', tier: 'luxury', price: '220-350 AZN', rating: '4.8', address: 'Tufandag Mountain, Gabala' },
      { id: 'gah2', name: 'Nohur Hotel Gabala', description: 'Comfortable mid-range rooms near the wunderschön lake, with balconies overlooking green forest hills.', tier: 'mid-range', price: '80-130 AZN', rating: '4.6', address: 'Nohur Lake side' },
      { id: 'gah3', name: 'Gabala Garden Cottages', description: 'Affordable family cabins and private cottages featuring traditional firewood ovens, surrounded by apple trees.', tier: 'budget', price: '40-70 AZN', rating: '4.4', address: 'Vandam Village, Gabala' }
    ],
    ru: [
      { id: 'gah1', name: 'Qafqaz Tufandag Mountain Resort', description: 'Пятизвездочный роскошный горный курорт у подножия канатных дорог Туфандага с выходом на трассы.', tier: 'luxury', price: '220-350 AZN', rating: '4.8', address: 'Гора Туфандаг, Габала' },
      { id: 'gah2', name: 'Nohur Hotel Gabala', description: 'Комфортабельный семейный отель у живописного лесного озера Нохур с балконами на горы.', tier: 'mid-range', price: '80-130 AZN', rating: '4.6', address: 'Берег озера Нохур' },
      { id: 'gah3', name: 'Cottages Gabala Garden', description: 'Бюджетные уютные коттеджи в поселке Вандам, окруженные яблоневыми садами.', tier: 'budget', price: '40-70 AZN', rating: '4.4', address: 'пос. Вандам, Габала' }
    ],
    tr: [
      { id: 'gah1', name: 'Qafqaz Tufandag Mountain Resort', description: 'Tufandağ eteklerinde, kayak pistlerine doğrudan erişim sunan 5 yıldızlı ultra lüks dağ oteli.', tier: 'luxury', price: '220-350 AZN', rating: '4.8', address: 'Tufandağ mevkii, Kabala' },
      { id: 'gah2', name: 'Nohur Hotel Gabala', description: 'Nohur Gölü yakınında yer alan, balkonlu ve doğa manzaralı oldukça konforlu orta segment otel.', tier: 'mid-range', price: '80-130 AZN', rating: '4.6', address: 'Nohur Gölü kenarı' },
      { id: 'gah3', name: 'Gabala Garden Cottages', description: 'Bahçe içinde yer alan, bütçe dostu, meyve ağaçları ile kaplı geleneksel kiralık dağ kulübeleri.', tier: 'budget', price: '40-70 AZN', rating: '4.4', address: 'Vandam Köyü, Kabala' }
    ],
    ar: [
      { id: 'gah1', name: 'فندق منتجع قفقاز توفانداغ الجبلي', description: 'منتجع 5 نجوم فاخر جداً يتيح التزلج المباشر المطل على قمم قفقاز الخضراء البيضاء الساحرة.', tier: 'luxury', price: '220-350 AZN', rating: '4.8', address: 'جبل توفانداغ، غابالا' },
      { id: 'gah2', name: 'فندق بحيرة نوخور غابالا', description: 'فندق متوسط الفئة ومريح يتميز بتقديم غرف جميلة وإإلى جانب مناظر طبيعية رائعة.', tier: 'mid-range', price: '80-130 AZN', rating: '4.6', address: 'بجانب بحيرة نوخور، غابالا' },
      { id: 'gah3', name: 'أكواخ حدائق غابالا العائلية', description: 'أكواخ عائلية ريفية بأسعار اقتصادية دافئة محاطة ببساتين التفاح والهدوء الطبيعي.', tier: 'budget', price: '40-70 AZN', rating: '4.4', address: 'قرية فاندام، غابالا' }
    ]
  },
  Ismayilli: {
    en: [
      { id: 'ish1', name: 'Chateau Monolit Guesthouse', description: 'Premium vineyard retreat and boutique guesthouse offering local wine-tastings and swimming pool.', tier: 'luxury', price: '150-240 AZN', rating: '4.7', address: 'Hajihatamli, Ismayilli' },
      { id: 'ish2', name: 'Lahij Stone Cottages', description: 'Traditional stone-built guest home inside Lahij copper village, run by local artisans.', tier: 'mid-range', price: '60-100 AZN', rating: '4.6', address: 'Lahij Village Main Road' },
      { id: 'ish3', name: 'Diyallı Country House', description: 'Eco-hostel and homestay with spectacular orchard gardens and delicious country breakfast.', tier: 'budget', price: '30-50 AZN', rating: '4.3', address: 'Diyalli Village, Ismayilli' }
    ],
    ru: [
      { id: 'ish1', name: 'Шато Монолит Гостевой Дом', description: 'Премиальный винный бутик-отель с дегустациями местного вина и бассейном среди кавказских гор.', tier: 'luxury', price: '150-240 AZN', rating: '4.7', address: 'село Гаджигатамли, Исмаиллы' },
      { id: 'ish2', name: 'Lahij Stone Cottages', description: 'Аутентичные каменные домики прямо в ремесленном селе Лагич, управляемые местной семейной парой.', tier: 'mid-range', price: '60-100 AZN', rating: '4.6', address: 'пос. Лагич, Исмаиллы' },
      { id: 'ish3', name: 'Diyallı Country House', description: 'Бюджетный эко-отель с домашним кавказским завтраком из свежих сливок и хлеба тяндир.', tier: 'budget', price: '30-50 AZN', rating: '4.3', address: 'село Дияллы, Исмаиллы' }
    ],
    tr: [
      { id: 'ish1', name: 'Chateau Monolit Guesthouse', description: 'Bağ bozumu turları, yerel şarap tadımları ve açık havuz sunan harika lüks dağ malikanesi.', tier: 'luxury', price: '150-240 AZN', rating: '4.7', address: 'Hacıhatemli, İsmayıllı' },
      { id: 'ish2', name: 'Lahıç Taş Evleri', description: 'Tarihi Lahıç köyü içinde, geleneksel taş mimariye sahip neşeli butik aile işletmesi.', tier: 'mid-range', price: '60-100 AZN', rating: '4.6', address: 'Lahıç Köyü Ana Yol' },
      { id: 'ish3', name: 'Diyallı Country House', description: 'Doğayla baş başa kalmak isteyenler için uygun fiyatlı kır evi ve leziz köy kahvaltısı sunan pansiyon.', tier: 'budget', price: '30-50 AZN', rating: '4.3', address: 'Diyallı Köyü, İsmayıllı' }
    ],
    ar: [
      { id: 'ish1', name: 'بيت ضيافة شاتو مونوليت الفاخر', description: 'قصر ريفي فاخر يقع وسط التلال الخضراء مع مسبح ومزارع محلية وتقديم عشاء فاخر.', tier: 'luxury', price: '150-240 AZN', rating: '4.7', address: 'قرية كاجيخاتملي، إسماعيلي' },
      { id: 'ish2', name: 'أكواخ لإيج الحجرية التقليدية', description: 'بيوت ضيافة مبنية من أحجار الأنهار التاريخية في قرية لإيج العريقة للحياكة والنحاس.', tier: 'mid-range', price: '60-100 AZN', rating: '4.6', address: 'الشارع الرئيسي، قرية لإيج' },
      { id: 'ish3', name: 'بيت ديالي الريفي الأصيل', description: 'نزل ريفي هادئ مع بساتين فواكه وتقديم فطور قروي تقليدي صحي للغاية وبسعر مخفض.', tier: 'budget', price: '30-50 AZN', rating: '4.3', address: 'قرية ديالي، إسماعيلي' }
    ]
  },
  Sheki: {
    en: [
      { id: 'shh1', name: 'Sheki Karvansaray Hotel', description: 'Historically iconic 18th-century Silk Road caravanserai beautifully updated to host guests under ancient stone arches.', tier: 'luxury', price: '100-200 AZN', rating: '4.8', address: 'Mirza Fatali Akhundov Street 185' },
      { id: 'shh2', name: 'Macara Sheki City Hotel', description: 'Comfortable mid-range rooms near the historic city center, with highly rated Caucasian hospitality.', tier: 'mid-range', price: '70-110 AZN', rating: '4.6', address: 'M.E. Rasulzade Street 157' },
      { id: 'shh3', name: 'Sheki Panorama Guest House', description: 'Unbeatable price for highly clean panoramic budget rooms overlooks Sheki green valleys.', tier: 'budget', price: '30-55 AZN', rating: '4.5', address: 'Ganja Street, Sheki' }
    ],
    ru: [
      { id: 'shh1', name: 'Шеки Карвансарай Отель', description: 'Исторический отель-караван-сарай XVIII века на Шелковом пути. Вы спите под настоящими каменными сводами древности.', tier: 'luxury', price: '100-200 AZN', rating: '4.8', address: 'ул. Мирзы Фатали Ахундова 185' },
      { id: 'shh2', name: 'Macara Sheki City Hotel', description: 'Комфортабельный современный отель с отличным сервисом в центре города Шеки.', tier: 'mid-range', price: '70-110 AZN', rating: '4.6', address: 'ул. М.Э. Расулзаде 157' },
      { id: 'shh3', name: 'Панорама Шеки Гостевой Дом', description: 'Чистые бюджетные комнаты с завораживающим видом на кавказские холмы и крыши Шеки.', tier: 'budget', price: '30-55 AZN', rating: '4.5', address: 'ул. Гянджинская, Шеки' }
    ],
    tr: [
      { id: 'shh1', name: 'Şeki Kervansaray Otel', description: '18. yüzyıldan kalma tarihi İpek Yolu kervansarayı. Devasa taş kemerler altında otantik lüks konaklama.', tier: 'luxury', price: '100-200 AZN', rating: '4.8', address: 'Mirze Feteli Ahundov Caddesi 185' },
      { id: 'shh2', name: 'Macara Sheki City Hotel', description: 'Şehir merkezinde, temiz, konsept odaları ve güler yüzlü personeliyle dikkat çeken orta sınıf otel.', tier: 'mid-range', price: '70-110 AZN', rating: '4.6', address: 'M.E. Resulzade Caddesi 157' },
      { id: 'shh3', name: 'Sheki Panorama Guest House', description: 'Şeki vadilerine tepeden bakan, bütçe dostu, tertemiz ve cana yakın aile pansiyonu.', tier: 'budget', price: '30-55 AZN', rating: '4.5', address: 'Gence Caddesi, Şeki' }
    ],
    ar: [
      { id: 'shh1', name: 'فندق خان كرفان سراي شكي', description: 'نزل تاريخي أيقوني من القرن الثامن عشر كان محطة لقوافل طريق الحرير، غرف مبنية من أحجار القلاع العتيقة.', tier: 'luxury', price: '100-200 AZN', rating: '4.8', address: 'شارع ميرزا فالي أخوندوف 185' },
      { id: 'shh2', name: 'فندق ماكارا شكي سيتي', description: 'غرف مريحة ومتوسطة الأسعار وراقية قريبة من قصر الخان والمحلات التقليدية للحلوى.', tier: 'mid-range', price: '70-110 AZN', rating: '4.6', address: 'شارع محمد أمين رسول زاده 157' },
      { id: 'shh3', name: 'بيت ضيافة بانوراما شكي الاقتصادي', description: 'إإطلالة بانورامية رائعة على أسقف شكي الحمراء وتلال القوقاز بأسعار متدنية ونظافة عالية.', tier: 'budget', price: '30-55 AZN', rating: '4.5', address: 'شارع كنجة، شكي' }
    ]
  },
  Guba: {
    en: [
      { id: 'guh1', name: 'Quba Palace Hotel', description: 'Elite ultra-luxury resort with a 5-star golf course, lakes, cable cars, and private mountain view villas.', tier: 'luxury', price: '250-400 AZN', rating: '4.9', address: 'Eski-Ikryagh Village, Guba' },
      { id: 'guh2', name: 'Shahdag Guba Hotel & Spa', description: 'Modern wellness resort tucked next to the Kudyalchay river, with pools and spa treatments.', tier: 'mid-range', price: '90-140 AZN', rating: '4.7', address: 'A. Aliyev Street, Guba' },
      { id: 'guh3', name: 'Red Village Guesthouse', description: 'Charming mountain retreat near the historic all-Jewish Mountain community of Red Village.', tier: 'budget', price: '35-65 AZN', rating: '4.5', address: 'Red Village (Krasnaya Sloboda), Guba' }
    ],
    ru: [
      { id: 'guh1', name: 'Quba Palace Hotel', description: 'Элитный пятизвездочный курорт с полем для гольфа, канатными дорогами, озером и роскошными спа-виллами.', tier: 'luxury', price: '250-400 AZN', rating: '4.9', address: 'село Эски-Икриаг, Губа' },
      { id: 'guh2', name: 'Shahdag Guba Hotel & Spa', description: 'Современный спа-курорт у горной реки Кудиалчай с большими бассейнами и процедурами массажа.', tier: 'mid-range', price: '90-140 AZN', rating: '4.7', address: 'ул. А. Алиева, Губа' },
      { id: 'guh3', name: 'Красная Слобода Гостевой Дом', description: 'Уютный бюджетный дом у исторического поселения горских евреев Красная Слобода.', tier: 'budget', price: '35-65 AZN', rating: '4.5', address: 'Красная Слобода, Губа' }
    ],
    tr: [
      { id: 'guh1', name: 'Quba Palace Otel', description: 'Golf sahası, dağ gölleri, teleferik hatları ve özel villaları ile Azerbaycan ın en prestijli 5 yıldızlı dağ oteli.', tier: 'luxury', price: '250-400 AZN', rating: '4.9', address: 'Eski Ikryagh Köyü, Guba' },
      { id: 'guh2', name: 'Shahdag Guba Hotel & Spa', description: 'Kudyalçay nehri kıyısında kurulmuş, tam donanımlı kapalı yüzme havuzu ve spa sunan harika wellness oteli.', tier: 'mid-range', price: '90-140 AZN', rating: '4.7', address: 'A. Aliyev Caddesi, Guba' },
      { id: 'guh3', name: 'Red Village Guest House', description: 'Tarihi tamamı Yahudi olan yerleşim birimi Kırmızı Kasaba yakınlarında, bütçe dostu dağ pansiyonu.', tier: 'budget', price: '35-65 AZN', rating: '4.5', address: 'Kırmızı Kasaba, Guba' }
    ],
    ar: [
      { id: 'guh1', name: 'فندق قصر غوبا الفاخر (Quba Palace)', description: 'منتجع غولف راقٍ من فئة 5 نجوم يقع وسط الجبال وبجانبه بحيرات وتلفريك ومطاعم فخمة.', tier: 'luxury', price: '250-400 AZN', rating: '4.9', address: 'قرية إسكي إكرياك، غوبا' },
      { id: 'guh2', name: 'فندق وسبا شاهداغ غوبا', description: 'سبا ومنتجع حديث على ضفة نهر كوديالشاي يقدم برك سباحة دافئة وجلسات استرخاء رائعة.', tier: 'mid-range', price: '90-140 AZN', rating: '4.7', address: 'شارع أ. علييف، غوبا' },
      { id: 'guh3', name: 'بيت ضيافة القرية الحمراء اليهودية', description: 'بيت ضيافة بسعر اقتصادي بجانب القرية الحمراء (Krasnaya Sloboda) العريقة لليهود الجبليين.', tier: 'budget', price: '35-65 AZN', rating: '4.5', address: 'القرية الحمراء، غوبا' }
    ]
  },
  Lankaran: {
    en: [
      { id: 'lah1', name: 'Lankaran Springs Wellness Resort', description: 'Luxury 5-star health sanatorium with natural thermal water hot springs and premium therapy gardens.', tier: 'luxury', price: '180-280 AZN', rating: '4.8', address: 'Haftoni, Lankaran' },
      { id: 'lah2', name: 'Palisand Hotel Lankaran', description: 'Extremely cozy and beautiful mid-range boutique hotel decorated inside with walnut wood details.', tier: 'mid-range', price: '70-120 AZN', rating: '4.6', address: 'M.E. Rasulzade Street, Lankaran' },
      { id: 'lah3', name: 'South Caspian Guesthouse', description: 'Charming seaside simple budget-friendly rooms located on the sands of the Black Sand Caspian beach.', tier: 'budget', price: '25-50 AZN', rating: '4.4', address: 'Goyshaban beach road, Lankaran' }
    ],
    ru: [
      { id: 'lah1', name: 'Lankaran Springs Wellness Resort', description: 'Премиальный санаторий с лечебными термальными источниками (истису) в окружении реликтового леса.', tier: 'luxury', price: '180-280 AZN', rating: '4.8', address: 'пос. Гафтони, Лянкяран' },
      { id: 'lah2', name: 'Palisand Hotel Лянкяран', description: 'Уютный современный бутик-отель, отделанный деревом грецкого ореха, с прекрасным садом.', tier: 'mid-range', price: '70-120 AZN', rating: '4.6', address: 'ул. М.Э. Расулзаде, Лянкяран' },
      { id: 'lah3', name: 'Южно-Каспийский Гостевой Дом', description: 'Бюджетные уютные комнаты прямо на берегу Каспийского моря с черным лечебным песком.', tier: 'budget', price: '25-50 AZN', rating: '4.4', address: 'берег Гойшабан, Лянкяран' }
    ],
    tr: [
      { id: 'lah1', name: 'Lankaran Springs Wellness Resort', description: 'Şifalı İstisu termal su kaynaklarına ve lüks terapi bahçelerine sahip 5 yıldızlı termal sağlık tesisi.', tier: 'luxury', price: '180-280 AZN', rating: '4.8', address: 'Haftoni Köyü, Lenkeran' },
      { id: 'lah2', name: 'Palisand Hotel Lankaran', description: 'Ahşap dekorasyonu, şöminesi ve iç avlusu ile çok sevilen oldukça şık bir butik otel pansiyon.', tier: 'mid-range', price: '70-120 AZN', rating: '4.6', address: 'M.E. Resulzade Caddesi, Lenkeran' },
      { id: 'lah3', name: 'South Caspian Guest House', description: 'Hazar ın ünlü şifalı siyah kum kumsalının hemen kenarında yer alan mütevazı bütçe dostu odalar.', tier: 'budget', price: '25-50 AZN', rating: '4.4', address: 'Göyşaban sahil yolu, Lenkeran' }
    ],
    ar: [
      { id: 'lah1', name: 'منتجع ينابيع لنكران الاستشفائي (Lankaran Springs)', description: 'منتجع صحي 5 نجوم فاخر مشهور ينابيع المياه الكبريتية الطبيعية الحارة (إستيسو).', tier: 'luxury', price: '180-280 AZN', rating: '4.8', address: 'قرية هفتوني، لنكران' },
      { id: 'lah2', name: 'فندق باليساند لنكران البوتيكي', description: 'فندق بوتيكي مريح متوسط السعر بأثاث وتفاصيل خشبية أنيقة تعكس طابع جبال تاليش الخضراء.', tier: 'mid-range', price: '70-120 AZN', rating: '4.6', address: 'شارع محمد أمين رسول زاده، لنكران' },
      { id: 'lah3', name: 'بيت ضيافة بحر قزوين الجنوبي', description: 'غرف اقتصادية بسيطة مطلة مباشرة على رمال شواطئ لنكران البركانية السوداء المميزة للكاسبيان.', tier: 'budget', price: '25-50 AZN', rating: '4.4', address: 'طريق شاطئ غويشابان، لنكران' }
    ]
  }
};

export const SHOPPING_BY_CITY: Record<City, Record<Language, ShoppingSpot[]>> = {
  Baku: {
    en: [
      { id: 'bas1', name: 'Deniz Mall Marina', description: 'A futuristic 5-story shopping center on Baku Boulevard styled like a Caspian lotus flower with top brands.', type: 'mall', rating: '4.8', address: 'Baku Boulevard, Mikayil Useynov 26/1' },
      { id: 'bas2', name: 'Yashil Bazar (Green Bazaar)', description: 'The absolute classic organic open bazaar where you buy fresh bio pomegranates, dried figs, and saffron tea directly from regional farmers.', type: 'bazaar', rating: '4.7', address: 'Khatai Avenue 7' },
      { id: 'bas3', name: 'Icherisheher Souvenir Street', description: 'Charming medieval cobbled alleys packed with local ceramics, armudy glasses, and antique items.', type: 'souvenirs', rating: '4.6', address: 'Kichik Qala Street, Old City' }
    ],
    ru: [
      { id: 'bas1', name: 'Deniz Mall', description: 'Футуристический 5-этажный торговый центр в форме цветка лотоса на берегу Каспия.', type: 'mall', rating: '4.8', address: 'Приморский Бульвар, Микаила Усейнова 26/1' },
      { id: 'bas2', name: 'Яшил Базар (Зеленый рынок)', description: 'Аутентичный восточный базар с горами гранатов, грецких орехов, хурмы, черной икры и шафрана.', type: 'bazaar', rating: '4.7', address: 'проспект Хатаи 7' },
      { id: 'bas3', name: 'Лавки сувениров Ичери-Шехер', description: 'Исторические мощеные улочки Старого города, где продают ковры, медную посуду и армуды.', type: 'souvenirs', rating: '4.6', address: 'ул. Кичик Гала, Старый город' }
    ],
    tr: [
      { id: 'bas1', name: 'Deniz Mall Marina', description: 'Bakü Bulvarı üzerinde, Hazar lotusu şeklinde tasarlanmış 5 katlı lüks alışveriş ve yaşam merkezi.', type: 'mall', rating: '4.8', address: 'Bakü Bulvarı, Mikayıl Müşfik 26/1' },
      { id: 'bas2', name: 'Yaşıl Bazar (Yeşil Pazar)', description: 'Bakü nün en meşhur taze organik pazarı. Azerbaycan narlarını, baharatlarını ve havyarı buradan alabilirsiniz.', type: 'bazaar', rating: '4.7', address: 'Hatai Caddesi 7' },
      { id: 'bas3', name: 'İçerisehir Hediyelik Eşya Sokağı', description: 'Tarihi Arnavut kaldırımlı sokaklarda armut bardaklar, el yapımı kilimler satan nostaljik dükkanlar.', type: 'souvenirs', rating: '4.6', address: 'Küçük Kale Caddesi, Eski Şehir' }
    ],
    ar: [
      { id: 'bas1', name: 'دنيز مول مارينا (Deniz Mall)', description: 'مركز تجاري عملاق من 5 طوابق مشيد في البوليفارد على شكل زهرة اللوتس، يضم كبرى الماركات وألعاب ترفيهية.', type: 'mall', rating: '4.8', address: 'بوليفارد باكو، شارع ميخائيل أوسينوف 26/1' },
      { id: 'bas2', name: 'سوق ياشيل بازار (Yashil Bazar)', description: 'أأشهر سوق خضار وفواكه وتوابل عضوي في باكو، لشراء الرمان الطازج والزعفران وشاي المربيات مجاناً.', type: 'bazaar', rating: '4.7', address: 'شارع خطائي 7' },
      { id: 'bas3', name: 'متاجر هدايا إيشيري شيهير التراثية', description: 'أزقة مرصوفة بالحصى في البلدة القديمة تضم سجاداً يدوياً عتيقاً وصحوناً مطلية يدوياً ونحاساً.', type: 'souvenirs', rating: '4.6', address: 'شارع كيتشيك غالا، البلدة القديمة' }
    ]
  },
  Gabala: {
    en: [
      { id: 'gas1', name: 'Gabala City Mall', description: 'Compact regional shopping hub featuring local food courts, cinema, and outdoor active playground.', type: 'mall', rating: '4.3', address: 'H. Aliyev Road, Gabala' },
      { id: 'gas2', name: 'Gabala Village Honey Bazaar', description: 'Stalls alongside mountain roads where regional and alpine farmers sell ultra pure honey, hazelnuts, and chestnut preserves.', type: 'bazaar', rating: '4.8', address: 'Vandam Village Highway' },
      { id: 'gas3', name: 'Vandam Clay Craft Shops', description: 'Cozy roadside artisanal spots with handmade Caucasian clay jugs for food storage and cooking.', type: 'souvenirs', rating: '4.5', address: 'E60 Vandam Road' }
    ],
    ru: [
      { id: 'gas1', name: 'Габала Сити Молл', description: 'Компактный торговый центр с местной едой, детскими игровыми площадками и супермаркетом.', type: 'mall', rating: '4.3', address: 'ул. Г. Алиева, Габала' },
      { id: 'gas2', name: 'Медовый Базар в пос. Вандам', description: 'Придорожные ряды у горного ущелья, где местные пасечники продают чистейший лесной мед и фундук.', type: 'bazaar', rating: '4.8', address: 'Трасса в селе Вандам, Габала' },
      { id: 'gas3', name: 'Сувенирные лавки Вандамской глины', description: 'Семейные мастерские сувениров, предлагающие глиняные горшочки для пити и армуды ручной работы.', type: 'souvenirs', rating: '4.5', address: 'Вандамская трасса' }
    ],
    tr: [
      { id: 'gas1', name: 'Gabala City Mall', description: 'Yerel yemek alanları, çocuk oyun parkları ve temel giyim markalarını içeren tatlı buitk Alışveriş Merkezi.', type: 'mall', rating: '4.3', address: 'H. Aliyev Caddesi, Kabala' },
      { id: 'gas2', name: 'Vandam Köyü Bal Pazarı', description: 'Kafkas dağlarından toplanan taze süzme bal, fındık ve kestane reçellerinin satıldığı halk tezgahları.', type: 'bazaar', rating: '4.8', address: 'Vandam Köyü Otobanı' },
      { id: 'gas3', name: 'Vandam Toprak Çömlek Atölyeleri', description: 'Yol kenarında yer alan, sac ve piti yemeği pişirmek için geleneksel kil kaplar üreten ustalar.', type: 'souvenirs', rating: '4.5', address: 'E60 Vandam Esnaf Yolu' }
    ],
    ar: [
      { id: 'gas1', name: 'غابالا سيتي مول', description: 'مركز تسوق إقليمي بسيط وهادئ يحتوي سينما صغيرة وصالة طعام عائلية للأطفال.', type: 'mall', rating: '4.3', address: 'شارع حيدر علييف، غابالا' },
      { id: 'gas2', name: 'سوق عسل وجوز قرية فاندام', description: 'بسطات قروية على طول الطريق الجبلي لبيع العسل الجبلي الكثيف الخالص واللوز والتين المجفف.', type: 'bazaar', rating: '4.8', address: 'طريق قرية فاندام السريع' },
      { id: 'gas3', name: 'متاجر صناعة الفخار الطيني في فاندام', description: 'متاجر عائلية لبيع الأواني الفخارية المستخدمة في الطهي وحفظ الحليب والجبن الجبلي.', type: 'souvenirs', rating: '4.5', address: 'طريق فاندام، غابالا' }
    ]
  },
  Ismayilli: {
    en: [
      { id: 'iss1', name: 'Ismayilli Central Market', description: 'Truly rustic and natural local market to experience regional dairy (like authentic Motal cheese) and fresh forest herbs.', type: 'bazaar', rating: '4.5', address: 'M.F. Akhundov Street, Ismayilli' },
      { id: 'iss2', name: 'Lahij Copper Artisans Street', description: 'Historic cobblestoned esplanade of Lahij where blacksmith copper workshops have hammered copper pots for 1000 years.', type: 'souvenirs', rating: '4.9', address: 'Lahij Ancient Street' }
    ],
    ru: [
      { id: 'iss1', name: 'Центральный Рынок Исмаиллы', description: 'Абсолютно фермерский сельский рынок, известный своим горным сыром Мотал и свежей горной зеленью.', type: 'bazaar', rating: '4.5', address: 'ул. М.Ф. Ахундова, Исмаиллы' },
      { id: 'iss2', name: 'Улица ремесленников в Лагиче', description: 'Пешеходная каменная мостовая Лагича, где звенят молотки медных дел мастеров в древних мастерских.', type: 'souvenirs', rating: '4.9', address: 'Древняя улица, Лагич' }
    ],
    tr: [
      { id: 'iss1', name: 'İsmayıllı İlçe Pazarı', description: 'Yöresel mandıra ürünlerinin (özellikle meşhur keçi Motal peyniri) satıldığı çok esnaf pazar alanı.', type: 'bazaar', rating: '4.5', address: 'M.F. Ahundov Caddesi, İsmayıllı' },
      { id: 'iss2', name: 'Lahıç Bakırcılar Çarşısı', description: 'Bin yıldır dededen toruna el çekiciyle bakır leğen ve ibrik işleyen esnaflarla dolu tarihi taş sokak.', type: 'souvenirs', rating: '4.9', address: 'Lahıç Esnaf Sokağı' }
    ],
    ar: [
      { id: 'iss1', name: 'سوق إسماعيلي الإقليمي', description: 'سوق ريفي شعبي يشتهر ببيع الأجبان الجبلية النادرة (مثل جبن موتال) والألبان الطازجة والخضروات.', type: 'bazaar', rating: '4.5', address: 'شارع ميرزا أخوندوف، إسماعيلي' },
      { id: 'iss2', name: 'شارع صناع النحاس في لإيج التاريخية', description: 'ممر مرصوف بالحجارة تصدح منه طرقات المطارق على النحاس وتصنيع أباريق ومجسمات فنية رائعة.', type: 'souvenirs', rating: '4.9', address: 'الشارع العتيق، قرية لإيج' }
    ]
  },
  Sheki: {
    en: [
      { id: 'shs1', name: 'Aliakhmed Sweet House', description: 'The legendary bakery where authentic Sheki Halva made with rice flour and saffron is baked daily and packed with boxes.', type: 'souvenirs', rating: '4.9', address: 'M.E. Rasulzade Street 162' },
      { id: 'shs2', name: 'Sheki Eastern Bazaar', description: 'A lively, historical local market perfect for purchasing Sheki pure silk scarfs (Kelaghayi) and local fruits.', type: 'bazaar', rating: '4.7', address: 'M.A. Rasulzade, Sheki' }
    ],
    ru: [
      { id: 'shs1', name: 'Дом Сладостей Алиахмеда', description: 'Легендарная кондитерская, где производится самая вкусная аутентичная влажная Шекинская халва.', type: 'souvenirs', rating: '4.9', address: 'ул. М.Э. Расулзаде 162' },
      { id: 'shs2', name: 'Шекинский Восточный Базар', description: 'Яркий исторический рынок, идеальное место для покупки шекинских шелковых платков Кялагаи.', type: 'bazaar', rating: '4.7', address: 'ул. М.А. Расулзаде, Шеки' }
    ],
    tr: [
      { id: 'shs1', name: 'Aliahmed Şekipazarı Halva Evi', description: 'Kaynatılmış safran suyu ve pirinç unundan yapılan meşhur Şeki Helvası nın en ünlü ve lezzetli üreticisi.', type: 'souvenirs', rating: '4.9', address: 'M.E. Resulzade Caddesi 162' },
      { id: 'shs2', name: 'Şeki Doğu Çarşısı', description: 'Şeki nin ipek şallarını (Kelagayı) ve taze dağ meyvelerini bulabileceğiniz neşeli ve tarihi pazar yeri.', type: 'bazaar', rating: '4.7', address: 'M.A. Resulzade Caddesi, Şeki' }
    ],
    ar: [
      { id: 'shs1', name: 'متجر وحلويات علي أحمد للحلويات', description: 'المخبز الأسطوري الأشهر لصناعة حلوى شكي (Sheki Halva) المكونة من طحين الأرز والزعفران والمكسرات.', type: 'souvenirs', rating: '4.9', address: 'شارع رسول زاده 162' },
      { id: 'shs2', name: 'سوق شكي الشرقي التاريخي', description: 'سوق شعبي ممتاز لشراء أوشحة الحرير الشكي الطبيعي الفاخر بنقوش الكيلاغاي (Kelaghayi).', type: 'bazaar', rating: '4.7', address: 'شارع م. رسول زاده، شكي' }
    ]
  },
  Guba: {
    en: [
      { id: 'gus1', name: 'Guba Apple & Fruits Bazaar', description: 'Organic roadside agricultural marketplace famous for over 40 types of delicious crunchy Guba apples.', type: 'bazaar', rating: '4.6', address: 'Guba Entrance Highway' },
      { id: 'gus2', name: 'Guba Carpet Weaving Guild', description: 'A local cooperative where Guba design wool carpets are woven by expert village weavers right in front of you.', type: 'souvenirs', rating: '4.8', address: 'A. Aliyev Street, Guba' }
    ],
    ru: [
      { id: 'gus1', name: 'Яблочный Базар в Губе', description: 'Фермерский рынок на въезде в город, где продают знаменитые хрустящие ароматные губинские яблоки.', type: 'bazaar', rating: '4.6', address: 'Трасса на въезде в Губу' },
      { id: 'gus2', name: 'Кооператив ковроделия Губы', description: 'Центр создания легендарных шерстяных губинских ковров со старинными геометрическими узорами.', type: 'souvenirs', rating: '4.8', address: 'ул. А. Алиева, Губа' }
    ],
    tr: [
      { id: 'gus1', name: 'Guba Elma ve Meyve Çarşısı', description: 'Meşhur ve kütür kütür, 40 tan fazla çeşidi olan organik meşhur Guba elmalarının satıldığı pazar.', type: 'bazaar', rating: '4.6', address: 'Guba Şehir Giriş Yolu' },
      { id: 'gus2', name: 'Guba Halı Dokuma Atölyesi', description: 'Geleneksel geometrik Guba halı desenlerinin canlı olarak dokunduğu ve satıldığı kooperatif atölye.', type: 'souvenirs', rating: '4.8', address: 'A. Aliyev Caddesi, Guba' }
    ],
    ar: [
      { id: 'gus1', name: 'سوق تفاح وفواكه غوبا الشهير', description: 'بسطات وسوق ومخازن لبيع التفاح الغوباوي المقرمش بأكثر من 40 نكهة ونوعاً.', type: 'bazaar', rating: '4.6', address: 'الطريق الرئيسي لمدخل غوبا' },
      { id: 'gus2', name: 'معرض وورش نسج السجاد في غوبا', description: 'جمعية نسوية ومركز بيع سجاد صوف غوبا الهندسي العريق، ونسجه حياً أمام السائحين.', type: 'souvenirs', rating: '4.8', address: 'شارع أ. علييف، غوبا' }
    ]
  },
  Lankaran: {
    en: [
      { id: 'las1', name: 'Lankaran Tea and Citrus Market', description: 'Colorfully lush tropical bazaar aromatic with local dry tea leaves, lemons, mandarins, and Levengi nuts.', type: 'bazaar', rating: '4.7', address: 'H. Aliyev Street, Lankaran' },
      { id: 'las2', name: 'Lankaran Handmade Clay Oven Guild', description: 'Artisans making the famous clay Tandir ovens on roadsides, along with rustic clay cooking pots.', type: 'souvenirs', rating: '4.6', address: 'Garmatuk Village, Lankaran' }
    ],
    ru: [
      { id: 'las1', name: 'Чайный и Цитрусовый Рынок', description: 'Ароматный южный рынок, полный лянкяранского чая, лимонов, мандаринов, фейхоа и орехов.', type: 'bazaar', rating: '4.7', address: 'ул. Г. Алиева, Лянкяран' },
      { id: 'las2', name: 'Мастерские Лянкяранских Тяндиров', description: 'Ремесленные лавки, изготавливающие традиционные глиняные печи Тяндир прямо на обочине дороги.', type: 'souvenirs', rating: '4.6', address: 'село Гарматук, Лянкяран' }
    ],
    tr: [
      { id: 'las1', name: 'Lenkeran Çay ve Narenciye Pazarı', description: 'Taze Lenkeran çayı, kokulu yerel limonlar, mandalinalar ve feijoa ile bezeli mis kokulu güney pazarı.', type: 'bazaar', rating: '4.7', address: 'H. Aliyev Caddesi, Lenkeran' },
      { id: 'las2', name: 'Lenkeran Geleneksel Tandır Atölyesi', description: 'Yemek yapımında kullanılan el yapımı devasa killi çömlek ve ekmek tandırlarının üretildiği esnaf tezgahı.', type: 'souvenirs', rating: '4.6', address: 'Garmatuk Köyü, Lenkeran' }
    ],
    ar: [
      { id: 'las1', name: 'سوق شاي وحمضيات لنكران الشرقي', description: 'أقوى سوق عطري تفوح منه روائح الشاي اللنكراني العريق، والليمون والمندرين والفيجوا الطازجة.', type: 'bazaar', rating: '4.7', address: 'شارع حيدر علييف، لنكران' },
      { id: 'las2', name: 'محلات صناعة التنور الفخاري في لنكران', description: 'متاجر لصناعة أفران التندير الطينية التقليدية التي يطهى فيها خبز التنور ولحم الليفنجي اللذيذ.', type: 'souvenirs', rating: '4.6', address: 'قرية غارماتوك، لنكران' }
    ]
  }
};
