'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { ViewType } from '@/types';
import { useCurrency } from '@/contexts/CurrencyContext';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  currentView: ViewType;
  setView: (view: ViewType) => void;
}

export default function MobileMenu({
  isOpen,
  onClose,
  currentView,
  setView,
}: MobileMenuProps) {
  const { currency, currencies, setCurrency } = useCurrency();

  const navItems = [
    { view: 'home' as ViewType, label: 'Accueil' },
    { view: 'catalog' as ViewType, label: 'Boutique' },
    { view: 'favorites' as ViewType, label: 'Favoris' },
    { view: 'contact' as ViewType, label: 'Contact' },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-50 lg:hidden"
          />
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed left-0 top-0 h-full w-72 bg-[#F5F2EC] z-50 lg:hidden"
          >
            <div className="flex items-center justify-between p-6 border-b border-[#D9D2C6]">
              <span className="font-serif text-lg tracking-[0.2em] text-[#4E4034]">ÉLÉGANCE</span>
              <button onClick={onClose} className="p-2">
                <X className="w-5 h-5 text-[#4E4034]" />
              </button>
            </div>

            <nav className="p-6">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.view}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => { setView(item.view); onClose(); }}
                  className={`block w-full text-left py-3 text-sm tracking-wide ${
                    currentView === item.view ? 'text-[#8C7864]' : 'text-[#4E4034]'
                  }`}
                >
                  {item.label}
                </motion.button>
              ))}
            </nav>

            <div className="p-6 border-t border-[#D9D2C6]">
              <p className="text-xs text-[#8C7864] uppercase tracking-wider mb-3">Devise</p>
              <div className="flex gap-2">
                {currencies.map((c) => (
                  <button
                    key={c.code}
                    onClick={() => setCurrency(c)}
                    className={`px-4 py-2 text-xs ${
                      currency.code === c.code
                        ? 'bg-[#8C7864] text-white'
                        : 'bg-white text-[#4E4034]'
                    }`}
                  >
                    {c.code}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
