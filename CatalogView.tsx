'use client';

import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, ChevronDown } from 'lucide-react';
import { products, categories } from '@/data/products';
import ProductCard from './ProductCard';
import { Product } from '@/types';

interface CatalogViewProps {
  onSelectProduct: (product: Product) => void;
}

export default function CatalogView({ onSelectProduct }: CatalogViewProps) {
  const [selectedCategory, setSelectedCategory] = useState('Tous');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'newest'>('featured');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (selectedCategory !== 'Tous') {
      result = result.filter((p) => p.categoryFr === selectedCategory);
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.nameFr.toLowerCase().includes(query)
      );
    }

    switch (sortBy) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        result.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
      default:
        result.sort((a, b) => (b.isBestseller ? 1 : 0) - (a.isBestseller ? 1 : 0));
    }

    return result;
  }, [selectedCategory, searchQuery, sortBy]);

  return (
    <div className="min-h-screen bg-[#F5F2EC] pt-20">
      {/* Header */}
      <div className="py-16 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="font-serif text-4xl text-[#4E4034] mb-4">Boutique</h1>
          <p className="text-sm text-[#8C7864] max-w-lg mx-auto">
            Découvrez notre collection de pièces d&apos;exception, façonnées avec passion.
          </p>
        </motion.div>
      </div>

      <div className="max-w-6xl mx-auto px-6 pb-16">
        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8C7864]" />
            <input
              type="text"
              placeholder="Rechercher..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white border border-[#D9D2C6] text-sm focus:outline-none focus:border-[#8C7864]"
            />
          </div>
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
              className="appearance-none px-4 py-3 pr-10 bg-white border border-[#D9D2C6] text-sm focus:outline-none focus:border-[#8C7864] cursor-pointer"
            >
              <option value="featured">En vedette</option>
              <option value="newest">Nouveautés</option>
              <option value="price-asc">Prix croissant</option>
              <option value="price-desc">Prix décroissant</option>
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8C7864] pointer-events-none" />
          </div>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.fr}
              onClick={() => setSelectedCategory(cat.fr)}
              className={`px-4 py-2 text-xs tracking-wider transition-colors ${
                selectedCategory === cat.fr
                  ? 'bg-[#8C7864] text-white'
                  : 'bg-white text-[#4E4034] border border-[#D9D2C6] hover:border-[#8C7864]'
              }`}
            >
              {cat.fr}
            </button>
          ))}
        </div>

        {/* Products Count */}
        <p className="text-xs text-[#8C7864] mb-6">
          {filteredProducts.length} produit{filteredProducts.length > 1 ? 's' : ''}
        </p>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
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
