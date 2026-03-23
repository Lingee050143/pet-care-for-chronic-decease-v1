import React from 'react';
import { ChevronLeft, MoreVertical, Utensils, Clock, ChevronRight, CheckCircle, Info, Droplets, Pill } from 'lucide-react';
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const Header = () => (
    <div className="h-14 bg-white/90 backdrop-blur-md flex items-center justify-between px-4 sticky top-0 z-30 border-b border-slate-50">
        <button className="p-2 text-slate-600 hover:bg-slate-50 rounded-full transition-colors">
            <ChevronLeft size={24} />
        </button>
        <span className="text-[17px] font-bold text-slate-800">맞춤 케어 플랜</span>
        <button className="p-2 text-slate-400 hover:text-slate-600 rounded-full transition-colors">
            <MoreVertical size={22} />
        </button>
    </div>
);

const PetProfileSummary = () => (
    <div className="px-6 py-6 bg-white pb-8">
        <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-slate-200 overflow-hidden border-2 border-white shadow-md relative">
                {/* Placeholder for Pet Image */}
                <div className="w-full h-full bg-amber-100 flex items-center justify-center text-2xl">🐶</div>
            </div>
            <div>
                <div className="flex items-center gap-2 mb-1">
                    <h2 className="text-2xl font-bold text-slate-900">레오</h2>
                    <span className="px-2 py-0.5 bg-orange-100 text-orange-600 text-[11px] font-bold rounded-full border border-orange-200">
                        CKD 3기
                    </span>
                </div>
                <p className="text-slate-500 text-sm">체중 4.2kg • 목표 체중까지 -0.3kg</p>
            </div>
        </div>
        
        <div className="mt-5 grid grid-cols-3 gap-3">
             <div className="bg-slate-50 rounded-xl p-3 text-center border border-slate-100">
                 <div className="text-[11px] text-slate-400 font-medium mb-1">일일 칼로리</div>
                 <div className="text-slate-800 font-bold">240 <span className="text-[10px] font-normal text-slate-400">kcal</span></div>
             </div>
             <div className="bg-slate-50 rounded-xl p-3 text-center border border-slate-100">
                 <div className="text-[11px] text-slate-400 font-medium mb-1">음수량 목표</div>
                 <div className="text-slate-800 font-bold">250 <span className="text-[10px] font-normal text-slate-400">ml</span></div>
             </div>
             <div className="bg-slate-50 rounded-xl p-3 text-center border border-slate-100">
                 <div className="text-[11px] text-slate-400 font-medium mb-1">단백질 제한</div>
                 <div className="text-slate-800 font-bold">엄격 <span className="text-[10px] font-normal text-slate-400">단계</span></div>
             </div>
        </div>
    </div>
);

const DietCard = ({ title, desc, tag, colorClass, icon: Icon }: { title: string, desc: string, tag: string, colorClass: string, icon: any }) => (
    <button className="w-full text-left bg-white rounded-2xl p-4 shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-slate-100 mb-3 relative overflow-hidden group active:scale-[0.98] transition-all">
        <div className={cn("absolute top-0 left-0 w-1.5 h-full", colorClass)}></div>
        <div className="flex items-start justify-between">
            <div className="flex gap-3">
                <div className={cn("w-10 h-10 rounded-full flex items-center justify-center shrink-0 mt-0.5", colorClass.replace('bg-', 'bg-opacity-10 text-').replace('text-', 'bg-'))}>
                    <Icon size={18} className={colorClass.replace('bg-', 'text-')} />
                </div>
                <div>
                    <h3 className="font-bold text-slate-800 mb-1 flex items-center gap-2">
                        {title}
                        <ChevronRight size={14} className="text-slate-300 group-hover:text-slate-400 group-hover:translate-x-0.5 transition-all" />
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed mb-2">{desc}</p>
                    <span className="inline-block px-2 py-0.5 bg-slate-100 text-slate-500 text-[10px] font-medium rounded-md">
                        {tag}
                    </span>
                </div>
            </div>
        </div>
    </button>
);

