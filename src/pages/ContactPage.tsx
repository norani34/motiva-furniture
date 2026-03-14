import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import PageTransition from '../components/PageTransition';

export default function ContactPage() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('General Inquiry');
  const [message, setMessage] = useState('');

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const to = 'motiva.furniture@gmail.com';
    const mailSubject = encodeURIComponent(subject + ' — enquiry from website');
    const body = encodeURIComponent(
      `Name: ${firstName} ${lastName}\nPhone: ${phone}\nEmail: ${email}\n\nMessage:\n${message}`
    );
    // open mail client
    window.location.href = `mailto:${to}?subject=${mailSubject}&body=${body}`;
    // open tracking/thank-you short link in new tab
    try { window.open('https://tr.ee/6PJ0vnHLhy', '_blank'); } catch (err) {}
  }

  return (
    <PageTransition>
      <div className="pt-24 pb-20 bg-alabaster min-h-screen">
        <div className="px-6 max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-accent uppercase tracking-widest text-xs block">Get in Touch</span>
            <h1 className="text-5xl md:text-6xl font-serif text-obsidian mt-4">Contact Motiva</h1>
            <p className="text-obsidian/60 font-light max-w-2xl mx-auto mt-6">Reach out for product inquiries, bespoke design services, or to schedule a showroom visit. We respond promptly and with care.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-stone flex items-center justify-center rounded-full text-accent shrink-0">
                  <Phone size={22} />
                </div>
                <div>
                  <h4 className="text-2xl font-serif text-obsidian">Phone</h4>
                  <a href="tel:01222499159" className="block text-obsidian/60 mt-1 text-lg">012 22499159</a>
                  <p className="text-obsidian/40 text-sm mt-2">Available daily — we will call you back.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-stone flex items-center justify-center rounded-full text-accent shrink-0">
                  <Mail size={22} />
                </div>
                <div>
                  <h4 className="text-2xl font-serif text-obsidian">Email</h4>
                  <a href="mailto:motiva.furniture@gmail.com" className="block text-obsidian/60 mt-1 text-lg">motiva.furniture@gmail.com</a>
                  <p className="text-obsidian/40 text-sm mt-2">Typical reply within 24 hours.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-stone flex items-center justify-center rounded-full text-accent shrink-0">
                  <MapPin size={22} />
                </div>
                <div>
                  <h4 className="text-2xl font-serif text-obsidian">Showroom</h4>
                  <p className="text-obsidian/60 mt-1 text-lg">Motiva Showroom, Cairo, Egypt</p>
                  <a href="https://www.google.com/maps/search/?api=1&query=Motiva+Furniture" target="_blank" rel="noopener noreferrer" className="text-obsidian/40 text-sm mt-2 inline-block">Open in Google Maps</a>
                </div>
              </div>

              <div className="mt-4">
                <iframe title="Motiva location" src="https://www.google.com/maps?q=Motiva%20Furniture&output=embed" className="w-full h-44 border border-obsidian/5 rounded-md" />
              </div>
            </div>

            <div className="lg:col-span-2 bg-stone p-8 md:p-12 border border-obsidian/5 rounded-lg">
              <h3 className="text-3xl font-serif text-obsidian mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-obsidian/60 mb-2">First name</label>
                    <input value={firstName} onChange={e => setFirstName(e.target.value)} type="text" required className="w-full bg-alabaster border border-obsidian/10 text-obsidian p-4 focus:border-accent outline-none transition-colors" />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-obsidian/60 mb-2">Last name</label>
                    <input value={lastName} onChange={e => setLastName(e.target.value)} type="text" className="w-full bg-alabaster border border-obsidian/10 text-obsidian p-4 focus:border-accent outline-none transition-colors" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-obsidian/60 mb-2">Email</label>
                    <input value={email} onChange={e => setEmail(e.target.value)} type="email" required className="w-full bg-alabaster border border-obsidian/10 text-obsidian p-4 focus:border-accent outline-none transition-colors" />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-obsidian/60 mb-2">Phone</label>
                    <input value={phone} onChange={e => setPhone(e.target.value)} type="tel" className="w-full bg-alabaster border border-obsidian/10 text-obsidian p-4 focus:border-accent outline-none transition-colors" placeholder="012 22499159" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest text-obsidian/60 mb-2">Subject</label>
                  <select value={subject} onChange={e => setSubject(e.target.value)} className="w-full bg-alabaster border border-obsidian/10 text-obsidian p-4 focus:border-accent outline-none transition-colors">
                    <option>General Inquiry</option>
                    <option>Product Information</option>
                    <option>Interior Design Service</option>
                    <option>Order Status</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest text-obsidian/60 mb-2">Message</label>
                  <textarea value={message} onChange={e => setMessage(e.target.value)} rows={6} required className="w-full bg-alabaster border border-obsidian/10 text-obsidian p-4 focus:border-accent outline-none transition-colors" />
                </div>

                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <button type="submit" className="bg-accent text-alabaster font-medium py-4 px-8 uppercase tracking-widest hover:bg-obsidian hover:text-alabaster transition-colors duration-300 inline-flex items-center">
                    Send Message <Send size={16} className="ml-3" />
                  </button>

                  <div className="text-sm text-obsidian/50">Prefer a faster reply? Call <a href="tel:01222499159" className="text-obsidian">012 22499159</a> or email <a href="mailto:motiva.furniture@gmail.com" className="text-obsidian">motiva.furniture@gmail.com</a></div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
