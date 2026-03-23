import React, { useState } from 'react';
import { WebLayout } from './components/web-wireframes/WebWireframeComponents';
import { 
  PageDashboard, PageSchedule, PageCondition,
  PageCommunity, PageProfile, PageSignUp, PageLogin, PagePetRegister, PageMedicationAdd, PageVisitAdd, PagePetEdit
} from './components/web-wireframes/WebWireframePages';

export default function WebWireframeApp() {
  const [activePage, setActivePage] = useState('Login');
  const [hasPet, setHasPet] = useState(false); // Default to no pet as requested
  const [currentPetId, setCurrentPetId] = useState('leo');

  const handlePetRegister = () => {
    setHasPet(true);
    setActivePage('Dashboard');
  };

  const renderPage = () => {
    switch (activePage) {
      case 'Dashboard': return <PageDashboard hasPet={hasPet} onNavigate={setActivePage} currentPetId={currentPetId} setCurrentPetId={setCurrentPetId} />;
      case 'Schedule': return <PageSchedule currentPetId={currentPetId} onNavigate={setActivePage} />;
      case 'Condition': return <PageCondition currentPetId={currentPetId} onNavigate={setActivePage} />;
      case 'ConditionWrite': return <PageCondition currentPetId={currentPetId} onNavigate={setActivePage} initialView="form" />;
      case 'Community': return <PageCommunity />;
      case 'Profile': return <PageProfile onNavigate={setActivePage} currentPetId={currentPetId} setCurrentPetId={setCurrentPetId} />;
      case 'PetEdit': return <PagePetEdit onNavigate={setActivePage} />;
      case 'SignUp': return <PageSignUp onNavigate={setActivePage} />;
      case 'Login': return <PageLogin onNavigate={setActivePage} />;
      case 'PetRegister': return <PagePetRegister onRegister={handlePetRegister} onCancel={() => setActivePage('Dashboard')} />;
      case 'PetRegisterFromProfile': return <PagePetRegister onRegister={() => { setHasPet(true); setActivePage('Profile'); }} onCancel={() => setActivePage('Profile')} />;
      case 'MedicationAdd': return <PageMedicationAdd currentPetId={currentPetId} onSave={() => setActivePage('Schedule')} onCancel={() => setActivePage('Schedule')} />;
      case 'VisitAdd': return <PageVisitAdd currentPetId={currentPetId} onSave={() => setActivePage('Schedule')} onCancel={() => setActivePage('Schedule')} />;
      default: return <PageDashboard hasPet={hasPet} onNavigate={setActivePage} currentPetId={currentPetId} setCurrentPetId={setCurrentPetId} />;
    }
  };

  if (activePage === 'SignUp' || activePage === 'Login') {
      return renderPage();
  }

  return (
    <WebLayout activePage={activePage} onNavigate={setActivePage}>
      {renderPage()}
    </WebLayout>
  );
}
