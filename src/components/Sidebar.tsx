import React from 'react';
import { NavLink } from 'react-router-dom';
import { Wallet, Gamepad2, Phone } from 'lucide-react';
import { Language } from '../types';
import translations from '../translations';

interface SidebarProps {
  isOpen: boolean;
  language: Language;
}

export default function Sidebar({ isOpen, language }: SidebarProps) {
  const links = [
    { to: '/', icon: Wallet, label: translations.dashboard },
    { to: '/games', icon: Gamepad2, label: translations.games },
    { to: '/mobile', icon: Phone, label: translations.mobile },
  ];

  return (
    <aside className={`${isOpen ? 'w-64' : 'w-20'} bg-white shadow-lg transition-all duration-300`}>
      <div className="p-6">
        <h1 className={`text-2xl font-bold text-indigo-600 ${!isOpen && 'hidden'}`}>
          {translations.appName[language]}
        </h1>
      </div>

      <nav className="mt-6">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              `flex items-center gap-4 px-6 py-3 transition-colors ${
                isActive ? 'bg-indigo-50 text-indigo-600' : 'hover:bg-gray-50'
              }`
            }
          >
            <link.icon className="w-6 h-6" />
            {isOpen && <span>{link.label[language]}</span>}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}