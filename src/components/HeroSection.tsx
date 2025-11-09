'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function WeaponsTradeHero() {
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      id="weapons-trade-hero"
      ref={containerRef}
      dir="rtl"
      className="relative w-full min-h-screen overflow-hidden bg-black"
    >
      {/* Background Image with Parallax */}
      <motion.div
        style={{ y: mounted ? y : 0 }}
        className="absolute inset-0 w-full h-full"
      >
        <div className="absolute inset-0 w-full h-full">
          <img
            src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop"
            alt="Defense and Security"
            className="w-full h-full object-cover"
          />
          {/* Dark Overlay for Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90" />
          <div className="absolute inset-0 bg-black/40" />
        </div>
      </motion.div>

      {/* Content Container */}
      <motion.div
        style={{ opacity: mounted ? opacity : 1 }}
        className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8"
      >
        <div className="w-full max-w-7xl mx-auto py-20 sm:py-24 lg:py-32">
          <div className="text-right">
            {/* Glassmorphism Card */}
            <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-12 lg:p-16 shadow-2xl">
              {/* Headline with Bold Animation */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.2,
                  ease: [0.22, 1, 0.36, 1]
                }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 sm:mb-8 text-right leading-tight tracking-tight"
              >
                ש.י סחר בנשק
              </motion.h1>

              {/* Description with Staggered Animation */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.5,
                  ease: [0.22, 1, 0.36, 1]
                }}
                className="text-lg sm:text-xl md:text-2xl text-right mb-8 sm:mb-10 lg:mb-12 leading-relaxed max-w-3xl mr-auto"
                style={{ color: '#969696' }}
              >
                שקד ירושלמי איש צבא בעל רקע עשיר סוחר בנשקים בין מדינות ובין ארגונים להגנה.
              </motion.p>

              {/* Additional Context */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.7,
                  ease: [0.22, 1, 0.36, 1]
                }}
                className="text-base sm:text-lg text-right mb-10 sm:mb-12 leading-relaxed max-w-2xl mr-auto"
                style={{ color: '#969696' }}
              >
                איש יוצא שירות ביטחון כללי, סוחר נשק חוקי בין מדינות ומגשר בין ארגונים שמוכרים וקונים נשקים ואמל״ח.
              </motion.p>

              {/* CTA Button with Bold Animation */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.9,
                  ease: [0.22, 1, 0.36, 1]
                }}
                className="flex justify-end"
              >
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)' }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative px-8 sm:px-10 lg:px-12 py-4 sm:py-5 bg-white text-black font-bold text-lg sm:text-xl rounded-lg overflow-hidden transition-all duration-300 shadow-xl hover:shadow-2xl border border-white/20"
                  aria-label="צור קשר"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    <span>צור קשר</span>
                    <motion.svg
                      className="w-5 h-5 sm:w-6 sm:h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      initial={{ x: 0 }}
                      whileHover={{ x: -5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l-5 5 5 5M6 12h12"
                      />
                    </motion.svg>
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-l from-gray-100 to-white"
                    initial={{ x: '100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              </motion.div>

              {/* Decorative Elements */}
              <div className="mt-12 sm:mt-16 flex justify-end gap-4 sm:gap-6">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1.1 }}
                  className="w-16 sm:w-20 h-1 bg-gradient-to-l from-white to-transparent rounded-full"
                />
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                  className="w-12 sm:w-16 h-1 bg-gradient-to-l from-gray-400 to-transparent rounded-full"
                />
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1.3 }}
                  className="w-8 sm:w-12 h-1 bg-gradient-to-l from-gray-600 to-transparent rounded-full"
                />
              </div>
            </div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="mt-12 sm:mt-16 flex flex-wrap justify-center sm:justify-end gap-6 sm:gap-8 lg:gap-12 text-right"
            >
              <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-lg px-6 py-4">
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1">100%</div>
                <div className="text-sm sm:text-base" style={{ color: '#969696' }}>חוקי ומורשה</div>
              </div>
              <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-lg px-6 py-4">
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1">24/7</div>
                <div className="text-sm sm:text-base" style={{ color: '#969696' }}>זמינות</div>
              </div>
              <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-lg px-6 py-4">
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1">בינלאומי</div>
                <div className="text-sm sm:text-base" style={{ color: '#969696' }}>סחר עולמי</div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2"
        >
          <motion.div className="w-1.5 h-1.5 bg-white rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}