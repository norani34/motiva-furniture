import React from 'react';
import { motion } from 'motion/react';
import PageTransition from '../components/PageTransition';

const galleryImages = [
  "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2574&auto=format&fit=crop",
  `${import.meta.env.BASE_URL}1440x880_Kennebunkport_10.jpg`,
  "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2600&auto=format&fit=crop",
  `${import.meta.env.BASE_URL}whatsapp-2026-03-09-06-31-09.jpeg`,
  "https://images.unsplash.com/photo-1615529182904-14819c35db37?q=80&w=2680&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=2664&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?q=80&w=2574&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1616137466211-f939a420be84?q=80&w=2664&auto=format&fit=crop",
  `${import.meta.env.BASE_URL}whatsapp-2026-03-09-06-11-05.jpeg`,
  `${import.meta.env.BASE_URL}whatsapp-2026-03-09-07-09-29.jpeg`,
  `${import.meta.env.BASE_URL}You-need-not-opt-for-a-sideboard-in-a-traditional-sense-of-design.jpg`,
];

export default function GalleryPage() {
  return (
    <PageTransition>
      <div className="pt-24 pb-12 bg-alabaster min-h-screen">
        <div className="px-6 max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <h1 className="text-5xl md:text-6xl font-serif text-obsidian mb-6">Inspiration Gallery</h1>
            <p className="text-obsidian/60 font-light max-w-2xl mx-auto">
              A curated showcase of Motiva furniture in real homes and styled spaces. Find inspiration for your own sanctuary.
            </p>
          </div>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
            {galleryImages.map((src, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="break-inside-avoid relative group overflow-hidden"
              >
                <img 
                  src={src} 
                  alt={`Gallery ${index}`} 
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-obsidian font-serif italic text-lg border-b border-obsidian pb-1">View Details</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
