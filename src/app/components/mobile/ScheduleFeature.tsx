import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Check, Plus, X, Calendar as CalendarIcon, Clock, 
  Repeat, ChevronRight, Bell, MoreHorizontal, ChevronLeft
} from 'lucide-react';
import { cn } from '@/app/components/web-wireframes/WebWireframeComponents';

// --- Types ---

type RepeatPattern = 'daily' | 'interval' | 'weekly' | 'custom';
type EndCondition = 'never' | 'date' | 'count';

interface ScheduleTask {
  id: string;
  name: string;
  time: string;
  dose: string;
  type: 'med' | 'visit' | 'check';
  completed: boolean;
  date: string; // YYYY-MM-DD
}

// --- Components ---

// 1. Calendar Date Component
const CalendarDate = ({ 
  date, 
  dayName, 
  isSelected, 
  hasEvent, 
  onClick 
}: { 
  date: number; 
  dayName: string; 
  isSelected: boolean; 
  hasEvent?: boolean;
  onClick: () => void;
}) => (
  <button 
    onClick={onClick}
    className={cn(
      "flex flex-col items-center justify-center w-[13%] aspect-[4/5] rounded-2xl transition-all duration-200",
      isSelected 
        ? "bg-slate-900 text-white shadow-md scale-105" 
        : "bg-white text-slate-500 hover:bg-slate-50 border border-slate-100"
    )}
  >
    <span className="text-[10px] font-medium uppercase tracking-wide opacity-80">{dayName}</span>
    <span className={cn("text-lg font-bold mt-0.5", isSelected ? "text-white" : "text-slate-900")}>{date}</span>
    <div className={cn(
      "w-1 h-1 rounded-full mt-1 transition-colors",
      hasEvent 
        ? (isSelected ? "bg-blue-400" : "bg-blue-500") 
        : "bg-transparent"
    )} />
  </button>
);

