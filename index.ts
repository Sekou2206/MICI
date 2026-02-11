// Types for Élégance Luxury Boutique

export interface Product {
  id: string;
  name: string;
  nameFr: string;
  price: number;
  originalPrice?: number;
  description: string;
  descriptionFr: string;
  category: string;
  categoryFr: string;
  images: string[];
  sizes: string[];
  colors: string[];
  inStock: boolean;
  isNew?: boolean;
  isBestseller?: boolean;
  details?: string[];
  detailsFr?: string[];
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedSize: string;
  selectedColor: string;
}

export interface CurrencyInfo {
  code: string;
  symbol: string;
  rate: number;
  name: string;
}

export type ViewType = 'home' | 'catalog' | 'product' | 'favorites' | 'contact';

export interface ViewContextType {
  view: ViewType;
  setView: (view: ViewType) => void;
  selectedProductId: string | null;
  setSelectedProductId: (id: string | null) => void;
}
