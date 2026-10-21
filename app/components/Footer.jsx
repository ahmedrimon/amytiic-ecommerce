"use client";

import React, { useState } from "react";
import { Globe, ChevronDown, ChevronUp, ArrowRight } from "lucide-react";

export default function Footer() {
  const [openSection, setOpenSection] = useState(null);
  const [highContrast, setHighContrast] = useState(false);
  const [disableAnimations, setDisableAnimations] = useState(false);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <footer className="bg-black text-white font-serif border-t border-zinc-800 pt-12 pb-8 px-4 sm:px-6 lg:px-8 text-xs">
      <div className="max-w-7xl mx-auto">
        
        {/* ----------------- DESKTOP TOP BAR: International & Accessibility ----------------- */}
        <div className="hidden md:flex justify-between items-center pb-10 border-b border-zinc-800 font-sans tracking-widest text-[11px]">
          <div className="flex items-center space-x-2 cursor-pointer hover:text-zinc-300">
            <Globe className="w-4 h-4" />
            <span>INTERNATIONAL</span>
          </div>

          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-3">
              <span>ENABLE HIGH CONTRAST</span>
              <button 
                onClick={() => setHighContrast(!highContrast)}
                className={`w-10 h-5 flex items-center rounded-full p-1 transition-colors ${highContrast ? 'bg-white' : 'bg-zinc-800'}`}
              >
                <div className={`bg-black w-3.5 h-3.5 rounded-full transition-transform ${highContrast ? 'translate-x-5' : 'translate-x-0'}`} />
              </button>
            </div>

            <div className="flex items-center space-x-3">
              <span>DISABLE ANIMATIONS</span>
              <button 
                onClick={() => setDisableAnimations(!disableAnimations)}
                className={`w-10 h-5 flex items-center rounded-full p-1 transition-colors ${disableAnimations ? 'bg-white' : 'bg-zinc-800'}`}
              >
                <div className={`bg-black w-3.5 h-3.5 rounded-full transition-transform ${disableAnimations ? 'translate-x-5' : 'translate-x-0'}`} />
              </button>
            </div>
          </div>
        </div>

        {/* ----------------- DESKTOP MULTI-COLUMN GRID ----------------- */}
        <div className="hidden md:grid grid-cols-4 gap-12 py-12 border-b border-zinc-800 font-sans tracking-widest text-[11px]">
          
          {/* Column 1: Contact */}
          <div className="space-y-4">
            <h3 className="font-bold text-white tracking-[0.2em] mb-6">CONTACT</h3>
            <ul className="space-y-3 text-zinc-400">
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Find a Boutique</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Book an Appointment</a></li>
            </ul>
          </div>

          {/* Column 2: Services */}
          <div className="space-y-4">
            <h3 className="font-bold text-white tracking-[0.2em] mb-6">SERVICES</h3>
            <ul className="space-y-3 text-zinc-400">
              <li><a href="#" className="hover:text-white transition-colors">Track your order</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Make a return</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Servicing and warranty</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sitemap</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Instruction manuals</a></li>
            </ul>
          </div>

          {/* Column 3: Our Maison */}
          <div className="space-y-4">
            <h3 className="font-bold text-white tracking-[0.2em] mb-6">OUR MAISON</h3>
            <ul className="space-y-3 text-zinc-400">
              <li><a href="#" className="hover:text-white transition-colors">Corporate information</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers at Chopard</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
            </ul>
          </div>

          {/* Column 4: Stay Up To Date */}
          <div className="space-y-6">
            <h3 className="font-bold text-white tracking-[0.2em] mb-6">STAY UP TO DATE</h3>
            <div className="flex space-x-6 text-white">
              {/* Facebook SVG */}
              <a href="#" className="hover:text-zinc-400 transition-colors" aria-label="Facebook">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3.8l.2-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              {/* Instagram SVG */}
              <a href="#" className="hover:text-zinc-400 transition-colors" aria-label="Instagram">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              {/* LinkedIn SVG */}
              <a href="#" className="hover:text-zinc-400 transition-colors" aria-label="LinkedIn">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              {/* YouTube SVG */}
              <a href="#" className="hover:text-zinc-400 transition-colors" aria-label="YouTube">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
              </a>
            </div>
            <div className="pt-2">
              <a href="#" className="flex items-center justify-between border-b border-zinc-700 pb-2 text-[11px] font-bold tracking-[0.2em] hover:border-white transition-colors">
                <span>SUBSCRIBE NEWSLETTER</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* ----------------- MOBILE ACCORDION VIEW ----------------- */}
        <div className="md:hidden divide-y divide-zinc-800 font-sans tracking-widest text-[11px]">
          
          {/* International */}
          <div className="py-4 flex justify-between items-center cursor-pointer" onClick={() => toggleSection('international')}>
            <span className="font-bold flex items-center"><Globe className="w-4 h-4 mr-2" /> INTERNATIONAL</span>
            {openSection === 'international' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </div>
          {openSection === 'international' && (
            <div className="pb-4 text-zinc-400 pl-6 space-y-2">
              <p className="cursor-pointer hover:text-white">Global / English</p>
            </div>
          )}

          {/* Contact */}
          <div className="py-4 flex justify-between items-center cursor-pointer" onClick={() => toggleSection('contact')}>
            <span className="font-bold">CONTACT</span>
            {openSection === 'contact' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </div>
          {openSection === 'contact' && (
            <div className="pb-4 text-zinc-400 pl-6 space-y-3">
              <a href="#" className="block hover:text-white">Contact Us</a>
              <a href="#" className="block hover:text-white">Find a Boutique</a>
              <a href="#" className="block hover:text-white">Book an Appointment</a>
            </div>
          )}

          {/* Services */}
          <div className="py-4 flex justify-between items-center cursor-pointer" onClick={() => toggleSection('services')}>
            <span className="font-bold">SERVICE & SUPPORT</span>
            {openSection === 'services' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </div>
          {openSection === 'services' && (
            <div className="pb-4 text-zinc-400 pl-6 space-y-3">
              <a href="#" className="block hover:text-white">Track your order</a>
              <a href="#" className="block hover:text-white">Make a return</a>
              <a href="#" className="block hover:text-white">FAQ</a>
              <a href="#" className="block hover:text-white">Servicing and warranty</a>
              <a href="#" className="block hover:text-white">Sitemap</a>
              <a href="#" className="block hover:text-white">Instruction manuals</a>
            </div>
          )}

          {/* Our Maison */}
          <div className="py-4 flex justify-between items-center cursor-pointer" onClick={() => toggleSection('maison')}>
            <span className="font-bold">OUR MAISON</span>
            {openSection === 'maison' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </div>
          {openSection === 'maison' && (
            <div className="pb-4 text-zinc-400 pl-6 space-y-3">
              <a href="#" className="block hover:text-white">Corporate information</a>
              <a href="#" className="block hover:text-white">Careers at Chopard</a>
              <a href="#" className="block hover:text-white">Press</a>
            </div>
          )}

          {/* Stay Up To Date */}
          <div className="py-4 flex justify-between items-center cursor-pointer" onClick={() => toggleSection('social')}>
            <span className="font-bold">STAY UP TO DATE</span>
            {openSection === 'social' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </div>
          {openSection === 'social' && (
            <div className="pb-4 pl-6 space-y-4">
              <div className="flex space-x-6 text-white pt-2">
                <a href="#" className="hover:text-zinc-400" aria-label="Facebook"><svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3.8l.2-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></a>
                <a href="#" className="hover:text-zinc-400" aria-label="Instagram"><svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg></a>
                <a href="#" className="hover:text-zinc-400" aria-label="LinkedIn"><svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg></a>
                <a href="#" className="hover:text-zinc-400" aria-label="YouTube"><svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg></a>
              </div>
            </div>
          )}

          {/* Newsletter Accordion */}
          <div className="py-4 flex justify-between items-center cursor-pointer" onClick={() => toggleSection('newsletter')}>
            <span className="font-bold">SUBSCRIBE NEWSLETTER</span>
            {openSection === 'newsletter' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </div>
          {openSection === 'newsletter' && (
            <div className="pb-4 pl-6 space-y-3">
              <p className="text-zinc-400 text-[10px]">Sign up for our latest collections and news.</p>
              <div className="flex border-b border-zinc-600 pb-1">
                <input type="email" placeholder="Email" className="bg-transparent w-full text-white text-xs focus:outline-none" />
                <button className="text-white uppercase font-bold tracking-widest text-[10px]">SIGN UP</button>
              </div>
            </div>
          )}

        </div>

        {/* ----------------- BOTTOM LEGAL & COPYRIGHT BAR ----------------- */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] text-zinc-500 font-sans tracking-widest space-y-4 md:space-y-0">
          <div className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2">
            <a href="#" className="hover:text-white transition-colors">PRIVACY POLICY</a>
            <a href="#" className="hover:text-white transition-colors">COOKIES POLICY</a>
            <a href="#" className="hover:text-white transition-colors">TERMS OF WEBSITE USE</a>
            <a href="#" className="hover:text-white transition-colors">MODERN SLAVERY ACT</a>
            <a href="#" className="hover:text-white transition-colors">ALERT LINE</a>
          </div>
          <div>
            <span>© 2026 CHOPARD ALL RIGHTS RESERVED</span>
          </div>
        </div>

      </div>
    </footer>
  );
}