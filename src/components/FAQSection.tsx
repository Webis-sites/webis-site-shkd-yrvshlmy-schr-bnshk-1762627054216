'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaShieldAlt, FaGlobeAmericas, FaLock, FaBoxOpen, FaClock, FaCreditCard, FaHeadset, FaCertificate, FaPlus, FaMinus } from 'react-icons/fa';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  icon: React.ReactNode;
}

const faqData: FAQItem[] = [
  {
    id: 1,
    question: 'מהם הדרישות החוקיות והרישיונות הנדרשים לרכישת נשק?',
    answer: 'כל עסקה מתבצעת בהתאם לחוקים הבינלאומיים והמקומיים. אנו דואגים לכל האישורים הנדרשים מרשויות הביטחון והמכס במדינות המקור והיעד. הלקוח נדרש להציג רישיונות ייבוא תקפים, אישורי משרד הביטחון, ותעודות משתמש קצה (End User Certificate). אנו מלווים את הלקוח בכל שלבי התהליך הבירוקרטי ומספקים ייעוץ משפטי מקצועי.',
    icon: <FaShieldAlt className="text-2xl" />
  },
  {
    id: 2,
    question: 'כיצד מתבצע המשלוח הבינלאומי והלוגיסטיקה?',
    answer: 'אנו עובדים עם חברות שילוח מובילות המתמחות בהובלת ציוד ביטחוני. המשלוח מתבצע בהתאם לתקנות ITAR ו-EAR, עם ליווי מלא של מסמכי יצוא וייבוא. אנו מספקים ביטוח מלא למשלוח, מעקב בזמן אמת, ותיאום עם רשויות המכס בשני הצדדים. זמני האספקה משתנים בהתאם ליעד ולסוג הציוד, בדרך כלל בין 30-90 יום.',
    icon: <FaGlobeAmericas className="text-2xl" />
  },
  {
    id: 3,
    question: 'כיצד מובטחת סודיות ואבטחת המידע בעסקאות?',
    answer: 'אנו שומרים על סודיות מוחלטת של כל העסקאות והלקוחות. כל המידע מוצפן ברמה הגבוהה ביותר, והתקשורת מתבצעת בערוצים מאובטחים בלבד. אנו חותמים על הסכמי סודיות (NDA) עם כל הצדדים המעורבים, ומקפידים על פרוטוקולי אבטחת מידע מחמירים. המסמכים הרגישים מועברים בדרכים מאובטחות ומוגנות מפני גישה לא מורשית.',
    icon: <FaLock className="text-2xl" />
  },
  {
    id: 4,
    question: 'אילו סוגי נשקים וציוד זמינים לרכישה?',
    answer: 'אנו מתמחים במגוון רחב של ציוד ביטחוני ואמל"ח: נשק קל וכבד, תחמושת, ציוד הגנה אישי, מערכות תקשורת צבאיות, רחפנים ומל"טים, ציוד ראיית לילה, ומערכות הגנה מתקדמות. כל הציוד עומד בתקנים הבינלאומיים ומגיע מיצרנים מוכרים ומוסמכים. אנו יכולים לספק גם ציוד מותאם אישית לפי דרישות הלקוח.',
    icon: <FaBoxOpen className="text-2xl" />
  },
  {
    id: 5,
    question: 'מהו לוח הזמנים הצפוי לביצוע עסקה?',
    answer: 'תהליך העסקה כולל מספר שלבים: בדיקת זמינות המוצר (3-7 ימים), הכנת מסמכים משפטיים (7-14 ימים), קבלת אישורים ממשלתיים (30-60 ימים), ייצור או הכנת הציוד (בהתאם להזמנה), ומשלוח (30-90 ימים). סך הכל, תהליך מלא יכול לקחת בין 3-6 חודשים. אנו מספקים עדכונים שוטפים לאורך כל התהליך ועובדים על קיצור זמנים ככל האפשר.',
    icon: <FaClock className="text-2xl" />
  },
  {
    id: 6,
    question: 'מהם תנאי התשלום ושיטות התשלום המקובלות?',
    answer: 'אנו מקבלים תשלומים באמצעות העברות בנקאיות בינלאומיות, אשראי מסחרי (LC), ותשלומים באמצעות בנקים מתווכים. תנאי התשלום הסטנדרטיים: 30% מקדמה עם חתימת החוזה, 40% לאחר קבלת אישורי היצוא, ו-30% לפני המשלוח. אנו גמישים ויכולים להתאים תנאים מיוחדים ללקוחות קבועים או לעסקאות גדולות. כל התשלומים מתועדים ומדווחים בהתאם לחוק.',
    icon: <FaCreditCard className="text-2xl" />
  },
  {
    id: 7,
    question: 'האם קיים תמיכה ושירות לאחר המכירה?',
    answer: 'אנו מספקים תמיכה מלאה לאחר המכירה הכוללת: הדרכה על השימוש בציוד, תיעוד טכני מפורט, אחריות על המוצרים, זמינות לחלפים ואביזרים, ותמיכה טכנית 24/7. אנו שומרים על קשר רציף עם הלקוחות ומוודאים שהציוד פועל כראוי. במקרה של תקלה או בעיה, אנו מגיבים במהירות ומספקים פתרונות יעילים.',
    icon: <FaHeadset className="text-2xl" />
  },
  {
    id: 8,
    question: 'אילו תעודות והסמכות נדרשות מהלקוח?',
    answer: 'הלקוח נדרש להציג: תעודת משתמש קצה (EUC) מאושרת על ידי ממשלת המדינה, רישיון ייבוא תקף, אישור משרד הביטחון או הגורם המוסמך, תעודת התאגדות של החברה, ומסמכי זהות של החתומים. כל המסמכים חייבים להיות מאומתים ומאושרים על ידי נוטריון או גורם מוסמך. אנו מסייעים בהכנת המסמכים ובוידוא שהם עומדים בכל הדרישות החוקיות.',
    icon: <FaCertificate className="text-2xl" />
  }
];

