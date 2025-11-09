'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiTarget, FiShield } from 'react-icons/fi';

interface ProductCategory {
  id: string;
  name: string;
  nameEn: string;
  description: string;
  image: string;
  icon: React.ReactNode;
}

const ProductsShowcase: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const categories: ProductCategory[] = [
    {
      id: 'rifles',
      name: 'רובים',
      nameEn: 'Rifles',
      description: 'מערכות נשק מתקדמות לשימוש צבאי ומבצעי',
      image: 'https://images.unsplash.com/photo-1595590424283-b8f17842773f?w=800&q=80',
      icon: <FiTarget className="w-6 h-6" />
    },
    {
      id: 'handguns',
      name: 'אקדחים',
      nameEn: 'Handguns',
      description: 'נשק אישי איכותי לכוחות ביטחון',
      image: 'https://images.unsplash.com/photo-1614887961169-84b6c0c4b315?w=800&q=80',
      icon: <FiTarget className="w-6 h-6" />
    },
    {
      id: 'ammunition',
      name: 'תחמושת',
      nameEn: 'Ammunition',
      description: 'תחמושת איכותית לכל סוגי הנשק',
      image: 'https://images.unsplash.com/photo-1566933293069-b55c7f326dd4?w=800&q=80',
      icon: <FiShield className="w-6 h-6" />
    },
    {
      id: 'tactical',
      name: 'ציוד טקטי',
      nameEn: 'Tactical Equipment',
      description: 'ציוד מבצעי מתקדם לפעילות שטח',
      image: 'https://images.unsplash.com/photo-1526666923127-b2970f64b422?w=800&q=80',
      icon: <FiShield className="w-6 h-6" />
    },
    {
      id: 'defense',
      name: 'מערכות הגנה',
      nameEn: 'Defense Systems',
      description: 'מערכות הגנה מתקדמות וטכנולוגיות',
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&q=80',
      icon: <FiShield className="w-6 h-6" />
    },
    {
      id: 'accessories',
      name: 'אביזרים',
      nameEn: 'Accessories',
      description: 'אביזרים ותוספות לשדרוג מערכות נשק',
      image: 'https://images.unsplash.com/photo-1585792180666-f7b2c7e9f312?w=800&q=80',
      icon: <FiTarget className="w-6 h-6" />
    }
  ];

  const filters = [
    { id: 'all', label: 'הכל' },
    { id: 'weapons', label: 'נשק' },
    { id: 'equipment', label: 'ציוד' },
    { id: 'systems', label: 'מערכות' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      rotateX: -15
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
        duration: 0.6
      }
    }
  };

  return (
    <section 
      id="products-showcase" 
      dir="rtl" 
      className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-black py-20 px-4 overflow-hidden"
    >
      {/* Tactical Grid Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(#969696 1px, transparent 1px), linear-gradient(90deg, #969696 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Corner Brackets Decoration */}
      <div className="absolute top-10 right-10 w-20 h-20 border-t-2 border-r-2 border-gray-600 opacity-30" />
      <div className="absolute top-10 left-10 w-20 h-20 border-t-2 border-l-2 border-gray-600 opacity-30" />
      <div className="absolute bottom-10 right-10 w-20 h-20 border-b-2 border-r-2 border-gray-600 opacity-30" />
      <div className="absolute bottom-10 left-10 w-20 h-20 border-b-2 border-l-2 border-gray-600 opacity-30" />

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <div className="inline-block relative">
            <h2 className="text-6xl md:text-7xl font-bold text-white mb-4 text-right">
              מוצרים
            </h2>
            <div className="absolute -bottom-2 right-0 w-32 h-1 bg-gradient-to-l from-gray-600 to-transparent" />
          </div>
          <p className="text-gray-400 text-xl mt-6 text-right max-w-2xl mx-auto">
            פתרונות מתקדמים לכוחות ביטחון וארגונים ממשלתיים
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center gap-4 mb-12 flex-wrap"
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 backdrop-blur-md border ${
                activeFilter === filter.id
                  ? 'bg-white/20 border-white/40 text-white shadow-lg shadow-white/10'
                  : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10 hover:border-white/20'
              }`}
              aria-label={`סנן לפי ${filter.label}`}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>

        {/* Products Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              variants={cardVariants}
              whileHover={{ scale: 1.03, rotateY: 5 }}
              className="group relative"
              style={{ perspective: '1000px' }}
            >
              {/* Card Container */}
              <div className="relative h-[450px] rounded-2xl overflow-hidden backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 shadow-2xl">
                {/* Tactical Corner Brackets */}
                <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-gray-400 opacity-50 z-10" />
                <div className="absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2 border-gray-400 opacity-50 z-10" />

                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                  <motion.img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.15 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-70" />
                  
                  {/* Icon Badge */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.1, type: 'spring' }}
                    className="absolute top-4 left-4 w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white"
                  >
                    {category.icon}
                  </motion.div>
                </div>

                {/* Content */}
                <div className="relative p-6 text-right">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {category.name}
                  </h3>
                  <p className="text-sm text-gray-400 mb-1 font-light">
                    {category.nameEn}
                  </p>
                  <p className="text-gray-300 text-base leading-relaxed mb-6">
                    {category.description}
                  </p>

                  {/* Learn More Button */}
                  <motion.button
                    whileHover={{ x: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 text-white font-semibold group/btn"
                    aria-label={`למידע נוסף על ${category.name}`}
                  >
                    <span className="relative">
                      למידע נוסף
                      <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover/btn:w-full" />
                    </span>
                    <FiArrowLeft className="w-5 h-5 transition-transform duration-300 group-hover/btn:-translate-x-1" />
                  </motion.button>
                </div>

                {/* Hover Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-gradient-to-br from-black/80 to-gray-900/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100"
                >
                  <div className="text-center p-6">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/10 backdrop-blur-md border border-white/30 flex items-center justify-center">
                      {category.icon}
                    </div>
                    <h4 className="text-white text-xl font-bold mb-2">
                      {category.name}
                    </h4>
                    <p className="text-gray-300 text-sm mb-4">
                      פתרונות מקצועיים ברמה הגבוהה ביותר
                    </p>
                    <div className="inline-flex items-center gap-2 text-white font-semibold border-b-2 border-white pb-1">
                      <span>צור קשר</span>
                      <FiArrowLeft className="w-4 h-4" />
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-20 text-center"
        >
          <div className="inline-block backdrop-blur-xl bg-white/5 border border-white/20 rounded-2xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-3 text-right">
              מעוניינים בפרטים נוספים?
            </h3>
            <p className="text-gray-400 mb-6 text-right">
              צרו קשר לקבלת ייעוץ מקצועי והצעת מחיר מותאמת אישית
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-colors duration-300 shadow-lg"
              aria-label="צור קשר"
            >
              צור קשר
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsShowcase;