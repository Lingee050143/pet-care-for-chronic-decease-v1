import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, Send, Plus, MoreVertical, Stethoscope, Image as ImageIcon, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// -- Components --

const Header = () => (
    <div className="h-14 bg-white/95 backdrop-blur-md flex items-center justify-between px-4 border-b border-slate-100 sticky top-0 z-30">
        <button className="p-2 text-slate-600 hover:bg-slate-50 rounded-full transition-colors">
            <ChevronLeft size={24} />
        </button>
        <div className="flex flex-col items-center">
            <span className="text-[16px] font-bold text-slate-800">AI 케어 상담</span>
            <span className="text-[11px] text-emerald-600 flex items-center font-medium gap-1">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
                실시간 답변 중
            </span>
        </div>
        <button className="p-2 text-slate-400 hover:text-slate-600 rounded-full transition-colors">
            <MoreVertical size={22} />
        </button>
    </div>
);

const MessageBubble = ({ isUser, text, time }: { isUser: boolean, text: string, time: string }) => (
    <motion.div 
        initial={{ opacity: 0, y: 10, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        className={cn("flex w-full mb-5", isUser ? "justify-end" : "justify-start")}
    >
        {!isUser && (
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-50 to-blue-50 border border-indigo-100 flex items-center justify-center mr-2 shrink-0 shadow-sm mt-1">
                <Stethoscope size={16} className="text-indigo-600" />
            </div>
        )}
        <div className={cn("max-w-[75%] flex flex-col", isUser ? "items-end" : "items-start")}>
            <div className={cn(
                "px-4 py-3 text-[15px] leading-relaxed shadow-sm relative group",
                isUser 
                    ? "bg-[#0ea5e9] text-white rounded-2xl rounded-tr-sm" 
                    : "bg-white text-slate-700 rounded-2xl rounded-tl-sm border border-slate-100"
            )}>
                {text}
            </div>
            <span className="text-[11px] text-slate-400 mt-1 px-1">{time}</span>
        </div>
    </motion.div>
);

const StatusChip = ({ label, onClick }: { label: string, onClick: () => void }) => (
    <button 
        onClick={onClick}
        className="px-3 py-1.5 bg-white border border-slate-200 rounded-full text-[13px] text-slate-600 font-medium hover:bg-slate-50 hover:border-blue-200 hover:text-blue-600 transition-all shadow-sm whitespace-nowrap active:scale-95"
    >
        {label}
    </button>
);

const SuggestionArea = ({ onSelect }: { onSelect: (val: string) => void }) => (
    <div className="w-full bg-slate-50/80 backdrop-blur-sm border-t border-slate-100 py-3 px-4">
        <p className="text-[11px] text-slate-400 font-bold mb-2 ml-1">상태 태그 입력</p>
        <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-1">
            <StatusChip label="🤮 구토" onClick={() => onSelect("구토 증상이 있어요")} />
            <StatusChip label="💧 식욕 부진" onClick={() => onSelect("밥을 잘 안 먹어요")} />
            <StatusChip label="💤 기력 저하" onClick={() => onSelect("기운이 없어 보여요")} />
            <StatusChip label="🚽 배뇨 실수" onClick={() => onSelect("화장실 실수를 했어요")} />
            <StatusChip label="💊 투약 거부" onClick={() => onSelect("약을 뱉어냈어요")} />
        </div>
    </div>
);

export function ConsultationUI() {
    const [messages, setMessages] = useState([
        { id: 1, isUser: false, text: "안녕하세요, 보호자님. 레오의 상태에 대해 궁금하신 점이 있으신가요? 오늘 컨디션은 어떤지 말씀해 주세요.", time: "오후 2:01" },
    ]);
    const [inputValue, setInputValue] = useState("");
    const scrollRef = useRef<HTMLDivElement>(null);

    const handleSend = () => {
        if (!inputValue.trim()) return;
        const newMsg = { id: Date.now(), isUser: true, text: inputValue, time: "오후 2:05" };
        setMessages(prev => [...prev, newMsg]);
        setInputValue("");
        
        // Mock AI Response
        setTimeout(() => {
            const aiMsg = { id: Date.now() + 1, isUser: false, text: "저런, 걱정이 많이 되시겠어요. 혹시 구토 직후에 물을 마시거나 사료를 먹으려고 했나요? 구토물의 색깔도 알려주시면 판단에 도움이 됩니다.", time: "오후 2:05" };
            setMessages(prev => [...prev, aiMsg]);
        }, 1000);
    };

    const handleChipSelect = (text: string) => {
        setInputValue(text);
    };

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages]);

    return (
            <div className="relative w-full max-w-[390px] h-[844px] bg-[#f1f5f9] rounded-[44px] shadow-2xl overflow-hidden border-[8px] border-white flex flex-col ring-1 ring-slate-900/5">
                
                {/* Status Bar */}
                <div className="h-12 bg-white flex justify-between items-end px-6 pb-2 text-[15px] font-semibold text-slate-900 z-30 select-none">
                    <span className="ml-2">9:45</span>
                    <div className="flex items-center gap-1.5 mr-2">
                        <div className="w-4 h-4 rounded-full bg-slate-900/20" />
                        <div className="w-4 h-4 rounded-full bg-slate-900/20" />
                    </div>
                </div>

                <Header />

                {/* Chat Area */}
                <div className="flex-1 overflow-y-auto px-4 py-4" ref={scrollRef}>
                    <div className="text-center mb-6">
                        <span className="text-[11px] bg-slate-200/60 text-slate-500 px-3 py-1 rounded-full">
                            2026년 1월 12일 월요일
                        </span>
                    </div>

                    <AnimatePresence>
                        {messages.map((msg) => (
                            <MessageBubble key={msg.id} isUser={msg.isUser} text={msg.text} time={msg.time} />
                        ))}
                    </AnimatePresence>
                </div>

                {/* Input Area Group */}
                <div className="bg-white z-20 pb-6">
                    <SuggestionArea onSelect={handleChipSelect} />
                    
                    <div className="px-4 py-2 flex items-center gap-3">
                        <button className="p-2 text-slate-400 bg-slate-100 rounded-full hover:bg-slate-200 transition-colors">
                            <Plus size={20} />
                        </button>
                        <div className="flex-1 bg-slate-100 rounded-[24px] flex items-center px-4 py-2 focus-within:ring-2 focus-within:ring-blue-100 transition-all border border-transparent focus-within:border-blue-200">
                            <input 
                                type="text" 
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                                placeholder="메시지를 입력하세요..."
                                className="w-full bg-transparent border-none outline-none text-[15px] text-slate-800 placeholder:text-slate-400"
                            />
                        </div>
                        <button 
                            onClick={handleSend}
                            disabled={!inputValue.trim()}
                            className={cn(
                                "p-2.5 rounded-full transition-all shadow-sm",
                                inputValue.trim() 
                                    ? "bg-[#0ea5e9] text-white hover:bg-[#0284c7]" 
                                    : "bg-slate-200 text-slate-400"
                            )}
                        >
                            <Send size={20} className={inputValue.trim() ? "ml-0.5" : ""} />
                        </button>
                    </div>
                </div>

                {/* Home Indicator */}
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-slate-900 rounded-full z-30 opacity-20"></div>
            </div>
    );
}
