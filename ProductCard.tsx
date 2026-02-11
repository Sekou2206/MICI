'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, ShoppingBag } from 'lucide-react';
import { Product } from '@/types';
import { useCart } from '@/contexts/CartContext';
import { useFavorites } from '@/contexts/FavoritesContext';
import { useCurrency } from '@/contexts/CurrencyContext';

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
}

export default function ProductCard({ product, onSelect }: ProductCardProps) {
  const { addToCart } = useCart();
  const { isFavorite, toggleFavorite } = useFavorites();
  const { formatPrice } = useCurrency();
  const [isHovered, setIsHovered] = useState(false);

  const isProductFavorite = isFavorite(product.id);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onSelect(product)}
    >
      {/* Image */}
      <div className="relative aspect-[3/4] overflow-hidden bg-[#D9D2C6]/20 mb-4">
        <img
          src={product.images[0]}
          alt={product.name}
          className={`w-full h-full object-cover transition-transform duration-700 ${
            isHovered ? 'scale-105' : 'scale-100'
          }`}
        />
        
        {/* Hover Image */}
        {product.images[1] && (
          <img
            src={product.images[1]}
            alt={product.name}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
          />
        )}

        {/* Badges */}
        {product.isNew && (
          <span className="absolute top-3 left-3 px-2 py-1 bg-[#8C7864] text-white text-[10px] tracking-wider">
            NOUVEAU
          </span>
        )}
        {product.isBestseller && (
          <span className="absolute top-3 left-3 px-2 py-1 bg-[#4E4034] text-white text-[10px] tracking-wider">
            BEST-SELLER
          </span>
        )}

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          className="absolute inset-0 bg-black/10 flex items-end justify-center pb-4"
        >
          <div className="flex gap-2">
            <button
              onClick={(e) => { e.stopPropagation(); toggleFavorite(product); }}
              className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors ${
                isProductFavorite ? 'bg-red-500 text-white' : 'bg-white text-[#4E4034]'
              }`}
            >
              <Heart className={`w-4 h-4 ${isProductFavorite ? 'fill-current' : ''}`} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); addToCart(product, product.sizes[0], product.colors[0]); }}
              className="w-9 h-9 rounded-full bg-white text-[#4E4034] flex items-center justify-center"
            >
              <ShoppingBag className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>

      {/* Info */}
      <div>
        <p className="text-[10px] text-[#8C7864] uppercase tracking-wider mb-1">
          {product.categoryFr}
        </p>
        <h3 className="text-sm text-[#4E4034] group-hover:text-[#8C7864] transition-colors mb-2">
          {product.nameFr}
        </h3>
        <p className="text-sm text-[#4E4034]">
          {formatPrice(product.price)}
        </p>
      </div>
    </motion.div>
  );
}
