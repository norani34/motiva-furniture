import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import PageTransition from '../components/PageTransition';

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const [selectedValue, setSelectedValue] = useState<number | null>(null);

  return (
    <PageTransition>
      <div ref={containerRef} className="bg-[#050505] min-h-screen pb-24 selection:bg-[#D4AF37] selection:text-[#050505] text-alabaster">
        {/* Hero Section with Craftsman Video */}
        <section className="relative w-full h-screen overflow-hidden">
          <img
            src={import.meta.env.BASE_URL + "whatsapp-2026-03-09-06-43-02.jpeg"}
            alt="Hero"
            className="absolute inset-0 w-full h-full object-cover scale-105"
          />
          {/* Warm, dark overlay for that jazzy, cozy feel */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#050505]"></div>

          <div className="absolute inset-0 flex flex-col items-center justify-center px-6">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="text-center text-white"
            >
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif mb-6 tracking-tight drop-shadow-2xl">
                  A Modern Perspective on Craftsmanship
                </h1>
                <p className="text-xs md:text-sm tracking-[0.4em] uppercase text-[#D4AF37] font-light">
                  Timeless design meets contemporary living
                </p>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/40 text-xs tracking-[0.2em] uppercase flex flex-col items-center gap-4"
          >
            <span>Discover</span>
            <div className="w-[1px] h-16 bg-white/20 overflow-hidden">
              <motion.div 
                animate={{ y: [0, 64] }} 
                transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                className="w-full h-1/2 bg-[#D4AF37]"
              />
            </div>
          </motion.div>

        </section>

        {/* About */}
        <section className="py-8 md:py-10 px-6 bg-[#050505]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif uppercase tracking-normal text-white/90 mb-6">
              ABOUT US
            </h2>
            <div className="space-y-8 text-white/60 font-serif leading-relaxed text-base md:text-lg lg:text-xl max-w-[900px] mx-auto">
              <p>
                Motiva is a brand that draws inspiration from the intrinsic aesthetics and traditional crafts of modern design. We aim to transcend meaningless ornamentation and convey a philosophy imbued with essential beauty and authenticity. We aim to become a powerful focal point within your space.
              </p>
              <p>
                Through our furniture, which involves extensive research into the profound properties of materials such as wood, stone, and iron, and offers a contemporary reinterpretation of historically rich lifestyles, we invite you to experience a beauty that is both serious and deep.
              </p>
            </div>
          </motion.div>
        </section>

        {/* Reduced Close-Up Expressions block (shorter height) */}
        <section className="w-full px-4 md:px-12 py-4">
          <div className="relative w-full h-[28vh] md:h-[36vh] overflow-hidden rounded-sm">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="https://videos.pexels.com/video-files/4492135/4492135-uhd_2560_1440_24fps.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-black/30 mix-blend-multiply"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent"></div>
          </div>
        </section>
        {/* Modern Lifestyle — full-bleed connected split: video (left) + image (right) */}
        <section className="w-full py-2">
          <div className="w-full flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 relative h-[40vh] md:h-[70vh] overflow-hidden">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              >
                <source src={import.meta.env.BASE_URL + "whatsapp-2026-03-09-06-11-03.mp4"} type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-black/20 mix-blend-multiply"></div>
            </div>

            <div className="w-full md:w-1/2 relative h-[40vh] md:h-[70vh] flex items-center justify-center overflow-visible">
              <motion.img
                initial={{ scale: 1.0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                src={import.meta.env.BASE_URL + "whatsapp-2026-03-09-06-31-09.jpeg"}
                alt="Modern Lifestyle"
                className="max-w-full max-h-full object-contain"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-[#050505]"></div>
              
            </div>
          </div>
        </section>

        {/* Creative Director */}
        <section className="py-32 md:py-48 px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="md:col-span-5 relative"
            >
              <div className="absolute inset-0 bg-[#D4AF37]/10 mix-blend-overlay z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop" 
                alt="Creative Director" 
                className="w-full aspect-[3/4] object-cover grayscale contrast-125 brightness-75"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.2 }}
              className="md:col-span-7 flex flex-col justify-center"
            >
              <h2 className="text-xs md:text-sm font-sans text-white/30 mb-12 uppercase tracking-[0.4em]">
                Creative Director
              </h2>
              <blockquote className="text-2xl md:text-4xl font-serif text-white/90 leading-snug mb-12 tracking-tight">
                "Motiva hopes to be a timeless example of a contemporary lifestyle brand, showcasing a balance between deep roots of tradition and modern lifestyles."
              </blockquote>
              <p className="text-xs tracking-[0.3em] uppercase text-[#D4AF37] font-semibold mb-16">
                Julian Vance
              </p>
              
              <div className="w-full h-[1px] bg-white/10 mb-12"></div>
              
              <ul className="space-y-6 text-sm text-white/50 font-light tracking-wide">
                <li className="flex gap-4"><span className="w-2 h-2 rounded-full bg-[#D4AF37]/50 mt-1.5 shrink-0"></span> Phaidon Press: 'By Design: The World's Best Contemporary Interior Designers'</li>
                <li className="flex gap-4"><span className="w-2 h-2 rounded-full bg-[#D4AF37]/50 mt-1.5 shrink-0"></span> Architectural Digest: 'AD100'</li>
                <li className="flex gap-4"><span className="w-2 h-2 rounded-full bg-[#D4AF37]/50 mt-1.5 shrink-0"></span> Vance Studio: exclusive designer</li>
                <li className="flex gap-4"><span className="w-2 h-2 rounded-full bg-[#D4AF37]/50 mt-1.5 shrink-0"></span> Art Center College of Design: Environmental Design</li>
              </ul>
            </motion.div>
          </div>
        </section>

        {/* Our Story / Studio Video */}
        <section className="w-full px-4 md:px-12">
          <div className="w-full h-[40vh] md:h-[60vh] relative overflow-hidden rounded-sm">
            <img
              src={import.meta.env.BASE_URL + "1440x880_Kennebunkport_10.jpg"}
              alt="Designed in Studio"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="text-4xl md:text-6xl lg:text-8xl font-serif text-white/90 tracking-widest uppercase text-center drop-shadow-2xl"
              >
                Designed<br/>in Studio
              </motion.h2>
            </div>
          </div>
          
          <div className="py-24 px-6 max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <div className="space-y-6 text-white/60 font-light leading-loose text-lg md:text-xl">
                <h2 className="text-3xl md:text-4xl font-serif text-white/90 mb-4">Our Story</h2>
                <p>
                  Motiva presents designs that unravel motifs drawn from nature and modern aesthetics. We move towards creating a timeless, contemporary brand to become a platform that exhibits deep-rooted heritage in a new way. Every piece of furniture is crafted with a narrative, sharing a unique story of its own.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Core Values Grid */}
        <section className="px-4 md:px-12 max-w-[1600px] mx-auto pb-24">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8">
            {[
              { title: 'TIMELESS', img: 'https://images.unsplash.com/photo-1581428982868-e410dd047a90?q=80&w=800&auto=format&fit=crop' },
              { title: 'NATURAL', img: 'https://images.unsplash.com/photo-1599696848652-f0ff23bc911f?q=80&w=800&auto=format&fit=crop' },
              { title: 'INTENTIONAL', img: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800&auto=format&fit=crop' },
              { title: 'BALANCED', img: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=800&auto=format&fit=crop' }
            ].map((item, index) => (
              <motion.div 
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.15, ease: "easeOut" }}
                className="flex flex-col items-center group cursor-pointer"
                tabIndex={0}
                onClick={() => setSelectedValue(selectedValue === index ? null : index)}
              >
                <div className="w-full aspect-[3/4] overflow-hidden mb-8 relative">
                  <div className={`absolute inset-0 transition-colors duration-500 z-10 ${selectedValue === index ? 'bg-transparent' : 'bg-black/20 group-hover:bg-transparent'}`}></div>
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className={`w-full h-full object-cover transition-transform duration-1000 filter grayscale contrast-125 brightness-75 ${selectedValue === index ? 'scale-105 grayscale-0 brightness-100' : 'group-hover:scale-105 group-hover:grayscale-0 group-hover:brightness-100 active:scale-105 focus:scale-105 active:grayscale-0 active:brightness-100 focus:grayscale-0 focus:brightness-100'}`}
                  />
                </div>
                <h4 className={`text-xs md:text-sm tracking-[0.4em] uppercase transition-colors duration-500 ${selectedValue === index ? 'text-[#D4AF37]' : 'text-white/40 group-hover:text-[#D4AF37] focus:text-[#D4AF37] active:text-[#D4AF37]'}` }>
                  {item.title}
                </h4>
              </motion.div>
            ))}
          </div>
        </section>

      </div>
    </PageTransition>
  );
}
