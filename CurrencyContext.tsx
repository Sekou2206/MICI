'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { CurrencyInfo } from '@/types';

interface CurrencyContextType {
  currency: CurrencyInfo;
  setCurrency: (currency: CurrencyInfo) => void;
  formatPrice: (priceInEur: number) => string;
  currencies: CurrencyInfo[];
}

const currencies: CurrencyInfo[] = [
  { code: 'EUR', symbol: '€', rate: 1, name: 'Euro' },
  { code: 'XOF', symbol: 'FCFA', rate: 656, name: 'Franc CFA' },
];

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

function getInitialCurrency(): CurrencyInfo {
  if (typeof window === 'undefined') return currencies[0];
  const savedCurrency = localStorage.getItem('elegance-currency');
  if (savedCurrency) {
    const found = currencies.find((c) => c.code === savedCurrency);
    if (found) return found;
  }
  return currencies[0];
}

export function CurrencyProvider({ children }: { children: ReactNode }) {
  const [currency, setCurrencyState] = useState<CurrencyInfo>(getInitialCurrency);

  // Save currency preference to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('elegance-currency', currency.code);
  }, [currency]);

  const formatPrice = (priceInEur: number): string => {
    const convertedPrice = priceInEur * currency.rate;

    if (currency.code === 'EUR') {
      return new Intl.NumberFormat('fr-FR', {
        style: 'currency',
        currency: 'EUR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }).format(convertedPrice);
    }

    // For FCFA
    return new Intl.NumberFormat('fr-FR', {
      style: 'decimal',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(convertedPrice) + ' ' + currency.symbol;
  };

  const setCurrency = (newCurrency: CurrencyInfo) => {
    setCurrencyState(newCurrency);
  };

  return (
    <CurrencyContext.Provider
      value={{
        currency,
        setCurrency,
        formatPrice,
        currencies,
      }}
    >
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  const context = useContext(CurrencyContext);
  if (context === undefined) {
    throw new Error('useCurrency must be used within a CurrencyProvider');
  }
  return context;
}
