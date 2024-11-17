import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import GameCharging from './pages/GameCharging';
import MobileRecharge from './pages/MobileRecharge';
import BillPayment from './pages/BillPayment';
import { Language } from './types';

function App() {
  const [language, setLanguage] = useState<Language>('ar');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50 flex" dir={language === 'ar' ? 'rtl' : 'ltr'}>
        <Sidebar isOpen={sidebarOpen} language={language} />
        <div className="flex-1">
          <Navbar 
            language={language} 
            setLanguage={setLanguage}
            toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
          />
          <main className="p-6">
            <Routes>
              <Route path="/" element={<Dashboard language={language} />} />
              <Route path="/games" element={<GameCharging language={language} />} />
              <Route path="/mobile" element={<MobileRecharge language={language} />} />
              <Route path="/bills/:billType" element={<BillPayment language={language} />} />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;