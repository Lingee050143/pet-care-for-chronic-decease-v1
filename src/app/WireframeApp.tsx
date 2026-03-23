import React, { useState } from 'react';
import { 
  Home, Activity, MessageCircle, ClipboardList, Calendar, Settings, 
  RefreshCcw, Smartphone, Pill, Users, AlertCircle
} from 'lucide-react';
import { WFStatusBar } from './components/wireframes/WireframeComponents';
import { 
  HomeScreen, MedicationsScreen, SymptomCheckScreen, RiskResultScreen, 
  HospitalFinderScreen, ConsultationScreen, CarePlanScreen, CommunityScreen, 
  SettingsScreen 
} from './components/wireframes/WireframeScreens';
import { clsx } from 'clsx';

type ScreenName = 
  | 'Home' 
  | 'Medications'
  | 'SymptomCheck' 
  | 'RiskResult' 
  | 'HospitalFinder' 
  | 'Consultation' 
  | 'CarePlan' 
  | 'Community' 
  | 'Settings';

export default function WireframeApp() {
  const [currentScreen, setCurrentScreen] = useState<ScreenName>('Home');

  // Screens that show the bottom navigation
  const showBottomNav = ['Home', 'Medications', 'SymptomCheck', 'CarePlan', 'Community', 'Settings'].includes(currentScreen);

  // Render the active screen
  const renderScreen = () => {
    const props = { onNavigate: (s: string) => setCurrentScreen(s as ScreenName) };
    
    switch (currentScreen) {
      case 'Home': return <HomeScreen {...props} />;
      case 'Medications': return <MedicationsScreen {...props} />;
      case 'SymptomCheck': return <SymptomCheckScreen {...props} />;
      case 'RiskResult': return <RiskResultScreen {...props} />;
      case 'HospitalFinder': return <HospitalFinderScreen {...props} />;
      case 'Consultation': return <ConsultationScreen {...props} />;
      case 'CarePlan': return <CarePlanScreen {...props} />;
      case 'Community': return <CommunityScreen {...props} />;
      case 'Settings': return <SettingsScreen {...props} />;
      default: return <HomeScreen {...props} />;
    }
  };

  const NavItem = ({ screen, icon: Icon, label }: { screen: ScreenName; icon: any; label: string }) => (
    <button 
      onClick={() => setCurrentScreen(screen)}
      className={clsx(
        "flex flex-col items-center gap-1 min-w-[50px] flex-1",
        currentScreen === screen ? "text-slate-900" : "text-slate-400"
      )}
    >
      <Icon className={clsx("w-6 h-6", currentScreen === screen && "fill-current")} />
      <span className="text-[9px] font-medium tracking-tight">{label}</span>
    </button>
  );

  return (
    <div className="min-h-screen bg-[#e2e8f0] flex items-center justify-center p-8 font-sans">
      
      {/* Container for the Phone + Info Side */}
      <div className="flex gap-12 items-start">
        
        {/* Phone Frame */}
        <div className="relative w-[393px] h-[852px] bg-white rounded-[50px] shadow-2xl border-[8px] border-slate-900 overflow-hidden flex flex-col">
            
            {/* Notch Area */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[35px] bg-slate-900 rounded-b-[20px] z-[60]" />

            {/* Status Bar */}
            <WFStatusBar />

            {/* Screen Content */}
            <div className="flex-1 flex flex-col overflow-hidden relative">
              {renderScreen()}
            </div>

            {/* Bottom Navigation */}
            {showBottomNav && (
              <div className="h-[84px] bg-white border-t border-slate-200 flex items-start justify-between px-2 pt-3 pb-8 z-50">
                <NavItem screen="Home" icon={Home} label="Home" />
                <NavItem screen="Medications" icon={Pill} label="Meds" />
                <NavItem screen="SymptomCheck" icon={Activity} label="Symptom" />
                <NavItem screen="CarePlan" icon={ClipboardList} label="Care" />
                <NavItem screen="Community" icon={Users} label="Community" />
                <NavItem screen="Settings" icon={Settings} label="Settings" />
              </div>
            )}

            {/* Home Indicator */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[130px] h-[5px] bg-slate-900 rounded-full z-[60]" />
        </div>

        {/* Side Panel: Information & Controls */}
        <div className="w-[300px] space-y-6 pt-20">
           <div>
               <h1 className="text-3xl font-bold text-slate-800">VetTrack</h1>
               <p className="text-slate-500 mt-2">Mobile MVP Wireframe v2.0</p>
               <div className="mt-2 inline-flex items-center gap-2 px-2 py-1 bg-yellow-100 text-yellow-800 text-xs font-bold rounded">
                   <AlertCircle className="w-3 h-3" /> Chronic Disease Mgmt
               </div>
           </div>

           <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 space-y-4">
              <h2 className="font-bold text-slate-900 flex items-center gap-2">
                  <Smartphone className="w-5 h-5" />
                  Prototype Controls
              </h2>
              <p className="text-sm text-slate-500">
                  Current Screen: <span className="font-mono bg-slate-100 px-2 py-0.5 rounded text-slate-900">{currentScreen}</span>
              </p>
              
              <button 
                  onClick={() => setCurrentScreen('Home')}
                  className="w-full flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-900 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                  <RefreshCcw className="w-4 h-4" />
                  Restart Flow
              </button>
           </div>

           <div className="space-y-4">
               <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider">Target User Flow</h3>
               <div className="pl-4 border-l-2 border-slate-200 space-y-4">
                   <div className="space-y-1">
                       <p className="text-xs font-bold text-slate-500">1. DAILY ROUTINE</p>
                       <p className="text-sm text-slate-800">Log Appetite & Water → Check Medications</p>
                   </div>
                   <div className="space-y-1">
                       <p className="text-xs font-bold text-slate-500">2. EMERGENCY</p>
                       <p className="text-sm text-slate-800">Symptom Check → Risk Result → Find Hospital</p>
                   </div>
               </div>
           </div>
        </div>

      </div>
    </div>
  );
}
