'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Heart, ShoppingBag, ChevronLeft, ChevronRight, Check } from 'lucide-react';
import { Product } from '@/types';
import { useCart } from '@/contexts/CartContext';
import { useFavorites } from '@/contexts/FavoritesContext';
import { useCurrency } from '@/contexts/CurrencyContext';

interface ProductDetailProps {
  product: Product;
  onClose: () => void;
}

export default function ProductDetail({ product, onClose }: ProductDetailProps) {
  const { addToCart } = useCart();
  const { isFavorite, toggleFavorite } = useFavorites();
  const { formatPrice } = useCurrency();

  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [currentImage, setCurrentImage] = useState(0);
  const [added, setAdded] = useState(false);

  const isProductFavorite = isFavorite(product.id);

  const handleAdd = () => {
    addToCart(product, selectedSize, selectedColor);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        className="bg-[#F5F2EC] max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="grid md:grid-cols-2">
          {/* Images */}
          <div className="relative aspect-square">
            <img
              src={product.images[currentImage]}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            {product.images.length > 1 && (
              <>
                <button
                  onClick={() => setCurrentImage((currentImage - 1 + product.images.length) % product.images.length)}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 flex items-center justify-center hover:bg-white transition-colors"
                >
                  <ChevronLeft className="w-5 h-5 text-[#4E4034]" />
                </button>
                <button
                  onClick={() => setCurrentImage((currentImage + 1) % product.images.length)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 flex items-center justify-center hover:bg-white transition-colors"
                >
                  <ChevronRight className="w-5 h-5 text-[#4E4034]" />
                </button>
              </>
            )}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-10 h-10 bg-white/80 flex items-center justify-center hover:bg-white transition-colors"
            >
              <X className="w-5 h-5 text-[#4E4034]" />
            </button>
          </div>

          {/* Details */}
          <div className="p-8">
            <p className="text-[10px] text-[#8C7864] uppercase tracking-[0.2em] mb-2">
              {product.categoryFr}
            </p>
            <h2 className="font-serif text-2xl text-[#4E4034] mb-4">{product.nameFr}</h2>
            <p className="text-lg text-[#4E4034] mb-6">{formatPrice(product.price)}</p>
            <p className="text-sm text-[#8C7864] leading-relaxed mb-8">
              {product.descriptionFr}
            </p>

            {/* Size */}
            <div className="mb-6">
              <p className="text-xs text-[#4E4034] mb-3">Taille</p>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 text-xs transition-colors ${
                      selectedSize === size
                        ? 'bg-[#8C7864] text-white'
                        : 'bg-white text-[#4E4034] border border-[#D9D2C6]'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Color */}
            <div className="mb-8">
              <p className="text-xs text-[#4E4034] mb-3">Couleur: {selectedColor}</p>
              <div className="flex flex-wrap gap-2">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-4 py-2 text-xs transition-colors ${
                      selectedColor === color
                        ? 'bg-[#8C7864] text-white'
                        : 'bg-white text-[#4E4034] border border-[#D9D2C6]'
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3">
              <button
                onClick={handleAdd}
                className={`flex-1 py-4 text-xs tracking-[0.2em] flex items-center justify-center gap-2 transition-colors ${
                  added ? 'bg-green-500 text-white' : 'bg-[#8C7864] text-white hover:bg-[#4E4034]'
                }`}
              >
                {added ? (
                  <>
                    <Check className="w-4 h-4" />
                    Ajouté
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4" />
                    Ajouter
                  </>
                )}
              </button>
              <button
                onClick={() => toggleFavorite(product)}
                className={`w-14 flex items-center justify-center transition-colors ${
                  isProductFavorite
                    ? 'bg-red-500 text-white'
                    : 'bg-white text-[#4E4034] border border-[#D9D2C6]'
                }`}
              >
                <Heart className={`w-5 h-5 ${isProductFavorite ? 'fill-current' : ''}`} />
              </button>
            </div>

            {/* Details */}
            {product.detailsFr && (
              <div className="mt-8 pt-8 border-t border-[#D9D2C6]">
                <p className="text-xs text-[#4E4034] mb-3">Détails</p>
                <ul className="space-y-2">
                  {product.detailsFr.map((detail, i) => (
                    <li key={i} className="text-xs text-[#8C7864]">• {detail}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
