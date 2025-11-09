'use client';

import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { FaLinkedin, FaArrowUp, FaShieldAlt, FaCertificate, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Footer: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [showBackToTop, setShowBackToTop] = useState<boolean>(false);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = (): void => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = (): void => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNewsletterSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email);
    setEmail('');
    controls.start({
      scale: [1, 1.05, 1],
      transition: { duration: 0.3 }
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  return (
    <footer id="footer-weapons-trading" className="relative bg-black text-[#969696] overflow-hidden" dir="rtl">
      {/* Tactical Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 border border-[#969696] rotate-45 transform translate-x-48 -translate-y-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 border border-[#969696] rotate-45 transform -translate-x-48 translate-y-48"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 border border-[#969696] rotate-45 transform -translate-x-32 -translate-y-32"></div>
      </div>

      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Company Info */}
          <motion.div variants={itemVariants} className="text-right">
            <h3 className="text-2xl font-bold text-white mb-4">ש.י סחר בנשק</h3>
            <p className="text-sm mb-4 leading-relaxed">
              מגשר מקצועי בין ארגונים לסחר בנשק ואמל״ח חוקי בין מדינות. ניסיון רב בשירות ביטחון כללי.
            </p>
            <div className="space-y-3 text-sm">
              <div className="flex items-center justify-end gap-2 hover:text-white transition-colors duration-300">
                <span>שקד ירושלמי</span>
                <FaPhone className="text-[#969696]" />
              </div>
              <div className="flex items-center justify-end gap-2 hover:text-white transition-colors duration-300">
                <span>info@sy-arms.co.il</span>
                <FaEnvelope className="text-[#969696]" />
              </div>
              <div className="flex items-center justify-end gap-2 hover:text-white transition-colors duration-300">
                <span>ישראל</span>
                <FaMapMarkerAlt className="text-[#969696]" />
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="text-right">
            <h4 className="text-lg font-bold text-white mb-4 border-b border-[#969696]/30 pb-2">קישורים מהירים</h4>
            <ul className="space-y-2 text-sm">
              {['דף הבית', 'אודות', 'שירותים', 'פרויקטים', 'צור קשר'].map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: -5, color: '#ffffff' }}
                  transition={{ duration: 0.2 }}
                >
                  <a href={`#${link.toLowerCase()}`} className="hover:text-white transition-colors duration-300 inline-block">
                    {link}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants} className="text-right">
            <h4 className="text-lg font-bold text-white mb-4 border-b border-[#969696]/30 pb-2">שירותים</h4>
            <ul className="space-y-2 text-sm">
              {[
                'סחר בנשק בין מדינות',
                'ייעוץ ביטחוני',
                'תיווך עסקאות אמל״ח',
                'ליווי רגולטורי',
                'ניהול רישיונות',
                'ייצוא ויבוא'
              ].map((service, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: -5, color: '#ffffff' }}
                  transition={{ duration: 0.2 }}
                >
                  <a href="#services" className="hover:text-white transition-colors duration-300 inline-block">
                    {service}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Legal & Compliance */}
          <motion.div variants={itemVariants} className="text-right">
            <h4 className="text-lg font-bold text-white mb-4 border-b border-[#969696]/30 pb-2">משפטי ורגולציה</h4>
            <ul className="space-y-2 text-sm mb-6">
              {[
                'מדיניות פרטיות',
                'תנאי שימוש',
                'הצהרת ציות',
                'רישיונות סחר',
                'תקנות בינלאומיות'
              ].map((legal, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: -5, color: '#ffffff' }}
                  transition={{ duration: 0.2 }}
                >
                  <a href="#legal" className="hover:text-white transition-colors duration-300 inline-block">
                    {legal}
                  </a>
                </motion.li>
              ))}
            </ul>

            {/* Trust Badges */}
            <div className="flex justify-end gap-3 mt-4">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="bg-[#969696]/10 backdrop-blur-sm p-2 rounded border border-[#969696]/30"
              >
                <FaShieldAlt className="text-white text-xl" />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1, rotate: -5 }}
                className="bg-[#969696]/10 backdrop-blur-sm p-2 rounded border border-[#969696]/30"
              >
                <FaCertificate className="text-white text-xl" />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Newsletter Section */}
        <motion.div
          variants={itemVariants}
          className="mb-12 p-6 bg-[#969696]/5 backdrop-blur-sm border border-[#969696]/20 rounded-lg"
        >
          <div className="max-w-2xl mx-auto text-center">
            <h4 className="text-lg font-bold text-white mb-2">הישאר מעודכן</h4>
            <p className="text-sm mb-4">קבל עדכונים על תקנות חדשות ושינויים בתעשייה</p>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <motion.button
                type="submit"
                animate={controls}
                whileHover={{ scale: 1.05, backgroundColor: '#ffffff', color: '#000000' }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 bg-[#969696] text-black font-bold rounded hover:bg-white transition-all duration-300"
              >
                הרשמה
              </motion.button>
              <input
                type="email"
                value={email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                placeholder="הכנס כתובת אימייל"
                required
                className="px-4 py-2 bg-black/50 backdrop-blur-sm border border-[#969696]/30 rounded text-white placeholder-[#969696] focus:outline-none focus:border-white transition-all duration-300 w-full sm:w-64 text-right"
                dir="rtl"
              />
            </form>
          </div>
        </motion.div>

        {/* Legal Disclaimer */}
        <motion.div
          variants={itemVariants}
          className="mb-8 p-4 bg-[#969696]/5 backdrop-blur-sm border border-[#969696]/20 rounded text-xs text-center leading-relaxed"
        >
          <p className="text-right">
            <strong className="text-white">הצהרת אחריות משפטית:</strong> כל פעילות סחר בנשק ואמל״ח מתבצעת בהתאם לחוקי מדינת ישראל והחוק הבינלאומי. 
            העסקאות כפופות לרישיונות ממשלתיים ולפיקוח רגולטורי מלא. החברה פועלת בהתאם לתקנות ייצוא ויבוא של נשק ועומדת בכל דרישות הציות הנדרשות. 
            אין לבצע עסקאות ללא אישורים מתאימים. השימוש באתר זה מהווה הסכמה לתנאי השימוש ולמדיניות הפרטיות.
          </p>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-[#969696]/30 mb-8"></div>

        {/* Bottom Bar */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm"
        >
          <div className="flex gap-4 order-2 md:order-1">
            <motion.a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, color: '#ffffff', rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="text-[#969696] hover:text-white transition-all duration-300"
            >
              <FaLinkedin className="text-2xl" />
            </motion.a>
          </div>

          <div className="text-center order-1 md:order-2">
            <p className="text-[#969696]">
              © {new Date().getFullYear()} ש.י סחר בנשק | ע.ר. 123456789 | כל הזכויות שמורות
            </p>
            <p className="text-xs mt-1">
              מורשה על ידי משרד הביטחון | רישיון סחר בינלאומי מס׳ IL-2024-ARMS-001
            </p>
          </div>

          <div className="order-3 text-xs text-[#969696]">
            <p>Designed with precision</p>
          </div>
        </motion.div>
      </motion.div>

      {/* Back to Top Button */}
      {showBackToTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          whileHover={{ scale: 1.1, backgroundColor: '#ffffff', color: '#000000' }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-8 left-8 z-50 p-3 bg-[#969696] text-black rounded-full shadow-lg backdrop-blur-sm border border-white/20 hover:bg-white transition-all duration-300"
          aria-label="חזור למעלה"
        >
          <FaArrowUp className="text-xl" />
        </motion.button>
      )}

      {/* Glassmorphism Accent Elements */}
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-br from-[#969696]/10 to-transparent backdrop-blur-3xl rounded-full transform translate-x-32 translate-y-32 pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#969696]/5 to-transparent backdrop-blur-3xl rounded-full transform -translate-x-48 -translate-y-48 pointer-events-none"></div>
    </footer>
  );
};

export default Footer;