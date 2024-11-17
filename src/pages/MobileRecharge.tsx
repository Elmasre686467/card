import React, { useState } from 'react';
import { Language } from '../types';
import translations from '../translations';
import PaymentMethod from '../components/PaymentMethod';

interface MobileRechargeProps {
  language: Language;
}

const operators = [
  {
    id: 'vodafone',
    name: 'Vodafone',
    logo: 'https://i.ibb.co/9sMPmw6/vodafone.png',
    conversionRate: 1.15,
    color: '#e60000'
  },
  {
    id: 'etisalat',
    name: 'Etisalat',
    logo: 'https://i.ibb.co/7p5vDHM/etisalat.png',
    conversionRate: 1.12,
    color: '#7ed500'
  },
  {
    id: 'orange',
    name: 'Orange',
    logo: 'https://i.ibb.co/Ld8nLF4/orange.png',
    conversionRate: 1.13,
    color: '#ff7900'
  },
  {
    id: 'we',
    name: 'WE',
    logo: 'https://i.ibb.co/Qp1Jkcx/we.png',
    conversionRate: 1.14,
    color: '#8000ff'
  }
];

export default function MobileRecharge({ language }: MobileRechargeProps) {
  const [selectedOperator, setSelectedOperator] = useState<string | null>(null);
  const [amount, setAmount] = useState<string>('');
  const [paymentMethod, setPaymentMethod] = useState<string | null>(null);

  const calculateReceived = () => {
    const operator = operators.find(op => op.id === selectedOperator);
    if (!operator || !amount) return null;
    return (parseFloat(amount) / operator.conversionRate).toFixed(2);
  };

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-gray-900">
        {translations.mobileRecharge[language]}
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {operators.map((operator) => (
          <div
            key={operator.id}
            className={`glass-effect rounded-xl p-6 cursor-pointer transition-all transform hover:scale-102
              ${selectedOperator === operator.id ? 'ring-2 shadow-lg' : 'hover:shadow-md'}`}
            style={{ 
              borderColor: selectedOperator === operator.id ? operator.color : 'transparent',
              boxShadow: selectedOperator === operator.id ? `0 4px 12px ${operator.color}33` : undefined 
            }}
            onClick={() => setSelectedOperator(operator.id)}
          >
            <img
              src={operator.logo}
              alt={operator.name}
              className="w-24 h-24 object-contain mx-auto mb-4"
            />
            <h3 className="text-center font-semibold">{operator.name}</h3>
          </div>
        ))}
      </div>

      {selectedOperator && (
        <div className="glass-effect rounded-xl p-6 max-w-md mx-auto">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {translations.phoneNumber[language]}
              </label>
              <input
                type="tel"
                className="w-full px-4 py-2 bg-white/50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="01xxxxxxxxx"
                dir="ltr"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {translations.amount[language]}
              </label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full px-4 py-2 bg-white/50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                dir="ltr"
              />
            </div>

            {amount && (
              <div className="bg-white/50 p-4 rounded-lg">
                <p className="text-sm text-gray-600">
                  {translations.youWillReceive[language]}:{' '}
                  <span className="font-semibold">{calculateReceived()} {translations.currency[language]}</span>
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {amount && (
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