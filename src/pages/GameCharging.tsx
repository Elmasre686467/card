import React, { useState } from 'react';
import { Language } from '../types';
import translations from '../translations';
import PaymentMethod from '../components/PaymentMethod';

interface GameChargingProps {
  language: Language;
}

const games = [
  {
    id: 'pubg',
    name: 'PUBG Mobile',
    image: 'https://i.ibb.co/3vKj0R6/pubg.jpg',
    logo: 'https://i.ibb.co/CbdXp4Q/pubg-logo.png',
    denominations: [60, 180, 300, 600, 1800, 3000]
  },
  {
    id: 'freefire',
    name: 'Free Fire',
    image: 'https://i.ibb.co/k5YhYMD/freefire.jpg',
    logo: 'https://i.ibb.co/9vBkXYG/freefire-logo.png',
    denominations: [100, 310, 520, 1060, 2180, 5600]
  }
];

export default function GameCharging({ language }: GameChargingProps) {
  const [selectedGame, setSelectedGame] = useState<string | null>(null);
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [paymentMethod, setPaymentMethod] = useState<string | null>(null);

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-gray-900">
        {translations.gameCharging[language]}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {games.map((game) => (
          <div
            key={game.id}
            className={`glass-effect rounded-xl overflow-hidden transition-all transform hover:scale-102
              ${selectedGame === game.id ? 'ring-2 ring-indigo-500 shadow-lg' : 'hover:shadow-md'}`}
            onClick={() => setSelectedGame(game.id)}
          >
            <div className="relative h-48">
              <img
                src={game.image}
                alt={game.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <img
                src={game.logo}
                alt={`${game.name} logo`}
                className="absolute bottom-4 left-4 h-12 object-contain"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold">{game.name}</h3>
            </div>
          </div>
        ))}
      </div>

      {selectedGame && (
        <div className="glass-effect rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-4">
            {translations.selectAmount[language]}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {games.find(g => g.id === selectedGame)?.denominations.map((amount) => (
              <button
                key={amount}
                onClick={() => setSelectedAmount(amount)}
                className={`p-4 rounded-lg transition-all transform hover:scale-105
                  ${selectedAmount === amount 
                    ? 'bg-indigo-500 text-white shadow-lg' 
                    : 'bg-white/50 hover:bg-white hover:shadow-md'}`}
              >
                {amount} {translations.currency[language]}
              </button>
            ))}
          </div>
        </div>
      )}

      {selectedAmount && (
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