export default function FAQSection(): JSX.Element {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleFAQ = (id: number): void => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section
      id="faq-section"
      dir="rtl"
      className="min-h-screen w-full bg-black py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl sm:text-6xl font-bold text-right mb-4 text-[#969696]">
            שאלות נפוצות
          </h1>
          <div className="w-32 h-1 bg-[#969696] mr-auto"></div>
          <p className="text-right text-[#969696] mt-6 text-lg">
            מענה לשאלות הנפוצות ביותר בתחום סחר הנשק הבינלאומי
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div
                className="relative backdrop-blur-md bg-black/40 border border-[#969696]/30 rounded-lg overflow-hidden hover:border-[#969696]/60 transition-all duration-300"
                style={{
                  boxShadow: '0 4px 6px rgba(150, 150, 150, 0.1)'
                }}
              >
                {/* Question Button */}
                <button
                  onClick={() => toggleFAQ(item.id)}
                  className="w-full p-6 flex items-center justify-between text-right focus:outline-none focus:ring-2 focus:ring-[#969696]/50 rounded-lg transition-all"
                  aria-expanded={openId === item.id}
                  aria-controls={`faq-answer-${item.id}`}
                >
                  <div className="flex items-center gap-4 flex-1">
                    <motion.div
                      animate={{ rotate: openId === item.id ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="text-[#969696]"
                    >
                      {openId === item.id ? (
                        <FaMinus className="text-xl" />
                      ) : (
                        <FaPlus className="text-xl" />
                      )}
                    </motion.div>
                    <h3 className="text-xl font-semibold text-[#969696] text-right flex-1">
                      {item.question}
                    </h3>
                    <div className="text-[#969696] opacity-70">
                      {item.icon}
                    </div>
                  </div>
                </button>

                {/* Answer */}
                <AnimatePresence>
                  {openId === item.id && (
                    <motion.div
                      id={`faq-answer-${item.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-2">
                        <div className="w-full h-px bg-gradient-to-l from-[#969696]/30 to-transparent mb-4"></div>
                        <motion.p
                          initial={{ y: -10, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.3, delay: 0.1 }}
                          className="text-[#969696]/90 text-right leading-relaxed text-lg"
                        >
                          {item.answer}
                        </motion.p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 text-center"
        >
          <div className="backdrop-blur-md bg-black/40 border border-[#969696]/30 rounded-lg p-8">
            <p className="text-[#969696] text-right text-lg leading-relaxed">
              לשאלות נוספות או לפרטים מדויקים יותר, אנא צרו קשר ישירות.
              <br />
              כל העסקאות מתבצעות בהתאם לחוקים הבינלאומיים ובפיקוח רשויות הביטחון.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}