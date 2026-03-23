import React, { useState } from 'react';
import { 
  Bell, CheckCircle2, AlertCircle, MapPin, Phone, Calendar as CalendarIcon, 
  MessageCircle, Send, Paperclip, ChevronRight, Activity, Droplets, Utensils,
  Plus, Search, ThumbsUp, Filter, User, BellRing, Globe, Download, Clock,
  Pill, HeartPulse, Zap, AlertTriangle
} from 'lucide-react';
import { 
  WFButton, WFCard, WFHeader, WFScreenContainer, WFBadge, WFInput, cn 
} from './WireframeComponents';

export type ScreenProps = {
  onNavigate: (screen: string) => void;
};

// --- 1. Home Screen (Daily Condition Report) ---
export const HomeScreen = ({ onNavigate }: ScreenProps) => {
  const [appetite, setAppetite] = useState(80);
  const [water, setWater] = useState(60);
  
  return (
    <>
      <WFHeader 
        title="VetTrack" 
        rightAction={<Bell className="w-5 h-5 text-slate-700" />} 
      />
      <WFScreenContainer className="p-4 space-y-6">
        {/* Pet Summary Card */}
        <WFCard className="flex items-center gap-4 bg-slate-900 text-white border-none">
          <div className="w-14 h-14 bg-slate-700 rounded-full flex items-center justify-center text-xl font-bold">L</div>
          <div className="flex-1">
            <h2 className="text-lg font-bold">레오</h2>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-xs bg-slate-700 px-2 py-0.5 rounded text-slate-200">CKD 2기</span>
              <span className="text-xs bg-green-900/50 text-green-200 px-2 py-0.5 rounded border border-green-800">안정</span>
            </div>
          </div>
        </WFCard>

        {/* AI Insight Card */}
        <WFCard className="bg-blue-50 border-blue-100 flex gap-3 items-start">
             <div className="p-1.5 bg-blue-100 rounded-lg">
                 <Activity className="w-5 h-5 text-blue-600" />
             </div>
             <div>
                 <h3 className="text-sm font-bold text-slate-900">AI 건강 분석</h3>
                 <p className="text-sm text-slate-600 mt-1">지난주 대비 식욕이 20% 감소했습니다. 음수량을 지속적으로 확인해주세요.</p>
             </div>
        </WFCard>

        {/* Daily Condition Input */}
        <section className="space-y-5">
            <h3 className="font-bold text-slate-900">오늘의 컨디션</h3>
            
            {/* Sliders */}
            <div className="space-y-4">
                <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                        <span className="flex items-center gap-2 font-medium text-slate-700"><Utensils className="w-4 h-4" /> 식욕</span>
                        <span className="text-slate-500">{appetite}%</span>
                    </div>
                    <input 
                        type="range" 
                        min="0" max="100" 
                        value={appetite} 
                        onChange={(e) => setAppetite(parseInt(e.target.value))}
                        className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-slate-900"
                    />
                </div>

                <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                        <span className="flex items-center gap-2 font-medium text-slate-700"><Droplets className="w-4 h-4" /> 음수량</span>
                        <span className="text-slate-500">{water}ml</span>
                    </div>
                    <input 
                        type="range" 
                        min="0" max="100" 
                        value={water} 
                        onChange={(e) => setWater(parseInt(e.target.value))}
                        className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-slate-900"
                    />
                </div>
            </div>

            {/* Selectors */}
            <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700 block">배변 상태</label>
                <div className="grid grid-cols-3 gap-2">
                    {['정상', '무름', '설사'].map(opt => (
                        <button key={opt} className="py-2 text-xs font-medium border border-slate-200 rounded-lg hover:bg-slate-50 focus:bg-slate-900 focus:text-white transition-colors">
                            {opt}
                        </button>
                    ))}
                </div>
            </div>

             <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700 block">활력</label>
                <div className="grid grid-cols-3 gap-2">
                    {['좋음', '보통', '기력 없음'].map(opt => (
                        <button key={opt} className="py-2 text-xs font-medium border border-slate-200 rounded-lg hover:bg-slate-50 focus:bg-slate-900 focus:text-white transition-colors">
                            {opt}
                        </button>
                    ))}
                </div>
            </div>

            {/* Checkboxes */}
            <div className="space-y-2 pt-2">
                {['구토', '설사', '피부 문제'].map(issue => (
                    <label key={issue} className="flex items-center gap-3 p-3 border border-slate-200 rounded-xl bg-white">
                        <input type="checkbox" className="w-5 h-5 rounded border-slate-300 text-slate-900 focus:ring-slate-900" />
                        <span className="text-sm font-medium text-slate-700">{issue}</span>
                    </label>
                ))}
            </div>

            <WFButton onClick={() => alert("리포트가 저장되었습니다!")} variant="primary">
                오늘의 리포트 저장
            </WFButton>
        </section>

      </WFScreenContainer>
    </>
  );
};

