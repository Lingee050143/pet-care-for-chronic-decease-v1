import React, { useState } from 'react';
import { ChevronLeft, MoreVertical, Plus, Calendar as CalendarIcon, ChevronRight, Check } from 'lucide-react';
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const Header = () => (
    <div className="h-14 bg-white/95 backdrop-blur-md flex items-center justify-between px-4 sticky top-0 z-30 border-b border-slate-100">
        <button className="p-2 text-slate-600 hover:bg-slate-50 rounded-full transition-colors">
            <ChevronLeft size={24} />
        </button>
        <span className="text-[17px] font-bold text-slate-800">건강 기록</span>
        <button className="p-2 text-slate-400 hover:text-slate-600 rounded-full transition-colors">
            <CalendarIcon size={22} />
        </button>
    </div>
);

// Mock Calendar Data
const DAYS = ['일', '월', '화', '수', '목', '금', '토'];
const DATES = [
    { day: 28, prev: true }, { day: 29, prev: true }, { day: 30, prev: true }, { day: 31, prev: true },
    { day: 1, hasData: true }, { day: 2, hasData: true }, { day: 3 }, { day: 4, hasData: true },
    { day: 5 }, { day: 6, hasData: true }, { day: 7, hasData: true }, { day: 8 },
    { day: 9, hasData: true }, { day: 10, hasData: true }, { day: 11, hasData: true }, { day: 12, isToday: true, isSelected: true, hasData: true },
    { day: 13 }, { day: 14 }, { day: 15 }, { day: 16 },
    { day: 17 }, { day: 18 }, { day: 19 }, { day: 20 },
    { day: 21 }, { day: 22 }, { day: 23 }, { day: 24 },
    { day: 25 }, { day: 26 }, { day: 27 }, { day: 28 },
    { day: 29 }, { day: 30 }, { day: 31 }
];

const CalendarView = () => (
    <div className="bg-white px-4 pb-6 pt-2 rounded-b-3xl shadow-sm border-b border-slate-100">
        <div className="flex items-center justify-between mb-6 px-2">
             <h2 className="text-xl font-bold text-slate-800 flex items-center gap-1">
                2026년 1월 <ChevronRight size={20} className="text-slate-400" />
             </h2>
             <div className="flex gap-2 text-xs text-slate-500 font-medium">
                <span className="flex items-center gap-1"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>기록 있음</span>
             </div>
        </div>

        <div className="grid grid-cols-7 text-center mb-2">
            {DAYS.map((d, i) => (
                <div key={i} className={cn("text-xs font-semibold mb-2", i === 0 ? "text-red-400" : "text-slate-400")}>
                    {d}
                </div>
            ))}
        </div>
        <div className="grid grid-cols-7 gap-y-3">
            {DATES.map((date, i) => (
                <div key={i} className="flex flex-col items-center gap-1">
                    <button className={cn(
                        "w-9 h-9 flex items-center justify-center rounded-full text-sm font-medium transition-all relative",
                        date.prev ? "text-slate-200" : "text-slate-700",
                        date.isToday ? "bg-blue-50 text-blue-600 font-bold" : "",
                        date.isSelected ? "bg-slate-900 text-white shadow-md scale-105" : "hover:bg-slate-50"
                    )}>
                        {date.day}
                        {date.hasData && !date.isSelected && (
                            <div className="absolute bottom-1.5 w-1 h-1 bg-blue-500 rounded-full"></div>
                        )}
                    </button>
                </div>
            ))}
        </div>
    </div>
);

const LogItem = ({ type, time, title, detail }: { type: 'meal' | 'med' | 'symptom', time: string, title: string, detail: string }) => {
    const icons = {
        meal: { icon: '🍚', color: 'bg-orange-100 text-orange-600' },
        med: { icon: '💊', color: 'bg-blue-100 text-blue-600' },
        symptom: { icon: '📝', color: 'bg-purple-100 text-purple-600' }
    };

    return (
        <div className="flex gap-4 p-4 bg-white rounded-2xl border border-slate-100 shadow-sm active:scale-[0.99] transition-transform">
            <div className={cn("w-12 h-12 rounded-full flex items-center justify-center text-xl shrink-0", icons[type].color)}>
                {icons[type].icon}
            </div>
            <div className="flex-1">
                <div className="flex justify-between items-start mb-0.5">
                    <h4 className="font-bold text-slate-800 text-[15px]">{title}</h4>
                    <span className="text-xs text-slate-400">{time}</span>
                </div>
                <p className="text-sm text-slate-500 leading-snug">{detail}</p>
            </div>
        </div>
    );
};

export function LogUI() {
    return (
        <div className="relative w-full max-w-[390px] h-[844px] bg-[#f8fafc] rounded-[44px] shadow-2xl overflow-hidden border-[8px] border-white flex flex-col ring-1 ring-slate-900/5">
             {/* Status Bar */}
             <div className="h-12 bg-white flex justify-between items-end px-6 pb-2 text-[15px] font-semibold text-slate-900 z-30 select-none">
                <span className="ml-2">9:45</span>
                <div className="flex items-center gap-1.5 mr-2">
                    <div className="w-4 h-4 rounded-full bg-slate-900/20" />
                    <div className="w-4 h-4 rounded-full bg-slate-900/20" />
                </div>
            </div>

            <Header />

            <div className="flex-1 overflow-y-auto scrollbar-hide pb-20">
                <CalendarView />

                <div className="px-5 py-6">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-bold text-slate-800">1월 12일 (월)</h3>
                        <span className="text-xs font-medium text-slate-400 bg-slate-100 px-2 py-1 rounded-md">총 3건</span>
                    </div>

                    <div className="flex flex-col gap-3">
                        <LogItem 
                            type="meal" 
                            time="오전 08:30" 
                            title="아침 식사" 
                            detail="처방식 40g (평소보다 잘 먹음)" 
                        />
                         <LogItem 
                            type="med" 
                            time="오전 08:35" 
                            title="오전 투약" 
                            detail="크레메진 1알, 오메가3 1캡슐" 
                        />
                         <LogItem 
                            type="symptom" 
                            time="오후 02:15" 
                            title="특이 증상 기록" 
                            detail="약간의 무기력증 보임. 구토는 없음." 
                        />
                    </div>
                </div>
            </div>

            {/* Floating Action Button */}
            <div className="absolute bottom-8 right-5 z-40">
                <button className="w-14 h-14 bg-slate-900 rounded-full shadow-lg shadow-slate-900/30 flex items-center justify-center text-white hover:bg-slate-800 transition-colors active:scale-90">
                    <Plus size={28} />
                </button>
            </div>

            {/* Home Indicator */}
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-slate-900 rounded-full z-30 opacity-20"></div>
        </div>
    );
}
