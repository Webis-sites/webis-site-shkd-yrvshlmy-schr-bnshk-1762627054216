'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const slideFromRight = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const slideFromLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const stats = [
    { label: 'שנות ניסיון', value: '15+' },
    { label: 'מדינות בשירות', value: '40+' },
    { label: 'עסקאות מוצלחות', value: '200+' },
    { label: 'שותפים עסקיים', value: '50+' },
  ];

  return (
    <section
      id="about-section"
      ref={sectionRef}
      dir="rtl"
      className="relative min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Geometric Background Elements */}
      <div className="absolute top-20 right-10 w-64 h-64 border border-gray-300 opacity-20 rotate-45" />
      <div className="absolute bottom-20 left-10 w-48 h-48 border-2 border-black opacity-10 rotate-12" />
      <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-gray-200 opacity-20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Title */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-black mb-4 text-right">
            אודות
          </h2>
          <div className="w-24 h-1 bg-black mr-auto" />
        </motion.div>

        {/* Two Column Layout */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Side - Image */}
          <motion.div variants={slideFromLeft} className="relative order-2 lg:order-1">
            <div className="relative h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              {/* Glassmorphism Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-transparent to-gray-900/40 z-10" />
              <div className="absolute inset-0 backdrop-blur-[2px] z-10" />
              
              <img
                src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=1000&fit=crop"
                alt="Military and Defense"
                className="w-full h-full object-cover"
              />
              
              {/* Border Accent */}
              <div className="absolute top-4 right-4 w-32 h-32 border-2 border-white/50 z-20" />
              <div className="absolute bottom-4 left-4 w-24 h-24 border border-white/30 z-20" />
            </div>

            {/* Glassmorphism Card Overlay */}
            <motion.div
              variants={fadeIn}
              className="absolute -bottom-8 -right-8 bg-white/20 backdrop-blur-md border border-white/30 rounded-xl p-6 shadow-xl max-w-xs"
            >
              <p className="text-black font-bold text-lg text-right mb-2">
                מומחה בסחר בינלאומי
              </p>
              <p className="text-gray-700 text-sm text-right">
                מגשר בין ארגונים מובילים בתעשיית הביטחון
              </p>
            </motion.div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div variants={slideFromRight} className="order-1 lg:order-2">
            <div className="space-y-6 text-right">
              <h3 className="text-4xl font-bold text-black mb-6">
                שקד ירושלמי
              </h3>
              
              <div className="space-y-4">
                <p className="text-lg text-gray-700 leading-relaxed">
                  <span className="font-bold text-black">יוצא שירות ביטחון כללי</span> עם ניסיון רב שנים בתחום הביטחון והגנה. התמחות ייחודית בסחר חוקי בנשק בין מדינות ברחבי העולם.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  כמגשר מקצועי בין ארגונים המוכרים והקונים נשקים ואמל״ח, אני מספק שירות מקיף ומקצועי המבוסס על אמינות, מומחיות ורשת קשרים בינלאומית נרחבת.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  השירות כולל ליווי מלא של תהליכי רכש ומכירה, תיאום בין גורמים, ייעוץ מקצועי והבטחת עמידה בכל הדרישות החוקיות והרגולטוריות הבינלאומיות.
                </p>
              </div>

              {/* Key Points */}
              <div className="mt-8 space-y-3">
                <div className="flex items-start gap-3 justify-end">
                  <p className="text-gray-700">מומחיות בסחר בינלאומי חוקי בנשק ואמל״ח</p>
                  <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0" />
                </div>
                <div className="flex items-start gap-3 justify-end">
                  <p className="text-gray-700">רשת קשרים בינלאומית נרחבת</p>
                  <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0" />
                </div>
                <div className="flex items-start gap-3 justify-end">
                  <p className="text-gray-700">ליווי מקצועי ומלא לאורך כל התהליך</p>
                  <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0" />
                </div>
                <div className="flex items-start gap-3 justify-end">
                  <p className="text-gray-700">עמידה מלאה בדרישות חוקיות ורגולטוריות</p>
                  <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0" />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="mt-20"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="relative group"
              >
                <div className="bg-white/40 backdrop-blur-lg border border-gray-300/50 rounded-xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  {/* Accent Border */}
                  <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-black rounded-tr-xl opacity-50" />
                  
                  <p className="text-4xl md:text-5xl font-bold text-black mb-2">
                    {stat.value}
                  </p>
                  <p className="text-sm md:text-base text-gray-700 font-medium">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA Section */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={fadeIn}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-l from-black via-gray-900 to-black rounded-2xl p-10 shadow-2xl relative overflow-hidden">
            {/* Glassmorphism overlay */}
            <div className="absolute inset-0 bg-white/5 backdrop-blur-sm" />
            
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 text-right">
                מחפשים שותף אמין בתחום הסחר הבינלאומי?
              </h3>
              <p className="text-gray-300 text-lg mb-6 text-right max-w-3xl mr-auto">
                ניסיון רב שנים, מקצועיות ואמינות בכל עסקה
              </p>
              <div className="flex justify-end">
                <button className="bg-white text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-200 transition-all duration-300 hover:scale-105 shadow-lg">
                  צור קשר
                </button>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-4 left-4 w-20 h-20 border border-white/20" />
            <div className="absolute bottom-4 right-4 w-16 h-16 border border-white/20 rotate-45" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;