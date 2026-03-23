import React from 'react';
import { Bell, Home, MessageCircle, ClipboardList, Settings, Activity, Calendar, CheckCircle2, ChevronRight, Signal, Wifi, Battery } from 'lucide-react';
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const CareItem = ({ label, time, completed, active }: { label: string, time: string, completed?: boolean, active?: boolean }) => (
    <div className={cn("flex items-center p-3 rounded-xl border transition-all", 
        completed ? "bg-slate-50 border-slate-100 opacity-60" : 
        active ? "bg-[#f0f9ff] border-[#bae6fd] ring-1 ring-[#7dd3fc]" : "bg-white border-slate-100"
    )}>
        <div className={cn("w-6 h-6 rounded-full border-2 flex items-center justify-center mr-3 shrink-0",
            completed ? "bg-slate-400 border-slate-400" : 
            active ? "border-[#0ea5e9] bg-white" : "border-slate-300"
        )}>
            {completed && <CheckCircle2 size={14} className="text-white" />}
            {active && <div className="w-2.5 h-2.5 rounded-full bg-[#0ea5e9]" />}
        </div>
        <div className="flex-1">
            <p className={cn("text-[15px] font-medium", completed ? "text-slate-500 line-through" : "text-slate-800")}>{label}</p>
            <p className="text-xs text-slate-400">{time}</p>
        </div>
        {active && <button className="px-4 py-1.5 bg-[#0ea5e9] hover:bg-[#0284c7] text-white text-xs font-bold rounded-lg shadow-sm transition-colors">완료</button>}
    </div>
)

const NotificationCard = ({ icon, iconBg, title, desc, urgent }: any) => (
    <div className="flex items-start p-4 bg-white rounded-2xl shadow-[0_2px_8px_-2px_rgba(0,0,0,0.05)] border border-slate-100 cursor-pointer hover:bg-slate-50 transition-colors">
        <div className={cn("w-10 h-10 rounded-full flex items-center justify-center mr-4 shrink-0 shadow-sm", iconBg)}>
            {icon}
        </div>
        <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between">
                <h4 className="text-[15px] font-bold text-slate-800 truncate">{title}</h4>
                {urgent && <span className="w-2 h-2 rounded-full bg-red-500 ml-2" />}
            </div>
            <p className="text-[13px] text-slate-500 mt-1 leading-snug">{desc}</p>
        </div>
        <ChevronRight size={18} className="text-slate-300 ml-2 mt-2" />
    </div>
)

const NavItem = ({ icon, label, active }: { icon: React.ReactNode, label: string, active?: boolean }) => (
    <button className="flex flex-col items-center gap-1.5 w-full">
        <div className={cn("transition-colors", active ? "text-[#0ea5e9]" : "text-[#94a3b8]")}>
            {icon}
        </div>
        <span className={cn("text-[11px] font-medium", active ? "text-[#0ea5e9]" : "text-[#94a3b8]")}>
            {label}
        </span>
    </button>
)

