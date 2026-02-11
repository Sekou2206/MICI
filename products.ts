import { Product } from '@/types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Cashmere Coat',
    nameFr: 'Manteau en Cachemire',
    price: 1890,
    originalPrice: 2400,
    description: 'Luxurious cashmere coat with silk lining. Timeless elegance for the modern woman.',
    descriptionFr: 'Manteau luxueux en cachemire avec doublure en soie. Élégance intemporelle pour la femme moderne.',
    category: 'Coats',
    categoryFr: 'Manteaux',
    images: [
      'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=800&q=80',
      'https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=800&q=80'
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Ivory', 'Camel', 'Noir'],
    inStock: true,
    isNew: true,
    details: [
      '100% Premium Cashmere',
      'Silk lining',
      'Hand-stitched details',
      'Made in Italy'
    ],
    detailsFr: [
      '100% Cachemire Premium',
      'Doublure en soie',
      'Détails cousus à la main',
      'Fabriqué en Italie'
    ]
  },
  {
    id: '2',
    name: 'Silk Evening Dress',
    nameFr: 'Robe de Soirée en Soie',
    price: 1450,
    description: 'Handcrafted silk evening dress with delicate embroidery. Perfect for special occasions.',
    descriptionFr: 'Robe de soirée en soie faite à la main avec une broderie délicate. Parfaite pour les occasions spéciales.',
    category: 'Dresses',
    categoryFr: 'Robes',
    images: [
      'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=80',
      'https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=800&q=80'
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['Champagne', 'Noir', 'Bordeaux'],
    inStock: true,
    isBestseller: true,
    details: [
      '100% Mulberry Silk',
      'Hand embroidery',
      'Hidden back zipper',
      'Made in France'
    ],
    detailsFr: [
      '100% Soie de Mûrier',
      'Broderie à la main',
      'Fermeture éclair dorsale cachée',
      'Fabriqué en France'
    ]
  },
  {
    id: '3',
    name: 'Wool Tailored Blazer',
    nameFr: 'Blazer en Laine Sur Mesure',
    price: 980,
    description: 'Impeccably tailored wool blazer with gold-tone buttons. A wardrobe essential.',
    descriptionFr: 'Blazer en laine parfaitement coupé avec boutons dorés. Un essentiel de garde-robe.',
    category: 'Jackets',
    categoryFr: 'Vestes',
    images: [
      'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&q=80',
      'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&q=80'
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Noir', 'Beige', 'Navy'],
    inStock: true,
    isBestseller: true,
    details: [
      'Italian Wool Blend',
      'Gold-tone buttons',
      'Fully lined',
      'Made in Italy'
    ],
    detailsFr: [
      'Mélange de Laine Italienne',
      'Boutons dorés',
      'Entièrement doublé',
      'Fabriqué en Italie'
    ]
  },
  {
    id: '4',
    name: 'Leather Tote Bag',
    nameFr: 'Sac Caban en Cuir',
    price: 780,
    description: 'Premium Italian leather tote with suede interior. Spacious and sophisticated.',
    descriptionFr: 'Sac caban en cuir italien premium avec intérieur en daim. Spacieux et sophistiqué.',
    category: 'Bags',
    categoryFr: 'Sacs',
    images: [
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&q=80',
      'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&q=80'
    ],
    sizes: ['One Size'],
    colors: ['Tan', 'Noir', 'Cognac'],
    inStock: true,
    isNew: true,
    details: [
      'Full-grain Italian Leather',
      'Suede interior',
      'Gold hardware',
      'Made in Italy'
    ],
    detailsFr: [
      'Cuir Italien Pleine Fleur',
      'Intérieur en daim',
      'Quincaillerie dorée',
      'Fabriqué en Italie'
    ]
  },
  {
    id: '5',
    name: 'Merino Wool Sweater',
    nameFr: 'Pull en Laine Mérinos',
    price: 420,
    description: 'Ultra-soft merino wool sweater with ribbed details. Effortless luxury.',
    descriptionFr: 'Pull en laine mérinos ultra-doux avec détails côtelés. Luxe sans effort.',
    category: 'Knitwear',
    categoryFr: 'Maille',
    images: [
      'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&q=80',
      'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800&q=80'
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Cream', 'Grey', 'Burgundy'],
    inStock: true,
    details: [
      '100% Extra Fine Merino',
      'Ribbed cuffs and hem',
      'Relaxed fit',
      'Made in Scotland'
    ],
    detailsFr: [
      '100% Mérinos Extra Fin',
      'Poignets et ourlet côtelés',
      'Coupe décontractée',
      'Fabriqué en Écosse'
    ]
  },
  {
    id: '6',
    name: 'Silk Scarf',
    nameFr: 'Foulard en Soie',
    price: 280,
    description: 'Hand-rolled silk scarf with exclusive print. A touch of Parisian elegance.',
    descriptionFr: 'Foulard en soie à bords roulottés main avec impression exclusive. Une touche d\'élégance parisienne.',
    category: 'Accessories',
    categoryFr: 'Accessoires',
    images: [
      'https://images.unsplash.com/photo-1601924921557-45e6dea0a157?w=800&q=80',
      'https://images.unsplash.com/photo-1584030373081-f37408581b63?w=800&q=80'
    ],
    sizes: ['One Size'],
    colors: ['Multi', 'Bleu', 'Rouge'],
    inStock: true,
    isBestseller: true,
    details: [
      '100% Silk Twill',
      'Hand-rolled edges',
      '90cm x 90cm',
      'Made in France'
    ],
    detailsFr: [
      '100% Twill de Soie',
      'Bords roulottés main',
      '90cm x 90cm',
      'Fabriqué en France'
    ]
  },
  {
    id: '7',
    name: 'Linen Trousers',
    nameFr: 'Pantalon en Lin',
    price: 380,
    description: 'Relaxed linen trousers with impeccable tailoring. Summer sophistication.',
    descriptionFr: 'Pantalon en lin décontracté avec coupe impeccable. Sophistication estivale.',
    category: 'Trousers',
    categoryFr: 'Pantalons',
    images: [
      'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&q=80',
      'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=800&q=80'
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Ivory', 'Beige', 'Navy'],
    inStock: true,
    isNew: true,
    details: [
      '100% Belgian Linen',
      'High waist',
      'Wide leg',
      'Made in Portugal'
    ],
    detailsFr: [
      '100% Lin Belge',
      'Taille haute',
      'Jambe large',
      'Fabriqué au Portugal'
    ]
  },
  {
    id: '8',
    name: 'Pearl Earrings',
    nameFr: 'Boucles d\'Oreilles Perles',
    price: 320,
    description: 'Handcrafted freshwater pearl earrings with gold-plated findings. Timeless beauty.',
    descriptionFr: 'Boucles d\'oreilles en perles d\'eau douce faites à la main avec fermoirs plaqués or. Beauté intemporelle.',
    category: 'Jewelry',
    categoryFr: 'Bijoux',
    images: [
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80'
    ],
    sizes: ['One Size'],
    colors: ['White Gold', 'Yellow Gold'],
    inStock: true,
    details: [
      'Freshwater Pearls',
      '18K Gold-plated findings',
      'Hypoallergenic',
      'Made in France'
    ],
    detailsFr: [
      'Perles d\'Eau Douce',
      'Fermoirs plaqués or 18K',
      'Hypoallergénique',
      'Fabriqué en France'
    ]
  },
  {
    id: '9',
    name: 'Cashmere Wrap',
    nameFr: 'Châle en Cachemire',
    price: 560,
    description: 'Generously sized cashmere wrap for versatile styling. Pure indulgence.',
    descriptionFr: 'Châle en cachemire de grande taille pour un style polyvalent. Pure indulgence.',
    category: 'Accessories',
    categoryFr: 'Accessoires',
    images: [
      'https://images.unsplash.com/photo-1601924921557-45e6dea0a157?w=800&q=80',
      'https://images.unsplash.com/photo-1551232864-3f0890e580d9?w=800&q=80'
    ],
    sizes: ['One Size'],
    colors: ['Ivory', 'Camel', 'Grey'],
    inStock: true,
    details: [
      '100% Cashmere',
      '200cm x 70cm',
      'Fringed edges',
      'Made in Mongolia'
    ],
    detailsFr: [
      '100% Cachemire',
      '200cm x 70cm',
      'Bords frangés',
      'Fabriqué en Mongolie'
    ]
  },
  {
    id: '10',
    name: 'Leather Belt',
    nameFr: 'Ceinture en Cuir',
    price: 290,
    description: 'Italian leather belt with signature gold buckle. The perfect finishing touch.',
    descriptionFr: 'Ceinture en cuir italien avec boucle dorée signature. La touche finale parfaite.',
    category: 'Accessories',
    categoryFr: 'Accessoires',
    images: [
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80',
      'https://images.unsplash.com/photo-1585856331925-97e136f4fa70?w=800&q=80'
    ],
    sizes: ['S', 'M', 'L'],
    colors: ['Noir', 'Brown', 'Tan'],
    inStock: true,
    isBestseller: true,
    details: [
      'Italian Calfskin Leather',
      'Gold-tone buckle',
      '3cm width',
      'Made in Italy'
    ],
    detailsFr: [
      'Cuir de Veau Italien',
      'Boucle dorée',
      'Largeur 3cm',
      'Fabriqué en Italie'
    ]
  },
  {
    id: '11',
    name: 'Suede Ankle Boots',
    nameFr: 'Bottines en Daim',
    price: 680,
    description: 'Elegant suede ankle boots with leather sole. Italian craftsmanship at its finest.',
    descriptionFr: 'Élégantes bottines en daim avec semelle en cuir. Artisanat italien à son apogée.',
    category: 'Shoes',
    categoryFr: 'Chaussures',
    images: [
      'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&q=80',
      'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&q=80'
    ],
    sizes: ['36', '37', '38', '39', '40', '41'],
    colors: ['Noir', 'Camel', 'Grey'],
    inStock: true,
    isNew: true,
    details: [
      'Suede upper',
      'Leather sole',
      '7cm heel',
      'Made in Italy'
    ],
    detailsFr: [
      'Tige en daim',
      'Semelle en cuir',
      'Talon 7cm',
      'Fabriqué en Italie'
    ]
  },
  {
    id: '12',
    name: 'Silk Blouse',
    nameFr: 'Blouse en Soie',
    price: 520,
    description: 'Flowing silk blouse with mother-of-pearl buttons. Romantic and refined.',
    descriptionFr: 'Blouse fluide en soie avec boutons en nacre. Romantique et raffinée.',
    category: 'Tops',
    categoryFr: 'Hauts',
    images: [
      'https://images.unsplash.com/photo-1598554747436-c9293d6a588f?w=800&q=80',
      'https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=800&q=80'
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['Ivory', 'Blush', 'Noir'],
    inStock: true,
    details: [
      '100% Silk Crepe',
      'Mother-of-pearl buttons',
      'Relaxed fit',
      'Made in France'
    ],
    detailsFr: [
      '100% Crêpe de Soie',
      'Boutons en nacre',
      'Coupe décontractée',
      'Fabriqué en France'
    ]
  }
];

export const categories = [
  { en: 'All', fr: 'Tous' },
  { en: 'Coats', fr: 'Manteaux' },
  { en: 'Dresses', fr: 'Robes' },
  { en: 'Jackets', fr: 'Vestes' },
  { en: 'Knitwear', fr: 'Maille' },
  { en: 'Trousers', fr: 'Pantalons' },
  { en: 'Tops', fr: 'Hauts' },
  { en: 'Bags', fr: 'Sacs' },
  { en: 'Shoes', fr: 'Chaussures' },
  { en: 'Accessories', fr: 'Accessoires' },
  { en: 'Jewelry', fr: 'Bijoux' }
];

export const testimonials = [
  {
    id: '1',
    name: 'Marie Laurent',
    location: 'Paris, France',
    text: 'The quality of Élégance pieces is unmatched. Each item feels like a treasure.',
    textFr: 'La qualité des pièces d\'Élégance est inégalée. Chaque article est un véritable trésor.',
    rating: 5
  },
  {
    id: '2',
    name: 'Sophie Dubois',
    location: 'Bruxelles, Belgique',
    text: 'Finally, a brand that understands timeless elegance. My wardrobe has been transformed.',
    textFr: 'Enfin une marque qui comprend l\'élégance intemporelle. Ma garde-robe a été transformée.',
    rating: 5
  },
  {
    id: '3',
    name: 'Claire Moreau',
    location: 'Lyon, France',
    text: 'Exceptional service and exquisite pieces. Élégance has become my go-to for special occasions.',
    textFr: 'Service exceptionnel et pièces exquises. Élégance est devenu mon adresse pour les grandes occasions.',
    rating: 5
  }
];
