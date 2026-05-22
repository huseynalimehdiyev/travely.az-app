import React, { useState, useEffect } from 'react';
import Sidebar, { TabId } from './components/Sidebar';
import TopNavbar from './components/TopNavbar';
import AuthModal from './components/AuthModal';
import AuthScreen from './components/AuthScreen';
import TravelPlanner from './components/TravelPlanner';
import IJustLanded from './components/IJustLanded';
import AccommodationsShopping from './components/AccommodationsShopping';
import GastronomyCulture from './components/GastronomyCulture';
import AskTravelAI from './components/AskTravelAI';
import { City, Language } from './types';

export default function App() {
  // Primary Navigation / Selector States
  const [selectedCity, setSelectedCity] = useState<City>('Baku');
  const [selectedLang, setSelectedLang] = useState<Language>('en');
  const [activeTab, setActiveTab] = useState<TabId>('planner');
  
  // User Authentication State
  const [currentUser, setCurrentUser] = useState<{ email: string; name: string } | null>(() => {
    const saved = localStorage.getItem('travely_user');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return null;
      }
    }
    return null;
  });
  
  const [showAuthModal, setShowAuthModal] = useState<boolean>(false);

  const handleLogout = () => {
    localStorage.removeItem('travely_user');
    setCurrentUser(null);
  };

  const handleLoginSuccess = (user: { email: string; name: string }) => {
    setCurrentUser(user);
  };

  const getTabLabel = (id: TabId): string => {
    const labels: Record<TabId, Record<Language, string>> = {
      planner: {
        en: "🗺️ AI Travel planner & Multi-day Schedule",
        ru: "🗺️ ИИ-Планировщик и Маршруты по дням",
        tr: "🗺️ Yapay Zeka Seyahat Planı ve Günlük Rotalar",
        ar: "🗺️ مخطط السفر اليومي بالذكاء الاصطناعي"
      },
      landed: {
        en: "🛬 I Just Landed — Hub & Route Mapping",
        ru: "🛬 Я только что прилетел — Руководство по прибытию",
        tr: "🛬 Yeni İndim — Havalimanı & Giriş Rehberi",
        ar: "🛬 لقد وصلت للتو — إرشادات الوصول والمواصلات"
      },
      accommodations: {
        en: "🏨 Accommodations, Hotels & Shopping Escapes",
        ru: "🏨 Варианты проживания, Отели и Шопинг",
        tr: "🏨 Konaklama, Oteller ve Alışveriş Noktaları",
        ar: "🏨 حجز الفنادق وأفضل مراكز التسوق المعتمدة"
      },
      gastronomy: {
        en: "🍽️ Culinary Landmarks, Teas & Heritage",
        ru: "🍽️ Национальные блюда, Чай и Музеи",
        tr: "🍽️ Geleneksel Mutfak kültürü, Çay ve Müzeler",
        ar: "🍽️ المطبخ التقليدي وفن التذوق والمعالم الأثرية"
      },
      chat: {
        en: "💬 Ask Travel AI — Conversational Assistant",
        ru: "💬 Спроси Travel AI — Интерактивный Чат",
        tr: "💬 Yapay Zeka Kültür Danışmanı — Sohbet",
        ar: "💬 مستشارك الذكي المعتمد — محادثة مجانية مباشرة"
      }
    };
    return labels[id]?.[selectedLang] || labels[id]['en'];
  };

  if (!currentUser) {
    return (
      <AuthScreen 
        onLoginSuccess={handleLoginSuccess}
        lang={selectedLang}
        onLangChange={setSelectedLang}
      />
    );
  }

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-slate-50 font-sans text-slate-800 antialiased">
      {/* Sleek Collapsible Left Sidebar (Bottom Nav on hand-held mobile devices) */}
      <Sidebar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        lang={selectedLang} 
      />

      {/* Primary Right Panel Container */}
      <div className="flex flex-1 flex-col h-full overflow-hidden">
        {/* Persistent Top Navbar with selective headers */}
        <TopNavbar 
          selectedCity={selectedCity}
          setSelectedCity={setSelectedCity}
          selectedLang={selectedLang}
          setSelectedLang={setSelectedLang}
          currentUser={currentUser}
          onLogout={handleLogout}
          onOpenAuth={() => setShowAuthModal(true)}
          tabLabel={getTabLabel(activeTab)}
        />

        {/* Active Tab View Body scroll context */}
        <main className="flex-1 overflow-y-auto bg-slate-50/50">
          {activeTab === 'planner' && (
            <TravelPlanner city={selectedCity} lang={selectedLang} />
          )}
          {activeTab === 'landed' && (
            <IJustLanded city={selectedCity} lang={selectedLang} />
          )}
          {activeTab === 'accommodations' && (
            <AccommodationsShopping city={selectedCity} lang={selectedLang} />
          )}
          {activeTab === 'gastronomy' && (
            <GastronomyCulture city={selectedCity} lang={selectedLang} />
          )}
          {activeTab === 'chat' && (
            <AskTravelAI city={selectedCity} lang={selectedLang} />
          )}
        </main>
      </div>

      {/* Authentication Popup Frame */}
      <AuthModal 
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        lang={selectedLang}
        onLoginSuccess={handleLoginSuccess}
      />
    </div>
  );
}
