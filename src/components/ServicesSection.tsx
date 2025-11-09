'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { 
  GiPistolGun, 
  GiAk47, 
  GiAmmoBox, 
  GiShield, 
  GiTargeted, 
  GiRadarSweep 
} from 'react-icons/gi';
import { IconType } from 'react-icons';

interface Service {
  id: string;
  icon: IconType;
  title: string;
  description: string;
  details: string[];
}

const services: Service[] = [
  {
    id: 'international-trading',
    icon: GiPistolGun,
    title: 'סחר בנשק בינלאומי',
    description: 'מתן שירותי סחר בנשק חוקי בין מדינות תוך עמידה בכל התקנות הבינלאומיות',
    details: [
      'רישוי מלא ומאושר',
      'עמידה בתקנות בינלאומיות',
      'ניסיון רב שנים בשטח',
      'קשרים עם ספקים מובילים'
    ]
  },
  {
    id: 'intermediary-services',
    icon: GiRadarSweep,
    title: 'תיווך בין ארגונים',
    description: 'גישור בין ארגונים קונים ומוכרים ליצירת עסקאות מוצלחות ומאובטחות',
    details: [
      'רשת קשרים בינלאומית',
      'ניהול משא ומתן מקצועי',
      'אמינות ושקיפות מלאה',
      'ליווי עד להשלמת העסקה'
    ]
  },
  {
    id: 'legal-compliance',
    icon: GiShield,
    title: 'ייעוץ משפטי ותיעוד',
    description: 'ייעוץ משפטי מקיף והכנת תיעוד נדרש לעסקאות בינלאומיות',
    details: [
      'ייעוץ משפטי מומחה',
      'הכנת מסמכים משפטיים',
      'בדיקת תאימות לחוקים',
      'ליווי רגולטורי מלא'
    ]
  },
  {
    id: 'defense-procurement',
    icon: GiAk47,
    title: 'רכש ציוד הגנה',
    description: 'רכש וספקת ציוד הגנה איכותי ממקורות מהימנים ומאושרים',
    details: [
      'ציוד איכותי ומאושר',
      'מקורות אמינים בלבד',
      'בדיקות איכות קפדניות',
      'אחריות ותמיכה מלאה'
    ]
  },
  {
    id: 'ammunition-supply',
    icon: GiAmmoBox,
    title: 'אספקת תחמושת',
    description: 'אספקה רציפה של תחמושת איכותית תוך עמידה בסטנדרטים הגבוהים ביותר',
    details: [
      'מלאי זמין ורציף',
      'סטנדרטים בינלאומיים',
      'אחסון ותחזוקה נאותים',
      'משלוחים מאובטחים'
    ]
  },
  {
    id: 'strategic-consulting',
    icon: GiTargeted,
    title: 'ייעוץ אסטרטגי',
    description: 'ייעוץ אסטרטגי מקצועי המבוסס על ניסיון עשיר בשירות הביטחון',
    details: [
      'ניסיון בשירות ביטחון',
      'ניתוח מצב מקיף',
      'המלצות מותאמות אישית',
      'תכנון ארוך טווח'
    ]
  }
];

const ServicesSection: React.FC = () => {
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
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  return (
    <section
      id="services-section"
      ref={sectionRef}
      dir="rtl"
      className="relative w-full min-h-screen bg-black py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Tactical Grid Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(150, 150, 150, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(150, 150, 150, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {/* Geometric Overlay */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="tactical-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="1" fill="#969696" />
              <line x1="0" y1="50" x2="100" y2="50" stroke="#969696" strokeWidth="0.5" />
              <line x1="50" y1="0" x2="50" y2="100" stroke="#969696" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#tactical-pattern)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
          }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-right mb-4 text-white">
            שירותים
          </h2>
          <div className="w-24 h-1 bg-gradient-to-l from-gray-600 to-gray-400 mr-auto mb-6" />
          <p className="text-xl text-gray-400 text-right max-w-3xl mr-auto leading-relaxed">
            שירותי סחר בנשק מקצועיים ומאובטחים עם ניסיון רב שנים בשירות הביטחון
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} variants={itemVariants} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

interface ServiceCardProps {
  service: Service;
  variants: any;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, variants }) => {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = service.icon;

  return (
    <motion.article
      variants={variants}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.05, y: -8 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="relative group"
      role="article"
      aria-label={service.title}
    >
      {/* Card Container */}
      <div className="relative h-full bg-black border border-gray-600 rounded-lg overflow-hidden backdrop-blur-sm">
        {/* Glassmorphism Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/40 via-black/60 to-gray-900/40 backdrop-blur-md" />
        
        {/* Hover Gradient Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-gradient-to-br from-gray-800/30 via-gray-700/20 to-gray-900/30"
        />

        {/* Content */}
        <div className="relative p-8 h-full flex flex-col text-right">
          {/* Icon */}
          <motion.div
            animate={{ rotate: isHovered ? 360 : 0 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            className="mb-6 flex justify-end"
          >
            <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg border border-gray-600 shadow-lg">
              <Icon className="w-8 h-8 text-gray-300" aria-hidden="true" />
            </div>
          </motion.div>

          {/* Title */}
          <h3 className="text-2xl font-bold text-white mb-4 text-right">
            {service.title}
          </h3>

          {/* Description */}
          <p className="text-gray-400 text-right mb-6 leading-relaxed flex-grow">
            {service.description}
          </p>

          {/* Details - Shown on Hover */}
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: isHovered ? 1 : 0,
              height: isHovered ? 'auto' : 0
            }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="border-t border-gray-700 pt-4 mt-4">
              <ul className="space-y-2 text-right" role="list">
                {service.details.map((detail, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{
                      opacity: isHovered ? 1 : 0,
                      x: isHovered ? 0 : 20
                    }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="flex items-center justify-end text-gray-300 text-sm"
                  >
                    <span>{detail}</span>
                    <span className="w-2 h-2 bg-gray-600 rounded-full mr-3" aria-hidden="true" />
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Hover Indicator */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: isHovered ? '100%' : '0%' }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-0 right-0 h-1 bg-gradient-to-l from-gray-500 to-gray-700"
            aria-hidden="true"
          />
        </div>

        {/* Corner Accent */}
        <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-gray-700 opacity-30" aria-hidden="true" />
        <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-gray-700 opacity-30" aria-hidden="true" />
      </div>
    </motion.article>
  );
};

export default ServicesSection;