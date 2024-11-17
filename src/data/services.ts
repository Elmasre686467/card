import { Service, Bill } from '../types';
import translations from '../translations';

export const services: Service[] = [
  {
    id: 'mobile',
    name: translations.mobile,
    icon: 'https://i.ibb.co/Ld8nLF4/orange.png',
    color: '#ff7900'
  },
  {
    id: 'games',
    name: translations.games,
    icon: 'https://i.ibb.co/CbdXp4Q/pubg-logo.png',
    color: '#00b4d8'
  }
];

export const bills: Bill[] = [
  {
    id: 'electricity',
    name: translations.electricity,
    icon: 'https://images.unsplash.com/photo-1498084393753-b411b2d26b34?w=128&h=128&fit=crop',
    color: '#ffd60a'
  },
  {
    id: 'water',
    name: translations.water,
    icon: 'https://images.unsplash.com/photo-1612392166886-ee8475b03af2?w=128&h=128&fit=crop',
    color: '#00b4d8'
  },
  {
    id: 'gas',
    name: translations.gas,
    icon: 'https://images.unsplash.com/photo-1627735747011-b8d19961f85c?w=128&h=128&fit=crop',
    color: '#2ec4b6'
  },
  {
    id: 'internet',
    name: translations.internet,
    icon: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=128&h=128&fit=crop',
    color: '#4361ee'
  }
];