
export interface TrainingVideo {
  id: string;
  title: string;
  category: string;
  subcategory: string;
  duration: string;
  thumbnail: string;
  completed: boolean;
}

export interface OnboardingItem {
  id: string;
  title: string;
  type: 'video' | 'form' | 'download';
  completed: boolean;
}

export interface Product {
  id: string;
  title: string;
  price: number;
  image: string;
}

export interface Badge {
  id: string;
  name: string;
  icon: string;
  description: string;
}