export function HomeUI() {
  return (
      <div className="relative w-full max-w-[390px] h-[844px] bg-[#f8fafc] rounded-[44px] shadow-2xl overflow-hidden border-[8px] border-white flex flex-col ring-1 ring-slate-900/5">
        
        {/* Status Bar Mock */}
        <div className="h-12 bg-white flex justify-between items-end px-6 pb-2 text-[15px] font-semibold text-slate-900 z-10 select-none">
            <span className="ml-2">9:41</span>
            <div className="flex items-center gap-1.5 mr-2">
                <Signal size={16} fill="currentColor" />
                <Wifi size={16} />
                <Battery size={20} />
            </div>
        </div>

        {/* Content Scroll Area */}
        <div className="flex-1 overflow-y-auto pb-24 scrollbar-hide">
            
            {/* Header Section */}
            <div className="bg-white px-6 pt-4 pb-8 rounded-b-[36px] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] relative z-10">
                <div className="flex justify-between items-center mb-8">
                    <span className="text-xl font-extrabold text-[#334155] tracking-tight">VetTrack</span>
                    <button className="p-2.5 bg-slate-50 hover:bg-slate-100 rounded-full text-slate-600 transition-colors relative">
                        <Bell size={20} />
                        <span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 border-2 border-white rounded-full"></span>
                    </button>
                </div>

                {/* Pet Status Summary */}
                <div className="flex items-center gap-5">
                     <div className="w-20 h-20 bg-gradient-to-br from-[#e0f2fe] to-[#bae6fd] rounded-full flex items-center justify-center overflow-hidden border-4 border-white shadow-md relative">
                        <span className="text-4xl transform translate-y-1">🐈</span>
                        <div className="absolute bottom-1 right-1 w-5 h-5 bg-emerald-500 border-2 border-white rounded-full"></div>
                     </div>
                     <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                            <h2 className="text-2xl font-bold text-slate-800">레오</h2>
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <div className="flex items-center">
                                <span className="inline-flex items-center px-2.5 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-md ring-1 ring-emerald-100/50">
                                    안정적인 상태
                                </span>
                            </div>
                            <span className="text-sm text-slate-500 font-medium pl-0.5">만성 신부전(CKD) 2기 관리 중</span>
                        </div>
                     </div>
                </div>
            </div>

            {/* Main Section: Today's Care Summary */}
            <div className="px-6 mt-8">
                <div className="flex justify-between items-end mb-4 px-1">
                    <h3 className="text-[19px] font-bold text-slate-800">오늘의 케어</h3>
                    <span className="text-sm font-medium text-slate-400">1월 12일 (월)</span>
                </div>
                
                <div className="bg-white p-6 rounded-[28px] shadow-sm border border-slate-100/60 relative overflow-hidden">
                    {/* Decorative background blob */}
                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-50 rounded-full opacity-50 blur-2xl"></div>

                    {/* Progress Bar */}
                    <div className="relative mb-6">
                        <div className="flex items-end justify-between text-sm mb-3">
                            <span className="font-bold text-slate-600">달성률</span>
                            <div className="flex items-baseline gap-1">
                                <span className="text-3xl font-extrabold text-[#0ea5e9]">66</span>
                                <span className="text-lg font-bold text-[#0ea5e9]">%</span>
                            </div>
                        </div>
                        <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden">
                            <motion.div 
                                initial={{ width: 0 }}
                                animate={{ width: "66%" }}
                                transition={{ duration: 1, ease: "easeOut" }}
                                className="bg-gradient-to-r from-[#0ea5e9] to-[#38bdf8] h-full rounded-full" 
                            />
                        </div>
                    </div>

                    {/* Checklist */}
                    <div className="space-y-3 relative z-10">
                        <CareItem label="오전 약 급여 (베라실 외 2종)" time="09:00" completed />
                        <CareItem label="처방식 사료 급여 (Hill's k/d)" time="12:00" completed />
                        <CareItem label="피하 수액 (나비침, 150ml)" time="20:00" active />
                        <CareItem label="음수량 체크 (목표 200ml)" time="상시" />
                    </div>
                </div>
            </div>

            {/* Secondary Section: Key Notifications */}
            <div className="px-6 mt-8 mb-6">
                 <h3 className="text-[19px] font-bold text-slate-800 mb-4 px-1">주요 알림</h3>
                 
                 <div className="space-y-3">
                    <NotificationCard 
                        icon={<Calendar size={20} className="text-white" />}
                        iconBg="bg-[#6366f1]"
                        title="정기 혈액 검사 예정"
                        desc="3일 뒤 예약이 있습니다. (1월 15일 14:00)"
                        urgent
                    />
                    <NotificationCard 
                        icon={<Activity size={20} className="text-white" />}
                        iconBg="bg-[#f97316]"
                        title="최근 체중 변화 감지"
                        desc="지난주 대비 0.2kg 감소했습니다. 식사량을 확인해주세요."
                    />
                 </div>
            </div>

        </div>

        {/* Bottom Navigation */}
        <div className="absolute bottom-0 w-full bg-white/95 backdrop-blur-md border-t border-slate-100 px-2 pb-8 pt-3 flex justify-around items-center z-20">
            <NavItem icon={<Home size={26} strokeWidth={2.5} />} label="홈" active />
            <NavItem icon={<MessageCircle size={26} />} label="상담" />
            <NavItem icon={<ClipboardList size={26} />} label="케어플랜" />
            <NavItem icon={<Activity size={26} />} label="기록" />
            <NavItem icon={<Settings size={26} />} label="설정" />
        </div>

        {/* Home Indicator */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-slate-900 rounded-full z-30 opacity-20"></div>

      </div>
  );
}

// Needed for the framer-motion animation
import { motion } from 'framer-motion';
