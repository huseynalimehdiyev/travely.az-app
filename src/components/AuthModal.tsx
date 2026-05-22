import React, { useState } from 'react';
import { X, Lock, Mail, User, ShieldCheck, Sparkles, AlertCircle, ArrowRight } from 'lucide-react';
import { Language } from '../types';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  onLoginSuccess: (user: { email: string; name: string }) => void;
}

export default function AuthModal({ isOpen, onClose, lang, onLoginSuccess }: AuthModalProps) {
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [success, setSuccess] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  if (!isOpen) return null;

  const handleAuthSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!email || !password) {
      setError(lang === 'ru' ? 'Заполните все поля!' : lang === 'tr' ? 'Lütfen tüm alanları doldurun!' : 'Please fill all fields!');
      return;
    }

    if (authMode === 'signup' && !name) {
      setError(lang === 'ru' ? 'Введите имя!' : lang === 'tr' ? 'Lütfen adınızı girin!' : 'Please enter your name!');
      return;
    }

    setIsLoading(true);

    // Simulate standard authentic credentials processing
    setTimeout(() => {
      setIsLoading(false);
      const userProfile = { 
        email, 
        name: authMode === 'signup' ? name : email.split('@')[0] 
      };
      
      localStorage.setItem('travely_user', JSON.stringify(userProfile));
      onLoginSuccess(userProfile);
      setSuccess(lang === 'ru' ? 'С возвращением!' : lang === 'tr' ? 'Giriş başarılı!' : 'Access granted successfully!');
      
      setTimeout(() => {
        onClose();
        setSuccess('');
      }, 1000);
    }, 800);
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
      onLoginSuccess(guestProfile);
      setSuccess(lang === 'ru' ? 'Вход выполнен как Гость!' : lang === 'tr' ? 'Misafir girişi başarılı!' : 'Signed in as guest!');
      
      setTimeout(() => {
        onClose();
        setSuccess('');
      }, 1000);
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4 backdrop-blur-sm animate-fade-in">
      <div className="relative flex w-full max-w-4xl flex-col overflow-hidden rounded-3xl bg-white shadow-2xl md:flex-row">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200"
        >
          <X className="h-4 w-4" />
        </button>

        {/* LEFT COMPONENT: The Credentials Form */}
        <div className="flex-1 p-6 md:p-10">
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
            {authMode === 'login' 
              ? (lang === 'ru' ? 'Вход в аккаунт' : lang === 'tr' ? 'Giriş Yap' : lang === 'ar' ? 'تسجيل الدخول' : 'Sign In to Travely')
              : (lang === 'ru' ? 'Регистрация' : lang === 'tr' ? 'Kayıt Ol' : lang === 'ar' ? 'حساب جديد' : 'Create Free Account')
            }
          </h2>
          <p className="mt-1 text-xs text-slate-500">
            {authMode === 'login'
              ? (lang === 'ru' ? 'Введите ваши данные для доступа к планам' : lang === 'tr' ? 'Hizmetlere erişmek için e-postanızı girin' : 'Access high-fidelity travel itineraries immediately')
              : (lang === 'ru' ? 'Зарегистрируйтесь для сохранения поездок' : lang === 'tr' ? 'Seyahatlerinizi kaydetmek için kaydolun' : 'Join thousands of tourists in Azerbaijan')
            }
          </p>

          <form onSubmit={handleAuthSubmit} className="mt-6 space-y-4">
            {/* Name Input for Signup */}
            {authMode === 'signup' && (
              <div>
                <label className="block text-xs font-semibold text-slate-700">Name</label>
                <div className="relative mt-1">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                    <User className="h-4 w-4" />
                  </span>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="E.g. James Bond"
                    className="w-full rounded-xl border border-slate-200 py-2.5 pl-10 pr-4 text-sm focus:border-amber-500 focus:outline-none"
                  />
                </div>
              </div>
            )}

            {/* Email */}
            <div>
              <label className="block text-xs font-semibold text-slate-700">Email Address</label>
              <div className="relative mt-1">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                  <Mail className="h-4 w-4" />
                </span>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@company.com"
                  className="w-full rounded-xl border border-slate-200 py-2.5 pl-10 pr-4 text-sm focus:border-amber-500 focus:outline-none"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-xs font-semibold text-slate-700">Secure Password</label>
              <div className="relative mt-1">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                  <Lock className="h-4 w-4" />
                </span>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full rounded-xl border border-slate-200 py-2.5 pl-10 pr-4 text-sm focus:border-amber-500 focus:outline-none"
                />
              </div>
            </div>

            {/* Error & Success indicators */}
            {error && (
              <div className="flex items-center gap-2 rounded-xl bg-red-50 p-3 text-xs font-medium text-red-600">
                <AlertCircle className="h-4 w-4 shrink-0" />
                <span>{error}</span>
              </div>
            )}
            {success && (
              <div className="flex items-center gap-2 rounded-xl bg-emerald-50 p-3 text-xs font-medium text-emerald-600">
                <ShieldCheck className="h-4 w-4 shrink-0" />
                <span>{success}</span>
              </div>
            )}

            {/* Action Buttons */}
            <button
              type="submit"
              disabled={isLoading}
              className="mt-2 flex w-full items-center justify-center rounded-xl bg-slate-900 py-2.5 text-sm font-semibold text-white hover:bg-slate-800 disabled:bg-slate-300 transition-colors"
            >
              {isLoading ? 'Processing...' : (authMode === 'login' ? 'Sign In' : 'Create Account')}
            </button>
          </form>

          {/* Toggle Login/Signup Mode */}
          <div className="mt-4 text-center">
            <button
              onClick={() => setAuthMode(authMode === 'login' ? 'signup' : 'login')}
              className="text-xs font-semibold text-amber-600 hover:text-amber-700"
            >
              {authMode === 'login' 
                ? "Don't have an account? Sign up here" 
                : "Already have an account? Sign in instead"
              }
            </button>
          </div>
        </div>

        {/* RIGHT COMPONENT: The Dynamic One-Click Guest Panel */}
        <div className="flex flex-col justify-between bg-slate-50 p-8 border-t border-slate-100 md:w-[360px] md:border-t-0 md:border-l">
          <div className="space-y-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-amber-500 text-white shadow-md shadow-amber-500/10">
              <Sparkles className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">
              {lang === 'ru' ? 'Мгновенный Демо-вход' : lang === 'tr' ? 'Tek Tıkla Misafir Girişi' : 'Instant Guest Access'}
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              {lang === 'ru' 
                ? 'Пропустите заполнение форм! Войдите как гость, чтобы мгновенно исследовать Азербайджан без ввода пароля.'
                : lang === 'tr'
                ? 'Form doldurmak istemiyor musunuz? Şifresiz tek tıkla sisteme misafir olarak giriş yapıp hemen kullanmaya başlayın.'
                : 'Bypass forms and register instantly. Click the action card below to load a dynamic guest explorer session immediately!'
              }
            </p>
          </div>

          <button 
            onClick={handleQuickDemoGuestLogin}
            disabled={isLoading}
            className="group mt-8 flex w-full items-center justify-between rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-amber-500/15 hover:from-amber-600 hover:to-amber-700 select-none cursor-pointer hover:shadow-xl transition-all duration-300 animate-pulse"
          >
            <div className="flex flex-col items-start">
              <span className="text-xs text-amber-100 font-medium tracking-wide block leading-none">DEMO MODE</span>
              <span className="mt-0.5 font-extrabold tracking-tight">One-Click Explorer</span>
            </div>
            <ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

      </div>
    </div>
  );
}
