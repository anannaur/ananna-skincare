
import { Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Dewy Morning Cleanser',
    category: 'Cleanser',
    price: 32,
    description: 'A gentle, low-pH gel cleanser that removes impurities without stripping moisture.',
    ingredients: ['Hyaluronic Acid', 'Rosewater', 'Green Tea Extract'],
    image: 'https://images.unsplash.com/photo-1556228448-399495b62283?auto=format&fit=crop&q=80&w=800',
    skinType: 'All',
    featured: true
  },
  {
    id: '2',
    name: 'Radiance Vitamin C Serum',
    category: 'Serum',
    price: 58,
    description: 'Highly concentrated vitamin C to brighten skin tone and reduce fine lines.',
    ingredients: ['15% L-Ascorbic Acid', 'Ferulic Acid', 'Vitamin E'],
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=800',
    skinType: 'Combination',
    featured: true
  },
  {
    id: '3',
    name: 'Silk Barrier Cream',
    category: 'Moisturizer',
    price: 45,
    description: 'A rich moisturizer designed to repair and protect the skin barrier.',
    ingredients: ['Ceramides', 'Squalane', 'Oat Extract'],
    image: 'https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&q=80&w=800',
    skinType: 'Dry',
    featured: true
  },
  {
    id: '4',
    name: 'Midnight Recovery Oil',
    category: 'Oil',
    price: 65,
    description: 'Luxurious botanical blend that works overnight to restore skin elasticity.',
    ingredients: ['Bakuchiol', 'Rosehip Oil', 'Blue Tansy'],
    image: 'https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&q=80&w=800',
    skinType: 'All'
  },
  {
    id: '5',
    name: 'Clarifying Clay Mask',
    category: 'Mask',
    price: 38,
    description: 'Deeply detoxifies pores and controls excess sebum with French green clay.',
    ingredients: ['Kaolin Clay', 'Salicylic Acid', 'Zinc'],
    image: 'https://images.unsplash.com/photo-1596755094514-f87034a264c6?auto=format&fit=crop&q=80&w=800',
    skinType: 'Oily'
  },
  {
    id: '6',
    name: 'Soothing Petal Toner',
    category: 'Cleanser',
    price: 28,
    description: 'Calm and hydrate with distilled rose petals and witch hazel.',
    ingredients: ['Rose Petals', 'Witch Hazel', 'Niacinamide'],
    image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=800',
    skinType: 'Sensitive'
  }
];
