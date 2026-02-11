'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="bg-[#4E4034] text-[#F5F2EC]">
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <h2 className="font-serif text-2xl tracking-[0.2em] mb-4">ÉLÉGANCE</h2>
            <p className="text-sm text-[#B7A996] leading-relaxed">
              L&apos;art du luxe intemporel depuis 1987.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-xs tracking-[0.2em] uppercase mb-4 text-[#D9D2C6]">Boutique</h3>
            <ul className="space-y-2">
              {['Nouveautés', 'Collections', 'Prêt-à-Porter', 'Accessoires'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-[#B7A996] hover:text-[#F5F2EC] transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs tracking-[0.2em] uppercase mb-4 text-[#D9D2C6]">Informations</h3>
            <ul className="space-y-2">
              {['À Propos', 'Showroom', 'Livraison', 'Retours'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-[#B7A996] hover:text-[#F5F2EC] transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs tracking-[0.2em] uppercase mb-4 text-[#D9D2C6]">Contact</h3>
            <ul className="space-y-2 text-sm text-[#B7A996]">
              <li>25 Avenue Montaigne</li>
              <li>75008 Paris, France</li>
              <li className="pt-2">+33 1 42 65 12 34</li>
              <li>contact@elegance.fr</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-[#8C7864]/30 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[#8C7864]">
            © 2024 Élégance. Tous droits réservés.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-[#8C7864] hover:text-[#F5F2EC] transition-colors">
              Mentions Légales
            </a>
            <a href="#" className="text-xs text-[#8C7864] hover:text-[#F5F2EC] transition-colors">
              Confidentialité
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
