export type Language = 'en' | 'ru' | 'tr' | 'ar';

export type City = 'Baku' | 'Gabala' | 'Ismayilli' | 'Sheki' | 'Guba' | 'Lankaran';

export interface Place {
  id: string;
  name: string;
  description: string;
  category: string;
  rating?: string;
  imageUrl?: string;
}

export interface FoodItem {
  id: string;
  name: string;
  description: string;
  category: 'cheap' | 'local' | 'popular';
  suggestedRestaurants: string[];
}

export interface Museum {
  id: string;
  name: string;
  description: string;
  hours?: string;
  fee?: string;
}

export interface PlanTripRequest {
  city: City;
  days: number;
  budget: 'budget' | 'medium' | 'luxury';
  interests: string[]; // food, nature, culture, nightlife
  lang: Language;
}

export interface PlanTripResponse {
  itinerary: {
    day: number;
    theme?: string;
    activities: {
      time: string;
      place: string;
      description: string;
      cost: string;
    }[];
  }[];
  tips: string[];
}

export interface ChatMessage {
  sender: 'user' | 'ai';
  text: string;
  timestamp: string;
}

export interface ChatRequest {
  city: City;
  message: string;
  history: { sender: 'user' | 'ai'; text: string }[];
  lang: Language;
}

export interface Accommodation {
  id: string;
  name: string;
  description: string;
  tier: 'luxury' | 'mid-range' | 'budget';
  price: string;
  rating: string;
  address: string;
}

export interface ShoppingSpot {
  id: string;
  name: string;
  description: string;
  type: 'mall' | 'bazaar' | 'souvenirs';
  rating: string;
  address: string;
}

