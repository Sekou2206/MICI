'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, Check } from 'lucide-react';

export default function ContactView() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setForm({ name: '', email: '', message: '' });
    }, 3000);
  };

  const info = [
    { icon: MapPin, label: 'Adresse', value: '25 Avenue Montaigne, 75008 Paris' },
    { icon: Phone, label: 'Téléphone', value: '+33 1 42 65 12 34' },
    { icon: Mail, label: 'Email', value: 'contact@elegance.fr' },
    { icon: Clock, label: 'Horaires', value: 'Lun-Sam: 10h-19h' },
  ];

  return (
    <div className="min-h-screen bg-[#F5F2EC] pt-20">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="font-serif text-4xl text-[#4E4034] mb-4">Contact</h1>
          <p className="text-sm text-[#8C7864] max-w-lg mx-auto">
            Notre équipe est à votre disposition pour répondre à vos questions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h2 className="font-serif text-xl text-[#4E4034] mb-6">Envoyez-nous un message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Nom"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
                className="w-full px-4 py-3 bg-white border border-[#D9D2C6] text-sm focus:outline-none focus:border-[#8C7864]"
              />
              <input
                type="email"
                placeholder="Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
                className="w-full px-4 py-3 bg-white border border-[#D9D2C6] text-sm focus:outline-none focus:border-[#8C7864]"
              />
              <textarea
                placeholder="Message"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
                rows={5}
                className="w-full px-4 py-3 bg-white border border-[#D9D2C6] text-sm focus:outline-none focus:border-[#8C7864] resize-none"
              />
              <button
                type="submit"
                className={`w-full py-4 text-xs tracking-[0.2em] flex items-center justify-center gap-2 transition-colors ${
                  sent ? 'bg-green-500 text-white' : 'bg-[#8C7864] text-white hover:bg-[#4E4034]'
                }`}
              >
                {sent ? (
                  <>
                    <Check className="w-4 h-4" />
                    Envoyé
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Envoyer
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="font-serif text-xl text-[#4E4034] mb-6">Coordonnées</h2>
            <div className="space-y-6">
              {info.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#D9D2C6] flex items-center justify-center">
                    <item.icon className="w-4 h-4 text-[#8C7864]" />
                  </div>
                  <div>
                    <p className="text-xs text-[#8C7864] uppercase tracking-wider mb-1">
                      {item.label}
                    </p>
                    <p className="text-sm text-[#4E4034]">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Map placeholder */}
            <div className="mt-8 aspect-video bg-[#D9D2C6]/50 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-8 h-8 text-[#8C7864] mx-auto mb-2" />
                <p className="text-sm text-[#4E4034]">Paris, France</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
