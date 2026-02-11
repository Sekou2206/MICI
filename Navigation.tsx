'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { useFavorites } from '@/contexts/FavoritesContext';
import { useCurrency } from '@/contexts/CurrencyContext';
import { ViewType } from '@/types';

interface NavigationProps {
  currentView: ViewType;
  setView: (view: ViewType) => void;
  onMenuClick: () => void;
}

export default function Navigation({
  currentView,
  setView,
  onMenuClick,
}: NavigationProps) {
  const { totalItems, setIsCartOpen } = useCart();
  const { totalFavorites } = useFavorites();
  const { currency, currencies, setCurrency } = useCurrency();
  const [isScrolled, setIsScrolled] = useState(false);
  const [showCurrency, setShowCurrency] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { view: 'home' as ViewType, label: 'Accueil' },
    { view: 'catalog' as ViewType, label: 'Boutique' },
    { view: 'contact' as ViewType, label: 'Contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-[#F5F2EC]/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Mobile Menu */}
          <button onClick={onMenuClick} className="lg:hidden p-2 text-[#4E4034]">
            <Menu className="w-6 h-6" />
          </button>

          {/* Logo */}
          <motion.button
            whileHover={{ opacity: 0.7 }}
            onClick={() => setView('home')}
            className="absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0"
          >
            <h1 className="font-serif text-2xl tracking-[0.3em] text-[#4E4034]">
              ÉLÉGANCE
            </h1>
          </motion.button>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-10">
            {navItems.map((item) => (
              <button
                key={item.view}
                onClick={() => setView(item.view)}
                className={`text-xs tracking-[0.2em] uppercase transition-colors ${
                  currentView === item.view ? 'text-[#8C7864]' : 'text-[#4E4034] hover:text-[#8C7864]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Right Icons */}
          <div className="flex items-center gap-4">
            {/* Currency */}
            <div className="relative hidden sm:block">
              <button
                onClick={() => setShowCurrency(!showCurrency)}
                className="text-xs text-[#4E4034] hover:text-[#8C7864] transition-colors"
              >
                {currency.code}
              </button>
              <AnimatePresence>
                {showCurrency && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 5 }}
                    className="absolute right-0 top-full mt-2 bg-white rounded shadow-lg overflow-hidden"
                  >
                    {currencies.map((c) => (
                      <button
                        key={c.code}
                        onClick={() => { setCurrency(c); setShowCurrency(false); }}
                        className={`block w-full px-4 py-2 text-xs text-left hover:bg-[#F5F2EC] ${
                          currency.code === c.code ? 'bg-[#F5F2EC]' : ''
                        }`}
                      >
                        {c.code}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Favorites */}
            <button
              onClick={() => setView('favorites')}
              className="relative p-2 text-[#4E4034] hover:text-[#8C7864] transition-colors"
            >
              <Heart className="w-5 h-5" />
              {totalFavorites > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#8C7864] text-white text-[10px] rounded-full flex items-center justify-center">
                  {totalFavorites}
                </span>
              )}
            </button>

            {/* Cart */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 text-[#4E4034] hover:text-[#8C7864] transition-colors"
            >
              <ShoppingBag className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#8C7864] text-white text-[10px] rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
