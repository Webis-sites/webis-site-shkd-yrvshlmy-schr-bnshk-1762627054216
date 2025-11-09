'use client';
  
import React from 'react';

/**
 * ContactSection Component
 * (Fallback component due to generation failure)
 */
export default function ContactSection() {
  return (
    <div className="w-full py-12 px-4 bg-white" dir="rtl">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center" style={{color: '#000000'}}>
          ש.י סחר בנשק
        </h2>
        <p className="text-lg mb-8 text-center">
          שקד ירושלמי איש צבא בעל רקע עשיר  סוחר בנשקים בין מדינות ובין ארגונים להגנה.
        </p>
        <div className="text-center">
          <button 
            className="px-6 py-3 rounded-md text-white font-medium"
            style={{backgroundColor: '#969696'}}
          >
            צור קשר
          </button>
        </div>
      </div>
    </div>
  );
}