// 2. Schedule Item Component with Completion Animation
const ScheduleItem = ({ 
  task, 
  onToggle 
}: { 
  task: ScheduleTask; 
  onToggle: (id: string) => void;
}) => {
  return (
    <motion.div 
      layout
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={cn(
        "group relative flex items-center p-4 bg-white rounded-2xl border transition-all duration-300",
        task.completed 
          ? "border-slate-100 bg-slate-50/50" 
          : "border-slate-200 shadow-sm hover:border-blue-200"
      )}
    >
      {/* Time Column */}
      <div className={cn(
        "flex flex-col items-center pr-4 mr-4 border-r border-slate-100 min-w-[4rem] transition-opacity",
        task.completed ? "opacity-40" : "opacity-100"
      )}>
        <span className="text-lg font-bold text-slate-900">{task.time}</span>
        <span className="text-[10px] font-medium text-slate-400 uppercase">Today</span>
      </div>

      {/* Content */}
      <div className={cn("flex-1 transition-opacity", task.completed ? "opacity-40" : "opacity-100")}>
        <h4 className={cn("font-bold text-slate-900 transition-all", task.completed && "line-through text-slate-500")}>
          {task.name}
        </h4>
        <p className="text-sm text-slate-500 mt-0.5 flex items-center gap-1.5">
          <span className="px-1.5 py-0.5 rounded bg-slate-100 text-xs font-medium text-slate-600">{task.dose}</span>
        </p>
      </div>

      {/* Checkbox Action */}
      <button 
        onClick={() => onToggle(task.id)}
        className={cn(
          "w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 relative overflow-hidden",
          task.completed 
            ? "bg-blue-500 text-white shadow-inner" 
            : "bg-slate-100 text-slate-300 hover:bg-blue-50 hover:text-blue-400"
        )}
      >
        <AnimatePresence mode="wait">
          {task.completed && (
            <motion.div
              initial={{ scale: 0, rotate: -45 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
            >
              <Check size={20} strokeWidth={3} />
            </motion.div>
          )}
        </AnimatePresence>
        {!task.completed && <div className="w-4 h-4 rounded-full border-2 border-current opacity-60" />}
      </button>
    </motion.div>
  );
};

// 3. Repeat Schedule Modal (Bottom Sheet)
const RepeatScheduleModal = ({ 
  isOpen, 
  onClose, 
  onSave 
}: { 
  isOpen: boolean; 
  onClose: () => void; 
  onSave: (data: any) => void;
}) => {
  const [frequency, setFrequency] = useState<'Daily' | 'Weekly' | 'Custom'>('Daily');
  const [showFreqDropdown, setShowFreqDropdown] = useState(false);
  
  // Reset state when opened
  useEffect(() => {
    if(isOpen) {
      setFrequency('Daily');
      setShowFreqDropdown(false);
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm z-40"
          />
          
          {/* Bottom Sheet */}
          <motion.div 
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="absolute bottom-0 left-0 right-0 bg-white rounded-t-[32px] z-50 h-[85%] flex flex-col shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="px-6 py-5 border-b border-slate-100 flex items-center justify-center shrink-0 bg-white relative">
              <h3 className="font-bold text-lg text-slate-900">Set Repeat Schedule</h3>
              <button onClick={onClose} className="absolute right-6 p-2 text-slate-400 hover:text-slate-600">
                <X size={24} />
              </button>
            </div>

            {/* Scrollable Form */}
            <div className="flex-1 overflow-y-auto p-6 space-y-8 scrollbar-hide pb-32">
              
              {/* Frequency Dropdown */}
              <div className="space-y-3 relative z-20">
                <label className="text-sm font-bold text-slate-900">Frequency</label>
                <div className="relative">
                  <button 
                    onClick={() => setShowFreqDropdown(!showFreqDropdown)}
                    className="w-full flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-200 text-left hover:bg-slate-100 transition-colors"
                  >
                    <span className="font-semibold text-slate-900">{frequency}</span>
                    <ChevronRight size={20} className={cn("text-slate-400 transition-transform", showFreqDropdown && "rotate-90")} />
                  </button>
                  
                  <AnimatePresence>
                    {showFreqDropdown && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full mt-2 left-0 right-0 bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden z-30"
                      >
                        {['Daily', 'Weekly', 'Custom'].map((opt) => (
                          <button
                            key={opt}
                            onClick={() => {
                              setFrequency(opt as any);
                              setShowFreqDropdown(false);
                            }}
                            className="w-full text-left px-4 py-3 hover:bg-slate-50 font-medium text-slate-700 flex items-center justify-between"
                          >
                            {opt}
                            {frequency === opt && <Check size={16} className="text-blue-600" />}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Time Picker */}
              <div className="space-y-3">
                 <label className="text-sm font-bold text-slate-900">Time</label>
                 <div className="flex items-center gap-4">
                    <div className="flex-1 p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-center">
                        <input type="text" defaultValue="09" className="bg-transparent text-3xl font-bold text-slate-900 w-12 text-center focus:outline-none" />
                        <span className="text-xl font-bold text-slate-400">:</span>
                        <input type="text" defaultValue="00" className="bg-transparent text-3xl font-bold text-slate-900 w-12 text-center focus:outline-none" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <button className="px-3 py-2 bg-blue-600 text-white rounded-lg font-bold text-xs shadow-md shadow-blue-200">AM</button>
                        <button className="px-3 py-2 bg-white border border-slate-200 text-slate-400 rounded-lg font-bold text-xs">PM</button>
                    </div>
                 </div>
              </div>

              {/* Date Range */}
              <div className="grid grid-cols-2 gap-4">
                 <div className="space-y-3">
                    <label className="text-sm font-bold text-slate-900">Start Date</label>
                    <button className="w-full p-4 bg-slate-50 rounded-xl border border-slate-200 text-left flex items-center gap-3 hover:bg-slate-100">
                       <CalendarIcon size={18} className="text-slate-400" />
                       <span className="font-semibold text-slate-900">Today</span>
                    </button>
                 </div>
                 <div className="space-y-3">
                    <label className="text-sm font-bold text-slate-900">End Date</label>
                    <button className="w-full p-4 bg-slate-50 rounded-xl border border-slate-200 text-left flex items-center gap-3 hover:bg-slate-100">
                       <CalendarIcon size={18} className="text-slate-400" />
                       <span className="font-semibold text-slate-400">Never</span>
                    </button>
                 </div>
              </div>

              {/* Summary or Extra Info (Optional) */}
              <div className="p-4 bg-blue-50 rounded-xl border border-blue-100 flex items-start gap-3">
                <Bell size={18} className="text-blue-500 mt-0.5 shrink-0" />
                <p className="text-sm text-blue-800 leading-snug">
                  Reminder set for <span className="font-bold">Every day at 9:00 AM</span> starting today.
                </p>
              </div>

            </div>

            {/* Footer Actions */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-white border-t border-slate-100 flex flex-col gap-3 pb-8">
               <button 
                 onClick={() => onSave({ frequency })}
                 className="w-full py-4 bg-slate-900 text-white rounded-xl font-bold text-lg shadow-lg shadow-slate-300 active:scale-[0.98] transition-transform"
               >
                 Save Schedule
               </button>
               <button 
                 onClick={onClose}
                 className="w-full py-4 bg-white text-slate-500 rounded-xl font-bold text-lg border border-slate-200 hover:bg-slate-50 active:scale-[0.98] transition-all"
               >
                 Cancel
               </button>
            </div>

          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

// 4. Main Feature Screen
export function ScheduleFeatureScreen() {
  const [selectedDate, setSelectedDate] = useState(14);
  const [showModal, setShowModal] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [tasks, setTasks] = useState<ScheduleTask[]>([
    { id: '1', name: 'Benazepril', time: '08:00', dose: '2.5mg', type: 'med', completed: true, date: '2026-01-14' },
    { id: '2', name: 'Phosphate Binder', time: '12:30', dose: '1 tab', type: 'med', completed: false, date: '2026-01-14' },
    { id: '3', name: 'SubQ Fluids', time: '18:00', dose: '150ml', type: 'visit', completed: false, date: '2026-01-14' },
    { id: '4', name: 'Renal Diet', time: '19:00', dose: '100g', type: 'check', completed: false, date: '2026-01-14' },
  ]);

  const toggleTask = (id: string) => {
    setTasks(prev => prev.map(t => {
      if (t.id === id) {
        const newState = !t.completed;
        if (newState) {
          setShowToast(true);
          setTimeout(() => setShowToast(false), 3000);
        }
        return { ...t, completed: newState };
      }
      return t;
    }));
  };

  const handleSaveSchedule = () => {
    // Mock save
    setShowModal(false);
    // Add dummy task
    setTasks(prev => [...prev, {
       id: Math.random().toString(),
       name: 'New Medication',
       time: '20:00',
       dose: '1 pill',
       type: 'med',
       completed: false,
       date: '2026-01-14'
    }]);
  };

  return (
    <div className="relative w-full h-[800px] bg-slate-50 overflow-hidden flex flex-col font-sans">
      
      {/* Header */}
      <div className="bg-white px-6 pt-12 pb-4 flex justify-between items-center z-10 sticky top-0 border-b border-slate-100">
         <h1 className="text-xl font-bold text-slate-900">Medication Schedule</h1>
         <div className="flex gap-4">
            <button className="text-slate-400 hover:text-slate-600"><CalendarIcon size={24} /></button>
            <button className="text-slate-400 hover:text-slate-600"><MoreHorizontal size={24} /></button>
         </div>
      </div>

      {/* Monthly Calendar View */}
      <div className="bg-white pb-6 pt-2 px-6 shadow-sm z-10 rounded-b-3xl">
         <div className="flex justify-between items-center mb-4">
             <span className="text-sm font-bold text-slate-900">January 2026</span>
             <div className="flex gap-2">
                 <button className="p-1 rounded-full hover:bg-slate-100"><ChevronLeft size={16} className="text-slate-400"/></button>
                 <button className="p-1 rounded-full hover:bg-slate-100"><ChevronRight size={16} className="text-slate-400"/></button>
             </div>
         </div>
         
         {/* Weekday Headers */}
         <div className="grid grid-cols-7 mb-2">
            {['S','M','T','W','T','F','S'].map((d, i) => (
                <div key={i} className="text-center text-[10px] font-bold text-slate-400 uppercase">{d}</div>
            ))}
         </div>

         {/* Days Grid */}
         <div className="grid grid-cols-7 gap-y-2 gap-x-1">
             {/* Offset for Thursday start (Jan 1 2026) */}
             {Array.from({ length: 4 }).map((_, i) => <div key={`empty-${i}`} />)}
             
             {/* Days 1-31 */}
             {Array.from({ length: 31 }).map((_, i) => {
                 const d = i + 1;
                 const isSelected = selectedDate === d;
                 const hasEvent = [12, 14, 15, 20, 25].includes(d);
                 
                 return (
                    <button 
                        key={d}
                        onClick={() => setSelectedDate(d)}
                        className={cn(
                           "aspect-square flex flex-col items-center justify-center rounded-full relative transition-all",
                           isSelected ? "bg-slate-900 text-white shadow-md" : "hover:bg-slate-50 text-slate-700"
                        )}
                    >
                        <span className={cn("text-sm font-medium", isSelected && "font-bold")}>{d}</span>
                        {hasEvent && (
                            <div className={cn(
                                "absolute bottom-1 w-1 h-1 rounded-full",
                                isSelected ? "bg-blue-400" : "bg-blue-500"
                            )} />
                        )}
                    </button>
                 );
             })}
         </div>
      </div>

      {/* Schedule List */}
      <div className="flex-1 overflow-y-auto px-6 py-6 space-y-4">
         <div className="flex items-center justify-between mb-2">
             <h2 className="text-lg font-bold text-slate-900">
               {selectedDate === 14 ? "Today's Plan" : `Jan ${selectedDate} Plan`}
             </h2>
             <span className="text-sm text-slate-500 font-medium">
               {tasks.filter(t => t.completed).length}/{tasks.length} Completed
             </span>
         </div>

         {tasks.length > 0 ? tasks.map(task => (
           <ScheduleItem key={task.id} task={task} onToggle={toggleTask} />
         )) : (
            <div className="py-10 text-center text-slate-400">No events for this day.</div>
         )}
         
         <div className="h-24" /> {/* Spacer for FAB */}
      </div>

      {/* FAB - Add Schedule */}
      <motion.button
         whileHover={{ scale: 1.05 }}
         whileTap={{ scale: 0.95 }}
         onClick={() => setShowModal(true)}
         className="absolute bottom-6 right-6 w-14 h-14 bg-blue-600 text-white rounded-full shadow-lg shadow-blue-600/30 flex items-center justify-center z-30"
      >
         <Plus size={28} strokeWidth={2.5} />
      </motion.button>

      {/* Toast Notification */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 50, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: 20, x: "-50%" }}
            className="absolute bottom-24 left-1/2 px-5 py-3 bg-slate-800 text-white rounded-full shadow-xl flex items-center gap-3 z-50 whitespace-nowrap"
          >
             <div className="bg-green-500 rounded-full p-0.5">
               <Check size={12} strokeWidth={3} className="text-white" />
             </div>
             <span className="font-medium text-sm">Medication completed for today</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom Sheet Component */}
      <RepeatScheduleModal 
         isOpen={showModal} 
         onClose={() => setShowModal(false)}
         onSave={handleSaveSchedule}
      />

    </div>
  );
}
