import React from 'react';
import { motion } from 'motion/react';
import { PenTool, Truck, MessageSquare, ArrowRight } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import { Link } from 'react-router-dom';

export default function ServicesPage() {
  return (
    <PageTransition>
      <div className="pt-24 pb-12 bg-alabaster min-h-screen">
        <div className="px-6 max-w-7xl mx-auto">
          <div className="mb-20 text-center">
            <h1 className="text-5xl md:text-6xl font-serif text-obsidian mb-6">Our Services</h1>
            <p className="text-obsidian/60 font-light max-w-2xl mx-auto">
              Beyond exceptional furniture, we offer a suite of premium services to ensure your vision comes to life perfectly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
            <div className="bg-stone p-10 border border-obsidian/5 hover:border-accent/30 transition-colors duration-300 group">
              <PenTool className="text-accent mb-6 w-12 h-12" />
              <h3 className="text-2xl font-serif text-obsidian mb-4">Interior Consultation</h3>
              <p className="text-obsidian/60 font-light leading-relaxed mb-8">
                Our expert designers will work with you to understand your space, style, and needs. We provide mood boards, floor plans, and curated product selections to transform your home.
              </p>
              <Link to="/contact" className="text-obsidian text-sm uppercase tracking-widest flex items-center group-hover:text-accent transition-colors">
                Book Consultation <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>

            <div className="bg-stone p-10 border border-obsidian/5 hover:border-accent/30 transition-colors duration-300 group">
              <MessageSquare className="text-accent mb-6 w-12 h-12" />
              <h3 className="text-2xl font-serif text-obsidian mb-4">Custom Design</h3>
              <p className="text-obsidian/60 font-light leading-relaxed mb-8">
                Need something truly unique? We offer bespoke furniture design services. Choose your materials, dimensions, and finishes to create a one-of-a-kind piece that fits perfectly.
              </p>
              <Link to="/contact" className="text-obsidian text-sm uppercase tracking-widest flex items-center group-hover:text-accent transition-colors">
                Inquire Now <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>

            <div className="bg-stone p-10 border border-obsidian/5 hover:border-accent/30 transition-colors duration-300 group">
              <Truck className="text-accent mb-6 w-12 h-12" />
              <h3 className="text-2xl font-serif text-obsidian mb-4">White Glove Delivery</h3>
              <p className="text-obsidian/60 font-light leading-relaxed mb-8">
                We handle everything from shipping to assembly and placement. Our professional team ensures your furniture arrives safely and is installed exactly where you want it.
              </p>
              <Link to="/contact" className="text-obsidian text-sm uppercase tracking-widest flex items-center group-hover:text-accent transition-colors">
                Learn More <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </div>

          {/* Process Section */}
          <div className="border-t border-obsidian/10 pt-20">
            <h2 className="text-4xl font-serif text-obsidian mb-12 text-center">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Discovery", desc: "We discuss your vision and requirements." },
                { step: "02", title: "Design", desc: "We present concepts and material samples." },
                { step: "03", title: "Crafting", desc: "Your pieces are handmade by our artisans." },
                { step: "04", title: "Delivery", desc: "We deliver and install your new furniture." }
              ].map((item, index) => (
                <div key={index} className="relative">
                  <span className="text-6xl font-serif text-obsidian/5 absolute -top-8 left-0">{item.step}</span>
                  <h4 className="text-xl font-serif text-obsidian mb-3 relative z-10">{item.title}</h4>
                  <p className="text-obsidian/60 font-light text-sm relative z-10">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
