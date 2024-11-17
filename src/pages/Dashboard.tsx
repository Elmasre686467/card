import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Language } from '../types';
import translations from '../translations';
import { services, bills } from '../data/services';

interface DashboardProps {
  language: Language;
}

export default function Dashboard({ language }: DashboardProps) {
  const navigate = useNavigate();

  return (
    <div className="space-y-8">
      <div className="glass-effect rounded-xl p-8 bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
        <h1 className="text-4xl font-bold mb-4">
          {translations.welcomeMessage[language]}
        </h1>
        <p className="text-lg opacity-90">
          {language === 'en' 
            ? 'Your one-stop solution for all digital payments in Egypt' 
            : 'حلك الشامل لجميع المدفوعات الرقمية في مصر'}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="glass-effect rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-6">{translations.quickActions[language]}</h2>
          <div className="grid grid-cols-2 gap-4">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => navigate(`/${service.id}`)}
                className="p-4 rounded-xl transition-all hover:scale-105"
                style={{ backgroundColor: `${service.color}15` }}
              >
                <img src={service.icon} alt={service.name[language]} className="w-12 h-12 mx-auto mb-2" />
                <span className="block text-sm font-medium text-center">{service.name[language]}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="glass-effect rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-6">{translations.bills[language]}</h2>
          <div className="grid grid-cols-2 gap-4">
            {bills.map((bill) => (
              <button
                key={bill.id}
                onClick={() => navigate(`/bills/${bill.id}`)}
                className="p-4 rounded-xl transition-all hover:scale-105"
                style={{ backgroundColor: `${bill.color}15` }}
              >
                <img src={bill.icon} alt={bill.name[language]} className="w-12 h-12 mx-auto mb-2" />
                <span className="block text-sm font-medium text-center">{bill.name[language]}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="glass-effect rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-4">{translations.recentTransactions[language]}</h2>
          <div className="space-y-4">
            {/* Placeholder for recent transactions */}
            <div className="animate-pulse">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="flex items-center gap-4 py-2">
                  <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                  <div className="flex-1">
                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                    <div className="h-3 bg-gray-200 rounded w-1/2 mt-2"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}