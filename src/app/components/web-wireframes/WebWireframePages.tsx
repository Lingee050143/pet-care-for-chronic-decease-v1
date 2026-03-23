import React, { useState } from 'react';
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area 
} from 'recharts';
import { 
  Calendar, Clock, CheckCircle2, AlertCircle, TrendingUp, TrendingDown, 
  MoreHorizontal, ChevronRight, ChevronLeft, Plus, Filter, MapPin, Share2, MessageSquare, ThumbsUp,
  FileText, Activity, Pill, Stethoscope, ArrowRight, Settings, LogOut, Download, Search,
  ChevronDown, Check, User, X, Repeat, Save, Edit2, Pen, MessageCircle, Heart, Bell, Info,
  BookOpen, Utensils, Camera, Syringe, Gift
} from 'lucide-react';
import { WCard, WButton, WBadge, cn } from './WebWireframeComponents';
import svgPaths from "@/imports/svg-bjbvs9aekx";

// --- Dummy Data ---
const PET_DATABASE: Record<string, any> = {
  'leo': {
    id: 'leo',
    name: '레오',
    breed: '골든 리트리버 믹스',
    age: '8살',
    weight: '24.2kg',
    gender: '수컷',
    ckdStage: 'CKD 2기',
    condition: '안정',
    appetite: 85,
    water: 220, // Display value adjusted to look normal
    symptoms: [],
    avatarColor: 'bg-slate-200',
    type: 'dog',
    chartData: [
      { name: '월', appetite: 100, water: 80 },
      { name: '화', appetite: 95, water: 85 },
      { name: '수', appetite: 90, water: 70 },
      { name: '목', appetite: 60, water: 65 },
      { name: '금', appetite: 55, water: 60 },
      { name: '토', appetite: 70, water: 75 },
      { name: '일', appetite: 80, water: 80 },
    ],
    schedules: [
      { id: 1, time: "09:00 AM", title: "Dr. Kim 정기 검진", loc: "시티 동물병원", type: "Visit", status: "Pending" },
      { id: 2, time: "02:00 PM", title: "항생제 투약", loc: "자택", type: "Med", status: "Pending" },
      { id: 3, time: "08:00 PM", title: "신장 처방식 급여", loc: "자택", type: "Food", status: "Pending" },
    ]
  },
  'coco': {
    id: 'coco',
    name: '코코',
    breed: '코리안 숏헤어',
    age: '14살',
    weight: '3.8kg',
    gender: '암컷',
    ckdStage: 'CKD 3기',
    condition: '주의',
    appetite: 45,
    water: 180,
    symptoms: ['구토', '기력저하'],
    avatarColor: 'bg-amber-200',
    type: 'cat',
    chartData: [
      { name: '월', appetite: 60, water: 40 },
      { name: '화', appetite: 55, water: 35 },
      { name: '수', appetite: 50, water: 30 },
      { name: '목', appetite: 40, water: 20 },
      { name: '금', appetite: 45, water: 25 },
      { name: '토', appetite: 40, water: 30 },
      { name: '일', appetite: 45, water: 35 },
    ],
    schedules: [
      { id: 101, time: "10:00 AM", title: "피하 수액", loc: "자택", type: "Treatment", status: "Pending" },
      { id: 102, time: "06:00 PM", title: "심장 사상충 약", loc: "자택", type: "Med", status: "Pending" },
    ]
  }
};


// --- 0. Status Bar Component ---
const StatusBar = ({ theme = "dark" }: { theme?: "dark" | "light" }) => {
    return (
        <div className={cn("w-full h-[44px] flex items-center justify-between px-6 z-50 shrink-0", theme === "dark" ? "text-slate-900" : "text-white")}>
             <span className="text-[15px] font-semibold w-[54px] text-center tracking-tight">9:41</span>
             <div className="flex items-center gap-[6px]">
                 <svg width="18" height="12" viewBox="0 0 18 12" fill="currentColor"><path d="M1.33334 8.66667H4V11.3333H1.33334V8.66667ZM5.77779 6H8.44445V11.3333H5.77779V6ZM10.2222 3.33333H12.8889V11.3333H10.2222V3.33333ZM14.6667 1.33333H17.3333V11.3333H14.6667V1.33333Z" /></svg>
                 <svg width="16" height="12" viewBox="0 0 16 12" fill="currentColor"><path d="M8 0.333333C4.852 0.333333 1.84933 1.54933 0 3.72267L1.13067 4.97867C2.69467 3.12533 5.23733 2.08533 8 2.08533C10.7627 2.08533 13.3053 3.12533 14.8693 4.97867L16 3.72267C14.1493 1.54933 11.148 0.333333 8 0.333333Z" /><path d="M8 4.29333C6.012 4.29333 4.09067 5.064 2.65867 6.45333L8 12.3333L13.3413 6.45333C11.9093 5.064 9.988 4.29333 8 4.29333Z" /></svg>
                 <div className="w-[24px] h-[12px] border border-current rounded-[3px] relative"><div className="absolute inset-[1.5px] right-[4px] bg-current rounded-[1px]" /><div className="absolute -right-[3px] top-[3px] h-[4px] w-[2px] bg-current rounded-r-[1px]" /></div>
             </div>
        </div>
    );
}

