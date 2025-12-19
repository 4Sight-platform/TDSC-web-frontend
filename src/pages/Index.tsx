import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import DifferentiatorSection from '@/components/DifferentiatorSection';
import ForesightSection from '@/components/ForesightSection';
import ServicesSection from '@/components/ServicesSection';
import PublicationsSection from '@/components/PublicationsSection';
import Footer from '@/components/Footer';
import SocialSidebar from '@/components/SocialSidebar';
import { useScrollReveal } from '@/hooks/useParallax';

const Index = () => {
  useScrollReveal();

  useEffect(() => {
    // Enable smooth scrolling globally
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <SocialSidebar />
      <HeroSection />
      <DifferentiatorSection />
      <ForesightSection />
      <ServicesSection />
      <PublicationsSection />
      <Footer />
    </main>
  );
};

export default Index;
