import React from 'react'
import NavBar from './Component/NavBar/NavBar';
import TopSection from './Component/TopSection/TopSection';
import MenuSection from './Component/MenuSection/MenuSection';
import DetailSection from './Component/DetailSection/DetailSection';
import OrderSection from './Component/OrderSection/OrderSection';
import CategorySection from './Component/CategorySection/CategorySection';
import GallerySection from './Component/GallerySection/GallerySection';
import AboutSection from './Component/AboutSection/AboutSection';
import ContactSection from './Component/ContactSection/ContactSection';
import FormSection from './Component/FormSection/FormSection';
import FooterSection from './Component/FooterSection/FooterSection';
const App = () => {
  return (
    <div>
      <NavBar />
      <TopSection />
      <MenuSection />
      <DetailSection />
      <OrderSection />
      <CategorySection />
      <GallerySection />
      <AboutSection />
      <ContactSection />
      <FormSection />
      <FooterSection />
    </div>
  )
}

export default App;