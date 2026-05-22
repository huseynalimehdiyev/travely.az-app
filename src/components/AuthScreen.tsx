import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, Lock, Mail, User, ShieldCheck, Sparkles, AlertCircle, 
  ArrowRight, Eye, EyeOff, Globe, MapPin, Navigation, Compass, Star 
} from 'lucide-react';
import { Language } from '../types';

interface AuthScreenProps {
  onLoginSuccess: (user: { email: string; name: string }) => void;
  lang: Language;
  onLangChange: (lang: Language) => void;
}

interface DestinationSpotlight {
  id: string;
  cityName: Record<Language, string>;
  description: Record<Language, string>;
  rating: string;
  imageUrl: string;
  tagline: Record<Language, string>;
}

const SPOTLIGHTS: DestinationSpotlight[] = [
  {
    id: 'baku',
    cityName: {
      en: 'Baku',
      ru: 'Баку',
      tr: 'Bakü',
      ar: 'باكو'
    },
    tagline: {
      en: 'The Windy Capital',
      ru: 'Столица Ветров',
      tr: 'Rüzgarlar Başkenti',
      ar: 'عاصمة الرياح'
    },
    description: {
      en: 'Where futuristic architecture meets the ancient stonemasonry of UNESCO-listed Icherisheher.',
      ru: 'Где футуристическая архитектура сочетается с древней каменной кладкой Ичери-шехер.',
      tr: 'Fütüristik mimarinin UNESCO korumasındaki antik İçerişehir taş işçiliği ile buluştuğu yer.',
      ar: 'حيث تلتقي الهندسة المعمارية المستقبلية بالهياكل الحجرية القديمة لإتشيري شير المدرجة باليونسكو.'
    },
    rating: '4.9',
    imageUrl: 'https://images.unsplash.com/photo-1549692520-acc6669e2f0c?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'sheki',
    cityName: {
      en: 'Sheki',
      ru: 'Шеки',
      tr: 'Şeki',
      ar: 'شكي'
    },
    tagline: {
      en: 'Historical Silk Road',
      ru: 'Исторический Шелковый Путь',
      tr: 'Tarihi İpek Yolu',
      ar: 'طريق الحرير التاريخي'
    },
    description: {
      en: 'Famous for the Palace of Sheki Khans, stained-glass Shebeke windows, and legendary local pakhlava.',
      ru: 'Знаменит дворцом Шекинских ханов, витражными окнами Шебеке и легендарной пахлавой.',
      tr: 'Şeki Hanları Sarayı, el işi renkli şebeke pencereleri ve efsanevi Şeki baklavası ile meşhur.',
      ar: 'تشتهر بقصر شكي خانات، ونوافذ الشبكة الزجاجية الملونة، وحلوى البقلاوة الأسطورية اليدوية.'
    },
    rating: '4.8',
    imageUrl: 'https://images.unsplash.com/photo-1527004013197-933c4bb611b3?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'gabala',
    cityName: {
      en: 'Gabala',
      ru: 'Габала',
      tr: 'Gebele',
      ar: 'غابالا'
    },
    tagline: {
      en: 'Alpine Magic',
      ru: 'Альпийская Сказка',
      tr: 'Alp Dağlarının Büyüsü',
      ar: 'سحر جبال الألب'
    },
    description: {
      en: 'Experience high-altitude cable cars at Tufandag, Nohur mountain lake views, and rich resort escapes.',
      ru: 'Покатайтесь на канатке в Туфандаге, полюбуйтесь горным озером Нохур и насладитесь спа-отелями.',
      tr: 'Tufandağ yüksek teleferik turları, Nohur dağı gölü manzaraları ve lüks dinlenme tesisleri.',
      ar: 'استمتع بالتلفريك شاهق الارتفاع في توفانداج، وإطلالات بحيرة نوخور الجبلية والمنتجعات الفخمة.'
    },
    rating: '4.9',
    imageUrl: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=1200&q=80'
  }
];

