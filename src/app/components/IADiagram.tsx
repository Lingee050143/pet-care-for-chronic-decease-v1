import React from 'react';
import { motion } from 'framer-motion';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// -- Types --

type NodeData = {
  id: string;
  label: string;
  subLabel?: string;
  children?: NodeData[];
};

const IA_DATA: NodeData = {
  id: 'root',
  label: 'VetTrack 서비스',
  children: [
    {
      id: 'onboarding',
      label: '온보딩',
      children: [
        { id: 'onb-1', label: '반려동물 등록' },
        { id: 'onb-2', label: '기본 건강 정보' },
        { id: 'onb-3', label: '기저질환 입력' },
      ]
    },
    {
      id: 'home',
      label: '홈',
      children: [
        {
          id: 'triage',
          label: '증상 분석',
          children: [
            { id: 'tri-1', label: '증상 체크리스트' },
            { id: 'tri-2', label: '중증도 분석' },
            { 
               id: 'hospital', 
               label: '병원 찾기',
               children: [
                 { id: 'hos-1', label: '주변 병원 목록' },
                 { id: 'hos-2', label: '실시간 예약' },
               ]
            }
          ]
        },
        {
          id: 'consult',
          label: '상담',
          children: [
             { id: 'con-1', label: 'AI 채팅' },
             { id: 'con-2', label: '상담 이력' },
          ]
        },
        {
          id: 'care',
          label: '케어 플랜',
          children: [
            { id: 'care-1', label: '식단/영양 플랜' },
            { id: 'care-2', label: '데일리 팁' },
          ]
        },
        {
          id: 'log',
          label: '건강 기록',
          children: [
            { id: 'log-1', label: '캘린더 뷰' },
            { id: 'log-2', label: '급여/증상 기록' },
            { id: 'log-3', label: '체중/활동' },
          ]
        },
        {
           id: 'stories',
           label: '회복 스토리',
           children: [
             { id: 'story-1', label: '인증된 사례' },
             { id: 'story-2', label: '질환별 필터' },
             { id: 'story-3', label: '응원 피드' },
           ]
        },
        {
           id: 'settings',
           label: '설정',
           children: [
             { id: 'set-1', label: '계정/알림' },
             { id: 'set-2', label: '데이터 내보내기' },
           ]
        }
      ]
    }
  ]
};

// -- Components --

const NodeBox = ({ node, depth }: { node: NodeData; depth: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: depth * 0.1 }}
      className={cn(
        "relative flex flex-col items-center justify-center text-center z-10 transition-colors px-2",
        // Dimensions
        depth === 0 ? "w-[220px] h-[60px]" : 
        depth === 1 ? "w-[160px] h-[60px]" :
        depth === 2 ? "w-[140px] h-[70px]" : // Level 2 (Features)
        "w-[120px] h-[50px]",                // Level 3+ (Leafs)
        
        // Shape
        "rounded-[12px]",
        // Colors & Shadows
        depth === 0 
          ? "bg-[#0f172b] text-white shadow-md" 
          : depth === 1
          ? "bg-slate-800 text-white shadow-md"
          : "bg-white text-slate-800 border border-slate-200 shadow-sm"
      )}
    >
      <span className={cn(
        "font-bold leading-snug whitespace-pre-line",
        depth <= 1 ? "text-[15px]" : "text-[13px]"
      )}>
        {node.label}
      </span>
      {node.subLabel && (
        <span className="text-[10px] text-slate-400 mt-1 font-medium">
          {node.subLabel}
        </span>
      )}
    </motion.div>
  );
};

const TreeNode = ({ node, depth }: { node: NodeData; depth: number }) => {
  const hasChildren = node.children && node.children.length > 0;
  const isRoot = depth === 0;

  const verticalGap = "h-[40px]"; 
  const topPadding = "pt-[40px]";
  
  return (
    <li className={cn(
      "relative flex flex-col items-center px-2", // Reduced padding to fit more
      !isRoot && topPadding,
      
      // Connectors
      // Use border-slate-400 for better visibility
      !isRoot && "before:content-[''] before:absolute before:top-0 before:left-0 before:w-1/2 before:h-[40px] before:border-t-2 before:border-slate-400 before:border-r-2",
      !isRoot && "after:content-[''] after:absolute after:top-0 after:right-0 after:w-1/2 after:h-[40px] after:border-t-2 after:border-slate-400",
      
      !isRoot && "first:before:border-t-0 first:before:border-r-0",
      !isRoot && "last:after:border-t-0 last:after:border-l-0"
    )}>
      
      {!isRoot && (
        <div className="absolute top-0 left-1/2 -ml-px w-[2px] h-[40px] bg-slate-400 -translate-x-1/2" />
      )}

      <div className="relative z-10">
        <NodeBox node={node} depth={depth} />
      </div>

      {hasChildren && (
        <>
          <div className={cn("w-[2px] bg-slate-400", verticalGap)} />
          <ul className="flex flex-row justify-center relative">
            {node.children!.map((child) => (
              <TreeNode key={child.id} node={child} depth={depth + 1} />
            ))}
          </ul>
        </>
      )}
    </li>
  );
};

export function IADiagram() {
  return (
    <div className="bg-[#f8fafc] rounded-3xl p-8 border border-slate-200 overflow-x-auto min-w-[800px]">
      <div className="flex flex-col min-w-max">
        
        {/* Header */}
        <div className="mb-8 pl-4 border-l-4 border-slate-800">
             <h2 className="text-2xl font-bold text-slate-900">정보 구조 (IA)</h2>
             <p className="text-slate-500 text-sm mt-1">VetTrack 앱 구조도 V2.0</p>
        </div>

        {/* The Tree */}
        <div className="pr-16 pb-16">
          <ul className="flex flex-row justify-center">
            <TreeNode node={IA_DATA} depth={0} />
          </ul>
        </div>
      </div>
    </div>
  );
}
