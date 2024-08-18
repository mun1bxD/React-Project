import React, { createContext, useState } from "react";

export const LanguageContext = createContext();
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  const translation = {
    en: {
      Title: 'PicFusion',
      MainHeading: 'Discover and enjoy your favorite albums with ease.',
      Description: 'Explore a curated collection of albums, browse through detailed tracks, and manage your music library all in one place. Whether you\'re a casual listener or a music enthusiast, our app provides a seamless experience for discovering new music and revisiting old favorites.',
      AI_heading: 'AI Creations',
      Image_heading: 'Standard Photos',
      IconHeading: 'Action Symbols'
    },
    ur: {
      Title: 'پکفیوژن',
      MainHeading: 'آسانی سے اپنے پسندیدہ البمز دریافت کریں اور لطف اٹھائیں۔',
      Description: 'ایک منتخب مجموعے کی تلاش کریں، تفصیلی ٹریکس کو دیکھیں، اور اپنی موسیقی کی لائبریری کو ایک جگہ پر منظم کریں۔ چاہے آپ ایک غیر رسمی سننے والے ہوں یا موسیقی کے شوقین، ہماری ایپ آپ کو نئی موسیقی دریافت کرنے اور پرانی پسندیدہ کو دوبارہ دیکھنے کے لیے ہموار تجربہ فراہم کرتی ہے۔',
      AI_heading: 'AI تخلیقات',
      Image_heading: 'معیاری تصاویر',
      IconHeading: 'عملی علامات'
    },
    de: {
      Title: 'PicFusion',
      MainHeading: 'Entdecken und genießen Sie Ihre Lieblingsalben mit Leichtigkeit.',
      Description: 'Durchsuchen Sie eine kuratierte Sammlung von Alben, sehen Sie sich detaillierte Titel an und verwalten Sie Ihre Musiksammlung an einem Ort. Egal, ob Sie ein gelegentlicher Hörer oder ein Musikliebhaber sind, unsere App bietet Ihnen ein nahtloses Erlebnis beim Entdecken neuer Musik und beim Wiederentdecken alter Favoriten.',
      AI_heading: 'KI-Kreationen',
      Image_heading: 'Standardfotos',
      IconHeading: 'Aktionssymbole'
    }
  };
  
  return (
    <LanguageContext.Provider value={{ language, setLanguage,translation }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