// --- 2. Medications Screen ---
export const MedicationsScreen = ({ onNavigate }: ScreenProps) => {
  return (
    <>
      <WFHeader title="투약 일정" />
      <WFScreenContainer className="p-4 space-y-6">
        
        {/* Progress */}
        <div className="space-y-2">
            <div className="flex justify-between items-center text-sm font-medium">
                <span className="text-slate-900">오늘의 달성률</span>
                <span className="text-slate-500">66%</span>
            </div>
             <div className="w-full bg-slate-200 h-3 rounded-full overflow-hidden">
                <div className="bg-green-600 h-full w-2/3" />
            </div>
        </div>

        {/* Schedule List */}
        <div className="space-y-4">
            {[
                { time: "아침", slot: "오전 8:00", meds: [
                    { name: "인흡착제", dose: "1정", taken: true },
                    { name: "암로디핀", dose: "2.5mg", taken: true }
                ]},
                { time: "점심", slot: "오후 2:00", meds: [
                    { name: "수액 요법", dose: "100ml 피하", taken: false }
                ]},
                { time: "저녁", slot: "오후 8:00", meds: [
                    { name: "인흡착제", dose: "1정", taken: false }
                ]}
            ].map((slot, i) => (
                <div key={i} className="space-y-2">
                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">{slot.time} • {slot.slot}</h3>
                    <div className="space-y-2">
                        {slot.meds.map((med, j) => (
                            <WFCard key={j} className="flex items-center justify-between py-3 px-4">
                                <div>
                                    <p className="font-bold text-slate-900">{med.name}</p>
                                    <p className="text-sm text-slate-500">{med.dose}</p>
                                </div>
                                <button className={cn(
                                    "w-8 h-8 rounded-full flex items-center justify-center transition-colors",
                                    med.taken ? "bg-green-100 text-green-700" : "bg-slate-100 text-slate-300 border border-slate-200"
                                )}>
                                    {med.taken && <CheckCircle2 className="w-5 h-5" />}
                                </button>
                            </WFCard>
                        ))}
                    </div>
                </div>
            ))}
        </div>
      </WFScreenContainer>
    </>
  );
};

// --- 3. Symptom Check Screen ---
export const SymptomCheckScreen = ({ onNavigate }: ScreenProps) => {
  const [selected, setSelected] = useState<string[]>([]);
  const toggle = (s: string) => setSelected(prev => prev.includes(s) ? prev.filter(i => i !== s) : [...prev, s]);
  
  const symptoms = ["구토", "식욕 부진", "기력 저하", "호흡수 증가", "기타"];

  return (
    <>
      <WFHeader title="증상 분석기" />
      <WFScreenContainer className="p-4 flex flex-col h-full">
        <div className="flex-1 space-y-6">
            <div className="bg-amber-50 border border-amber-100 p-4 rounded-xl flex gap-3">
                <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0" />
                <p className="text-sm text-amber-800">레오의 상태에 갑작스러운 변화가 있을 때 사용하세요.</p>
            </div>

            <div className="space-y-1">
                <h2 className="text-lg font-bold text-slate-900">어떤 증상이 있나요?</h2>
                <p className="text-slate-500 text-sm">해당하는 항목을 모두 선택하세요.</p>
            </div>

            <div className="space-y-2">
            {symptoms.map(sym => (
                <div 
                key={sym}
                onClick={() => toggle(sym)}
                className={cn(
                    "p-4 rounded-xl border flex items-center justify-between cursor-pointer transition-colors",
                    selected.includes(sym) ? "border-slate-900 bg-slate-50" : "border-slate-200 bg-white"
                )}
                >
                <span className="font-medium text-slate-900">{sym}</span>
                {selected.includes(sym) && <CheckCircle2 className="w-5 h-5 text-slate-900" />}
                </div>
            ))}
            </div>
        </div>

        <div className="pt-4">
            <WFButton onClick={() => onNavigate('RiskResult')} variant="primary">
                위험도 분석하기
            </WFButton>
        </div>
      </WFScreenContainer>
    </>
  );
};

