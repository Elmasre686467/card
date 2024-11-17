import React from 'react';
import { Language } from '../types';
import translations from '../translations';

interface PaymentMethodProps {
  language: Language;
  selectedMethod: string | null;
  onSelect: (method: string) => void;
}

export default function PaymentMethod({ language, selectedMethod, onSelect }: PaymentMethodProps) {
  const methods = [
    {
      id: 'fawry',
      name: translations.fawry[language],
      logo: 'https://i.ibb.co/VvxBzzg/fawry.png',
      description: translations.fawryDesc[language]
    },
    {
      id: 'cashEgypt',
      name: translations.cashEgypt[language],
      logo: 'https://i.ibb.co/0MK3PYP/cash-egypt.png',
      description: translations.cashEgyptDesc[language]
    }
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-gray-900">
        {translations.paymentMethod[language]}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {methods.map((method) => (
          <div
            key={method.id}
            onClick={() => onSelect(method.id)}
            className={`glass-effect rounded-xl p-6 cursor-pointer transition-all transform hover:scale-102
              ${selectedMethod === method.id ? 'ring-2 ring-indigo-500 shadow-lg' : 'hover:shadow-md'}`}
          >
            <div className="flex items-center gap-4">
              <img
                src={method.logo}
                alt={method.name}
                className="w-16 h-16 object-contain"
              />
              <div>
                <h3 className="font-semibold text-lg text-gray-900">{method.name}</h3>
                <p className="text-sm text-gray-600">{method.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}