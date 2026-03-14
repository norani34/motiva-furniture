import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';

const exhibitions = [
  {
    id: '01',
    title: 'DINING ROOMS',
    desc: 'Tables, sideboards and dining arrangements that define how people gather and linger.',
    img: '/WhatsApp%20Image%202026-03-09%20at%206.59.57%20AM.jpeg'
  },
  {
    id: '02',
    title: 'LIVING SETS',
    desc: 'Sofa and seating compositions crafted for conversation, comfort and scale.',
    img: '/WhatsApp%20Image%202026-03-09%20at%206.43.02%20AM.jpeg'
  },
  {
    id: '03',
    title: 'RECEPTION',
    desc: 'Lobby and reception solutions — statement pieces for arrival spaces.',
    img: '/WhatsApp%20Image%202026-03-09%20at%206.59.56%20AM%20%282%29.jpeg'
  },
  {
    id: '04',
    title: 'BEDROOMS',
    desc: 'Beds, nightstands and serene arrangements for restorative spaces.',
    img: '/WhatsApp%20Image%202026-03-09%20at%206.59.56%20AM%20%281%29.jpeg'
  },
  {
    id: '05',
    title: 'L-SHAPE',
    desc: 'L-shaped sectional solutions for flexible living and modular layouts.',
    img: '/WhatsApp%20Image%202026-03-09%20at%206.59.56%20AM.jpeg'
  }
];

const projectImagesRemote = [
  'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=2000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?q=80&w=2000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1616137466211-f939a420be84?q=80&w=2000&auto=format&fit=crop'
];

