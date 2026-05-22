import React, { useState } from 'react';
import { 
  Compass, PlaneTakeoff, Building2, Utensils, 
  MessageSquare, Menu, ChevronLeft, ChevronRight, HelpCircle
} from 'lucide-react';

export type TabId = 'planner' | 'landed' | 'accommodations' | 'gastronomy' | 'chat';

interface SidebarProps {
  activeTab: TabId;
  setActiveTab: (tab: TabId) => void;
  lang: string;
}

export default function Sidebar({ activeTab, setActiveTab, lang }: SidebarProps) {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

  const getLabel = (id: TabId) => {
    const labels: Record<TabId, Record<string, string>> = {
      planner: {
        en: "Travel Planner",
        ru: "Планировщик",
        tr: "Planlayıcı",
        ar: "مخطط الرحلة"
      },
      landed: {
        en: "I Just Landed",
        ru: "Прибытие",
        tr: "Yeni İndim",
        ar: "لقد وصلت للتو"
      },
      accommodations: {
        en: "Hotels & Shopping",
        ru: "Отели и Шопинг",
        tr: "Otel & Alışveriş",
        ar: "الفنادق والتسوق"
      },
      gastronomy: {
        en: "Food & Culture",
        ru: "Еда и Культура",
        tr: "Mutfak & Kültür",
        ar: "التذوق والثقافة"
      },
      chat: {
        en: "Ask Travel AI",
        ru: "Чат-ассистент",
        tr: "Yapay Zeka Sor",
        ar: "مستشار الذكاء الاصطناعي"
      }
    };
    return labels[id]?.[lang] || labels[id]['en'];
  };

  const navItems: { id: TabId; icon: React.ReactNode; color: string }[] = [
    { id: 'planner', icon: <Compass className="h-5 w-5" />, color: 'text-rose-500' },
    { id: 'landed', icon: <PlaneTakeoff className="h-5 w-5" />, color: 'text-sky-500' },
    { id: 'accommodations', icon: <Building2 className="h-5 w-5" />, color: 'text-indigo-500' },
    { id: 'gastronomy', icon: <Utensils className="h-5 w-5" />, color: 'text-amber-500' },
    { id: 'chat', icon: <MessageSquare className="h-5 w-5" />, color: 'text-emerald-500' }
  ];

  return (
    <>
      {/* Handheld / Mobile Bottom Nav Bar */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 flex h-16 w-full items-center justify-around border-t border-slate-200 bg-white px-2 py-1 shadow-[0_-4px_12px_rgba(0,0,0,0.05)] md:hidden">
        {navItems.map((item) => {
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className="flex flex-col items-center justify-center gap-1 rounded-xl px-1 py-1 text-center transition-all duration-200 active:scale-90"
            >
              <div className={`transition-all duration-300 ${
                isActive 
                  ? `${item.color} scale-110` 
                  : 'text-slate-400 hover:text-slate-600'
              }`}>
                {item.icon}
              </div>
              <span className={`text-[10px] font-medium tracking-tight truncate max-w-[70px] ${
                isActive ? 'font-bold text-slate-800' : 'text-slate-400'
              }`}>
                {getLabel(item.id)}
              </span>
            </button>
          );
        })}
      </nav>

      {/* Modern Collapsible Left Sidebar for Desktop */}
      <aside 
        className={`hidden md:flex flex-col h-screen border-r border-slate-200/80 bg-slate-900 text-slate-100 transition-all duration-300 relative shrink-0 ${
          isCollapsed ? 'w-16' : 'w-64'
        }`}
      >
        {/* Brand Header */}
        <div className="flex h-16 items-center px-4 justify-between border-b border-slate-800/80">
          <div className="flex items-center gap-2.5 overflow-hidden">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-amber-500 text-white font-bold text-base shadow-md shadow-amber-500/20 shrink-0">
              T
            </div>
            {!isCollapsed && (
              <span className="font-extrabold text-lg bg-gradient-to-r from-white to-amber-200 bg-clip-text text-transparent tracking-tight">
                Travely<span className="text-amber-400">.az</span>
              </span>
            )}
          </div>
          
          {/* Toggler button */}
          <button 
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="flex h-6 w-6 items-center justify-center rounded-lg border border-slate-700 hover:bg-slate-800 transition-colors"
          >
            {isCollapsed ? <ChevronRight className="h-3.5 w-3.5" /> : <ChevronLeft className="h-3.5 w-3.5" />}
          </button>
        </div>

        {/* Navigation Tab Menu */}
        <div className="flex-1 space-y-1.5 px-3 py-4 overflow-y-auto">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`group flex items-center gap-3.5 rounded-xl px-3.5 py-3 text-sm font-medium transition-all duration-200 w-full ${
                  isActive 
                    ? 'bg-amber-500 text-white shadow-md shadow-amber-500/10' 
                    : 'text-slate-400 hover:bg-slate-800/60 hover:text-slate-200'
                }`}
              >
                <div className={`transition-all duration-200 ${
                  isActive ? 'text-white' : 'text-slate-400 group-hover:text-slate-200'
                }`}>
                  {item.icon}
                </div>
                {!isCollapsed && (
                  <span className="truncate leading-none">
                    {getLabel(item.id)}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Pro Concierge Footer */}
        <div className="p-3 border-t border-slate-800/80">
          <div className="bg-slate-800/40 rounded-xl p-2.5 border border-slate-800/50 flex items-center gap-2.5">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-white text-xs font-bold shadow-inner">
              ⭐
            </div>
            {!isCollapsed && (
              <div className="min-w-0">
                <p className="text-xs font-bold text-slate-200 leading-tight">Baku Concierge</p>
                <p className="text-[10px] text-amber-400 font-medium">Verified Active 📍</p>
              </div>
            )}
          </div>
        </div>
      </aside>
    </>
  );
}