// --- 1. Dashboard ---
export const PageDashboard = ({ hasPet = false, onNavigate, currentPetId, setCurrentPetId }: { hasPet?: boolean, onNavigate?: (page: string) => void, currentPetId: string, setCurrentPetId: (id: string) => void }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [trendPeriod, setTrendPeriod] = useState('1w');
  const [dashboardSchedules, setDashboardSchedules] = useState([
      { time: "오전 08:00", title: "인흡착제", type: "Med", status: "Done" },
      { time: "오후 02:00", title: "피하 수액 (100ml)", type: "Treatment", status: "Pending" },
      { time: "오후 08:00", title: "처방식 급여", type: "Food", status: "Pending" },
  ]);

  const toggleDashboardSchedule = (index: number) => {
      setDashboardSchedules(prev => prev.map((item, i) => 
          i === index ? { ...item, status: item.status === 'Done' ? 'Pending' : 'Done' } : item
      ));
  };

  const pet = PET_DATABASE[currentPetId] || PET_DATABASE['leo'];

  // Mock Trend Data
  const trendData = [
      { name: '���', appetite: 100, water: 80 },
      { name: '화', appetite: 95, water: 85 },
      { name: '수', appetite: 90, water: 70 },
      { name: '목', appetite: 60, water: 65 },
      { name: '금', appetite: 55, water: 60 },
      { name: '토', appetite: 70, water: 75 },
      { name: '일', appetite: 80, water: 80 },
  ];

  return (
    <div className="flex flex-col gap-[24px] pb-[90px] bg-[#f8fafc] min-h-screen relative overflow-hidden">
       {/* Status Bar */}
       <div className="fixed top-0 left-0 right-0 z-[100] bg-[#f8fafc]">
           <StatusBar theme="dark" />
       </div>

      {!hasPet ? (
         <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-6 px-6 pt-[44px]">
             <div className="w-32 h-32 bg-slate-100 rounded-full flex items-center justify-center mb-4">
                 <Plus className="w-12 h-12 text-slate-300" />
             </div>
             <div className="space-y-2 max-w-md">
                 <h2 className="text-2xl font-bold text-slate-900">아직 등록된 반려동물이 없어요</h2>
                 <p className="text-slate-500 leading-relaxed">
                     반려동물을 등록하면 건강 관리와 일정 기능을 사용할 수 있어요.
                 </p>
             </div>
             <div className="pt-4">
                 <WButton variant="primary" className="px-8 py-3 text-base h-auto" icon={Plus} onClick={() => onNavigate?.('PetRegister')}>반려동물 등록하기</WButton>
             </div>
         </div>
      ) : (
        <>
          {/* Top Section: Pet Selector */}
          <div className="relative px-[16px] h-[56px] flex items-center justify-between shrink-0 mt-[44px]">
             <div className="relative">
                <button 
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center gap-[12px] h-[56px] pl-[8px] rounded-[14px]"
                >
                   {/* Avatar Placeholder */}
                   <div className="w-[40px] h-[40px] rounded-[19300900px] bg-[#e2e8f0] flex items-center justify-center shrink-0">
                       <p className="font-bold text-[14px] text-[#314158] leading-[20px] tracking-[-0.15px]">{pet.name[0]}</p>
                   </div>
                   
                   {/* Name + Icon */}
                   <div className="flex items-center gap-[4px]">
                       <p className="font-bold text-[18px] text-[#0f172b] leading-[28px] tracking-[-0.44px]">{pet.name}</p>
                       <div className="w-[16px] h-[16px]">
                           <svg className="block w-full h-full" fill="none" viewBox="0 0 16 16">
                               <path d={svgPaths.p2d48580} stroke="#90A1B9" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                           </svg>
                       </div>
                   </div>
                </button>

                {/* Dropdown Logic */}
                {isDropdownOpen && (
                    <>
                    <div className="fixed inset-0 z-10" onClick={() => setIsDropdownOpen(false)} />
                    <div className="absolute top-[50px] left-[8px] mt-2 w-[200px] bg-white rounded-[14px] shadow-xl border border-slate-100 z-20 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                        <div className="p-2 space-y-1">
                            {Object.values(PET_DATABASE).map((p: any) => (
                                <button 
                                    key={p.id}
                                    onClick={() => {
                                        setCurrentPetId(p.id);
                                        setIsDropdownOpen(false);
                                    }}
                                    className={cn(
                                        "w-full flex items-center gap-3 p-2 rounded-[10px] transition-colors text-left",
                                        currentPetId === p.id ? "bg-[#f8fafc] text-[#0f172b]" : "text-[#62748e] hover:bg-[#f8fafc] hover:text-[#0f172b]"
                                    )}
                                >
                                    <div className={cn("w-[24px] h-[24px] rounded-full flex items-center justify-center text-[10px] font-bold", p.avatarColor)}>
                                        {p.name[0]}
                                    </div>
                                    <span className="font-bold text-[14px]">{p.name}</span>
                                    {currentPetId === p.id && <Check className="w-4 h-4 ml-auto" />}
                                </button>
                            ))}
                        </div>
                    </div>
                    </>
                )}
             </div>

             {/* Info Icon */}
             <button className="w-[40px] h-[40px] flex items-center justify-center rounded-full hover:bg-slate-100 transition-colors">
                <div className="w-[24px] h-[24px]">
                    <svg className="block w-full h-full" fill="none" viewBox="0 0 22 22">
                        <path d={svgPaths.pdca7d00} stroke="#90A1B9" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                        <path d="M10.9988 10.9999V14.9999" stroke="#90A1B9" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                        <path d="M10.9988 6.99988H11.0088" stroke="#90A1B9" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                </div>
             </button>
          </div>

          <div className="flex flex-col gap-[24px] px-[16px]">
              {/* 1. Main Stats Card (Compact Horizontal Layout - Requested Change) */}
              <div className="bg-white rounded-[14px] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.04)] border border-[#f1f5f9] overflow-hidden p-5">
                  <div className="flex items-center gap-5">
                      {/* Avatar */}
                      <div className="w-[84px] h-[84px] rounded-full bg-[#e2e8f0] shrink-0" />
                      
                      {/* Info & Stats */}
                      <div className="flex flex-col flex-1 gap-3">
                          {/* Name + Badges */}
                          <div className="flex flex-wrap items-center gap-2">
                              <span className="text-[20px] font-bold text-[#0f172b] tracking-[-0.45px] mr-1">{pet.name}</span>
                              <div className="h-[24px] px-2.5 rounded-[6px] bg-[#fffbeb] border border-[#fef3c6] flex items-center justify-center">
                                  <span className="text-[11px] font-bold text-[#bb4d00]">{pet.ckdStage}</span>
                              </div>
                              <div className="h-[24px] px-2.5 rounded-[6px] bg-[#f0fdf4] border border-[#dcfce7] flex items-center justify-center">
                                  <span className="text-[11px] font-bold text-[#008236]">{pet.condition}</span>
                              </div>
                          </div>
                          
                          {/* Stats Row */}
                          <div className="flex items-center gap-6 mt-1">
                              {/* Meal */}
                              <div className="flex flex-col">
                                  <div className="flex items-baseline gap-0.5">
                                      <span className="text-[22px] font-bold text-[#0f172b] tracking-tight">{pet.appetite}</span>
                                      <span className="text-[13px] text-[#90a1b9] font-medium">g</span>
                                  </div>
                                  <span className="text-[11px] font-medium text-[#64748b] mt-0.5">식사량</span>
                              </div>
                              
                              {/* Divider */}
                              <div className="w-[1px] h-[24px] bg-[#f1f5f9]" />
                              
                              {/* Water */}
                              <div className="flex flex-col">
                                  <div className="flex items-baseline gap-0.5">
                                      <span className="text-[22px] font-bold text-[#0f172b] tracking-tight">{pet.water}</span>
                                      <span className="text-[13px] text-[#90a1b9] font-medium">ml</span>
                                  </div>
                                  <span className="text-[11px] font-medium text-[#64748b] mt-0.5">음수량</span>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>

              {/* 2. Today's Schedule (Moved Up) */}
              <div className="bg-white rounded-[14px] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.04)] border border-[#f1f5f9] overflow-hidden">
                  <div className="p-[24px] flex flex-col gap-[12px]">
                      {/* Heading & View All */}
                      <div className="w-full flex items-center justify-between pb-[0.575px] border-b border-[#f8fafc] mb-[12px]">
                          <h3 className="text-[18px] font-semibold text-[#0f172b] tracking-[-0.44px] leading-[27px]">오늘의 일정</h3>
                          <button 
                            onClick={() => onNavigate?.('Schedule')}
                            className="text-[12px] font-medium text-[#62748e] leading-[16px]"
                          >
                              전체보기
                          </button>
                      </div>

                      {/* List */}
                      <div className="flex flex-col gap-[16px]">
                          {dashboardSchedules.map((item, i) => (
                              <div key={i} className="relative h-[49px] w-full">
                                  {/* Time */}
                                  <div className="absolute left-0 top-[4px] w-[64px]">
                                      <span className="text-[14px] font-medium text-[#62748e] tracking-[-0.3px] leading-[20px]">
                                          {item.time}
                                      </span>
                                  </div>

                                  {/* Card */}
                                  <div 
                                    onClick={() => toggleDashboardSchedule(i)}
                                    className={cn(
                                        "absolute left-[80px] top-0 right-0 h-[49px] rounded-[10px] border border-[#e2e8f0] flex items-center justify-between px-[13px] transition-all cursor-pointer active:scale-[0.98]",
                                        item.status === 'Done' ? "bg-[#f8fafc] opacity-60" : "bg-white shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]"
                                    )}
                                  >
                                      {/* Left Content */}
                                      <div className="flex items-center gap-[12px]">
                                          <div className={cn(
                                              "w-[8px] h-[8px] rounded-full shrink-0",
                                              item.type === 'Med' ? "bg-[#51a2ff]" : "bg-[#ff8904]"
                                          )} />
                                          <span className={cn(
                                              "text-[16px] font-medium text-[#0f172b] tracking-[-0.62px] leading-[24px]",
                                              item.status === 'Done' && "line-through decoration-solid"
                                          )}>
                                              {item.title}
                                          </span>
                                      </div>

                                      {/* Right Icon */}
                                      <div className="w-[20px] h-[20px] flex items-center justify-center">
                                          {item.status === 'Done' ? (
                                              <svg className="w-full h-full" fill="none" viewBox="0 0 20 20">
                                                  <path d={svgPaths.p229dea00} stroke="#00A63E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66" />
                                              </svg>
                                          ) : (
                                              <div className="w-full h-full rounded-full border-[1.726px] border-[#cad5e2]" />
                                          )}
                                      </div>
                                  </div>
                              </div>
                          ))}
                      </div>
                  </div>
              </div>

              {/* 3. Condition Trend */}
              <div className="bg-white rounded-[14px] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.04)] border border-[#f1f5f9] overflow-hidden">
                  <div className="p-[24px] pb-[12px]">
                      <div className="flex items-center justify-between mb-[24px]">
                          <h3 className="text-[18px] font-semibold text-[#0f172b] tracking-[-0.44px] leading-[27px]">컨디션 추이</h3>
                          
                          {/* Tabs */}
                          <div className="flex bg-[#f1f5f9] p-[2px] rounded-[8px]">
                              {['1주', '1개월', '3개월'].map((label, i) => {
                                  const val = ['1w', '1m', '3m'][i];
                                  const isActive = trendPeriod === val;
                                  return (
                                      <button
                                          key={val}
                                          onClick={() => setTrendPeriod(val)}
                                          className={cn(
                                              "px-[10px] py-[4px] rounded-[6px] text-[10px] font-bold transition-all",
                                              isActive 
                                                ? "bg-white text-[#0f172b] shadow-sm" 
                                                : "text-[#94a3b8] hover:text-[#64748b]"
                                          )}
                                      >
                                          {label}
                                      </button>
                                  );
                              })}
                          </div>
                      </div>

                      <div className="w-full h-[200px] -ml-2">
                          <ResponsiveContainer width="100%" height="100%">
                              <LineChart data={trendData}>
                                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                                  <XAxis 
                                    dataKey="name" 
                                    axisLine={false} 
                                    tickLine={false} 
                                    tick={{fontSize: 12, fill: '#94a3b8'}} 
                                    dy={10} 
                                  />
                                  <YAxis 
                                    axisLine={false} 
                                    tickLine={false} 
                                    tick={{fontSize: 12, fill: '#94a3b8'}} 
                                    domain={[0, 120]}
                                    ticks={[0, 25, 50, 75, 100]}
                                  />
                                  <Tooltip contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                                  
                                  <Line 
                                    type="monotone" 
                                    dataKey="water" 
                                    stroke="#cbd5e1" 
                                    strokeWidth={2} 
                                    strokeDasharray="5 5" 
                                    dot={false}
                                  />

                                  <Line 
                                    type="monotone" 
                                    dataKey="appetite" 
                                    stroke="#94a3b8" 
                                    strokeWidth={2} 
                                    dot={(props) => {
                                        const { cx, cy, payload, key } = props;
                                        let fill = '#3b82f6';
                                        if (payload.appetite < 60) fill = '#ef4444';
                                        else if (payload.appetite < 80) fill = '#eab308';
                                        return <circle key={key} cx={cx} cy={cy} r={4} fill={fill} stroke="white" strokeWidth={2} />;
                                    }}
                                  />
                              </LineChart>
                          </ResponsiveContainer>
                      </div>
                  </div>
              </div>

              {/* 4. Weekly Analysis Banner */}
              <div className="bg-[#eff6ff] rounded-[14px] p-[16px] flex gap-[12px] items-start border border-[#dbeafe]">
                  <div className="w-[24px] h-[24px] shrink-0 mt-[2px]">
                      <AlertCircle className="w-full h-full text-[#3b82f6]" />
                  </div>
                  <div>
                      <h4 className="text-[14px] font-bold text-[#1e3a8a] mb-[2px] leading-[20px]">주간 분석</h4>
                      <p className="text-[16px] font-medium text-[#172554] leading-[24px]">
                          지난주 대비 식욕이 <span className="font-bold underline decoration-[#60a5fa] decoration-2 underline-offset-2">안정적</span>입니다. 현재 루틴을 유지하세요.
                      </p>
                  </div>
              </div>

              {/* 5. Quick Actions (Moved to Bottom) */}
              <div className="bg-white rounded-[14px] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.04)] border border-[#f1f5f9] overflow-hidden mb-6">
                  <div className="p-[24px] flex flex-col gap-[12px]">
                      {/* Heading */}
                      <div className="w-full flex items-start pb-[0.575px] border-b border-[#f8fafc] mb-[12px]">
                          <h3 className="text-[18px] font-semibold text-[#0f172b] tracking-[-0.44px] leading-[27px]">빠른 실행</h3>
                      </div>

                      {/* Buttons */}
                      <div className="flex flex-col gap-[8px]">
                          {/* Button 1: Report */}
                          <button 
                            onClick={() => onNavigate?.('ConditionWrite')}
                            className="w-full h-[41px] bg-white rounded-[10px] border border-[#e2e8f0] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] relative flex items-center justify-center hover:bg-slate-50 transition-all active:scale-[0.99]"
                          >
                              <div className="absolute left-[16px] w-[16px] h-[16px]">
                                  <svg className="block w-full h-full" fill="none" viewBox="0 0 16 16">
                                      <g clipPath="url(#clip_report)">
                                          <path d={svgPaths.p1ce3ea80} stroke="#0F172B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                                      </g>
                                      <defs><clipPath id="clip_report"><rect width="16" height="16" fill="white"/></clipPath></defs>
                                  </svg>
                              </div>
                              <span className="text-[14px] font-medium text-[#0f172b] tracking-[-0.15px]">일일 리포트 작성</span>
                          </button>

                          {/* Button 2: Add */}
                          <button 
                            onClick={() => onNavigate?.('Schedule')}
                            className="w-full h-[41px] bg-white rounded-[10px] border border-[#e2e8f0] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] relative flex items-center justify-center hover:bg-slate-50 transition-all active:scale-[0.99]"
                          >
                              <div className="absolute left-[16px] w-[16px] h-[16px]">
                                  <svg className="block w-full h-full" fill="none" viewBox="0 0 16 16">
                                      <path d="M3.333 8H12.665" stroke="#0F172B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                                      <path d="M8 3.333V12.665" stroke="#0F172B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                                  </svg>
                              </div>
                              <span className="text-[14px] font-medium text-[#0f172b] tracking-[-0.15px]">일정 추가</span>
                          </button>
                      </div>
                  </div>
              </div>
          </div>
        </>
      )}
    </div>
  );
};

