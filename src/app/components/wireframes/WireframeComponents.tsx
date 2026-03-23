import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { ChevronLeft, Bell, Battery, Wifi, Signal } from 'lucide-react';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// -- Atoms --

export const WFButton = ({ 
  children, 
  variant = 'primary', 
  className, 
  onClick,
  icon: Icon
}: { 
  children: React.ReactNode; 
  variant?: 'primary' | 'secondary' | 'outline' | 'danger'; 
  className?: string;
  onClick?: () => void;
  icon?: React.ElementType;
}) => {
  const baseStyles = "w-full py-3.5 px-4 rounded-xl font-medium text-[15px] flex items-center justify-center gap-2 transition-all active:scale-[0.98]";
  const variants = {
    primary: "bg-slate-900 text-white shadow-sm hover:bg-slate-800",
    secondary: "bg-slate-100 text-slate-900 hover:bg-slate-200",
    outline: "border border-slate-300 text-slate-700 bg-transparent hover:bg-slate-50",
    danger: "bg-red-50 text-red-600 border border-red-100 hover:bg-red-100"
  };

  return (
    <button onClick={onClick} className={cn(baseStyles, variants[variant], className)}>
      {Icon && <Icon className="w-4 h-4" />}
      {children}
    </button>
  );
};

export const WFCard = ({ children, className, onClick }: { children: React.ReactNode; className?: string; onClick?: () => void }) => (
  <div onClick={onClick} className={cn("bg-white rounded-2xl border border-slate-200 p-4 shadow-sm", className)}>
    {children}
  </div>
);

export const WFInput = ({ placeholder, className }: { placeholder: string; className?: string }) => (
  <input 
    type="text" 
    placeholder={placeholder}
    className={cn("w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/10", className)}
  />
);

export const WFBadge = ({ children, variant = 'neutral' }: { children: React.ReactNode; variant?: 'neutral' | 'accent' | 'success' | 'warning' }) => {
  const variants = {
    neutral: "bg-slate-100 text-slate-600",
    accent: "bg-slate-900 text-white",
    success: "bg-green-100 text-green-700",
    warning: "bg-amber-100 text-amber-800"
  };
  return (
    <span className={cn("px-2.5 py-1 rounded-full text-xs font-semibold", variants[variant])}>
      {children}
    </span>
  );
};

// -- Structure --

export const WFStatusBar = () => (
  <div className="h-[44px] w-full bg-white flex items-end justify-between px-6 pb-2 text-slate-900 z-50 select-none">
    <span className="font-semibold text-[13px] w-[54px]">9:41</span>
    <div className="flex items-center gap-1.5">
      <Signal className="w-4 h-4" />
      <Wifi className="w-4 h-4" />
      <Battery className="w-4 h-4" />
    </div>
  </div>
);

export const WFHeader = ({ 
  title, 
  onBack, 
  rightAction 
}: { 
  title: string; 
  onBack?: () => void; 
  rightAction?: React.ReactNode 
}) => (
  <header className="h-[52px] flex items-center justify-between px-4 bg-white/90 backdrop-blur-md sticky top-0 z-40 border-b border-slate-100">
    <div className="w-[40px] flex items-center justify-start">
      {onBack && (
        <button onClick={onBack} className="p-2 -ml-2 text-slate-900 hover:bg-slate-50 rounded-full">
          <ChevronLeft className="w-6 h-6" />
        </button>
      )}
    </div>
    <h1 className="text-[17px] font-semibold text-slate-900 truncate max-w-[200px]">{title}</h1>
    <div className="w-[40px] flex items-center justify-end">
      {rightAction}
    </div>
  </header>
);

export const WFScreenContainer = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div className={cn("flex-1 overflow-y-auto bg-slate-50 pb-24", className)}>
    {children}
  </div>
);