export default function AuthScreen({ onLoginSuccess, lang, onLangChange }: AuthScreenProps) {
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [name, setName] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [success, setSuccess] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [spotlightIndex, setSpotlightIndex] = useState<number>(0);

  // Auto-cycle the travel spotlight every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setSpotlightIndex((prev) => (prev + 1) % SPOTLIGHTS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleAuthSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!email || !password) {
      setError(
        lang === 'ru' ? 'Заполните все обязательные поля!' : 
        lang === 'tr' ? 'Lütfen tüm zorunlu alanları doldurun!' : 
        lang === 'ar' ? 'يرجى ملء جميع الحقول المطلوبة!' : 
        'Please fill all required fields!'
      );
      return;
    }

    if (authMode === 'signup' && !name) {
      setError(
        lang === 'ru' ? 'Введите ваше полное имя!' : 
        lang === 'tr' ? 'Lütfen adınızı girin!' : 
        lang === 'ar' ? 'يرجى إدخال اسمك الكامل!' : 
        'Please enter your full name!'
      );
      return;
    }

    setIsLoading(true);

    // Dynamic processing simulator to give premium fidelity feel
    setTimeout(() => {
      setIsLoading(false);
      const userProfile = { 
        email, 
        name: authMode === 'signup' ? name : email.split('@')[0] 
      };
      
      localStorage.setItem('travely_user', JSON.stringify(userProfile));
      
      setSuccess(
        lang === 'ru' ? 'Авторизация успешна! Добро пожаловать.' : 
        lang === 'tr' ? 'Giriş başarılı! Hoş geldiniz.' : 
        lang === 'ar' ? 'تم منح الإذن بنجاح! جاري التوصيل...' : 
        'Access granted successfully! Redirecting...'
      );
      
      setTimeout(() => {
        onLoginSuccess(userProfile);
      }, 900);
    }, 1100);
  };

  const handleQuickDemoGuestLogin = () => {
    setError('');
    setIsLoading(true);
    
    setTimeout(() => {
      setIsLoading(false);
      const guestProfile = { 
        email: 'guest@travely.az', 
        name: lang === 'ru' 
          ? 'Гость' 
          : lang === 'tr' 
          ? 'Misafir' 
          : lang === 'ar' 
          ? 'مستكشف' 
          : 'Guest Explorer' 
      };
      
      localStorage.setItem('travely_user', JSON.stringify(guestProfile));
      
      setSuccess(
        lang === 'ru' ? 'Вход выполнен как Гость!' : 
        lang === 'tr' ? 'Misafir girişi başarılı!' : 
        lang === 'ar' ? 'تم الدخول بنجاح بنمط الزائر!' : 
        'Signed in successfully as a Guest Explorer!'
      );
      
      setTimeout(() => {
        onLoginSuccess(guestProfile);
      }, 800);
    }, 900);
  };

  const activeSpotlight = SPOTLIGHTS[spotlightIndex];

  return (
    <div className="flex min-h-screen w-screen bg-slate-50 text-slate-800 font-sans leading-normal overflow-x-hidden antialiased">
      
      {/* LEFT SPLIT: Visual Destination Spotlight Panel (Hidden on mobile) */}
      <div className="relative hidden w-1/2 overflow-hidden bg-slate-900 lg:block">
        {/* Animated Slide Background */}
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSpotlight.id}
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.6 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 1.2, ease: 'easeInOut' }}
              className="absolute inset-0 bg-cover bg-center select-none"
              style={{ backgroundImage: `url(${activeSpotlight.imageUrl})` }}
            />
          </AnimatePresence>
          {/* Rich Dark Radial Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-slate-950/50" />
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 flex h-full flex-col justify-between p-12">
          {/* System Logo Branding */}
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-tr from-amber-500 to-amber-600 text-white shadow-lg shadow-amber-500/20">
              <Compass className="h-6 w-6 animate-spin-slow" />
            </div>
            <div>
              <span className="text-xl font-black tracking-wider text-white">TRAVELY</span>
              <span className="ml-1 text-xs font-bold text-amber-500 tracking-widest">.AZ</span>
            </div>
          </div>

          {/* Destination spotlight cards with stagger effects */}
          <div className="max-w-md space-y-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSpotlight.id}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="space-y-4"
              >
                <div className="inline-flex items-center gap-2 rounded-full bg-amber-500/10 border border-amber-500/20 px-3.5 py-1 text-xs font-bold text-amber-400 backdrop-blur-md">
                  <MapPin className="h-3.5 w-3.5 shrink-0" />
                  {activeSpotlight.tagline[lang]}
                </div>

                <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                  {lang === 'ru' ? 'Азербайджан' : lang === 'tr' ? 'Azerbaycan' : lang === 'ar' ? 'أذربيجان' : 'Azerbaijan'}
                </h1>

                <p className="text-base text-slate-300 leading-relaxed">
                  {activeSpotlight.description[lang]}
                </p>

                {/* Micro bento spotlight metadata info */}
                <div className="flex items-center gap-6 pt-2">
                  <div className="flex items-center gap-1.5 text-slate-200 text-sm font-semibold">
                    <Star className="h-4 w-4 text-amber-400 fill-current" />
                    <span>{activeSpotlight.rating}</span>
                    <span className="text-slate-400 font-normal">/ 5.0 Rating</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-200 text-sm font-semibold">
                    <Navigation className="h-4 w-4 text-amber-400" />
                    <span>Verified AI Schedules</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Carousel navigation ticks */}
            <div className="flex gap-2.5 pt-4">
              {SPOTLIGHTS.map((spot, idx) => (
                <button
                  key={spot.id}
                  onClick={() => setSpotlightIndex(idx)}
                  className={`h-2.5 rounded-full transition-all duration-500 ${
                    idx === spotlightIndex ? 'w-8 bg-amber-500' : 'w-2.5 bg-slate-700 hover:bg-slate-600'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Footer credentials */}
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span>© 2026 Travely.az AI Travel Hub</span>
            <span className="text-amber-500 font-semibold">Azerbaijan Tourism Board Partner</span>
          </div>
        </div>
      </div>

      {/* RIGHT SPLIT: Authenticate Gateway Panel */}
      <div className="relative flex flex-1 flex-col justify-between p-6 sm:p-12 lg:w-1/2">
        
        {/* Top bar with Language select Dropdown & Brand for mobile viewers */}
        <header className="flex items-center justify-between">
          {/* Logo only visible on screen scales below lg */}
          <div className="flex items-center gap-2 lg:hidden">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-amber-500 to-amber-600 text-white">
              <Compass className="h-5 w-5" />
            </div>
            <span className="font-extrabold tracking-wider text-slate-900 text-base">TRAVELY</span>
          </div>

          <div className="hidden lg:block shrink-0" />

          {/* Flag/Globe styled Language Selector */}
          <div className="flex items-center gap-2">
            <Globe className="h-4 w-4 text-slate-400 shrink-0" />
            <select
              value={lang}
              onChange={(e) => onLangChange(e.target.value as Language)}
              className="rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-xs font-bold text-slate-700 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500 cursor-pointer"
            >
              <option value="en">English 🇬🇧</option>
              <option value="ru">Русский 🇷🇺</option>
              <option value="tr">Türkçe 🇹🇷</option>
              <option value="ar">العربية 🇦🇪</option>
            </select>
          </div>
        </header>

        {/* Vertical Center Container */}
        <div className="mx-auto my-auto w-full max-w-md py-8">
          
          {/* Intro Headers */}
          <div className="space-y-2 text-center lg:text-left">
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">
              {authMode === 'login' 
                ? (lang === 'ru' ? 'Вход в систему' : lang === 'tr' ? 'Giriş Yapın' : lang === 'ar' ? 'تسجيل الدخول الموحد' : 'Sign In to Travely')
                : (lang === 'ru' ? 'Новый аккаунт' : lang === 'tr' ? 'Hesap Oluşturun' : lang === 'ar' ? 'إنشاء حساب مستكشف' : 'Create Free Account')
              }
            </h2>
            <p className="text-sm text-slate-500 leading-relaxed">
              {authMode === 'login'
                ? (lang === 'ru' ? 'Ваш интеллектуальный ИИ-гид по прекрасным городам Азербайджана' : lang === 'tr' ? 'Azerbaycan turistik noktaları için yapay zeka destekli rehberiniz' : lang === 'ar' ? 'دليلك السياحي المعتمد للوصول لخطط السفر بأذربيجان' : 'Your intelligent AI companion for custom itineraries across Azerbaijan')
                : (lang === 'ru' ? 'Зарегистрируйтесь бесплатно, чтобы сохранять свои любимые маршруты' : lang === 'tr' ? 'Kişiselleştirilmiş seyahat rotalarınızı kaydetmek için kaydolun' : lang === 'ar' ? 'سجل حسابك مجاناً لتتمكن من حفظ مخططات السفر والرحلات الخاصة بك' : 'Register in seconds to save custom routes and plan multi-day trips')
              }
            </p>
          </div>

          {/* Segmented control tab switches */}
          <div className="mt-8 flex rounded-2xl bg-slate-100 p-1">
            <button
              onClick={() => { setAuthMode('login'); setError(''); }}
              className={`flex-1 rounded-xl py-2.5 text-xs font-semibold tracking-wide transition-all ${
                authMode === 'login' 
                  ? 'bg-white text-slate-950 shadow-md shadow-slate-200/50' 
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              {lang === 'ru' ? 'Вход' : lang === 'tr' ? 'Giriş Yap' : lang === 'ar' ? 'تسجيل الدخول' : 'Sign In'}
            </button>
            <button
              onClick={() => { setAuthMode('signup'); setError(''); }}
              className={`flex-1 rounded-xl py-2.5 text-xs font-semibold tracking-wide transition-all ${
                authMode === 'signup' 
                  ? 'bg-white text-slate-950 shadow-md shadow-slate-200/50' 
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              {lang === 'ru' ? 'Создать аккаунт' : lang === 'tr' ? 'Kayıt Ol' : lang === 'ar' ? 'حساب جديد' : 'Sign Up'}
            </button>
          </div>

          <form onSubmit={handleAuthSubmit} className="mt-6 space-y-4">
            {/* Full Name field for Signup Mode */}
            {authMode === 'signup' && (
              <div>
                <label className="block text-xs font-bold text-slate-700 tracking-wide uppercase">
                  {lang === 'ru' ? 'Ваше имя' : lang === 'tr' ? 'Ad soyad' : lang === 'ar' ? 'الاسم الكامل' : 'Your Full Name'}
                </label>
                <div className="relative mt-1.5">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400">
                    <User className="h-4.5 w-4.5" />
                  </span>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={lang === 'ru' ? 'Например: Иван Иванов' : lang === 'tr' ? 'Örn: Caner Yılmaz' : lang === 'ar' ? 'مثال: محمد أحمد' : 'James Smith'}
                    className="w-full rounded-2xl border border-slate-200 py-3 pl-11 pr-4 text-sm bg-white focus:border-amber-500 focus:ring-1 focus:ring-amber-500 focus:outline-none transition-all placeholder:text-slate-400"
                  />
                </div>
              </div>
            )}

            {/* Email field */}
            <div>
              <label className="block text-xs font-bold text-slate-700 tracking-wide uppercase">
                {lang === 'ru' ? 'Электронная почта' : lang === 'tr' ? 'E-posta Adresi' : lang === 'ar' ? 'البريد الإلكتروني' : 'Email Address'}
              </label>
              <div className="relative mt-1.5">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400">
                  <Mail className="h-4.5 w-4.5" />
                </span>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="w-full rounded-2xl border border-slate-200 py-3 pl-11 pr-4 text-sm bg-white focus:border-amber-500 focus:ring-1 focus:ring-amber-500 focus:outline-none transition-all placeholder:text-slate-400"
                />
              </div>
            </div>

            {/* Password field with Visibility toggler */}
            <div>
              <div className="flex items-center justify-between">
                <label className="block text-xs font-bold text-slate-700 tracking-wide uppercase">
                  {lang === 'ru' ? 'Пароль' : lang === 'tr' ? 'Şifre' : lang === 'ar' ? 'كلمة المرور' : 'Secure Password'}
                </label>
              </div>
              <div className="relative mt-1.5">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400">
                  <Lock className="h-4.5 w-4.5" />
                </span>
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full rounded-2xl border border-slate-200 py-3 pl-11 pr-11 text-sm bg-white focus:border-amber-500 focus:ring-1 focus:ring-amber-500 focus:outline-none transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 flex items-center pr-3 text-slate-400 hover:text-slate-600 cursor-pointer"
                  tabIndex={-1}
                >
                  {showPassword ? <EyeOff className="h-4.5 w-4.5" /> : <Eye className="h-4.5 w-4.5" />}
                </button>
              </div>
            </div>

            {/* Error notifications */}
            {error && (
              <div className="flex items-start gap-2.5 rounded-2xl bg-red-50 border border-red-100 p-3.5 text-xs text-red-600 font-semibold animate-shake">
                <AlertCircle className="h-4.5 w-4.5 shrink-0 mt-0.5" />
                <span>{error}</span>
              </div>
            )}

            {/* Success message popup within flow */}
            {success && (
              <div className="flex items-start gap-2.5 rounded-2xl bg-emerald-50 border border-emerald-100 p-3.5 text-xs text-emerald-600 font-bold animate-pulse">
                <ShieldCheck className="h-4.5 w-4.5 shrink-0 mt-0.5" />
                <span>{success}</span>
              </div>
            )}

            {/* Primary sign in / up button */}
            <button
              type="submit"
              disabled={isLoading}
              className="mt-3 w-full flex items-center justify-center gap-2 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-bold py-3.5 px-6 shadow-md transition-all hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-slate-950 disabled:bg-slate-300 disabled:shadow-none cursor-pointer"
            >
              {isLoading ? (
                <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
              ) : (
                <>
                  <span>
                    {authMode === 'login' 
                      ? (lang === 'ru' ? 'Войти и исследовать' : lang === 'tr' ? 'Giriş Yap ve Keşfet' : lang === 'ar' ? 'تسجيل الدخول الفوري' : 'Sign In & Explore')
                      : (lang === 'ru' ? 'Создать и войти' : lang === 'tr' ? 'Kaydol ve Keşfet' : lang === 'ar' ? 'تسجيل حساب جديد' : 'Create & Explore')
                    }
                  </span>
                  <ArrowRight className="h-4 w-4" />
                </>
              )}
            </button>
          </form>

          {/* Separator block */}
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t border-slate-200" />
            </div>
            <div className="relative flex justify-center text-xs text-slate-400 font-bold uppercase tracking-wider">
              <span className="bg-slate-50 px-3">
                {lang === 'ru' ? 'Быстрый доступ' : lang === 'tr' ? 'Hızlı Erişim' : lang === 'ar' ? 'أو الدخول السريع' : 'Easy Access'}
              </span>
            </div>
          </div>

          {/* Quick Demo guest access card */}
          <button
            onClick={handleQuickDemoGuestLogin}
            disabled={isLoading}
            className="group w-full flex items-start justify-between text-left rounded-2xl border border-amber-200 bg-amber-500/5 hover:bg-amber-500/10 p-4 transition-all hover:shadow-md cursor-pointer select-none"
          >
            <div className="space-y-1 pr-4">
              <span className="inline-flex items-center gap-1.5 text-[10px] uppercase font-black text-amber-700 tracking-wider">
                <Sparkles className="h-3 w-3 text-amber-500 fill-current" />
                {lang === 'ru' ? 'ДЕМО-ВХОД' : lang === 'tr' ? 'DEMO GİRİŞİ' : lang === 'ar' ? 'نمط تجريبي' : 'DEMO MODE'}
              </span>
              <h4 className="text-sm font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
                {lang === 'ru' ? 'Вход в один клик' : lang === 'tr' ? 'Tek Tıkla Misafir Olarak Keşfet' : lang === 'ar' ? 'دخول فوري بضغطة زر كزائر' : 'One-Click Guest Access'}
              </h4>
              <p className="text-xs text-slate-500 leading-normal">
                {lang === 'ru' ? 'Исследуйте все разделы без регистрации.' : lang === 'tr' ? 'Kayıt olmadan misafir hesabı ile hemen test edin.' : lang === 'ar' ? 'استخدم النظام بالكامل فوراً بدون تسجيل أي بيانات.' : 'Skip registration and explore high-fidelity features directly.'}
              </p>
            </div>
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-amber-500 text-white shrink-0 group-hover:scale-110 transition-transform">
              <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </button>

        </div>

        {/* Bottom copyright notice for smaller screens */}
        <footer className="text-center text-xs text-slate-400 pt-6 border-t border-slate-100 lg:hidden">
          <span>© 2026 Travely.az AI Travel Hub</span>
        </footer>

      </div>

    </div>
  );
}
