export type Language = 'en' | 'ar';

export interface Game {
  id: string;
  name: string;
  image: string;
  denominations: number[];
}

export interface Operator {
  id: string;
  name: string;
  logo: string;
  conversionRate: number;
  color: string;
}

export interface Service {
  id: string;
  name: TranslationKey;
  icon: string;
  color: string;
}

export interface Bill {
  id: string;
  name: TranslationKey;
  icon: string;
  color: string;
}

export interface TranslationKey {
  en: string;
  ar: string;
}