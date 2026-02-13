
import { OnboardingItem, TrainingVideo, Product, Badge } from './types';

export const ONBOARDING_DATA: OnboardingItem[] = [
  { id: '1', title: 'Welcome to the Society: The Creed', type: 'video', completed: false },
  { id: '2', title: 'Establish Your Bureau Profile', type: 'form', completed: false },
  { id: '3', title: 'The Reseller Handbook (PDF)', type: 'download', completed: false },
  { id: '4', title: 'Technical Setup & Integration', type: 'video', completed: false },
  { id: '5', title: 'Compliance Confirmation', type: 'form', completed: false },
];

export const TRAINING_VIDEOS: TrainingVideo[] = [
  { id: 'v1', title: 'Advanced Tax Architecture', category: 'Tax Software Mastery', subcategory: 'Fundamentals', duration: '15:20', thumbnail: 'https://picsum.photos/seed/tax1/400/225', completed: true },
  { id: 'v2', title: 'Scaling Your Bureau in Q1', category: 'Business Growth', subcategory: 'Strategy', duration: '22:45', thumbnail: 'https://picsum.photos/seed/biz1/400/225', completed: false },
  { id: 'v3', title: 'Cloud Infrastructure Mastery', category: 'Technical Skills', subcategory: 'Security', duration: '18:10', thumbnail: 'https://picsum.photos/seed/tech1/400/225', completed: true },
  { id: 'v4', title: 'Client Acquisition Framework', category: 'Business Growth', subcategory: 'Marketing', duration: '12:05', thumbnail: 'https://picsum.photos/seed/biz2/400/225', completed: false },
  { id: 'v5', title: 'IRS Modernization Roadmap', category: 'Tax Software Mastery', subcategory: 'Policy', duration: '30:00', thumbnail: 'https://picsum.photos/seed/tax2/400/225', completed: false },
  { id: 'v6', title: 'API Integration Workshop', category: 'Technical Skills', subcategory: 'Development', duration: '45:15', thumbnail: 'https://picsum.photos/seed/tech2/400/225', completed: false },
];

export const PRODUCTS: Product[] = [
  { id: 'p1', title: 'Exclusive Data Encryption Suite', price: 299, image: 'https://picsum.photos/seed/prod1/400/400' },
  { id: 'p2', title: 'Priority Support Access Pass', price: 99, image: 'https://picsum.photos/seed/prod2/400/400' },
  { id: 'p3', title: 'Bureau Branding Blueprint', price: 149, image: 'https://picsum.photos/seed/prod3/400/400' },
  { id: 'p4', title: 'Advanced E-Filing Accelerator', price: 499, image: 'https://picsum.photos/seed/prod4/400/400' },
];

export const BADGES: Badge[] = [
  { id: 'b1', name: 'The Initiate', icon: '🏆', description: 'Completed initial onboarding.' },
  { id: 'b2', name: 'Master Architect', icon: '🏛️', description: 'Finished all Tax Mastery courses.' },
  { id: 'b3', name: 'High Table Associate', icon: '🗝️', description: 'Tier 1 member status.' },
];
