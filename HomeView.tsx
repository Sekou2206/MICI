'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function HomeView() {
  return (
    <div className="min-h-screen bg-[#F5F2EC]">
      {/* Hero Section - Full Screen */}
      <section className="relative h-screen flex items-center justify-center">
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1920&q=80)',
          }}
        >
          <div className="absolute inset-0 bg-[#F5F2EC]/70" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-xs tracking-[0.4em] text-[#8C7864] uppercase mb-8"
          >
            Maison de Haute Couture
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-serif text-5xl md:text-7xl text-[#4E4034] leading-tight mb-8"
          >
            L&apos;Art du Luxe
            <br />
            <span className="text-[#8C7864]">Intemporel</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-base text-[#8C7864] max-w-xl mx-auto mb-12 leading-relaxed"
          >
            Depuis 1987, nous créons des pièces d&apos;exception où l&apos;excellence 
            artisanale rencontre l&apos;élégance contemporaine.
          </motion.p>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-[1px] h-16 bg-[#8C7864]"
          />
        </motion.div>
      </section>

      {/* Brand Statement */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <p className="text-xs tracking-[0.3em] text-[#8C7864] uppercase mb-6">
                Notre Histoire
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-[#4E4034] mb-8 leading-tight">
                L&apos;Excellence, Une Tradition Familiale
              </h2>
              <p className="text-[#8C7864] leading-relaxed mb-6">
                Fondée à Paris, la maison Élégance perpétue depuis trois générations 
                un savoir-faire artisanal d&apos;exception. Chaque création est le fruit 
                d&apos;un travail méticuleux, où les matériaux les plus nobles rencontrent 
                l&apos;expertise de nos maîtres artisans.
              </p>
              <p className="text-[#8C7864] leading-relaxed">
                Nous croyons que le vrai luxe réside dans l&apos;intemporalité et la qualité. 
                Nos pièces sont conçues pour traverser les époques et devenir les témoins 
                précieux de vos moments les plus mémorables.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&q=80"
                alt="Atelier"
                className="w-full aspect-[4/5] object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <p className="text-xs tracking-[0.3em] text-[#8C7864] uppercase mb-6">
              Nos Engagements
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-[#4E4034]">
              L&apos;Excellence dans Chaque Détail
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: 'Savoir-Faire',
                text: 'Chaque pièce est façonnée par les mains expertes de nos artisans, héritiers d\'une tradition séculaire.',
              },
              {
                title: 'Matériaux Nobles',
                text: 'Nous sélectionnons exclusivement les matières les plus précieuses : cachemire, soie, laine vierge.',
              },
              {
                title: 'Intemporalité',
                text: 'Nos créations traversent les tendances pour devenir des classiques indémodables de votre garde-robe.',
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <h3 className="font-serif text-xl text-[#4E4034] mb-4">{value.title}</h3>
                <p className="text-sm text-[#8C7864] leading-relaxed">{value.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-32 px-6 bg-[#4E4034]">
        <div className="max-w-3xl mx-auto text-center">
          <motion.blockquote
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="font-serif text-2xl md:text-3xl text-[#F5F2EC] leading-relaxed mb-8">
              &quot;Le luxe n&apos;est pas une question de prix, c&apos;est une question de beauté, 
              de qualité et d&apos;émotion.&quot;
            </p>
            <cite className="text-xs tracking-[0.2em] text-[#B7A996] uppercase not-italic">
              — Marie-Claire Élégance, Fondatrice
            </cite>
          </motion.blockquote>
        </div>
      </section>

      {/* Collections Preview */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-xs tracking-[0.3em] text-[#8C7864] uppercase mb-6">
              Collections
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-[#4E4034]">
              Découvrez Nos Univers
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Femme',
                subtitle: 'Automne-Hiver 2024',
                image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=80',
              },
              {
                title: 'Accessoires',
                subtitle: 'Nouveautés',
                image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&q=80',
              },
            ].map((col, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative aspect-[4/5] overflow-hidden cursor-pointer"
              >
                <img
                  src={col.image}
                  alt={col.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#4E4034]/60 to-transparent" />
                <div className="absolute bottom-8 left-8">
                  <p className="text-xs tracking-[0.2em] text-[#B7A996] uppercase mb-2">
                    {col.subtitle}
                  </p>
                  <h3 className="font-serif text-2xl text-[#F5F2EC] flex items-center gap-2">
                    {col.title}
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-32 px-6 bg-[#D9D2C6]/30">
        <div className="max-w-xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-2xl md:text-3xl text-[#4E4034] mb-4">
              Restez Informé
            </h2>
            <p className="text-sm text-[#8C7864] mb-8">
              Inscrivez-vous pour recevoir nos actualités et offres exclusives.
            </p>
            <form className="flex gap-4">
              <input
                type="email"
                placeholder="Votre email"
                className="flex-1 px-4 py-3 bg-white border border-[#D9D2C6] text-sm focus:outline-none focus:border-[#8C7864]"
              />
              <button
                type="submit"
                className="px-8 py-3 bg-[#8C7864] text-white text-xs tracking-[0.2em] hover:bg-[#4E4034] transition-colors"
              >
                S&apos;INSCRIRE
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
