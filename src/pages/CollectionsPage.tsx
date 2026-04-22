import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Filter } from 'lucide-react';
import PageTransition from '../components/PageTransition';

const categories = ["All", "DINING ROOMS", "LIVING SETS", "RECEPTION", "BEDROOMS", "L-SHAPE"];

const products = [
  { id: 1, name: "Eclipse Dining Table", category: "DINING ROOMS", image: `${import.meta.env.BASE_URL}whatsapp-2026-03-09-06-59-57.jpeg` },
  { id: 2, name: "Lounge Composition", category: "LIVING SETS", image: `${import.meta.env.BASE_URL}whatsapp-2026-03-09-06-43-02.jpeg` },
  { id: 3, name: "Reception Console", category: "RECEPTION", image: `${import.meta.env.BASE_URL}whatsapp-2026-03-09-06-59-56-2.jpeg` },
  { id: 4, name: "Haven Bed Frame", category: "BEDROOMS", image: `${import.meta.env.BASE_URL}whatsapp-2026-03-09-06-59-56-1.jpeg` },
  { id: 5, name: "Modular L-Section", category: "L-SHAPE", image: `${import.meta.env.BASE_URL}whatsapp-2026-03-09-06-59-56.jpeg` },
  { id: 6, name: "Accent Chair", category: "LIVING SETS", image: `${import.meta.env.BASE_URL}whatsapp-2026-03-09-07-09-29.jpeg` },
  { id: 7, name: "Minimal Dresser", category: "BEDROOMS", image: `${import.meta.env.BASE_URL}image18_dresser-ideas_minimalist-approach.jpg` },
  { id: 8, name: "Sideboard", category: "DINING ROOMS", image: `${import.meta.env.BASE_URL}You-need-not-opt-for-a-sideboard-in-a-traditional-sense-of-design.jpg` },
];

export default function CollectionsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts = activeCategory === "All" 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <PageTransition>
      <div className="pt-24 pb-12 bg-alabaster min-h-screen">
        <div className="px-6 max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <h1 className="text-5xl md:text-6xl font-serif text-obsidian mb-6">Our Collections</h1>
            <p className="text-obsidian/60 font-light max-w-2xl mx-auto">
              Explore our curated selection of premium furniture, designed to bring elegance and comfort to every corner of your home.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 text-sm uppercase tracking-widest border transition-all duration-300 ${
                  activeCategory === cat 
                    ? 'border-accent text-accent bg-accent/10' 
                    : 'border-obsidian/20 text-obsidian/60 hover:border-obsidian hover:text-obsidian'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {filteredProducts.map((product) => (
              <motion.div
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                key={product.id}
                className="group cursor-pointer"
                tabIndex={0}
              >
                <div className="relative h-[400px] mb-6 overflow-hidden bg-stone">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 active:scale-110 focus:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300"></div>
                </div>
                <div className="flex justify-between items-end">
                  <div>
                    <h3 className="text-xl font-serif text-obsidian mb-1 group-hover:text-accent focus:text-accent active:text-accent transition-colors">{product.name}</h3>
                    <p className="text-obsidian/40 text-xs uppercase tracking-widest">{product.category}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
}
