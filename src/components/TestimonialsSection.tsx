'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight, FaStar, FaShieldAlt, FaCertificate } from 'react-icons/fa';

interface Testimonial {
  id: number;
  quote: string;
  organization: string;
  country: string;
  rating: number;
  badge: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: 'שירות מקצועי ואמין ברמה הגבוהה ביותר. הציוד שסופק עמד בכל התקנים הנדרשים והגיע בזמן. שיתוף הפעולה היה חלק ומקצועי.',
    organization: 'יחידה מיוחדת - כוחות ביטחון',
    country: 'מזרח אירופה',
    rating: 5,
    badge: 'ISO 9001'
  },
  {
    id: 2,
    quote: 'ספק אמין עם רקורד מוכח. התהליך היה שקוף לחלוטין והתמיכה הלוגיסטית ללא דופי. ממליצים בחום לארגונים ממשלתיים.',
    organization: 'משרד ביטחון לאומי',
    country: 'דרום מזרח אסיה',
    rating: 5,
    badge: 'NATO Certified'
  },
  {
    id: 3,
    quote: 'מומחיות יוצאת דופן בתחום הסחר הבינלאומי. הצוות הפגין ידע עמוק ויכולת לספק פתרונות מותאמים אישית לצרכים המורכבים שלנו.',
    organization: 'סוכנות ביטחון ממשלתית',
    country: 'אמריקה הלטינית',
    rating: 5,
    badge: 'ITAR Compliant'
  },
  {
    id: 4,
    quote: 'שותף אסטרטגי אמין לטווח ארוך. הפרופסיונליזם והדיסקרטיות ברמה הגבוהה ביותר. כל עסקה מטופלת בקפידה ובהתאם לכל הרגולציות.',
    organization: 'כוחות מיוחדים - צבא ריבוני',
    country: 'מרכז אפריקה',
    rating: 5,
    badge: 'UN Verified'
  }
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [direction, setDirection] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying]);

  const handleNext = (): void => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = (): void => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleDotClick = (index: number): void => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
      scale: 0.8
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8
    })
  };

  return (
    <section
      id="testimonials-section"
      dir="rtl"
      className="relative min-h-screen w-full bg-black py-20 px-4 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23969696' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Tactical Corner Elements */}
      <div className="absolute top-0 right-0 w-32 h-32 border-t-2 border-r-2 border-[#969696] opacity-20" />
      <div className="absolute bottom-0 left-0 w-32 h-32 border-b-2 border-l-2 border-[#969696] opacity-20" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <FaShieldAlt className="text-[#969696] text-3xl" />
            <h2 className="text-5xl md:text-6xl font-bold text-white text-right">
              המלצות
            </h2>
            <FaShieldAlt className="text-[#969696] text-3xl" />
          </div>
          <p className="text-[#969696] text-lg md:text-xl text-right max-w-3xl mx-auto">
            ארגונים ממשלתיים ויחידות ביטחון מובילות ברחבי העולם סומכים על השירות המקצועי שלנו
          </p>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-8 mb-16"
        >
          {['ISO 9001', 'NATO Certified', 'ITAR Compliant', 'UN Verified'].map((badge, index) => (
            <div
              key={index}
              className="flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-br from-[#969696]/10 to-transparent border border-[#969696]/30 backdrop-blur-sm"
            >
              <FaCertificate className="text-[#969696] text-xl" />
              <span className="text-[#969696] font-semibold text-sm">{badge}</span>
            </div>
          ))}
        </motion.div>

        {/* Carousel Container */}
        <div className="relative max-w-5xl mx-auto">
          <div className="relative h-[500px] md:h-[400px] flex items-center justify-center">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: 'spring', stiffness: 300, damping: 30 },
                  opacity: { duration: 0.4 },
                  scale: { duration: 0.4 }
                }}
                className="absolute w-full"
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
              >
                <div className="relative mx-auto max-w-4xl">
                  {/* Glassmorphism Card */}
                  <div className="relative p-8 md:p-12 rounded-2xl bg-gradient-to-br from-[#969696]/10 via-transparent to-[#969696]/5 border border-[#969696]/30 backdrop-blur-md shadow-2xl">
                    {/* Quote Mark */}
                    <div className="absolute top-6 right-6 text-[#969696]/20 text-8xl font-serif leading-none">
                      "
                    </div>

                    {/* Content */}
                    <div className="relative z-10">
                      {/* Rating Stars */}
                      <div className="flex justify-end gap-1 mb-6">
                        {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                          <FaStar key={i} className="text-[#969696] text-xl" />
                        ))}
                      </div>

                      {/* Quote Text */}
                      <p className="text-white text-xl md:text-2xl leading-relaxed text-right mb-8 font-light">
                        {testimonials[currentIndex].quote}
                      </p>

                      {/* Organization Info */}
                      <div className="flex flex-col md:flex-row items-end md:items-center justify-between gap-4 pt-6 border-t border-[#969696]/20">
                        <div className="flex items-center gap-3">
                          <div className="px-4 py-2 rounded-lg bg-[#969696]/10 border border-[#969696]/30">
                            <span className="text-[#969696] text-sm font-semibold">
                              {testimonials[currentIndex].badge}
                            </span>
                          </div>
                        </div>
                        <div className="text-right">
                          <h4 className="text-white font-bold text-lg mb-1">
                            {testimonials[currentIndex].organization}
                          </h4>
                          <p className="text-[#969696] text-sm">
                            {testimonials[currentIndex].country}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Decorative Corner */}
                    <div className="absolute bottom-4 left-4 w-16 h-16 border-b-2 border-l-2 border-[#969696]/20" />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            aria-label="Previous testimonial"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-16 w-12 h-12 rounded-full bg-gradient-to-br from-[#969696]/20 to-transparent border border-[#969696]/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-[#969696]/30 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#969696]"
          >
            <FaChevronLeft className="text-xl" />
          </button>

          <button
            onClick={handleNext}
            aria-label="Next testimonial"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-16 w-12 h-12 rounded-full bg-gradient-to-br from-[#969696]/20 to-transparent border border-[#969696]/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-[#969696]/30 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#969696]"
          >
            <FaChevronRight className="text-xl" />
          </button>
        </div>

        {/* Dots Navigation */}
        <div className="flex items-center justify-center gap-3 mt-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              aria-label={`Go to testimonial ${index + 1}`}
              className={`transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#969696] rounded-full ${
                index === currentIndex
                  ? 'w-12 h-3 bg-[#969696]'
                  : 'w-3 h-3 bg-[#969696]/30 hover:bg-[#969696]/50'
              }`}
            />
          ))}
        </div>

        {/* Bottom Security Badge */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#969696]/10 via-transparent to-[#969696]/10 border border-[#969696]/30 backdrop-blur-sm">
            <FaShieldAlt className="text-[#969696] text-2xl" />
            <span className="text-[#969696] font-semibold text-lg">
              מאושר על ידי ארגונים בינלאומיים מובילים
            </span>
            <FaShieldAlt className="text-[#969696] text-2xl" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}