export type Product = {
  id: string;
  name: string;
  category: string;
  price: string;
  summary: string;
  image: string;
  gallery: string[];
  specs: string[];
  details: string;
  featured: boolean;
};

export const products: Product[] = [
  {
    id: 'margaux-slate-porcelain',
    name: 'Margaux Slate Porcelain',
    category: 'Tiles',
    price: '$249 / m²',
    summary: 'Large-format slab with a refined slate surface and warm grey undertones.',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1598300057460-4116e7cc56e1?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80'
    ],
    specs: ['120x260 cm slab', 'Matte finish', 'Suitable for floors & walls', 'Commercial grade'],
    details: 'An architectural porcelain designed for seamless floor-to-wall transitions in living and hospitality spaces.',
    featured: true
  },
  {
    id: 'noir-brassware',
    name: 'Noir Brassware Set',
    category: 'Bathroom',
    price: '$1,980',
    summary: 'Low-profile matte black fixtures with a tactile lever and sculpted spout.',
    image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1598300057460-4116e7cc56e1?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80'
    ],
    specs: ['Solid brass', 'Matte black', 'WaterSense certified', 'Lifetime finish warranty'],
    details: 'A luxury fixture family that pairs well with stone basins and monolithic tub surrounds.',
    featured: true
  },
  {
    id: 'plaster-velvet-wall',
    name: 'Plaster Velvet Wall',
    category: 'Surfaces',
    price: '$165 / m²',
    summary: 'Soft tactile plaster with a suede-like surface and subtle colour depth.',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80'
    ],
    specs: ['Mineral finish', 'Hand-trowelled texture', 'Suitable for walls', 'Low VOC'],
    details: 'A warm finish for feature walls, ceilings and sculptural niche details.',
    featured: true
  },
  {
    id: 'atelier-dining-table',
    name: 'Atelier Dining Table',
    category: 'Furniture',
    price: '$5,200',
    summary: 'Solid oak dining table with smoke finish and slender brass joinery details.',
    image: 'https://images.unsplash.com/photo-1465098695138-de0a65e2a87f?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1465098695138-de0a65e2a87f?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80'
    ],
    specs: ['240cm length', 'Solid oak', 'Brass inlay', 'Custom finishes available'],
    details: 'A sculptural table designed for contemporary dining rooms and hospitality lounges.',
    featured: true
  }
];

export const categories = [
  { id: 'tiles', label: 'Tiles & Surfaces' },
  { id: 'kitchens', label: 'Kitchens' },
  { id: 'bathrooms', label: 'Bathrooms' },
  { id: 'furniture', label: 'Furniture' }
];
