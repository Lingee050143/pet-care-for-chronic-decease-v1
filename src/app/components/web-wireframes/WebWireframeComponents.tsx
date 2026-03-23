import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Bell, Search, User, ChevronDown, Menu, LayoutDashboard, Calendar, MessageSquare, FileText, ChevronLeft, Users, MessageCircle, Heart, Home, Activity } from 'lucide-react';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// -- Layout --

export const WebLayout = ({ 
  children, 
  activePage, 
  onNavigate,
  showSidebar = true
}: { 
  children: React.ReactNode; 
  activePage: string; 
  onNavigate: (page: string) => void;
  showSidebar?: boolean;
}) => (
  <div className="min-h-screen bg-slate-50 font-sans text-slate-900 flex flex-col pb-20 md:pb-0">
    {/* Top Bar */}
    <header className="h-16 bg-white border-b border-slate-200 sticky top-0 z-50 flex items-center justify-between px-6 lg:px-8">
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-2">
           <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white font-bold">V</div>
           <span className="font-bold text-lg tracking-tight">VetTrack</span>
        </div>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {[
            { id: 'Dashboard', label: '홈' },
            { id: 'Schedule', label: '일정' },
            { id: 'Condition', label: '컨디션' },
            { id: 'Community', label: '커뮤니티' },
            { id: 'Profile', label: '마이페이지' }
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={cn(
                "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                (activePage === item.id || (activePage === 'ConditionWrite' && item.id === 'Condition')) ? "bg-slate-100 text-slate-900" : "text-slate-500 hover:text-slate-700 hover:bg-slate-50"
              )}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>

      <div className="flex items-center gap-4">
        <button className="p-2 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100">
          <Bell className="w-5 h-5" />
        </button>
        <div className="w-px h-6 bg-slate-200 mx-1" />
        <div className="flex items-center gap-2 cursor-pointer hover:bg-slate-50 p-1.5 rounded-lg pr-3 transition-colors">
           <div className="w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center">
             <User className="w-4 h-4 text-slate-500" />
           </div>
           <span className="text-sm font-medium hidden sm:block">Leo's Parent</span>
           <ChevronDown className="w-4 h-4 text-slate-400" />
        </div>
      </div>
    </header>

    <div className="flex flex-1 max-w-[1440px] mx-auto w-full">
       {/* Content */}
       <main className="flex-1 p-6 lg:p-8">
         {children}
       </main>
    </div>

    {/* Mobile Bottom Navigation */}
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-100 px-6 py-2 flex justify-between items-center z-50 pb-safe shadow-[0_-1px_3px_rgba(0,0,0,0.02)]">
      {[
        { id: 'Schedule', icon: Calendar, label: '일정' },
        { id: 'Condition', icon: Activity, label: '컨디션' },
        { id: 'Dashboard', icon: Home, label: '홈' },
        { id: 'Community', icon: Users, label: '커뮤니티' },
        { id: 'Profile', icon: User, label: '마이' },
      ].map((item) => {
        const isActive = activePage === item.id || (activePage === 'ConditionWrite' && item.id === 'Condition');
        return (
        <button
          key={item.id}
          onClick={() => onNavigate(item.id)}
          className={cn(
            "flex flex-col items-center gap-1 min-w-[3.5rem] py-2",
            isActive ? "text-slate-900" : "text-slate-400"
          )}
        >
          <item.icon 
            className={cn("w-6 h-6 transition-all duration-200")} 
            strokeWidth={1.5} 
            fill="none" // Always outline
            stroke={isActive ? "currentColor" : "currentColor"}
          />
          <span className={cn(
            "text-[10px] transition-all duration-200",
            isActive ? "font-medium text-slate-900" : "font-normal text-slate-400"
          )}>
            {item.label}
          </span>
        </button>
      )})}
    </div>
  </div>
);

// -- Atoms --

export const WButton = ({ 
  children, 
  variant = 'primary', 
  className, 
  onClick,
  icon: Icon
}: { 
  children: React.ReactNode; 
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'; 
  className?: string;
  onClick?: () => void;
  icon?: React.ElementType;
}) => {
  const baseStyles = "inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-[10px] font-medium text-sm transition-all focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-slate-900/10";
  const variants = {
    primary: "bg-slate-900 text-white hover:bg-slate-800 shadow-sm",
    secondary: "bg-white text-slate-900 border border-slate-200 hover:bg-slate-50 hover:border-slate-300 shadow-sm",
    outline: "bg-transparent border border-slate-300 text-slate-700 hover:bg-slate-50",
    ghost: "bg-transparent text-slate-500 hover:text-slate-900 hover:bg-slate-100"
  };

  return (
    <button onClick={onClick} className={cn(baseStyles, variants[variant], className)}>
      {Icon && <Icon className="w-4 h-4" />}
      {children}
    </button>
  );
};

export const WCard = ({ children, className, title, action, onClick, onBack }: { children: React.ReactNode; className?: string; title?: string; action?: React.ReactNode; onClick?: () => void; onBack?: () => void }) => (
  <div 
    onClick={onClick}
    className={cn("bg-white rounded-[14px] border border-slate-100 shadow-[0_2px_8px_rgba(0,0,0,0.04)] overflow-hidden", className)}
  >
    {(title || action || onBack) && (
      <div className="px-5 py-4 border-b border-slate-50 flex items-center justify-between bg-white">
        <div className="flex items-center gap-3">
            {onBack && (
                <button onClick={onBack} className="relative p-1 -ml-1 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-50 transition-colors after:absolute after:-inset-2 after:content-['']">
                    <ChevronLeft className="w-5 h-5" />
                </button>
            )}
            {title && <h3 className="font-semibold text-slate-900">{title}</h3>}
        </div>
        {action && <div>{action}</div>}
      </div>
    )}
    <div className="p-5">
      {children}
    </div>
  </div>
);

export const WBadge = ({ children, variant = 'neutral' }: { children: React.ReactNode; variant?: 'neutral' | 'accent' | 'success' | 'warning' | 'error' }) => {
  const variants = {
    neutral: "bg-slate-100 text-slate-600 border-slate-200",
    accent: "bg-indigo-50 text-indigo-700 border-indigo-100",
    success: "bg-green-50 text-green-700 border-green-100",
    warning: "bg-amber-50 text-amber-700 border-amber-100",
    error: "bg-red-50 text-red-700 border-red-100"
  };
  return (
    <span className={cn("px-2.5 py-1 rounded-md text-xs font-semibold border", variants[variant])}>
      {children}
    </span>
  );
};