const TimelineItem = ({ time, title, sub, status, isLast }: { time: string, title: string, sub: string, status: 'done' | 'active' | 'upcoming', isLast?: boolean }) => (
    <div className="flex relative">
        <div className="flex flex-col items-center mr-4">
            <div className={cn(
                "w-3 h-3 rounded-full z-10 border-2",
                status === 'done' ? "bg-blue-500 border-blue-500" : 
                status === 'active' ? "bg-white border-blue-500 ring-2 ring-blue-100" : "bg-slate-200 border-slate-200"
            )}></div>
            {!isLast && <div className={cn("w-0.5 h-full -mt-1", status === 'done' ? "bg-blue-100" : "bg-slate-100")}></div>}
        </div>
        <div className="pb-8 flex-1">
            <div className="flex justify-between items-start mb-1">
                <span className={cn("text-xs font-semibold", status === 'upcoming' ? "text-slate-400" : "text-blue-600")}>{time}</span>
                {status === 'done' && <CheckCircle size={14} className="text-blue-500" />}
            </div>
            <div className={cn("p-3 rounded-xl border", status === 'active' ? "bg-white border-blue-200 shadow-sm" : "bg-slate-50 border-transparent")}>
                <h4 className={cn("font-bold text-sm mb-0.5", status === 'upcoming' ? "text-slate-500" : "text-slate-800")}>{title}</h4>
                <p className="text-xs text-slate-400">{sub}</p>
            </div>
        </div>
    </div>
);

export function CarePlanUI() {
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

            <div className="flex-1 overflow-y-auto scrollbar-hide">
                <PetProfileSummary />

                <div className="px-5 py-6">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-bold text-slate-800">식단 추천 가이드</h3>
                        <button className="text-xs text-blue-600 font-medium bg-blue-50 px-2 py-1 rounded-md">전체보기</button>
                    </div>
                    
                    <DietCard 
                        title="신장 처방식 (건식)"
                        desc="인 함량이 낮고 양질의 단백질이 포함된 로얄캐닌 레날 셀렉트 급여를 권장합니다."
                        tag="#처방사료 #기호성좋음"
                        colorClass="bg-emerald-500"
                        icon={Utensils}
                    />
                    <DietCard 
                        title="오메가-3 보조제"
                        desc="신장 혈류 개선을 위해 하루 1캡슐 급여가 필요합니다. 사료에 섞어주세요."
                        tag="#염증완화 #혈류개선"
                        colorClass="bg-blue-500"
                        icon={Pill}
                    />
                     <DietCard 
                        title="음수량 늘리기 팁"
                        desc="곳곳에 물그릇을 배치하고, 흐르는 물(분수대)��� 사용해보세요."
                        tag="#탈수방지 #수분공급"
                        colorClass="bg-indigo-400"
                        icon={Droplets}
                    />

                    <div className="h-8"></div>

                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-bold text-slate-800">오늘의 급여 스케줄</h3>
                        <Info size={16} className="text-slate-300" />
                    </div>

                    <div className="pl-2">
                        <TimelineItem 
                            time="오전 08:00"
                            title="아침 식사 & 투약"
                            sub="처방식 40g + 크레메진 1알"
                            status="done"
                        />
                         <TimelineItem 
                            time="오후 02:00"
                            title="음수량 체크"
                            sub="현재까지 120ml / 목표 250ml"
                            status="active"
                        />
                         <TimelineItem 
                            time="오후 07:00"
                            title="저녁 식사 & 투약"
                            sub="처방식 40g + 보조제 믹스"
                            status="upcoming"
                            isLast={true}
                        />
                    </div>
                </div>
            </div>

            {/* Home Indicator */}
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-slate-900 rounded-full z-30 opacity-20"></div>
        </div>
    );
}