// --- 1.5 Condition Trend Detail ---
export const PageConditionTrend = ({ currentPetId, onNavigate }: { currentPetId?: string, onNavigate?: (page: string) => void }) => {
    return null; /*
                    <h1 className="text-2xl font-bold text-slate-900">디션 추이 상세</h1>
                </div>
                <div className="flex bg-slate-100 p-1 rounded-lg">
                    {['1주', '1개월', '3개월'].map((period, i) => (
                        <button key={period} className={cn("px-3 py-1 text-xs font-bold rounded-md transition-all", i === 0 ? "bg-white shadow-sm text-slate-900" : "text-slate-500 hover:text-slate-900")}>
                            {period}
                        </button>
                    ))}
                </div>
            </div>

            <WCard className="p-6">
                <div className="flex items-center justify-between mb-8">
                     <div>
                         <h2 className="text-lg font-bold text-slate-900">식욕 & 음수량 변화</h2>
                         <p className="text-sm text-slate-500">지난 7일간의 기록입니다.</p>
                     </div>
                     <div className="flex gap-4">
                         <div className="flex items-center gap-2">
                             <div className="w-3 h-3 rounded-full bg-slate-900" />
                             <span className="text-xs font-bold text-slate-600">식욕</span>
                         </div>
                         <div className="flex items-center gap-2">
                             <div className="w-3 h-3 rounded-full bg-slate-300" />
                             <span className="text-xs font-bold text-slate-600">음수량</span>
                         </div>
                     </div>
                </div>

                <div className="w-full h-[300px]">
                    <ResponsiveContainer width="100%" height={300}>
                        <LineChart data={pet.chartData}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#64748b'}} dy={10} />
                            <YAxis axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#64748b'}} />
                            <Tooltip 
                                contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                            />
                            <Line type="monotone" dataKey="appetite" stroke="#0f172a" strokeWidth={4} dot={{r: 4, fill: '#0f172a'}} activeDot={{r: 8}} />
                            <Line type="monotone" dataKey="water" stroke="#94a3b8" strokeWidth={3} strokeDasharray="5 5" dot={false} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </WCard>

            <div className="grid grid-cols-2 gap-4">
                <WCard className="p-4">
                    <div className="text-sm font-medium text-slate-500 mb-1">평균 식욕</div>
                    <div className="text-2xl font-bold text-slate-900">82<span className="text-sm font-normal text-slate-400 ml-1">%</span></div>
                    <div className="flex items-center gap-1 mt-2 text-xs font-bold text-green-600 bg-green-50 w-fit px-2 py-1 rounded-full">
                        <TrendingUp className="w-3 h-3" /> 5% 증가
                    </div>
                </WCard>
                <WCard className="p-4">
                    <div className="text-sm font-medium text-slate-500 mb-1">평균 음수량</div>
                    <div className="text-2xl font-bold text-slate-900">195<span className="text-sm font-normal text-slate-400 ml-1">ml</span></div>
                    <div className="flex items-center gap-1 mt-2 text-xs font-bold text-red-600 bg-red-50 w-fit px-2 py-1 rounded-full">
                        <TrendingDown className="w-3 h-3" /> 12ml 감소
                    </div>
                </WCard>
            </div>

            <h3 className="font-bold text-slate-900 mt-8 mb-4">상세 기록</h3>
            <div className="space-y-3">
                {[
                    { date: '1월 13일', appetite: 85, water: 220, condition: '안정' },
                    { date: '1월 12일', appetite: 80, water: 210, condition: '안정' },
                    { date: '1월 11일', appetite: 75, water: 190, condition: '주의' },
                    { date: '1월 10일', appetite: 90, water: 230, condition: '안정' },
                ].map((log, i) => (
                    <WCard key={i} className="flex items-center justify-between p-4">
                        <div>
                            <div className="font-bold text-slate-900">{log.date}</div>
                            <div className="text-xs text-slate-500 mt-1">식욕 {log.appetite}% • 음수량 {log.water}ml</div>
                        </div>
                        <WBadge variant={log.condition === '안정' ? 'success' : 'warning'}>{log.condition}</WBadge>
                    </WCard>
                ))}
            </div>
        </div>
    );
    */
};

// --- 2. Schedule ---
export const PageSchedule = ({ currentPetId, onNavigate }: { currentPetId: string, onNavigate?: (page: string) => void }) => {
  const pet = PET_DATABASE[currentPetId] || PET_DATABASE['leo'];
  const [isAddMenuOpen, setIsAddMenuOpen] = useState(false);

  // Helper to get dots for the calendar
  const getDotsForDay = (day: number) => {
      // Mock logic for demo
      if (day === 13) return ['bg-blue-500', 'bg-slate-300']; // Both
      if (day === 15 || day === 28) return ['bg-blue-500']; // Visit
      if (day === 21 || day === 10) return ['bg-slate-300']; // Med
      return [];
  };

  return (
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:h-[calc(100vh-140px)] pb-24 lg:pb-0" onClick={() => setIsAddMenuOpen(false)}>
      {/* Calendar Sidebar */}
      <div className="lg:col-span-4 flex flex-col gap-6">
          <WCard className="flex-1 flex flex-col">
               <div className="flex items-center justify-between mb-6">
                   <h2 className="font-bold text-lg">2026년 1월</h2>
                   <div className="flex gap-1">
                       <WButton variant="outline" className="h-8 w-8 p-0 items-center justify-center rounded-full">&lt;</WButton>
                       <WButton variant="outline" className="h-8 w-8 p-0 items-center justify-center rounded-full">&gt;</WButton>
                   </div>
               </div>
               {/* Mock Calendar Grid */}
               <div className="grid grid-cols-7 gap-1 text-center mb-2">
                   {['일','월','화','수','목','금','토'].map((d, i) => <div key={i} className="text-xs font-bold text-slate-400 py-2">{d}</div>)}
               </div>
               <div className="grid grid-cols-7 gap-1 flex-1 auto-rows-fr">
                   {Array.from({length: 31}).map((_, i) => {
                       const day = i + 1;
                       const dots = getDotsForDay(day);
                       const isSelected = day === 13;
                       
                       return (
                       <button key={i} className={cn(
                           "h-10 lg:h-auto rounded-full text-sm font-medium hover:bg-slate-50 flex flex-col items-center justify-center relative transition-all border",
                           isSelected 
                               ? "bg-transparent text-slate-900 border-slate-900" 
                               : "text-slate-700 border-transparent"
                       )}>
                           <span className="z-10">{day}</span>
                           {dots.length > 0 && (
                               <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 flex gap-0.5 z-10">
                                   {dots.map((dot, idx) => (
                                       <div key={idx} className={cn("w-1 h-1 rounded-full", dot)} />
                                   ))}
                               </div>
                           )}
                       </button>
                   )})}
               </div>
          </WCard>
      </div>

      {/* Events List */}
      <div className="lg:col-span-8 space-y-4">
          <div className="flex justify-between items-center relative z-20">
              <h2 className="text-xl font-bold text-slate-900">1월 13일 금요일</h2>
              <div className="relative">
                  <WButton 
                    variant="primary" 
                    icon={Plus} 
                    onClick={(e) => {
                        e.stopPropagation();
                        setIsAddMenuOpen(!isAddMenuOpen);
                    }}
                  >
                    일정 추가
                  </WButton>
                  
                  {isAddMenuOpen && (
                      <div className="absolute right-0 top-full mt-2 w-40 bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden animate-in fade-in zoom-in-95 duration-200 origin-top-right">
                          {[
                              { label: '투약', icon: Pill, action: 'MedicationAdd' },
                              { label: '병원 방문', icon: Stethoscope, action: 'VisitAdd' },
                              { label: '식이', icon: FileText, action: '' }, // Placeholder actions
                              { label: '산책', icon: Activity, action: '' }
                          ].map((opt) => (
                              <button 
                                key={opt.label}
                                onClick={() => onNavigate?.(opt.action)}
                                className="w-full text-left px-4 py-3 text-sm font-bold text-slate-700 hover:bg-slate-50 hover:text-slate-900 flex items-center gap-2 transition-colors border-b last:border-none border-slate-50"
                              >
                                  <opt.icon className="w-4 h-4 text-slate-400" />
                                  {opt.label}
                              </button>
                          ))}
                      </div>
                  )}
              </div>
          </div>

          <div className="space-y-3">
               {pet.schedules?.map((evt: any, i: number) => (
                   <div key={i}>
                       {/* Mobile Version - Matches Figma Design */}
                       <div className="lg:hidden bg-white rounded-[14px] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.04)] border border-[#f1f5f9] overflow-hidden cursor-pointer hover:shadow-md transition-all">
                           <div className="flex flex-col gap-[8px] p-[10px]">
                               {/* PageSchedule (Time) */}
                               <div className="w-[84px] h-[32px] bg-[#f8fafc] rounded-[12px] flex items-center justify-center relative shrink-0">
                                   <div className="absolute inset-0 border-r-[0.575px] border-[#f1f5f9] rounded-[12px] pointer-events-none" />
                                   <span className="text-[#0f172b] text-[13px] font-bold leading-[20px] tracking-[-0.15px]">
                                       {evt.time}
                                   </span>
                               </div>

                               {/* PageSchedule1 (Content) */}
                               <div className="flex flex-col py-[16px] gap-[16px]">
                                   {/* Row 1: Badge + Title */}
                                   <div className="flex items-center gap-[16px] px-[4px]">
                                       {/* Spacer */}
                                       <div className="w-[12px] shrink-0" />
                                       
                                       {/* WBadge */}
                                       <div className={cn(
                                           "rounded-[8px] border-[0.575px] px-[7px] py-[4px] flex items-center justify-center shrink-0",
                                           evt.type === 'Visit' ? "bg-[#eef2ff] border-[#e0e7ff] text-[#432dd7]" :
                                           evt.type === 'Med' ? "bg-[#f1f5f9] border-[#e2e8f0] text-[#475569]" :
                                           "bg-[#fff7ed] border-[#ffedd5] text-[#ea580c]"
                                       )}>
                                           <span className="text-[12px] font-semibold leading-[16px]">
                                               {evt.type === 'Visit' ? '병원 방문' : evt.type === 'Med' ? '투약' : '식사'}
                                           </span>
                                       </div>

                                       {/* Heading */}
                                       <h3 className="text-[#0f172b] text-[16px] font-bold leading-[19.25px] tracking-[-0.15px]">
                                           {evt.title}
                                       </h3>
                                   </div>

                                   {/* Row 2: Location */}
                                   {evt.loc && (
                                       <div 
                                            className={cn(
                                                "flex items-center gap-[4px] p-[4px]",
                                                evt.loc?.trim() === '자택' && "cursor-default"
                                            )}
                                            onClick={(e) => {
                                                if (evt.loc?.trim() === '자택') {
                                                    e.preventDefault();
                                                    e.stopPropagation();
                                                }
                                            }}
                                       >
                                           <ChevronRight className={cn(
                                               "w-[12px] h-[12px]",
                                               evt.loc?.trim() === '자택' ? "opacity-0 pointer-events-none" : "text-[#CAD5E2]"
                                           )} />
                                           <MapPin className={cn(
                                               "w-[12px] h-[12px]",
                                               evt.loc?.trim() === '자택' ? "opacity-0 pointer-events-none" : "text-[#90A1B9]"
                                           )} />
                                           <span className={cn(
                                               "text-[12px] font-medium leading-[16px] w-[70px] text-center",
                                               evt.loc?.trim() === '자택' 
                                                ? "opacity-0 pointer-events-none" 
                                                : "text-[#90A1B9] underline decoration-[#90A1B9]"
                                           )}>
                                               {evt.loc}
                                           </span>
                                       </div>
                                   )}
                               </div>
                           </div>
                       </div>

                       {/* Desktop Version - Original Layout */}
                       <WCard className="hidden lg:flex p-0 overflow-hidden hover:shadow-md transition-all cursor-pointer min-h-[5.5rem]">
                           {/* Time Section - Fixed Width & Single Line */}
                           <div className="w-[5.5rem] bg-slate-50 border-r border-slate-100 flex flex-col items-center justify-center shrink-0 p-2 text-center group">
                               <div className="font-bold text-sm text-slate-900 whitespace-nowrap">
                                   {evt.time}
                               </div>
                           </div>

                           {/* Content Section */}
                           <div className="flex-1 p-4 flex flex-col justify-center min-w-0">
                               <div className="flex items-start gap-3 mb-1.5">
                                   {/* Badge Container - Fixed Width for alignment */}
                                   <div className="w-[4.5rem] shrink-0 flex justify-center mt-0.5"> 
                                        <WBadge 
                                            variant={evt.type === 'Visit' ? 'accent' : 'neutral'} 
                                            className="w-full justify-center px-0 text-[10px] py-0.5 h-5"
                                        >
                                           {evt.type === 'Visit' ? '병원 방문' : evt.type === 'Med' ? '투약' : '식사'}
                                       </WBadge>
                                   </div>
                                   <h3 className="font-bold text-slate-900 text-sm line-clamp-2 leading-snug break-words">
                                       {evt.title}
                                   </h3>
                               </div>
                               
                               {/* Location with Navigation Hint */}
                               {evt.loc && (
                                   evt.loc?.trim() === '자택' ? (
                                       <div className="flex items-center gap-1 text-xs text-slate-400 ml-[4.5rem] pl-3 cursor-default" onClick={(e) => e.stopPropagation()}>
                                           <ChevronRight className="w-3 h-3 text-slate-200" />
                                           <MapPin className="w-3 h-3 text-slate-300" /> 
                                           <span className="no-underline">
                                               {evt.loc}
                                           </span>
                                       </div>
                                   ) : (
                                       <button className="flex items-center gap-1 text-xs text-slate-400 hover:text-blue-600 transition-colors group/loc ml-[4.5rem] pl-3">
                                           <ChevronRight className="w-3 h-3 text-slate-300 group-hover/loc:text-blue-500 transition-colors" />
                                           <MapPin className="w-3 h-3" /> 
                                           <span className="underline decoration-transparent group-hover/loc:decoration-blue-500 underline-offset-2 transition-all">
                                               {evt.loc}
                                           </span>
                                       </button>
                                   )
                               )}
                           </div>
                       </WCard>
                   </div>
               ))}
               {(!pet.schedules || pet.schedules.length === 0) && (
                   <div className="flex flex-col items-center justify-center py-12 text-slate-400">
                       <Calendar className="w-12 h-12 mb-3 opacity-20" />
                       <p>등록된 일정이 없습니다.</p>
                   </div>
               )}
          </div>
      </div>
  </div>
  );
};