// --- 4. Risk Result Screen ---
export const RiskResultScreen = ({ onNavigate }: ScreenProps) => {
  return (
    <>
      <WFHeader title="건강 위험도 평가" onBack={() => onNavigate('SymptomCheck')} />
      <WFScreenContainer className="p-4 space-y-6">
        <WFCard className="border-l-4 border-l-red-500 space-y-4">
            <div className="flex items-start gap-3">
                <div className="p-2 bg-red-100 rounded-full">
                    <AlertCircle className="w-6 h-6 text-red-600" />
                </div>
                <div>
                    <h3 className="text-lg font-bold text-slate-900">이상 징후 감지</h3>
                    <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                        입력된 증상을 분석한 결과, 평소 상태와 차이가 큽니다. 급성 질환 가능성을 배제하기 위해 병원 방문을 권장합니다.
                    </p>
                </div>
            </div>
            
            {/* Severity Bar */}
            <div className="space-y-1">
                <div className="flex justify-between text-xs font-semibold uppercase text-slate-400">
                    <span>안정</span>
                    <span>주의</span>
                    <span className="text-red-600">위급</span>
                </div>
                <div className="h-3 bg-slate-100 rounded-full overflow-hidden flex">
                    <div className="w-1/3 bg-green-200" />
                    <div className="w-1/3 bg-yellow-200" />
                    <div className="w-1/3 bg-red-500" />
                </div>
                <div className="relative h-2 w-full">
                     <div className="absolute right-[15%] -top-1 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[8px] border-b-slate-900" />
                </div>
            </div>
        </WFCard>

        <div className="space-y-3">
            <WFButton onClick={() => onNavigate('HospitalFinder')} variant="primary" icon={MapPin}>
                주변 병원 찾기
            </WFButton>
            <WFButton onClick={() => onNavigate('Consultation')} variant="outline" icon={MessageCircle}>
                AI 상담 시작하기
            </WFButton>
        </div>
      </WFScreenContainer>
    </>
  );
};

// --- 5. Care Plan Screen ---
export const CarePlanScreen = ({ onNavigate }: ScreenProps) => {
  return (
    <>
      <WFHeader title="맞춤 케어 플랜" />
      <WFScreenContainer className="p-4 space-y-6">
        <WFCard className="bg-slate-900 text-white p-6">
            <h2 className="font-bold text-lg mb-1">레오의 일일 목표</h2>
            <p className="text-slate-400 text-sm">지난주 분석 기반 업데이트</p>
        </WFCard>

        {/* Cards */}
        <div className="space-y-4">
            {[
                { title: "식단 플랜", desc: "저인성 처방식 (k/d)", icon: Utensils },
                { title: "영양제 플랜", desc: "오메가-3 및 유산균 스케줄", icon: Pill },
                { title: "생활 관리 팁", desc: "음수 빈도 늘리기", icon: HeartPulse },
            ].map((card, i) => (
                <WFCard key={i} className="flex items-center gap-4 active:bg-slate-50">
                    <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600">
                        <card.icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                        <h3 className="font-bold text-slate-900">{card.title}</h3>
                        <p className="text-sm text-slate-500 mt-0.5 line-clamp-1">{card.desc}</p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-slate-300" />
                </WFCard>
            ))}
        </div>
      </WFScreenContainer>
    </>
  );
};

// --- 6. Community Screen (Recovery Stories) ---
export const CommunityScreen = ({ onNavigate }: ScreenProps) => {
  return (
    <>
      <WFHeader title="회복 스토리" />
      <WFScreenContainer className="p-4 space-y-4">
        <div className="flex justify-between items-center pb-2">
             <div className="flex gap-2 overflow-x-auto">
                <WFButton variant="primary" className="w-auto py-1.5 px-4 text-xs h-auto rounded-full">전체</WFButton>
                <WFButton variant="outline" className="w-auto py-1.5 px-4 text-xs h-auto rounded-full">신부전(CKD)</WFButton>
                <WFButton variant="outline" className="w-auto py-1.5 px-4 text-xs h-auto rounded-full">당뇨</WFButton>
            </div>
            <button className="p-2 text-slate-400"><Filter className="w-4 h-4" /></button>
        </div>

        {[1, 2, 3].map(i => (
             <WFCard key={i} className="space-y-3">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-slate-200 rounded-full" />
                    <div>
                        <h4 className="font-bold text-sm">벨라의 여정</h4>
                        <span className="text-xs text-slate-500">신부전 3기</span>
                    </div>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                    오늘의 작은 승리! 벨라가 스스로 밥을 다 먹었어요. 새로운 투약 루틴 덕분에 활력이 돌아오는 것 같아요.
                </p>
                <div className="pt-2 flex items-center justify-between border-t border-slate-100 mt-2">
                    <button className="flex items-center gap-2 text-slate-500 text-xs font-medium hover:text-slate-900">
                         <ThumbsUp className="w-4 h-4" />
                         <span>응원해요 (12)</span>
                    </button>
                    <span className="text-xs text-slate-400">2시간 전</span>
                </div>
             </WFCard>
        ))}
      </WFScreenContainer>
    </>
  );
};

