import React from 'react';
import { Menu, Globe, Sun } from 'lucide-react';
import { Language } from '../types';
import translations from '../translations';

interface NavbarProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleSidebar: () => void;
}

export default function Navbar({ language, setLanguage, toggleSidebar }: NavbarProps) {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex items-center justify-between">
      <button
        onClick={toggleSidebar}
        className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
      >
        <Menu className="w-6 h-6" />
      </button>

      <div className="flex items-center gap-4">
        <button
          onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
          className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors"
        >
          <Globe className="w-5 h-5" />
          <span>{translations.language[language]}</span>
        </button>

        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
          <Sun className="w-5 h-5" />
        </button>
      </div>
    </nav>
  );
}