// --- 3. Condition Report ---
const ConditionForm = ({ initialData, onSave, onCancel, pet }: any) => {
    const [formData, setFormData] = useState(initialData || {
        appetite: 85,
        water: 220,
        stool: '정상',
        energy: '보통',
        symptoms: [],
        memo: ''
    });

    const handleChange = (field: string, value: any) => {
        setFormData((prev: any) => ({ ...prev, [field]: value }));
    };

    const toggleSymptom = (sym: string) => {
        setFormData((prev: any) => {
            const symptoms = prev.symptoms || [];
            if (symptoms.includes(sym)) {
                return { ...prev, symptoms: symptoms.filter((s: string) => s !== sym) };
            } else {
                return { ...prev, symptoms: [...symptoms, sym] };
            }
        });
    };

    return (
        <div className="max-w-3xl mx-auto pb-20 md:pb-0">
            {/* Header */}
            <div className="flex items-center gap-4 mb-6">
                <button onClick={onCancel} className="p-2 -ml-2 hover:bg-slate-100 rounded-full transition-colors">
                    <ChevronLeft className="w-6 h-6 text-slate-900" />
                </button>
                <h1 className="text-2xl font-bold text-slate-900">{initialData ? "컨디션 기록 수정" : "오늘의 컨디션 기록"}</h1>
            </div>

            {/* Pet Profile */}
            <div className="flex items-center gap-3 mb-6 px-2">
                <div className={cn("w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-slate-700 shadow-sm", pet.avatarColor)}>
                    {pet.name[0]}
                </div>
                <div>
                    <div className="text-sm font-bold text-slate-900">{pet.name}</div>
                    <div className="text-xs text-slate-500">{new Date().toLocaleDateString()}</div>
                </div>
            </div>

            <WCard className="space-y-8 p-6 md:p-8">
                {/* Sliders */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                        <label className="block text-base font-bold text-slate-900">식사량 (g)</label>
                        <div className="flex items-center gap-4">
                            <input type="number" className="flex-1 px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-lg font-medium focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none" 
                                value={formData.appetite} onChange={(e) => handleChange('appetite', parseInt(e.target.value))} />
                            <span className="w-12 text-right font-mono font-bold text-lg text-slate-500">g</span>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <label className="block text-base font-bold text-slate-900">음수량 (ml)</label>
                        <div className="flex items-center gap-4">
                            <input type="number" className="flex-1 px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-lg font-medium focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none" 
                                value={formData.water} onChange={(e) => handleChange('water', parseInt(e.target.value))} />
                            <span className="w-12 text-right font-mono font-bold text-lg text-slate-500">ml</span>
                        </div>
                    </div>
                </div>
                
                <div className="border-t border-slate-100 my-8" />

                {/* Selectors */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-3">
                            <label className="block text-base font-bold text-slate-900">배변 상태</label>
                            <div className="grid grid-cols-3 gap-3">
                                {['정상', '무름', '설사'].map(opt => (
                                    <button key={opt} onClick={() => handleChange('stool', opt)} className={cn(
                                        "px-2 py-4 border rounded-xl text-sm font-bold transition-all",
                                        formData.stool === opt ? "bg-slate-900 text-white border-slate-900" : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50"
                                    )}>
                                        {opt}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className="space-y-3">
                            <label className="block text-base font-bold text-slate-900">활력 수준</label>
                            <div className="grid grid-cols-3 gap-3">
                                {['높음', '보통', '낮음'].map(opt => (
                                    <button key={opt} onClick={() => handleChange('energy', opt)} className={cn(
                                        "px-2 py-4 border rounded-xl text-sm font-bold transition-all",
                                        formData.energy === opt ? "bg-slate-900 text-white border-slate-900" : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50"
                                    )}>
                                        {opt}
                                    </button>
                                ))}
                            </div>
                        </div>
                </div>

                {/* Symptoms */}
                <div className="space-y-3 pt-4">
                    <label className="block text-base font-bold text-slate-900">관찰된 증상</label>
                    <div className="flex flex-wrap gap-3">
                        {['구토', '설사', '기침', '절뚝거림', '긁음', '숨기'].map(sym => (
                            <label key={sym} className="flex items-center gap-2 px-4 py-3 bg-slate-50 rounded-xl border border-slate-200 cursor-pointer hover:bg-slate-100 transition-colors">
                                <input type="checkbox" className="w-5 h-5 rounded border-slate-300 text-slate-900 focus:ring-slate-900" 
                                    checked={formData.symptoms?.includes(sym)} onChange={() => toggleSymptom(sym)} />
                                <span className="text-sm font-medium text-slate-700">{sym}</span>
                            </label>
                        ))}
                    </div>
                </div>

                {/* Memo */}
                <div className="space-y-3 pt-4">
                    <label className="block text-base font-bold text-slate-900">메모</label>
                    <textarea 
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none resize-none"
                        rows={3}
                        placeholder="특이사항을 기록해주세요..."
                        value={formData.memo} onChange={(e) => handleChange('memo', e.target.value)}
                    />
                </div>

                {/* Buttons */}
                <div className="pt-6 flex gap-3">
                    <WButton variant="secondary" className="flex-1 py-4 text-base" onClick={onCancel}>취소</WButton>
                    <WButton variant="primary" className="flex-2 py-4 text-base flex-[2]" onClick={() => onSave(formData)}>저장하기</WButton>
                </div>
            </WCard>
        </div>
    );
};

export const PageCondition = ({ currentPetId, onNavigate, initialView = 'list' }: { currentPetId?: string, onNavigate?: (page: string) => void, initialView?: 'list' | 'form' }) => {
    const [view, setView] = useState<'list' | 'form'>(initialView);
    
    // Update view when initialView prop changes
    React.useEffect(() => {
        setView(initialView);
    }, [initialView]);

    const [editingRecord, setEditingRecord] = useState<any>(null);
    const petId = currentPetId || 'leo';
    const pet = PET_DATABASE[petId] || PET_DATABASE['leo'];

    // Mock Data for List
    const [history, setHistory] = useState([
        { id: 1, date: '1월 15일 (금)', appetite: 90, water: 240, stool: '정상', energy: '높음', memo: '산책을 평소보다 오래 했음에도 지치지 않음.', symptoms: [] },
        { id: 2, date: '1월 14일 (목)', appetite: 85, water: 220, stool: '정상', energy: '보통', memo: '', symptoms: ['구토'] },
        { id: 3, date: '1월 13일 (수)', appetite: 70, water: 180, stool: '무름', energy: '낮음', memo: '아침 사료를 조금 남김.', symptoms: ['설사', '기력저하'] },
        { id: 4, date: '1월 12일 (화)', appetite: 80, water: 210, stool: '정상', energy: '보통', memo: '', symptoms: [] },
    ]);

    if (view === 'form') {
        return (
            <ConditionForm 
                initialData={editingRecord}
                pet={pet}
                onCancel={() => {
                    setView('list');
                    setEditingRecord(null);
                }}
                onSave={(data: any) => {
                    if (editingRecord) {
                         setHistory(prev => prev.map(item => item.id === editingRecord.id ? { ...item, ...data } : item));
                    } else {
                         const newId = Math.max(...history.map(h => h.id || 0)) + 1;
                         const today = new Date();
                         const dateStr = `${today.getMonth() + 1}월 ${today.getDate()}일 (${['일','월','화','수','목','금','토'][today.getDay()]})`;
                         setHistory(prev => [{ ...data, id: newId, date: dateStr }, ...prev]);
                    }
                    setView('list');
                    setEditingRecord(null);
                }}
            />
        );
    }

    return (
        <div className="max-w-3xl mx-auto pb-20 md:pb-0 relative min-h-[600px]">
            {/* Sticky Header */}
            <div className="sticky top-16 z-40 bg-slate-50/95 backdrop-blur-sm py-4 mb-6 border-b border-slate-200/50 flex items-center justify-between transition-all -mx-6 px-6 lg:-mx-8 lg:px-8">
                <div className="flex items-center gap-4">
                    <button 
                        onClick={() => onNavigate?.('Dashboard')}
                        className="p-2 -ml-2 hover:bg-slate-200 rounded-full transition-colors"
                    >
                        <ChevronLeft className="w-6 h-6 text-slate-900" />
                    </button>
                    <h1 className="text-2xl font-bold text-slate-900">컨디션 기록</h1>
                </div>

                <button 
                    onClick={() => {
                        setEditingRecord(null);
                        setView('form');
                    }}
                    className="flex items-center gap-2 bg-slate-900 text-white px-4 py-2.5 rounded-full shadow-md hover:bg-slate-800 transition-all active:scale-95"
                 >
                     <Plus className="w-4 h-4" />
                     <span className="font-bold text-sm">오늘의 기록</span>
                 </button>
            </div>

            <div className="space-y-4">
                {history.map((record, i) => (
                    <WCard key={i} className="p-5 transition-all">
                        <div className="flex justify-between items-start mb-4">
                            <span className="text-lg font-bold text-slate-900 mt-1">{record.date}</span>
                            <div className="flex flex-col items-end gap-3">
                                <button 
                                    onClick={() => {
                                        setEditingRecord(record);
                                        setView('form');
                                    }}
                                    className="group flex items-center gap-1.5 px-2 py-1 -mr-2 cursor-pointer"
                                >
                                    <Edit2 className="w-3.5 h-3.5 text-blue-400 group-hover:text-blue-600 transition-colors" />
                                    <span className="text-xs font-bold text-blue-500 group-hover:text-blue-700 underline decoration-transparent group-hover:decoration-blue-700 underline-offset-2 transition-all">수정</span>
                                </button>
                                <div className="flex gap-2">
                                    {/* Mobile: Combined Chip */}
                                    <div className="flex md:hidden gap-2">
                                        <WBadge variant={record.stool === '정상' ? 'success' : 'warning'}>배변 {record.stool}</WBadge>
                                        <WBadge variant={record.energy === '높음' ? 'success' : record.energy === '보통' ? 'neutral' : 'warning'}>활력 {record.energy}</WBadge>
                                    </div>
                                    {/* Desktop: Label + Chip */}
                                    <div className="hidden md:flex gap-4">
                                        <div className="flex flex-col items-end gap-1">
                                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">배변 상태</span>
                                            <WBadge variant={record.stool === '정상' ? 'success' : 'warning'}>{record.stool}</WBadge>
                                        </div>
                                        <div className="flex flex-col items-end gap-1">
                                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">활력 수준</span>
                                            <WBadge variant={record.energy === '높음' ? 'success' : record.energy === '보통' ? 'neutral' : 'warning'}>{record.energy}</WBadge>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4 mb-4">
                            <div className="bg-slate-50 p-3 rounded-lg flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm text-slate-900">
                                    <Activity className="w-4 h-4" />
                                </div>
                                <div>
                                    <div className="text-xs text-slate-500 font-bold">식사량</div>
                                    <div className="font-bold text-slate-900">{record.appetite}g</div>
                                </div>
                            </div>
                            <div className="bg-slate-50 p-3 rounded-lg flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm text-slate-900">
                                    <div className="w-4 h-4 rounded-full border-2 border-slate-900" />
                                </div>
                                <div>
                                    <div className="text-xs text-slate-500 font-bold">음수량</div>
                                    <div className="font-bold text-slate-900">{record.water}ml</div>
                                </div>
                            </div>
                        </div>

                        {record.symptoms && record.symptoms.length > 0 && (
                            <div className="flex flex-wrap gap-2 mb-4">
                                {record.symptoms.slice(0, 3).map((sym: string, idx: number) => (
                                    <span key={idx} className="px-2.5 py-1 bg-red-50 text-red-700 text-xs font-bold rounded-lg border border-red-100">
                                        {sym}
                                    </span>
                                ))}
                                {record.symptoms.length > 3 && (
                                    <span className="px-2.5 py-1 bg-slate-100 text-slate-500 text-xs font-bold rounded-lg border border-slate-200">
                                        +{record.symptoms.length - 3}
                                    </span>
                                )}
                            </div>
                        )}

                        {record.memo && (
                            <div className="text-sm text-slate-600 bg-slate-50 p-3 rounded-lg">
                                {record.memo}
                            </div>
                        )}
                    </WCard>
                ))}
            </div>

            {/* Floating Action Button - Removed */ }
        </div>
    );
};

// --- 4. Community (Integrated Hub) ---
export const PageCommunity = () => {
  const categories = [
      { label: '꿀팁 매거진', icon: BookOpen, color: 'text-blue-500', bg: 'bg-blue-50' },
      { label: '동반 플레이스', icon: MapPin, color: 'text-emerald-500', bg: 'bg-emerald-50' },
      { label: '사료/용품', icon: Utensils, color: 'text-orange-500', bg: 'bg-orange-50' },
      { label: '건강·질병', icon: Stethoscope, color: 'text-red-500', bg: 'bg-red-50' },
      { label: '전문가 상담', icon: MessageCircle, color: 'text-indigo-500', bg: 'bg-indigo-50' },
      { label: '우리아이 자랑', icon: Camera, color: 'text-pink-500', bg: 'bg-pink-50' },
  ];

  const recommendations = [
      { id: 1, title: "고양이 털 관리 꿀팁", tag: "케어", image: "https://images.unsplash.com/photo-1513245543132-31f507417b26?auto=format&fit=crop&q=80&w=300" },
      { id: 2, title: "반려동물 동반 카페 BEST", tag: "플레이스", image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=300" },
      { id: 3, title: "신장 질환 아이 식단 관리법", tag: "건강", image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=300" },
  ];

  const popularPosts = [
      { id: 1, title: "고양이 치아 냄새 원인", tag: "건강", date: "1시간 전", views: 342 },
      { id: 2, title: "노령견 식단 어떻게 바꾸나요?", tag: "영양", date: "3시간 전", views: 256 },
      { id: 3, title: "병원비 줄이는 방법", tag: "팁", date: "5시간 전", views: 890 },
      { id: 4, title: "강아지 분리불안 훈련 후기", tag: "교육", date: "6시간 전", views: 120 },
  ];

  const qnaList = [
      { id: 1, question: "혈뇨가 보이는데 응급 상황인가요?", answer: "혈뇨는 방광염이나 결석 등 다양한 원인이 있을 수 있으므로...", answered: true },
      { id: 2, question: "고양이가 물을 너무 안 마셔요", answer: "습식 사료로 교체하시거나 물그릇 위치를 바꿔보시는 것이...", answered: true },
  ];

  const showOffs = [
      { id: 1, nick: "레오맘", likes: 124, image: "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&q=80&w=200" },
      { id: 2, nick: "치즈집사", likes: 89, image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=200" },
      { id: 3, nick: "멍멍이", likes: 256, image: "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&q=80&w=200" },
      { id: 4, nick: "구름이", likes: 112, image: "https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?auto=format&fit=crop&q=80&w=200" },
  ];

  return (
    <div className="flex flex-col bg-white pb-24 relative overflow-hidden min-h-screen">
        {/* Fixed Status Bar */}
        <div className="fixed top-0 left-0 right-0 z-[100] bg-white">
           <StatusBar theme="dark" />
        </div>

        {/* Hero Section */}
        <div className="pt-[44px] pb-6 px-6 bg-white">
            <div className="mt-4 mb-6">
                <h1 className="text-2xl font-bold text-slate-900 leading-tight">반려생활,<br/>한 곳에서 해결하세요</h1>
                <p className="text-sm text-slate-500 mt-2">정보 · 장소 · 건강 · 커뮤니티를 한 번에</p>
            </div>
            
            {/* Search Bar */}
            <div className="bg-slate-100 rounded-xl flex items-center p-3.5">
                <Search className="w-5 h-5 text-slate-400 mr-2" />
                <input 
                    type="text" 
                    placeholder="궁금한 내용을 검색해보세요" 
                    className="flex-1 bg-transparent text-sm font-medium placeholder:text-slate-400 outline-none"
                />
            </div>
        </div>

        {/* Categories Grid */}
        <div className="px-6 mb-8">
            <div className="grid grid-cols-3 gap-y-6 gap-x-4">
                {categories.map((item, i) => (
                    <button key={i} className="flex flex-col items-center gap-2 group">
                        <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm transition-transform group-active:scale-95", item.bg)}>
                            <item.icon className={cn("w-6 h-6", item.color)} />
                        </div>
                        <span className="text-[11px] font-bold text-slate-700 text-center leading-tight">{item.label}</span>
                    </button>
                ))}
            </div>
        </div>

        <div className="h-2 bg-slate-50 mb-8" />

        {/* Section 1: Recommended */}
        <div className="px-6 mb-8">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-bold text-slate-900">오늘의 반려생활 추천</h2>
                <button className="p-1"><ChevronRight className="w-5 h-5 text-slate-300" /></button>
            </div>
            <div className="flex gap-4 overflow-x-auto no-scrollbar -mx-6 px-6 pb-2">
                {recommendations.map(item => (
                    <div key={item.id} className="w-[200px] shrink-0 flex flex-col gap-2 cursor-pointer">
                        <div className="aspect-[4/3] rounded-xl overflow-hidden bg-slate-100">
                            <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                        </div>
                        <div>
                            <span className="text-[10px] font-bold text-blue-500 bg-blue-50 px-1.5 py-0.5 rounded mb-1 inline-block">{item.tag}</span>
                            <h3 className="text-sm font-bold text-slate-900 leading-snug line-clamp-2">{item.title}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        {/* Section 2: Popular Posts */}
        <div className="px-6 mb-8">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-bold text-slate-900">지금 많이 보는 글</h2>
                <button className="text-xs font-bold text-slate-400">더보기</button>
            </div>
            <div className="flex flex-col">
                {popularPosts.map((post, i) => (
                    <div key={post.id} className={cn("py-4 flex items-center justify-between cursor-pointer active:bg-slate-50 -mx-2 px-2 rounded-lg transition-colors", i !== popularPosts.length - 1 && "border-b border-slate-50")}>
                        <div className="flex gap-3 items-center">
                            <span className="text-xs font-bold text-slate-900 w-4 text-center">{i + 1}</span>
                            <div>
                                <h3 className="text-sm font-bold text-slate-900 leading-tight mb-1">{post.title}</h3>
                                <div className="flex items-center gap-2 text-xs text-slate-400">
                                    <span className="font-medium bg-slate-100 px-1.5 rounded text-slate-500">{post.tag}</span>
                                    <span>{post.date}</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-1 text-slate-400">
                            <Activity className="w-3 h-3" />
                            <span className="text-xs">{post.views}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        <div className="h-2 bg-slate-50 mb-8" />

        {/* Section 3: Expert Q&A */}
        <div className="px-6 mb-8">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-bold text-slate-900">전문가 상담 & Q&A</h2>
            </div>
            <div className="grid gap-3">
                {qnaList.map((qna, i) => (
                    <WCard key={i} className="p-4 active:scale-[0.99] transition-transform cursor-pointer">
                        <div className="flex items-start gap-3 mb-2">
                            <span className="bg-slate-900 text-white text-[10px] font-bold px-1.5 py-0.5 rounded shrink-0 mt-0.5">Q</span>
                            <h3 className="text-sm font-bold text-slate-900 leading-snug">{qna.question}</h3>
                        </div>
                        <div className="flex items-start gap-3 pl-8">
                            <p className="text-xs text-slate-500 line-clamp-1">{qna.answer}</p>
                        </div>
                        <div className="mt-3 pl-8 flex">
                            <div className="flex items-center gap-1 bg-indigo-50 text-indigo-600 px-2 py-1 rounded-md">
                                <CheckCircle2 className="w-3 h-3" />
                                <span className="text-[10px] font-bold">전문의 답변 완료</span>
                            </div>
                        </div>
                    </WCard>
                ))}
            </div>
        </div>

        {/* Section 4: Show Off */}
        <div className="px-6 pb-8">
             <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-bold text-slate-900">우리아이 자랑</h2>
                <button className="p-1"><ChevronRight className="w-5 h-5 text-slate-300" /></button>
            </div>
            <div className="flex gap-3 overflow-x-auto no-scrollbar -mx-6 px-6">
                {showOffs.map(item => (
                    <div key={item.id} className="relative w-[120px] aspect-square rounded-xl overflow-hidden shrink-0 group cursor-pointer">
                        <img src={item.image} className="w-full h-full object-cover transition-transform group-hover:scale-110" alt={item.nick} />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                        <div className="absolute bottom-2 left-2 text-white">
                            <div className="text-[10px] font-bold mb-0.5">{item.nick}</div>
                            <div className="flex items-center gap-1 text-[10px] opacity-90">
                                <Heart className="w-3 h-3 fill-white" />
                                <span>{item.likes}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  );
};

// --- 5. Info & Trials ---
export const PageInfo = () => {
    const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
    const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
    const [selectedMobileCategory, setSelectedMobileCategory] = useState('전체');

    return (
    <div className="space-y-8 relative pt-[44px] bg-white min-h-screen">
        {/* Status Bar */}
        <div className="fixed top-0 left-0 right-0 z-[100] bg-white">
           <StatusBar theme="dark" />
        </div>

        {/* Mobile Filter Bottom Sheet */}
        {isMobileFilterOpen && (
            <div className="fixed inset-0 z-[100] lg:hidden flex items-end justify-center">
                <div className="absolute inset-0 bg-black/50 transition-opacity" onClick={() => setIsMobileFilterOpen(false)} />
                <div className="relative bg-white w-full rounded-t-2xl p-6 animate-in slide-in-from-bottom duration-300 shadow-2xl">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-lg font-bold text-slate-900">콘텐츠 필터</h3>
                        <button onClick={() => setIsMobileFilterOpen(false)} className="p-2 -mr-2 text-slate-400 hover:text-slate-600">
                            <X className="w-6 h-6" />
                        </button>
                    </div>
                    
                    <div className="space-y-6">
                        <div className="space-y-3">
                            <label className="text-sm font-bold text-slate-500">카테고리</label>
                            <div className="flex flex-wrap gap-2">
                                {['전체', '신약 뉴스', '질환 가이드', '임상·연구'].map(cat => (
                                    <button
                                        key={cat}
                                        onClick={() => setSelectedMobileCategory(cat)}
                                        className={cn(
                                            "px-3 py-2 rounded-lg text-sm font-bold border transition-colors",
                                            selectedMobileCategory === cat
                                                ? "bg-slate-900 text-white border-slate-900"
                                                : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50"
                                        )}
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-3">
                            <label className="text-sm font-bold text-slate-500">관심 질환</label>
                            <div className="flex flex-wrap gap-2">
                                {['CKD', '당뇨', '심장 질환', '관절염', '피부 질환'].map(disease => (
                                    <button
                                        key={disease}
                                        className="px-3 py-2 rounded-lg text-sm font-bold border bg-white text-slate-600 border-slate-200 hover:bg-slate-50"
                                    >
                                        {disease}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="mt-8">
                        <WButton className="w-full py-4 text-base rounded-xl" onClick={() => setIsMobileFilterOpen(false)}>적용하기</WButton>
                    </div>
                </div>
            </div>
        )}

        {/* Mobile Header */}
        <div className="lg:hidden flex items-center justify-between pb-2 border-b border-slate-100 px-4">
            {isMobileSearchOpen ? (
                <div className="flex-1 flex items-center gap-2 animate-in fade-in slide-in-from-right-4 duration-200">
                    <div className="relative flex-1">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input 
                            className="w-full pl-9 pr-4 py-2.5 bg-slate-50 border-none rounded-lg text-sm focus:ring-2 focus:ring-slate-900 placeholder:text-slate-400" 
                            placeholder="질환명, 증상, 키워드 검색" 
                            autoFocus
                        />
                    </div>
                    <button onClick={() => setIsMobileSearchOpen(false)} className="p-2 text-slate-500 font-bold text-sm whitespace-nowrap">취소</button>
                </div>
            ) : (
                <>
                    <h1 className="text-xl font-bold text-slate-900">정보</h1>
                    <div className="flex gap-1">
                        <button 
                            onClick={() => setIsMobileSearchOpen(true)}
                            className="p-2 text-slate-700 hover:bg-slate-100 rounded-full transition-colors"
                        >
                            <Search className="w-6 h-6" />
                        </button>
                        <button 
                            onClick={() => setIsMobileFilterOpen(true)}
                            className="p-2 text-slate-700 hover:bg-slate-100 rounded-full transition-colors flex items-center gap-1"
                        >
                            <Filter className="w-5 h-5" />
                            <span className="text-xs font-bold">필터</span>
                        </button>
                    </div>
                </>
            )}
        </div>
        
        {/* Mobile Selected Filter Display */}
        <div className="lg:hidden flex gap-2 overflow-x-auto no-scrollbar -mt-4 pb-2 px-4">
            {selectedMobileCategory !== '전체' && (
                <div className="flex items-center gap-1 bg-slate-900 text-white px-3 py-1.5 rounded-full text-xs font-bold whitespace-nowrap">
                    {selectedMobileCategory}
                    <X className="w-3 h-3 cursor-pointer" onClick={() => setSelectedMobileCategory('전체')} />
                </div>
            )}
        </div>

        {/* Desktop Header */}
        <div className="hidden lg:flex items-center justify-between px-4">
            <h1 className="text-2xl font-bold text-slate-900">의료 정보 및 임상 시험</h1>
            <div className="flex gap-2">
                 <WButton variant="outline" icon={Filter}>필터</WButton>
                 <div className="relative">
                     <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                     <input className="pl-9 pr-4 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-slate-900 w-64" placeholder="질환 검색..." />
                 </div>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
            {[
                { title: "반려묘 만성신부전을 위한 신약 승인 소식", cat: "신약 뉴스", date: "2026년 1월 10일", img: "bg-blue-100" },
                { title: "CKD 2기 vs 3기 관리법의 차이점", cat: "가이드", date: "2026년 1월 5일", img: "bg-slate-200" },
                { title: "임상 시험 모집: 새로운 인흡착제 ��구", cat: "모집 중", date: "2025년 12월 28일", img: "bg-green-100" },
                { title: "노령견을 위한 식이 관리 가이드", cat: "가이드", date: "2025년 12월 20일", img: "bg-orange-100" },
                { title: "여름철 반려동물 수분 섭취 전략", cat: "생활 정보", date: "2025년 12월 15일", img: "bg-blue-50" },
                { title: "고혈압의 조기 발견과 관리", cat: "의료 정보", date: "2025년 12월 10일", img: "bg-red-50" },
            ].map((card, i) => (
                <WCard key={i} className="hover:shadow-md transition-all p-0 overflow-hidden">
                    <div className={cn("h-40 w-full cursor-pointer", card.img)} />
                    <div className="p-5 space-y-3">
                        <div className="flex justify-between items-center">
                            <span className="text-xs font-bold text-slate-500 uppercase tracking-wide">{card.cat}</span>
                            <span className="text-xs text-slate-400">{card.date}</span>
                        </div>
                        <h3 className="font-bold text-slate-900 text-lg hover:text-blue-700 transition-colors leading-tight line-clamp-2 break-keep cursor-pointer">
                            {card.title}
                        </h3>
                    </div>
                </WCard>
            ))}
        </div>
    </div>
    );
};

// --- 6.5 Pet Edit ---
export const PagePetEdit = ({ onNavigate }: { onNavigate?: (page: string) => void }) => {
    const [microchip, setMicrochip] = useState('');
    const [hospital, setHospital] = useState('');
    const [vet, setVet] = useState('');
    const [isBasicInfoExpanded, setIsBasicInfoExpanded] = useState(false);
    const [petType, setPetType] = useState<'dog' | 'cat'>('dog');
    const [gender, setGender] = useState<string>('수컷');

    return (
        <div className="max-w-2xl mx-auto py-8">
            <WCard title="반려동물 정보 편집" className="p-8" onBack={() => onNavigate?.('Profile')}>
                <div className="space-y-6">
                    {/* 1. Top Profile Header (Centered) */}
                    <div className="flex flex-col items-center justify-center py-4">
                        <div className="w-24 h-24 bg-slate-200 rounded-full flex items-center justify-center text-3xl font-bold text-slate-700 mb-4">
                            레
                        </div>
                        <h2 className="text-xl font-bold text-slate-900">레오</h2>
                        <p className="text-slate-500 text-sm mt-1">골든 리트리버 믹스</p>
                    </div>

                    {/* 2. Existing Editable Fields */}
                    <div className="space-y-4">
                         <div className="space-y-2">
                             <label className="block text-sm font-bold text-slate-700">마이크로칩 ID <span className="text-slate-400 font-normal ml-1">(선택)</span></label>
                             <input 
                                type="text" 
                                placeholder="미등록" 
                                className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent placeholder:text-slate-300" 
                                value={microchip}
                                onChange={(e) => setMicrochip(e.target.value)}
                            />
                         </div>
                         <div className="space-y-2">
                             <label className="block text-sm font-bold text-slate-700">다니는 병원 <span className="text-slate-400 font-normal ml-1">(선택)</span></label>
                             <input 
                                type="text" 
                                placeholder="미등록" 
                                className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent placeholder:text-slate-300" 
                                value={hospital}
                                onChange={(e) => setHospital(e.target.value)}
                            />
                         </div>
                         <div className="space-y-2">
                             <label className="block text-sm font-bold text-slate-700">담당 수의사 <span className="text-slate-400 font-normal ml-1">(선택)</span></label>
                             <input 
                                type="text" 
                                placeholder="미등록" 
                                className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent placeholder:text-slate-300" 
                                value={vet}
                                onChange={(e) => setVet(e.target.value)}
                            />
                         </div>
                    </div>

                    {/* 3. Basic Info Edit Toggle */}
                    <div className="border-t border-slate-100 pt-6">
                        <button 
                            onClick={() => setIsBasicInfoExpanded(!isBasicInfoExpanded)}
                            className={cn(
                                "flex items-center justify-between w-full p-4 border rounded-xl transition-all mb-4",
                                isBasicInfoExpanded 
                                    ? "bg-slate-900 border-slate-900 text-white" 
                                    : "bg-white border-dashed border-slate-300 text-slate-500 hover:text-slate-900 hover:bg-slate-50 hover:border-slate-400"
                            )}
                        >
                            <span className="font-bold text-sm">기본 정보 수정</span>
                            <ChevronDown className={cn("w-5 h-5 transition-transform", isBasicInfoExpanded ? "rotate-180" : "")} />
                        </button>

                        {/* Expanded Form */}
                        {isBasicInfoExpanded && (
                            <div className="space-y-6 p-6 bg-slate-50 rounded-xl border border-slate-200 animate-in slide-in-from-top-2 fade-in duration-200">
                                {/* Photo */}
                                <div className="flex justify-center mb-6">
                                    <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center border-2 border-dashed border-slate-300 cursor-pointer hover:bg-slate-100 transition-colors">
                                        <div className="text-3xl font-bold text-slate-400">L</div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                     <div className="space-y-2">
                                         <label className="block text-sm font-bold text-slate-700">이름</label>
                                         <input type="text" defaultValue="레오" className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent" />
                                     </div>
                                     <div className="space-y-2">
                                         <label className="block text-sm font-bold text-slate-700">종류</label>
                                         <div className="grid grid-cols-2 gap-2">
                                             <button 
                                                onClick={() => setPetType('dog')}
                                                className={cn(
                                                    "px-4 py-2.5 rounded-lg text-sm font-medium transition-all",
                                                    petType === 'dog' ? "bg-slate-900 text-white" : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50"
                                                )}
                                            >
                                                강아지
                                            </button>
                                             <button 
                                                onClick={() => setPetType('cat')}
                                                className={cn(
                                                    "px-4 py-2.5 rounded-lg text-sm font-medium transition-all",
                                                    petType === 'cat' ? "bg-slate-900 text-white" : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50"
                                                )}
                                            >
                                                고양이
                                            </button>
                                         </div>
                                     </div>
                                </div>

                                <div className="space-y-2">
                                     <label className="block text-sm font-bold text-slate-700">품종</label>
                                     <input type="text" defaultValue="골든 리트리버" className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent" />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                     <div className="space-y-2">
                                         <label className="block text-sm font-bold text-slate-700">생년월일</label>
                                         <div className="relative">
                                             <input 
                                                type="date" 
                                                defaultValue="2018-05-20"
                                                className="w-full pl-4 pr-10 py-2.5 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent appearance-none" 
                                             />
                                             <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
                                         </div>
                                     </div>
                                     <div className="space-y-2">
                                         <label className="block text-sm font-bold text-slate-700">성별</label>
                                         <div className="grid grid-cols-3 gap-2">
                                             {['수컷', '암컷', '중성화'].map(g => (
                                                 <button 
                                                    key={g}
                                                    onClick={() => setGender(g)}
                                                    className={cn(
                                                        "px-2 py-2.5 rounded-lg text-sm font-medium transition-all whitespace-nowrap",
                                                        gender === g ? "bg-slate-900 text-white" : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50"
                                                    )}
                                                >
                                                    {g}
                                                </button>
                                             ))}
                                         </div>
                                     </div>
                                </div>

                                <div className="space-y-2">
                                     <label className="block text-sm font-bold text-slate-700">몸무게 (kg)</label>
                                     <input type="number" step="0.1" defaultValue="24.2" className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent" />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                
                <div className="pt-6 flex justify-end gap-3 border-t border-slate-50 mt-4">
                    <WButton variant="outline" onClick={() => onNavigate?.('Profile')}>취소</WButton>
                    <WButton variant="primary" className="px-8" onClick={() => onNavigate?.('Profile')}>저장하기</WButton>
                </div>
            </WCard>
        </div>
    );
};

// --- 6. Profile ---
export const PageProfile = ({ onNavigate, currentPetId, setCurrentPetId }: { onNavigate?: (page: string) => void, currentPetId?: string, setCurrentPetId?: (id: string) => void }) => {
    const petId = currentPetId || 'leo';
    const currentPet = PET_DATABASE[petId] || PET_DATABASE['leo'];

    return (
    <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 pb-20">
        {/* Profile Section */}
        <div className="md:col-span-1 space-y-6">
             <WCard className="text-center py-8 px-4">
                 <div className={cn("w-28 h-28 rounded-full mx-auto mb-4 flex items-center justify-center text-4xl font-bold text-slate-700", currentPet.avatarColor || 'bg-slate-200')}>
                    {currentPet.name[0]}
                 </div>
                 <h2 className="text-2xl font-bold text-slate-900 mb-1">{currentPet.name}</h2>
                 <p className="text-slate-500 font-medium">{currentPet.breed}</p>
                 
                 <div className="mt-8 space-y-3">
                     <button className="w-full py-3 rounded-xl border border-slate-200 font-bold text-slate-900 flex items-center justify-center gap-2 hover:bg-slate-50 transition-colors">
                        <Settings className="w-5 h-5 text-slate-400" />
                        계정 설정
                     </button>
                     <button className="w-full py-2 text-red-500 font-bold flex items-center justify-center gap-1.5 hover:text-red-600 transition-colors">
                        <LogOut className="w-4 h-4" />
                        로그아웃
                     </button>
                 </div>
             </WCard>
        </div>

        {/* Details Section */}
        <div className="md:col-span-2 space-y-6">
             {/* Pet Management */}
             <WCard className="p-5">
                <div className="mb-4">
                    <h3 className="text-lg font-bold text-slate-900">반려동물 관리</h3>
                </div>
                <div className="space-y-3">
                    {Object.values(PET_DATABASE).map((p: any) => (
                        <div 
                            key={p.id}
                            onClick={() => setCurrentPetId?.(p.id)}
                            className={cn(
                                "flex items-center justify-between p-4 rounded-2xl border transition-all cursor-pointer relative overflow-hidden",
                                petId === p.id 
                                    ? "bg-white border-slate-900 ring-1 ring-slate-900" 
                                    : "bg-white border-slate-100 hover:border-slate-200"
                            )}
                        >
                            <div className="flex items-center gap-4">
                                <div className={cn("w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold text-slate-700", p.avatarColor)}>
                                    {p.name[0]}
                                </div>
                                <div>
                                    <div className="flex items-center gap-2">
                                        <h3 className="font-bold text-lg text-slate-900">{p.name}</h3>
                                        {petId === p.id && (
                                            <span className="text-[10px] font-bold bg-slate-900 text-white px-1.5 py-0.5 rounded tracking-tighter">선택됨</span>
                                        )}
                                    </div>
                                    <p className="text-sm text-slate-400 font-medium">{p.breed}</p>
                                </div>
                            </div>
                            {petId === p.id && <Check className="w-5 h-5 text-slate-900" />}
                        </div>
                    ))}
                    
                    <button 
                        onClick={() => onNavigate?.('PetRegisterFromProfile')}
                        className="w-full py-4 border border-slate-200 rounded-2xl text-slate-500 font-bold hover:bg-slate-50 hover:text-slate-900 hover:border-slate-300 transition-all flex items-center justify-center gap-2 mt-2"
                    >
                        <Plus className="w-5 h-5" />
                        반려동물 추가
                    </button>
                </div>
             </WCard>

             {/* Pet Info */}
             <div className="bg-white relative rounded-[14px] w-full shadow-[0px_2px_8px_0px_rgba(0,0,0,0.04)]">
                 {/* Border simulation */}
                 <div className="absolute inset-0 border-[0.575px] border-[#f1f5f9] rounded-[14px] pointer-events-none" />
                 
                 <div className="px-[20px] py-[24px] flex flex-col gap-[24px]">
                     {/* Header Container */}
                     <div className="flex items-center justify-between pb-[0.575px] border-b-[0.575px] border-[#f8fafc] relative">
                         {/* Title */}
                         <div className="h-[27px] flex items-center">
                            <h3 className="text-[18px] font-semibold text-[#0f172b] tracking-[-0.44px] leading-[27px]">반려동물 정보</h3>
                         </div>
                         
                         {/* Action Button */}
                         <button 
                             onClick={() => onNavigate?.('PetEdit')}
                             className="flex items-center gap-[6px] relative"
                         >
                             <div className="w-[16px] h-[16px] shrink-0">
                                  {/* Edit Icon */}
                                  <Edit2 className="w-3.5 h-3.5 text-blue-600" />
                             </div>
                             <span className="text-[14px] font-bold text-[#155dfc] tracking-[-0.15px] leading-[20px]">반려동물 정보 편집</span>
                         </button>
                     </div>

                     {/* Content Grid */}
                     <div className="flex flex-col gap-[24px]">
                         {/* Row 1 */}
                         <div className="flex items-start gap-[24px]">
                             <div className="w-[131.5px] shrink-0 flex flex-col gap-[4px]">
                                 <p className="text-[12px] font-bold text-[#90a1b9] uppercase leading-[16px]">나이</p>
                                 <p className="text-[14px] font-medium text-[#0f172b] tracking-[-0.15px] leading-[20px]">{currentPet.age}</p>
                             </div>
                             <div className="w-[131.5px] shrink-0 flex flex-col gap-[4px]">
                                 <p className="text-[12px] font-bold text-[#90a1b9] uppercase leading-[16px]">성별 / 체중</p>
                                 <p className="text-[14px] font-medium text-[#0f172b] tracking-[-0.15px] leading-[20px]">{currentPet.gender} / {currentPet.weight}</p>
                             </div>
                         </div>
                         
                         {/* Row 2 */}
                         <div className="flex items-start gap-[24px]">
                             <div className="w-[131.5px] shrink-0 flex flex-col gap-[4px]">
                                 <p className="text-[12px] font-bold text-[#90a1b9] uppercase leading-[16px]">마이크로칩 ID</p>
                                 <p className="text-[14px] font-medium text-[#0f172b] tracking-[-0.15px] leading-[20px]">9810200234123</p>
                             </div>
                             <div className="w-[131.5px] shrink-0 flex flex-col gap-[4px]">
                                 <p className="text-[12px] font-bold text-[#90a1b9] uppercase leading-[16px]">다니는 병원</p>
                                 <p className="text-[14px] font-medium text-[#0f172b] tracking-[-0.15px] leading-[20px]">시티 동물병원</p>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>

             {/* Data Management */}
             <WCard className="p-6">
                 <div className="flex gap-6">
                     <div className="shrink-0 w-16 pt-1">
                        <h3 className="text-xl font-bold text-slate-900 leading-tight whitespace-pre-line">
                            데이터{'\n'}관리
                        </h3>
                     </div>
                     <div className="flex-1 space-y-4">
                         <div>
                             <h4 className="font-bold text-slate-900 text-base">건강 리포트 내보내기</h4>
                             <p className="text-sm text-slate-500 mt-1 leading-snug">
                                 병원 방문을 위한 요약<br/>PDF를 다운로드하세요.
                             </p>
                         </div>
                         <button className="w-full py-3 bg-slate-900 text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-slate-800 transition-colors shadow-sm">
                             <Download className="w-4 h-4" />
                             PDF 다운로드
                         </button>
                     </div>
                 </div>
             </WCard>
        </div>
    </div>
    );
};

// --- 7. Sign Up ---
export const PageSignUp = ({ onNavigate }: { onNavigate?: (page: string) => void }) => (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4">
        <div className="mb-8 flex items-center gap-2">
            <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center text-white font-bold text-xl">V</div>
            <span className="font-bold text-2xl tracking-tight text-slate-900">VetTrack</span>
        </div>
        
        <WCard className="w-full max-w-md p-8 shadow-md">
            <div className="text-center mb-8">
                <h1 className="text-2xl font-bold text-slate-900">회원가입</h1>
                <p className="text-slate-500 text-sm mt-2">반려동물 건강 관리의 시작, VetTrack과 함께하세요.</p>
            </div>

            <div className="space-y-5">
                <div className="space-y-2">
                    <label className="block text-sm font-bold text-slate-700">이메일</label>
                    <input 
                        type="email" 
                        placeholder="example@email.com" 
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all placeholder:text-slate-400"
                    />
                </div>

                <div className="space-y-2">
                    <label className="block text-sm font-bold text-slate-700">비밀번호</label>
                    <input 
                        type="password" 
                        placeholder="영문, 숫자 포함 8자 이상" 
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all placeholder:text-slate-400"
                    />
                </div>

                <div className="space-y-2">
                    <label className="block text-sm font-bold text-slate-700">비밀번호 확인</label>
                    <input 
                        type="password" 
                        placeholder="비밀번호를 다시 입력해주세요" 
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all placeholder:text-slate-400"
                    />
                </div>

                <div className="pt-4 space-y-4">
                    <WButton className="w-full py-3 text-base" onClick={() => onNavigate?.('Dashboard')}>
                        회원가입
                    </WButton>
                    
                    <button 
                        className="w-full text-center text-sm text-slate-500 hover:text-slate-900 font-medium transition-colors"
                        onClick={() => onNavigate?.('Login')}
                    >
                        이미 계정이 있으신가요? <span className="underline underline-offset-4">로그인</span>
                    </button>
                </div>
            </div>
        </WCard>
        
        <p className="mt-8 text-xs text-slate-400 text-center">
            가입 시 VetTrack의 <span className="underline cursor-pointer hover:text-slate-600">이용약관</span> 및 <span className="underline cursor-pointer hover:text-slate-600">개인정보 처리방침</span>에 동의하게 됩니다.
        </p>
    </div>
);

// --- 8. Login ---
export const PageLogin = ({ onNavigate }: { onNavigate?: (page: string) => void }) => (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4">
        <div className="mb-8 flex items-center gap-2">
            <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center text-white font-bold text-xl">V</div>
            <span className="font-bold text-2xl tracking-tight text-slate-900">VetTrack</span>
        </div>
        
        <WCard className="w-full max-w-md p-8 shadow-md">
            <div className="text-center mb-8">
                <h1 className="text-2xl font-bold text-slate-900">로그인</h1>
                <p className="text-slate-500 text-sm mt-2">반려동물의 건강한 내일을 위해 로그인하세요.</p>
            </div>

            <div className="space-y-5">
                <div className="space-y-2">
                    <label className="block text-sm font-bold text-slate-700">이메일</label>
                    <input 
                        type="email" 
                        placeholder="example@email.com" 
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all placeholder:text-slate-400"
                    />
                </div>

                <div className="space-y-2">
                    <div className="flex items-center justify-between">
                        <label className="block text-sm font-bold text-slate-700">비밀번호</label>
                        <button className="text-xs text-slate-500 hover:text-slate-900">비밀번호 찾기</button>
                    </div>
                    <input 
                        type="password" 
                        placeholder="비밀번호를 입력해주세요" 
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all placeholder:text-slate-400"
                    />
                </div>

                <div className="pt-4 space-y-4">
                    <WButton className="w-full py-3 text-base" onClick={() => onNavigate?.('Dashboard')}>
                        로그인
                    </WButton>
                    
                    <button 
                        className="w-full text-center text-sm text-slate-500 hover:text-slate-900 font-medium transition-colors"
                        onClick={() => onNavigate?.('SignUp')}
                    >
                        아직 계정이 없으신가요? <span className="underline underline-offset-4">회원가입</span>
                    </button>
                </div>
            </div>
        </WCard>
    </div>
);

// --- 9. Pet Register ---
export const PagePetRegister = ({ onRegister, onCancel }: { onRegister?: () => void, onCancel?: () => void }) => {
    const [petType, setPetType] = useState<'dog' | 'cat'>('dog');
    const [gender, setGender] = useState<string>('');

    return (
    <div className="max-w-2xl mx-auto py-8">
        <WCard title="반려동물 등록" className="p-8" onBack={onCancel}>
            <div className="mb-8">
                <p className="text-slate-500">정확한 건강 관리를 위해 반려동물의 ��보를 입력해주세요.</p>
            </div>

            <div className="space-y-6">
                 {/* Photo Placeholder */}
                 <div className="flex justify-center mb-6">
                     <div className="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center border-2 border-dashed border-slate-300 cursor-pointer hover:bg-slate-200 transition-colors">
                         <Plus className="w-8 h-8 text-slate-400" />
                     </div>
                 </div>

                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     <div className="space-y-2">
                         <label className="block text-sm font-bold text-slate-700">이름</label>
                         <input type="text" placeholder="예: 레오" className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent" />
                     </div>
                     <div className="space-y-2">
                         <label className="block text-sm font-bold text-slate-700">종류</label>
                         <div className="grid grid-cols-2 gap-2">
                             <button 
                                onClick={() => setPetType('dog')}
                                className={cn(
                                    "px-4 py-2.5 rounded-lg text-sm font-medium transition-all",
                                    petType === 'dog' ? "bg-slate-900 text-white" : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50"
                                )}
                            >
                                강아지
                            </button>
                             <button 
                                onClick={() => setPetType('cat')}
                                className={cn(
                                    "px-4 py-2.5 rounded-lg text-sm font-medium transition-all",
                                    petType === 'cat' ? "bg-slate-900 text-white" : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50"
                                )}
                            >
                                고양이
                            </button>
                         </div>
                     </div>
                 </div>

                 <div className="space-y-2">
                     <label className="block text-sm font-bold text-slate-700">품종</label>
                     <input type="text" placeholder="예: 골든 리트리버" className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent" />
                 </div>

                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     <div className="space-y-2">
                         <label className="block text-sm font-bold text-slate-700">생년월일</label>
                         <div className="relative">
                             <input 
                                type="date" 
                                className="w-full pl-4 pr-10 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent appearance-none" 
                             />
                             <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
                         </div>
                     </div>
                     <div className="space-y-2">
                         <label className="block text-sm font-bold text-slate-700">성별</label>
                         <div className="grid grid-cols-3 gap-2">
                             {['수컷', '암컷', '중성화'].map((g) => (
                                 <button 
                                    key={g}
                                    onClick={() => setGender(g)}
                                    className={cn(
                                        "px-2 py-2.5 rounded-lg text-sm font-medium transition-all whitespace-nowrap",
                                        gender === g ? "bg-slate-900 text-white" : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50"
                                    )}
                                >
                                    {g}
                                </button>
                             ))}
                         </div>
                     </div>
                 </div>

                 <div className="space-y-2">
                     <label className="block text-sm font-bold text-slate-700">몸무게 (kg)</label>
                     <input type="number" step="0.1" placeholder="0.0" className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent" />
                 </div>
            </div>

            <div className="pt-8 flex justify-end gap-3">
                <WButton variant="outline" onClick={onCancel}>취소</WButton>
                <WButton variant="primary" className="px-8" onClick={onRegister}>등록 완료</WButton>
            </div>
        </WCard>
    </div>
    );
};

// --- 10. Medication Add ---
export const PageMedicationAdd = ({ currentPetId, onSave, onCancel }: { currentPetId: string, onSave: () => void, onCancel: () => void }) => {
    // For wireframe, we don't need complex form state. We just simulate adding.
    const [name, setName] = useState('');
    const [time, setTime] = useState('');
    
    const handleSave = () => {
        // Direct mutation for wireframe demo
        const pet = PET_DATABASE[currentPetId];
        if (pet) {
            pet.schedules = [
                ...(pet.schedules || []),
                {
                    id: Date.now(),
                    time: time || "12:00 PM",
                    title: name || "새로운 약",
                    loc: "자택",
                    type: "Med",
                    status: "Pending"
                }
            ];
        }
        onSave();
    };

    return (
    <div className="max-w-xl mx-auto py-8">
        <WCard title="투약 일정 추가" className="p-8" onBack={onCancel}>
            <div className="space-y-6">
                 <div className="space-y-2">
                     <label className="block text-sm font-bold text-slate-700">약 이름</label>
                     <input 
                        type="text" 
                        placeholder="예: 아모클라 (항생제)" 
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent" 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                 </div>

                 <div className="space-y-2">
                     <label className="block text-sm font-bold text-slate-700">투약 목적 또는 메모</label>
                     <input type="text" placeholder="예: 식후 30분, 냉장 보관" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent text-slate-500 placeholder:text-slate-500" />
                 </div>

                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     <div className="space-y-2">
                         <label className="block text-sm font-bold text-slate-700">시작 날짜 <span className="text-red-500">*</span></label>
                         <div className="relative">
                             <input type="date" className="w-full pl-4 pr-10 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent text-slate-500 [&::-webkit-calendar-picker-indicator]:opacity-0" />
                             <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                         </div>
                     </div>
                     <div className="space-y-2">
                         <label className="block text-sm font-bold text-slate-700">투약 시간 <span className="text-red-500">*</span></label>
                         <div className="relative">
                             <input 
                                type="time" 
                                className="w-full pl-4 pr-10 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent text-slate-500 [&::-webkit-calendar-picker-indicator]:opacity-0" 
                                value={time}
                                onChange={(e) => setTime(e.target.value)}
                            />
                            <Clock className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                         </div>
                     </div>
                 </div>

                 <div className="space-y-2">
                     <label className="block text-sm font-bold text-slate-700">반복 설정</label>
                     <div className="flex gap-2 p-1 bg-slate-100 rounded-xl">
                         {['매일', '특정 요일', '사용자 지정'].map((opt, i) => (
                             <button key={opt} className={cn(
                                 "flex-1 py-2 rounded-lg text-sm font-medium transition-all",
                                 i === 0 ? "bg-white shadow-sm text-slate-900" : "text-slate-500 hover:text-slate-900"
                             )}>
                                 {opt}
                             </button>
                         ))}
                     </div>
                 </div>

                 <div className="space-y-2 pt-2">
                     <label className="block text-sm font-bold text-slate-700">종료 날짜 (선택)</label>
                     <div className="relative">
                         <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                         <input type="date" className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent" />
                     </div>
                 </div>
            </div>

            <div className="pt-8 flex justify-end gap-3">
                <WButton variant="outline" className="h-12 rounded-xl text-base font-bold" onClick={onCancel}>취소</WButton>
                <WButton variant="primary" className="h-12 px-8 rounded-xl text-base font-bold" onClick={handleSave}>저장하기</WButton>
            </div>
        </WCard>
    </div>
    );
};

// --- 11. Visit Add ---
export const PageVisitAdd = ({ currentPetId, onSave, onCancel }: { currentPetId: string, onSave: () => void, onCancel: () => void }) => {
    const [hospital, setHospital] = useState('');
    const [vet, setVet] = useState('');
    const [visitType, setVisitType] = useState('정기 검진');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

    const handleSave = () => {
        const pet = PET_DATABASE[currentPetId];
        if (pet) {
            pet.schedules = [
                ...(pet.schedules || []),
                {
                    id: Date.now(),
                    time: (time || "12:00") + " " + (parseInt(time?.split(':')[0] || "12") >= 12 ? "PM" : "AM"),
                    title: `${hospital || '동물병원'} (${visitType})`,
                    loc: hospital || '위치 미지정',
                    type: "Visit",
                    status: "Pending",
                    details: vet ? `담당의: ${vet}` : undefined
                }
            ];
        }
        onSave();
    };

    return (
    <div className="max-w-xl mx-auto py-4 md:py-8 px-4 md:px-0">
        <WCard title="병원 방문 추가" className="p-5 md:p-8" onBack={onCancel}>
            <div className="mb-6 flex items-start gap-3 text-slate-500 bg-slate-50 p-3 rounded-xl">
                <Stethoscope className="w-5 h-5 shrink-0 mt-0.5 text-slate-400" />
                <p className="text-sm leading-snug break-keep">정기 검진이나 진료 일정을 기록하여 건강을 꼼꼼하게 관리하세요.</p>
            </div>

            <div className="space-y-5">
                 <div className="space-y-2">
                     <label className="block text-sm font-bold text-slate-700">방문 유형</label>
                     <div className="grid grid-cols-3 gap-2">
                         {['정기 검진', '진료', '예방 접종', '검사', '수술', '기타'].map((type) => (
                             <button 
                                key={type} 
                                onClick={() => setVisitType(type)}
                                className={cn(
                                 "h-11 rounded-xl text-sm font-bold transition-all truncate px-1",
                                 visitType === type 
                                    ? "bg-slate-900 text-white shadow-md transform scale-[1.02]" 
                                    : "bg-white border border-slate-200 text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                             )}>
                                 {type}
                             </button>
                         ))}
                     </div>
                 </div>

                 <div className="space-y-2">
                     <label className="block text-sm font-bold text-slate-700 whitespace-nowrap">���원 이름 <span className="text-red-500">*</span></label>
                     <input 
                        type="text" 
                        placeholder="예: 시티 동물병원" 
                        className="w-full h-12 px-4 bg-slate-50 border border-slate-200 rounded-xl text-base focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent truncate placeholder:text-slate-500 font-medium text-slate-500"
                        value={hospital}
                        onChange={(e) => setHospital(e.target.value)}
                    />
                 </div>

                 <div className="space-y-2">
                     <label className="block text-sm font-bold text-slate-700 whitespace-nowrap">담당 수의사 <span className="text-slate-400 font-normal ml-1">(선택)</span></label>
                     <input 
                        type="text" 
                        placeholder="예: 김철수 원장님" 
                        className="w-full h-12 px-4 bg-slate-50 border border-slate-200 rounded-xl text-base focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent truncate placeholder:text-slate-500 font-medium text-slate-500"
                        value={vet}
                        onChange={(e) => setVet(e.target.value)}
                    />
                 </div>

                 <div className="grid grid-cols-2 gap-3">
                     <div className="space-y-2">
                         <label className="block text-sm font-bold text-slate-700 whitespace-nowrap">방문 날짜 <span className="text-red-500">*</span></label>
                         <div className="relative h-12">
                             <input 
                                type="date" 
                                className="w-full h-full pl-4 pr-10 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent appearance-none text-slate-500 [&::-webkit-calendar-picker-indicator]:opacity-0"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                             />
                             <Calendar className="absolute right-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
                         </div>
                     </div>
                     <div className="space-y-2">
                         <label className="block text-sm font-bold text-slate-700 whitespace-nowrap">방문 시간 <span className="text-red-500">*</span></label>
                         <div className="relative h-12">
                             <input 
                                type="time" 
                                className="w-full h-full pl-4 pr-10 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent appearance-none text-slate-500 [&::-webkit-calendar-picker-indicator]:opacity-0"
                                value={time}
                                onChange={(e) => setTime(e.target.value)}
                             />
                             <Clock className="absolute right-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
                         </div>
                     </div>
                 </div>

                 <div className="space-y-2">
                     <label className="block text-sm font-bold text-slate-700 whitespace-nowrap">메모 <span className="text-slate-400 font-normal ml-1">(선택)</span></label>
                     <textarea 
                        placeholder="특이사항이나 질문할 내용을 미리 기록해두세요." 
                        className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl text-base focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent min-h-[100px] resize-none leading-relaxed placeholder:text-slate-500 text-slate-500"
                        rows={3}
                     />
                 </div>
            </div>

            <div className="pt-8 flex justify-end gap-3">
                <WButton variant="outline" className="h-12 rounded-xl text-base font-bold" onClick={onCancel}>취소</WButton>
                <WButton variant="primary" className="h-12 px-8 rounded-xl text-base font-bold" onClick={handleSave}>저장하기</WButton>
            </div>
        </WCard>
    </div>
    );
};