export default function HomePage() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacityText = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  
  const [activeExhibition, setActiveExhibition] = useState(exhibitions[0]);
  const [projectIndex, setProjectIndex] = useState(0);
  const projectCount = projectImagesRemote.length;

  function prevProject() {
    setProjectIndex((i) => (i - 1 + projectCount) % projectCount);
  }

  function nextProject() {
    setProjectIndex((i) => (i + 1) % projectCount);
  }

  return (
    <PageTransition>
      {/* Hero Section - Full Screen Video with Massive Typography */}
      <section ref={heroRef} className="relative h-screen w-full overflow-hidden bg-alabaster">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            className="w-full h-full object-cover opacity-40"
          >
            <source src="/WhatsApp%20Video%202026-03-09%20at%206.17.19%20AM.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-alabaster/60 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-alabaster/20 via-transparent to-alabaster"></div>
        </div>

        {/* Hero Content */}
        <motion.div 
          style={{ y: yText, opacity: opacityText }} 
          className="relative z-10 h-full flex flex-col justify-center px-6 md:px-12 lg:px-24"
        >
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif leading-[1.2] tracking-wide text-obsidian">
            <motion.div 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
              className="overflow-hidden"
            >
              FURNITURE <span className="italic font-light text-accent">That Defines</span> YOU
            </motion.div>
            <motion.div 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
              className="overflow-hidden mt-2 md:mt-4"
            >
              LUXURY <span className="italic font-light text-accent">That Feels</span> PERSONAL
            </motion.div>
          </h1>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 1.2 }}
            className="mt-16 md:mt-32 flex flex-col md:flex-row md:items-end justify-between gap-12 max-w-6xl"
          >
            <div className="flex items-start gap-6 max-w-md">
              <div className="w-6 h-[1px] bg-accent/50 mt-3 shrink-0"></div>
              <p className="text-sm md:text-base text-obsidian/80 font-serif italic font-light tracking-wide leading-relaxed">
                Redefining spatial luxury for the modern era. Where architectural precision meets soulful living.
              </p>
            </div>
            
            <Link 
              to="/collections" 
              className="group flex items-center gap-6"
            >
              <span className="text-[9px] uppercase tracking-[0.4em] font-light text-obsidian/60 group-hover:text-obsidian transition-colors duration-700">
                Enter the Gallery
              </span>
              <div className="w-12 h-12 rounded-full border border-obsidian/20 flex items-center justify-center group-hover:border-accent group-hover:bg-accent/5 transition-all duration-700">
                <ArrowRight size={12} strokeWidth={1.5} className="text-obsidian/60 group-hover:text-accent transform transition-transform duration-700 group-hover:translate-x-1" />
              </div>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* The Philosophy */}
      <section className="min-h-screen bg-obsidian flex items-center justify-center relative overflow-hidden py-32">
        {/* Subtle atmospheric gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(200,155,106,0.08)_0%,transparent_60%)]"></div>
        
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center"
          >
            <h2 className="text-3xl md:text-5xl font-serif leading-[1.3] text-alabaster font-light tracking-wide mb-12">
              We do not furnish rooms. <br />
              <span className="italic text-accent">We sculpt the silence.</span>
            </h2>
            
            <div className="w-[1px] h-16 bg-accent/30 mb-12"></div>
            
            <p className="text-xs md:text-sm font-sans font-light text-alabaster/60 leading-[2.5] tracking-[0.15em] max-w-2xl mx-auto uppercase">
              The importance of heritage, locality, and sustainability <br className="hidden md:block" /> is the grounding vision for Eastern Edition.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Exhibitions (Interactive Hover) */}
      <section className="py-24 bg-stone relative">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-16">
          
          {/* Left: Text List */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center z-20">
            <span className="text-[10px] uppercase tracking-[0.3em] text-accent mb-12 block">Current Exhibitions</span>
            
            <div className="flex flex-col gap-8">
              {exhibitions.map((exhibition) => (
                <div 
                  key={exhibition.id}
                  onMouseEnter={() => setActiveExhibition(exhibition)}
                  className="group cursor-pointer border-b border-obsidian/10 pb-8"
                >
                  <div className="flex items-baseline gap-6 mb-4">
                    <span className="text-sm font-sans text-accent transition-colors duration-700">{exhibition.id}</span>
                    <h2 className={`text-3xl md:text-4xl font-serif transition-all duration-700 ${activeExhibition.id === exhibition.id ? 'text-obsidian' : 'text-obsidian/30'}`}>
                      {exhibition.title}
                    </h2>
                  </div>
                  <motion.div 
                    initial={false}
                    animate={{ height: activeExhibition.id === exhibition.id ? 'auto' : 0, opacity: activeExhibition.id === exhibition.id ? 1 : 0 }}
                    className="overflow-hidden"
                  >
                    <p className="text-obsidian/60 font-light pl-12 max-w-md pt-2 text-lg">
                      {exhibition.desc}
                    </p>
                    <Link to="/collections" className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-accent mt-8 pl-12 hover:opacity-50 transition-opacity">
                      View Exhibition <ArrowRight size={12} />
                    </Link>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Massive Image Cross-fade */}
          <div className="w-full lg:w-1/2 h-[60vh] lg:h-[80vh] relative overflow-hidden bg-alabaster rounded-sm">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeExhibition.id}
                src={activeExhibition.img}
                alt={activeExhibition.title}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-accent/10 mix-blend-multiply pointer-events-none"></div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-24 bg-obsidian text-alabaster overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 mb-12 flex justify-between items-end">
          <h2 className="text-3xl md:text-4xl font-sans tracking-wide uppercase">
            Projects
          </h2>
          <Link to="/gallery" className="text-sm font-sans font-light underline underline-offset-4 hover:text-accent transition-colors">
            Discover more
          </Link>
        </div>
        
        <div className="relative w-full max-w-[1600px] mx-auto flex items-center justify-center h-[50vh] md:h-[70vh]">
          <div className="relative z-10 w-[85%] md:w-2/3 h-full shadow-2xl group">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-full grid grid-cols-3 gap-6 items-center">
                {/* Left (previous) */}
                <motion.div
                  key={`left-${projectIndex}`}
                  initial={{ opacity: 0, x: -30, scale: 0.98 }}
                  animate={{ opacity: 1, x: 0, scale: 0.98 }}
                  transition={{ duration: 0.6 }}
                  className="overflow-hidden rounded-md h-full"
                >
                  <img
                    src={projectImagesRemote[(projectIndex - 1 + projectCount) % projectCount]}
                    alt={`Project ${((projectIndex - 1 + projectCount) % projectCount) + 1}`}
                    className="w-full h-full object-cover opacity-80 grayscale-[10%]"
                  />
                </motion.div>

                {/* Center (active) */}
                <motion.div
                  key={`center-${projectIndex}`}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  className="overflow-hidden rounded-md h-full shadow-2xl"
                >
                  <img
                    src={projectImagesRemote[projectIndex]}
                    alt={`Project ${projectIndex + 1}`}
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                {/* Right (next) */}
                <motion.div
                  key={`right-${projectIndex}`}
                  initial={{ opacity: 0, x: 30, scale: 0.98 }}
                  animate={{ opacity: 1, x: 0, scale: 0.98 }}
                  transition={{ duration: 0.6 }}
                  className="overflow-hidden rounded-md h-full"
                >
                  <img
                    src={projectImagesRemote[(projectIndex + 1) % projectCount]}
                    alt={`Project ${((projectIndex + 1) % projectCount) + 1}`}
                    className="w-full h-full object-cover opacity-80 grayscale-[10%]"
                  />
                </motion.div>
              </div>
            </div>

            {/* Left arrow */}
            <button onClick={prevProject} aria-label="Previous project" className="absolute left-2 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-white/30 flex items-center justify-center backdrop-blur-md bg-black/20 hover:bg-black/40 transition-colors">
              <ChevronLeft className="text-white" size={20} strokeWidth={1.5} />
            </button>

            {/* Right arrow */}
            <button onClick={nextProject} aria-label="Next project" className="absolute right-2 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-white/30 flex items-center justify-center backdrop-blur-md bg-black/20 hover:bg-black/40 transition-colors">
              <ChevronRight className="text-white" size={20} strokeWidth={1.5} />
            </button>

            {/* Indicators */}
            <div className="absolute left-1/2 -translate-x-1/2 bottom-6 flex gap-3">
              {projectImagesRemote.map((_, idx) => (
                <button key={idx} onClick={() => setProjectIndex(idx)} aria-label={`Show project ${idx + 1}`} className={`w-2 h-2 rounded-full ${idx === projectIndex ? 'bg-accent' : 'bg-white/40'}`} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Minimalist CTA */}
      <section className="py-32 bg-obsidian text-alabaster flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2669&auto=format&fit=crop" 
            alt="Cozy elegant luxury interior"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/80 to-transparent"></div>
        </div>
        <div className="relative z-10">
          <h2 className="text-3xl md:text-4xl font-serif font-light tracking-wide mb-8">
            Experience the Collection
          </h2>
          <p className="text-sm font-sans font-light tracking-widest text-alabaster/60 uppercase mb-12 max-w-md mx-auto">
            Discover furniture that transcends time and space.
          </p>
          <Link 
            to="/collections" 
            className="inline-block border-b border-alabaster/30 pb-2 text-xs uppercase tracking-[0.2em] hover:border-alabaster transition-colors duration-500"
          >
            Shop Our Collections
          </Link>
        </div>
      </section>
    </PageTransition>
  );
}
