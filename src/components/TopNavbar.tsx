import React from 'react';
import { MapPin, Languages, User, LogOut, Compass } from 'lucide-react';
import { City, Language } from '../types';
import { CITIES } from '../data';

interface TopNavbarProps {
  selectedCity: City;
  setSelectedCity: (city: City) => void;
  selectedLang: Language;
  setSelectedLang: (lang: Language) => void;
  currentUser: { email: string; name: string } | null;
  onLogout: () => void;
  onOpenAuth: () => void;
  tabLabel: string;
}

export default function TopNavbar({
  selectedCity,
  setSelectedCity,
  selectedLang,
  setSelectedLang,
  currentUser,
  onLogout,
  onOpenAuth,
  tabLabel
}: TopNavbarProps) {
  
  const languagesList: { code: Language; label: string; flag: string }[] = [
    { code: 'en', label: 'EN', flag: '🇬🇧' },
    { code: 'ru', label: 'RU', flag: '🇷🇺' },
    { code: 'tr', label: 'TR', flag: '🇹🇷' },
    { code: 'ar', label: 'AR', flag: '🇦🇿' } 
  ];

  return (
    <header className="sticky top-0 z-40 flex h-16 w-full items-center justify-between border-b border-slate-200/80 bg-white/95 px-4 shadow-sm backdrop-blur-md md:px-6">
      {/* Tab Context Name */}
      <div className="flex items-center gap-3">
        <span className="hidden h-8 w-[2px] rounded-full bg-slate-200 md:block"></span>
        <h2 className="text-sm font-semibold text-slate-700 tracking-tight md:text-base">
          {tabLabel}
        </h2>
      </div>

      {/* Selectors and Auth Area */}
      <div className="flex items-center gap-3 md:gap-4">
        {/* City Selector */}
        <div className="relative flex items-center gap-1 rounded-xl bg-slate-50 p-1 border border-slate-100">
          <MapPin className="ml-1.5 h-3.5 w-3.5 text-slate-400" />
          <select
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value as City)}
            className="bg-transparent pr-8 pl-1 text-xs md:text-sm font-medium text-slate-800 focus:outline-none cursor-pointer appearance-none"
            style={{
              backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23475569' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><polyline points='6 9 12 15 18 9'></polyline></svg>")`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'right 0.25rem center',
              backgroundSize: '1rem'
            }}
          >
            {CITIES.map((cityObj) => (
              <option key={cityObj.id} value={cityObj.id} className="text-slate-900 bg-white">
                {cityObj.name[selectedLang]}
              </option>
            ))}
          </select>
        </div>

        {/* Language Selector */}
        <div className="flex items-center gap-1 rounded-xl bg-slate-50 p-1 border border-slate-100">
          <Languages className="ml-1.5 h-3.5 w-3.5 text-slate-400" />
          <div className="flex gap-1 px-1">
            {languagesList.map((lang) => (
              <button
                key={lang.code}
                onClick={() => setSelectedLang(lang.code)}
                title={lang.label}
                className={`flex h-6 w-8 items-center justify-center rounded-lg text-xs font-semibold uppercase transition-all duration-200 ${
                  selectedLang === lang.code
                    ? 'bg-amber-500 text-white shadow-sm'
                    : 'text-slate-500 hover:bg-slate-200/50 hover:text-slate-800'
                }`}
              >
                {lang.label}
              </button>
            ))}
          </div>
        </div>

        {/* User Auth Profile Area */}
        <span className="h-4 w-[1px] bg-slate-200"></span>
        {currentUser ? (
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2 rounded-xl bg-amber-50 px-2.5 py-1.5 border border-amber-100/50">
              <div className="flex h-5 w-5 items-center justify-center rounded-full bg-amber-500 text-[10px] font-bold text-white">
                {currentUser.name.charAt(0).toUpperCase()}
              </div>
              <span className="hidden max-w-[80px] truncate text-xs font-medium text-amber-950 md:block">
                {currentUser.name}
              </span>
            </div>
            <button
              onClick={onLogout}
              className="flex h-8 w-8 items-center justify-center rounded-xl bg-slate-50 border border-slate-200 text-slate-500 hover:bg-red-50 hover:border-red-200 hover:text-red-500 transition-all duration-200"
              title="Logout"
            >
              <LogOut className="h-4 w-4" />
            </button>
          </div>
        ) : (
          <button
            onClick={onOpenAuth}
            className="flex items-center gap-1.5 rounded-xl bg-amber-500 px-3.5 py-1.5 text-xs font-medium text-white hover:bg-amber-600 active:scale-95 shadow-sm transition-all duration-200"
          >
            <User className="h-3.5 w-3.5" />
            <span>Join Travely</span>
          </button>
        )}
      </div>
    </header>
  );
}