// --- 7. Settings Screen ---
export const SettingsScreen = ({ onNavigate }: ScreenProps) => {
  return (
    <>
      <WFHeader title="설정" />
      <WFScreenContainer className="p-4 space-y-6">
        {[
            { category: "계정", items: ["프로필", "구독 관리", "반려동물 관리"] },
            { category: "앱 설정", items: ["알림", "언어", "화면"] },
            { category: "데이터", items: ["건강 데이터 내보내기", "개인정보 처리방침"] },
        ].map((section, i) => (
             <div key={i} className="space-y-2">
                 <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">{section.category}</h3>
                 <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                     {section.items.map((item, j) => (
                         <div key={item} className={cn(
                             "p-4 flex justify-between items-center active:bg-slate-50 cursor-pointer",
                             j !== section.items.length - 1 && "border-b border-slate-100"
                         )}>
                             <span className="text-sm font-medium text-slate-900">{item}</span>
                             <ChevronRight className="w-4 h-4 text-slate-300" />
                         </div>
                     ))}
                 </div>
             </div>
        ))}
        <WFButton variant="danger" className="mt-8">로그아웃</WFButton>
      </WFScreenContainer>
    </>
  );
};

// --- Helper Screens (Hidden) ---

export const HospitalFinderScreen = ({ onNavigate }: ScreenProps) => {
    return (
      <>
        <WFHeader title="주변 동물병원" onBack={() => onNavigate('RiskResult')} />
        <div className="h-[200px] bg-slate-200 w-full flex items-center justify-center text-slate-400 relative">
            <MapPin className="w-8 h-8 mb-2" />
            <span className="absolute bottom-2 right-2 bg-white px-2 py-1 text-xs shadow rounded">지도 보기</span>
        </div>
        <WFScreenContainer className="p-0">
          <div className="p-4 space-y-3">
              {[1, 2, 3].map(i => (
                  <WFCard key={i} className="space-y-3">
                      <div className="flex justify-between items-start">
                          <div>
                              <h3 className="font-bold text-slate-900">시티 동물의료센터</h3>
                              <p className="text-sm text-slate-500">0.8km • 24시간 진료</p>
                          </div>
                          <WFBadge variant="success">진료 가능</WFBadge>
                      </div>
                      <div className="grid grid-cols-2 gap-3 pt-1">
                          <WFButton variant="outline" className="py-2 text-sm" icon={Phone}>전화</WFButton>
                          <WFButton variant="primary" className="py-2 text-sm" icon={CalendarIcon}>예약</WFButton>
                      </div>
                  </WFCard>
              ))}
          </div>
        </WFScreenContainer>
      </>
    );
  };
  
  export const ConsultationScreen = ({ onNavigate }: ScreenProps) => {
    return (
      <>
        <WFHeader title="AI 상담" onBack={() => onNavigate('RiskResult')} />
        <WFScreenContainer className="bg-slate-100 flex flex-col p-0 pb-0 h-full">
          <div className="flex-1 p-4 space-y-4 overflow-y-auto">
              <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-slate-900 flex-shrink-0 flex items-center justify-center text-white text-xs">AI</div>
                  <div className="bg-white p-3 rounded-2xl rounded-tl-none max-w-[80%] shadow-sm text-slate-800 text-sm">
                      안녕하세요! 레오의 상태에서 평소와 다른 점이 감지되었습니다. 최근 변화에 대해 이야기해 볼까요?
                  </div>
              </div>
          </div>
          <div className="p-3 bg-white border-t border-slate-200 flex items-center gap-2">
              <input className="flex-1 bg-slate-50 border border-slate-200 rounded-full px-4 py-2 text-sm focus:outline-none" placeholder="메시지를 입력하세요..." />
              <button className="p-2 bg-slate-900 text-white rounded-full"><Send className="w-4 h-4" /></button>
          </div>
        </WFScreenContainer>
      </>
    );
  };
