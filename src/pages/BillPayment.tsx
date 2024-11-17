import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Language } from '../types';
import translations from '../translations';
import { bills } from '../data/services';
import PaymentMethod from '../components/PaymentMethod';

interface BillPaymentProps {
  language: Language;
}

export default function BillPayment({ language }: BillPaymentProps) {
  const { billType } = useParams();
  const [billNumber, setBillNumber] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<string | null>(null);

  const bill = bills.find(b => b.id === billType);
  if (!bill) return null;

  return (
    <div className="space-y-8">
      <div 
        className="glass-effect rounded-xl p-8 bg-gradient-to-r text-white"
        style={{ backgroundImage: `linear-gradient(135deg, ${bill.color}, ${bill.color}dd)` }}
      >
        <div className="flex items-center gap-6">
          <img src={bill.icon} alt={bill.name[language]} className="w-16 h-16 rounded-xl" />
          <h1 className="text-3xl font-bold">{bill.name[language]}</h1>
        </div>
      </div>

      <div className="glass-effect rounded-xl p-6 max-w-md mx-auto">
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {translations.billNumber[language]}
            </label>
            <input
              type="text"
              value={billNumber}
              onChange={(e) => setBillNumber(e.target.value)}
              className="w-full px-4 py-2 bg-white/50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              dir="ltr"
            />
          </div>

          <button 
            className="w-full bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
            onClick={() => {/* Implement bill search */}}
          >
            {translations.search[language]}
          </button>
        </div>
      </div>

      {billNumber && (
        <PaymentMethod
          language={language}
          selectedMethod={paymentMethod}
          onSelect={setPaymentMethod}
        />
      )}

      {paymentMethod && (
        <div className="flex justify-end">
          <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition-colors shadow-lg">
            {translations.proceed[language]}
          </button>
        </div>
      )}
    </div>
  );
}