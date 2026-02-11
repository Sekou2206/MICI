'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Trash2 } from 'lucide-react';
import { useFavorites } from '@/contexts/FavoritesContext';
import ProductCard from './ProductCard';
import { Product } from '@/types';

interface FavoritesViewProps {
  onSelectProduct: (product: Product) => void;
}

export default function FavoritesView({ onSelectProduct }: FavoritesViewProps) {
  const { favorites, clearFavorites } = useFavorites();

  if (favorites.length === 0) {
    return (
      <div className="min-h-screen bg-[#F5F2EC] pt-20">
        <div className="max-w-6xl mx-auto px-6 py-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#D9D2C6] flex items-center justify-center">
              <Heart className="w-8 h-8 text-[#8C7864]" />
            </div>
            <h1 className="font-serif text-3xl text-[#4E4034] mb-4">Favoris</h1>
            <p className="text-sm text-[#8C7864] max-w-md mx-auto">
              Vous n&apos;avez pas encore de favoris. Explorez notre boutique.
            </p>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F5F2EC] pt-20">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="font-serif text-3xl text-[#4E4034]">Favoris</h1>
            <p className="text-sm text-[#8C7864] mt-1">
              {favorites.length} pièce{favorites.length > 1 ? 's' : ''}
            </p>
          </div>
          <button
            onClick={clearFavorites}
            className="flex items-center gap-2 text-xs text-[#8C7864] hover:text-red-500 transition-colors"
          >
            <Trash2 className="w-4 h-4" />
            Tout effacer
          </button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {favorites.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onSelect={onSelectProduct}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
