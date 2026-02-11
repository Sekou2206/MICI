'use client';

import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { CartProvider, useCart } from '@/contexts/CartContext';
import { FavoritesProvider } from '@/contexts/FavoritesContext';
import { CurrencyProvider } from '@/contexts/CurrencyContext';
import Navigation from '@/components/boutique/Navigation';
import Footer from '@/components/boutique/Footer';
import CartPanel from '@/components/boutique/CartPanel';
import MobileMenu from '@/components/boutique/MobileMenu';
import HomeView from '@/components/boutique/HomeView';
import CatalogView from '@/components/boutique/CatalogView';
import FavoritesView from '@/components/boutique/FavoritesView';
import ContactView from '@/components/boutique/ContactView';
import ProductDetail from '@/components/boutique/ProductDetail';
import { Product, ViewType } from '@/types';

function BoutiqueContent() {
  const { isCartOpen, setIsCartOpen } = useCart();
  const [currentView, setCurrentView] = useState<ViewType>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleSelectProduct = (product: Product) => {
    setSelectedProduct(product);
  };

  const renderView = () => {
    switch (currentView) {
      case 'catalog':
        return <CatalogView onSelectProduct={handleSelectProduct} />;
      case 'favorites':
        return <FavoritesView onSelectProduct={handleSelectProduct} />;
      case 'contact':
        return <ContactView />;
      default:
        return <HomeView />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F2EC]">
      <Navigation
        currentView={currentView}
        setView={setCurrentView}
        onMenuClick={() => setIsMobileMenuOpen(true)}
      />

      <main className="flex-1">
        {renderView()}
      </main>

      <Footer />

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        currentView={currentView}
        setView={(view) => {
          setCurrentView(view);
          setIsMobileMenuOpen(false);
        }}
      />

      <CartPanel isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />

      <AnimatePresence>
        {selectedProduct && (
          <ProductDetail
            product={selectedProduct}
            onClose={() => setSelectedProduct(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Home() {
  return (
    <CurrencyProvider>
      <CartProvider>
        <FavoritesProvider>
          <BoutiqueContent />
        </FavoritesProvider>
      </CartProvider>
    </CurrencyProvider>
  );
}
