'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, Trash2, ShoppingBag } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { useCurrency } from '@/contexts/CurrencyContext';

interface CartPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartPanel({ isOpen, onClose }: CartPanelProps) {
  const { items, removeFromCart, updateQuantity, totalPrice, totalItems, clearCart } = useCart();
  const { formatPrice } = useCurrency();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 z-50"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-[#F5F2EC] z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-[#D9D2C6]">
              <div>
                <h2 className="font-serif text-xl text-[#4E4034]">Panier</h2>
                <p className="text-xs text-[#8C7864] mt-1">
                  {totalItems} article{totalItems > 1 ? 's' : ''}
                </p>
              </div>
              <button onClick={onClose} className="p-2 hover:bg-[#D9D2C6] rounded-full transition-colors">
                <X className="w-5 h-5 text-[#4E4034]" />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto p-6">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <ShoppingBag className="w-12 h-12 text-[#B7A996] mb-4" />
                  <p className="text-[#4E4034] mb-1">Votre panier est vide</p>
                  <p className="text-xs text-[#8C7864]">Découvrez nos créations</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {items.map((item) => (
                    <div
                      key={`${item.product.id}-${item.selectedSize}-${item.selectedColor}`}
                      className="flex gap-4 p-4 bg-white"
                    >
                      <div className="w-20 h-24 overflow-hidden">
                        <img
                          src={item.product.images[0]}
                          alt={item.product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-sm text-[#4E4034]">{item.product.nameFr}</h3>
                        <p className="text-xs text-[#8C7864] mt-1">
                          {item.selectedSize} • {item.selectedColor}
                        </p>
                        <p className="text-sm text-[#4E4034] mt-2">
                          {formatPrice(item.product.price)}
                        </p>
                        <div className="flex items-center justify-between mt-3">
                          <div className="flex items-center border border-[#D9D2C6]">
                            <button
                              onClick={() => updateQuantity(item.product.id, item.selectedSize, item.selectedColor, item.quantity - 1)}
                              className="p-1.5 hover:bg-[#F5F2EC]"
                            >
                              <Minus className="w-3 h-3 text-[#4E4034]" />
                            </button>
                            <span className="px-3 text-xs text-[#4E4034]">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.product.id, item.selectedSize, item.selectedColor, item.quantity + 1)}
                              className="p-1.5 hover:bg-[#F5F2EC]"
                            >
                              <Plus className="w-3 h-3 text-[#4E4034]" />
                            </button>
                          </div>
                          <button
                            onClick={() => removeFromCart(item.product.id, item.selectedSize, item.selectedColor)}
                            className="p-1.5 hover:bg-red-50 rounded"
                          >
                            <Trash2 className="w-4 h-4 text-red-400" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t border-[#D9D2C6] p-6 bg-white">
                <div className="flex justify-between mb-2 text-sm">
                  <span className="text-[#8C7864]">Sous-total</span>
                  <span className="text-[#4E4034]">{formatPrice(totalPrice)}</span>
                </div>
                <div className="flex justify-between mb-4 text-sm">
                  <span className="text-[#8C7864]">Livraison</span>
                  <span className="text-[#B7A996]">Offerte</span>
                </div>
                <div className="flex justify-between mb-6 pt-4 border-t border-[#D9D2C6]">
                  <span className="text-[#4E4034]">Total</span>
                  <span className="font-serif text-xl text-[#4E4034]">{formatPrice(totalPrice)}</span>
                </div>
                <div className="space-y-3">
                  <button className="w-full py-4 bg-[#8C7864] text-white text-xs tracking-[0.2em] hover:bg-[#4E4034] transition-colors">
                    COMMANDER
                  </button>
                  <button
                    onClick={clearCart}
                    className="w-full py-3 border border-[#D9D2C6] text-[#4E4034] text-xs hover:bg-[#F5F2EC] transition-colors"
                  >
                    Vider le panier
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
