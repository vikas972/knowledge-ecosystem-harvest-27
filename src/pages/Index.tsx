
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ConceptSection from '@/components/ConceptSection';
import ValueSection from '@/components/ValueSection';
import ProcessSection from '@/components/ProcessSection';
import StructureSection from '@/components/StructureSection';
import TechnologyStack from '@/components/TechnologyStack';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  // Smooth scroll implementation
  useEffect(() => {
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A') {
        const href = target.getAttribute('href');
        if (href && href.startsWith('#')) {
          e.preventDefault();
          const targetId = href.substring(1);
          const targetElement = document.getElementById(targetId);
          
          if (targetElement) {
            window.scrollTo({
              top: targetElement.offsetTop - 80, // Adjust for navbar height
              behavior: 'smooth'
            });
          }
        }
      }
    };

    document.addEventListener('click', handleLinkClick);
    return () => document.removeEventListener('click', handleLinkClick);
  }, []);

  return (
    <div className="relative overflow-hidden">
      <Navbar />
      <HeroSection />
      <ConceptSection />
      <ValueSection />
      <ProcessSection />
      <StructureSection />
      <TechnologyStack />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
