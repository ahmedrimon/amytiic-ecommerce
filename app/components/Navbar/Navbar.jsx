"use client"

import React, { useState } from "react";
import {
  Menu,
  X,
  Search,
  Heart,
  ShoppingBag,
  ChevronRight,
  ChevronLeft,
  MapPin,
  Phone,
  User,
  Globe,
} from "lucide-react";

// --- Advanced Navigation Data Structure (Mega Menu Format) ---
const NAV_DATA = [
  {
    id: "watches",
    label: "WATCHES",
    type: "product-grid",
    subCategories: ["COLLECTIONS", "WOMEN'S WATCHES", "MEN'S WATCHES", "EXCEPTIONAL WATCHES"],
    products: [
      { name: "HAPPY SPORT", img: "https://images.unsplash.com/photo-1587836374828-cbdbef128ec6?w=300&q=80" },
      { name: "ALPINE EAGLE", img: "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?w=300&q=80" },
      { name: "L'HEURE DU DIAMANT", img: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=300&q=80" },
      { name: "MILLE MIGLIA", img: "https://images.unsplash.com/photo-1524592094714-a57dc2095f32?w=300&q=80" },
      { name: "L.U.C", img: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=300&q=80" },
    ],
    footerLink: "ALL WATCH COLLECTIONS"
  },
  {
    id: "jewellery",
    label: "JEWELLERY",
    type: "product-grid",
    subCategories: ["COLLECTIONS", "RINGS", "NECKLACES & PENDANTS", "BRACELETS", "EARRINGS", "HIGH JEWELLERY"],
    products: [
      { name: "HAPPY HEARTS", img: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=300&q=80" },
      { name: "ICE CUBE", img: "https://images.unsplash.com/photo-1599643478524-fb52445b23d0?w=300&q=80" },
      { name: "PRECIOUS LACE", img: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=300&q=80" },
    ],
    footerLink: "ALL JEWELLERY"
  },
  {
    id: "accessories",
    label: "ACCESSORIES",
    type: "columns",
    columns: [
      {
        title: "WOMEN'S ACCESSORIES",
        links: ["BAGS", "SMALL LEATHER GOODS", "FRAGRANCES", "SUNGLASSES", "SCARVES", "BRACELETS"]
      },
      {
        title: "MEN'S ACCESSORIES",
        links: ["BRACELETS", "SMALL LEATHER GOODS", "LEATHER BAGS", "FRAGRANCES", "SUNGLASSES", "CUFFLINKS", "KEY HOLDERS"]
      },
      {
        title: "LIFESTYLE ACCESSORIES",
        links: ["WRITING INSTRUMENTS", "HAUTE PARFUMERIE", "CLOCKS", "GAMES", "GIFTS FOR BABY"]
      }
    ],
    featuredImage: {
      src: "https://images.unsplash.com/photo-1584916201218-f4242ceb4809?w=400&q=80",
      label: "FOR HER"
    },
    footerLink: "ALL ACCESSORIES"
  },
  {
    id: "la-maison",
    label: "LA MAISON",
    type: "columns",
    columns: [
      {
        title: "OUR HOUSE",
        links: ["OUR HISTORY", "OUR LEGACY", "MEET OUR ARTISANS", "LATEST NEWS"]
      },
      {
        title: "SUSTAINABILITY",
        links: ["SUSTAINABLE LUXURY", "RETHINKING OUR PRODUCTS", "ACTING COLLECTIVELY", "ENGAGING OUR EMPLOYEES"]
      }
    ],
    featuredImage: {
      src: "https://images.unsplash.com/photo-1618220179428-22790b46a0eb?w=400&q=80",
      label: "CANNES FILM FESTIVAL"
    }
  }
];

export default function LuxuryNavbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [activeMobileMenuId, setActiveMobileMenuId] = useState(null);
  
  // State for Desktop Mega Menu
  const [activeDesktopMenuId, setActiveDesktopMenuId] = useState(null);

  const activeMobileCategory = NAV_DATA.find((item) => item.id === activeMobileMenuId);
  const activeDesktopCategory = NAV_DATA.find((item) => item.id === activeDesktopMenuId);

  const closeMobileDrawer = () => {
    setIsDrawerOpen(false);
    setActiveMobileMenuId(null);
  };

  // Helper function to extract flat links for the mobile menu from the complex desktop data
  const getMobileLinks = (category) => {
    if (!category) return [];
    if (category.type === 'product-grid') return category.subCategories;
    if (category.type === 'columns') return category.columns.flatMap(col => col.links);
    return [];
  };

  return (
    <header className="relative w-full bg-white text-gray-900 border-b border-gray-200 z-50 font-serif">
      {/* ----------------- TOP UTILITY & BRAND BAR ----------------- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          
          {/* Left Section */}
          <div className="flex items-center space-x-4 lg:w-1/3">
            <button
              onClick={() => setIsDrawerOpen(true)}
              className="lg:hidden p-2 text-gray-700 hover:text-black focus:outline-none"
            >
              <Menu className="w-6 h-6" />
            </button>

            <button className="lg:hidden p-2 text-gray-700 hover:text-black">
              <Search className="w-5 h-5" />
            </button>

            <div className="hidden lg:flex items-center space-x-6 text-xs uppercase tracking-widest font-sans text-gray-500">
              <a href="#" className="flex items-center space-x-2 hover:text-black transition-colors">
                <Phone className="w-4 h-4" />
                <span>Contact Us</span>
              </a>
              <a href="#" className="flex items-center space-x-2 hover:text-black transition-colors">
                <MapPin className="w-4 h-4" />
                <span>Boutique</span>
              </a>
            </div>
          </div>

          {/* Center Brand Logo */}
          <div className="flex justify-center lg:w-1/3">
            <a href="#" className="text-3xl sm:text-4xl font-extrabold tracking-wider uppercase font-serif text-black">
              Chopard
            </a>
          </div>

          {/* Right Section */}
          <div className="flex items-center justify-end space-x-4 sm:space-x-6 lg:w-1/3 text-gray-500">
            <button className="hidden lg:block p-2 hover:text-black transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <button className="p-2 hover:text-black transition-colors">
              <Heart className="w-5 h-5" />
            </button>
            <button className="p-2 hover:text-black transition-colors">
              <ShoppingBag className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* ----------------- DESKTOP MEGA MENU NAVIGATION ----------------- */}
      {/* The onMouseLeave here ensures the menu closes when the mouse leaves the entire navigation area */}
      <div 
        className="hidden lg:block border-t border-gray-100 bg-white relative"
        onMouseLeave={() => setActiveDesktopMenuId(null)}
      >
        <nav className="max-w-7xl mx-auto px-4 flex justify-center space-x-12 py-4">
          {NAV_DATA.map((cat) => (
            <button
              key={cat.id}
              onMouseEnter={() => setActiveDesktopMenuId(cat.id)}
              className={`text-xs uppercase tracking-widest font-sans font-medium py-2 transition-colors ${
                activeDesktopMenuId === cat.id ? "text-black border-b border-black" : "text-gray-600 hover:text-black"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </nav>

        {/* FULL WIDTH MEGA MENU DROPDOWN PANEL */}
        <div 
          className={`absolute top-full left-0 w-full bg-white shadow-2xl border-t border-gray-100 overflow-hidden transition-all duration-300 ease-in-out origin-top z-50 ${
            activeDesktopMenuId ? "max-h-[800px] py-12 opacity-100" : "max-h-0 py-0 opacity-0 pointer-events-none"
          }`}
        >
           {activeDesktopCategory && (
              <div className="w-full relative px-8 font-sans">
                
                {/* Close 'X' Button */}
                <button 
                  onClick={() => setActiveDesktopMenuId(null)}
                  className="absolute right-8 top-0 p-2 text-gray-400 hover:text-black bg-gray-50 hover:bg-gray-100 rounded-sm transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* --- TYPE 1: PRODUCT GRID (Watches & Jewellery) --- */}
                {activeDesktopCategory.type === 'product-grid' && (
                  <div className="flex flex-col items-center w-full max-w-7xl mx-auto">
                    
                    {/* Subcategories Row */}
                    <div className="flex space-x-10 mb-12 text-[11px] font-semibold tracking-widest text-gray-500">
                      {activeDesktopCategory.subCategories.map((sub, idx) => (
                        <a key={idx} href="#" className="hover:text-black transition-colors">{sub}</a>
                      ))}
                    </div>

                    {/* Circular Product Images Grid */}
                    <div className="flex justify-center flex-wrap gap-12 mb-8">
                      {activeDesktopCategory.products.map((prod, idx) => (
                        <a key={idx} href="#" className="flex flex-col items-center group w-32">
                          <div className="w-28 h-28 mb-6 rounded-full p-2 transition-all duration-300 group-hover:scale-105 border border-transparent group-hover:border-gray-200">
                            <img 
                              src={prod.img} 
                              alt={prod.name} 
                              className="w-full h-full object-contain mix-blend-multiply" 
                            />
                          </div>
                          <span className="text-[10px] uppercase tracking-widest text-gray-600 text-center group-hover:text-black font-semibold">
                            {prod.name}
                          </span>
                        </a>
                      ))}
                    </div>
                  </div>
                )}

                {/* --- TYPE 2: COLUMNS (Accessories & La Maison) --- */}
                {activeDesktopCategory.type === 'columns' && (
                  <div className="flex justify-center items-start w-full max-w-6xl mx-auto gap-24">
                    
                    {/* Link Columns */}
                    <div className="flex gap-20">
                      {activeDesktopCategory.columns.map((col, idx) => (
                        <div key={idx} className="flex flex-col min-w-[200px]">
                          <h3 className="text-xs tracking-widest mb-8 font-bold uppercase text-gray-900 border-b border-gray-100 pb-4">
                            {col.title}
                          </h3>
                          <ul className="space-y-4">
                            {col.links.map((link, lIdx) => (
                              <li key={lIdx}>
                                <a href="#" className="text-[11px] tracking-widest text-gray-500 hover:text-black uppercase transition-colors">
                                  {link}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>

                    {/* Featured Right-Side Image */}
                    {activeDesktopCategory.featuredImage && (
                      <div className="flex flex-col items-center pl-12 border-l border-gray-100">
                        <div className="w-64 h-72 mb-6 overflow-hidden bg-gray-50 rounded-sm">
                          <img 
                            src={activeDesktopCategory.featuredImage.src} 
                            alt={activeDesktopCategory.featuredImage.label}
                            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" 
                          />
                        </div>
                        <span className="text-[11px] uppercase tracking-widest font-bold text-gray-800">
                          {activeDesktopCategory.featuredImage.label}
                        </span>
                      </div>
                    )}
                  </div>
                )}

                {/* Shared Footer Link at the bottom of the panel */}
                {activeDesktopCategory.footerLink && (
                  <div className="text-center w-full mt-10 pt-8">
                    <a href="#" className="inline-block text-[11px] font-bold tracking-[0.2em] uppercase text-gray-900 pb-1 border-b border-gray-900 hover:text-gray-500 hover:border-gray-500 transition-colors">
                      {activeDesktopCategory.footerLink}
                    </a>
                  </div>
                )}

              </div>
           )}
        </div>
      </div>

      {/* ----------------- MOBILE DRILL-DOWN DRAWER (Unchanged logic, adapted for new data) ----------------- */}
      {isDrawerOpen && (
        <div
          onClick={closeMobileDrawer}
          className="fixed inset-0 bg-black/60 z-50 transition-opacity duration-300 lg:hidden"
        />
      )}

      <div
        className={`fixed top-0 left-0 bottom-0 w-full max-w-sm bg-white z-50 shadow-2xl flex flex-col transition-transform duration-300 ease-in-out transform lg:hidden ${
          isDrawerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
          {activeMobileMenuId ? (
            <button
              onClick={() => setActiveMobileMenuId(null)}
              className="flex items-center text-xs uppercase tracking-widest text-gray-700 hover:text-black font-sans font-bold"
            >
              <ChevronLeft className="w-4 h-4 mr-2" />
              BACK
            </button>
          ) : (
            <button onClick={closeMobileDrawer} className="p-1 text-gray-700 hover:text-black">
              <X className="w-6 h-6" />
            </button>
          )}
          <a href="#" className="text-xl font-bold font-serif tracking-widest uppercase">CHOPARD</a>
          <div className="w-6" />
        </div>

        <div className="relative flex-1 overflow-y-auto overflow-x-hidden font-sans">
          
          {/* Mobile Main Menu List */}
          <div
            className={`absolute inset-0 w-full px-6 py-6 transition-transform duration-300 ease-in-out ${
              activeMobileMenuId ? "-translate-x-full opacity-0 pointer-events-none" : "translate-x-0 opacity-100"
            }`}
          >
            <div className="space-y-2">
              {NAV_DATA.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveMobileMenuId(cat.id)}
                  className="w-full flex items-center justify-between py-4 text-[13px] tracking-widest uppercase font-bold text-gray-800 hover:text-black border-b border-gray-50"
                >
                  <span>{cat.label}</span>
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                </button>
              ))}
            </div>

            <div className="mt-12 space-y-6 text-xs uppercase tracking-widest text-gray-500 font-semibold">
              <a href="#" className="flex items-center space-x-4 hover:text-black"><MapPin className="w-5 h-5" /><span>Find a Boutique</span></a>
              <a href="#" className="flex items-center space-x-4 hover:text-black"><Phone className="w-5 h-5" /><span>Contact Us</span></a>
              <a href="#" className="flex items-center space-x-4 hover:text-black"><User className="w-5 h-5" /><span>My Account</span></a>
            </div>
          </div>

          {/* Mobile Sub-Menu List */}
          <div
            className={`absolute inset-0 w-full px-6 py-6 transition-transform duration-300 ease-in-out ${
              activeMobileMenuId ? "translate-x-0 opacity-100" : "translate-x-full opacity-0 pointer-events-none"
            }`}
          >
            {activeMobileCategory && (
              <div className="space-y-4">
                <h2 className="text-sm font-bold tracking-widest uppercase mb-6 pb-4 border-b border-gray-100 text-gray-900">
                  {activeMobileCategory.label}
                </h2>
                
                {getMobileLinks(activeMobileCategory).map((link, idx) => (
                  <a
                    key={idx}
                    href="#"
                    onClick={closeMobileDrawer}
                    className="block py-2 text-xs font-semibold tracking-wider uppercase text-gray-600 hover:text-black"
                  >
                    {link}
                  </a>
                ))}

                {activeMobileCategory.footerLink && (
                  <a href="#" className="block py-4 mt-6 text-xs font-bold tracking-wider uppercase text-black border-t border-gray-100">
                    {activeMobileCategory.footerLink}
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}