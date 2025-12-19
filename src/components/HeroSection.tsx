import { HoverBorderGradient } from '@/components/ui/hover-border-gradient';
import { ArrowRight } from 'lucide-react';
import bannerCollage from '@/assets/banner-collage.png';
import { useParallax } from '@/hooks/useParallax';

const HeroSection = () => {
  const parallaxOffset = useParallax(0.3);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-background">
      {/* Parallax Background image */}
      <div
        className="absolute inset-0 z-0"
        style={{ transform: `translateY(${parallaxOffset}px)` }}
      >
        <img
          src={bannerCollage}
          alt="Small business owners success stories"
          className="w-full h-[120%] object-cover blur-sm opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/60 to-background" />
      </div>

      {/* Parallax floating glass bubbles */}
      <div
        className="bubble w-40 h-40 top-1/4 right-[15%] bubble-float hidden lg:block"
        style={{ transform: `translateY(${parallaxOffset * 0.5}px)`, animationDelay: '0s' }}
      />
      <div
        className="bubble w-24 h-24 top-1/3 left-[10%] bubble-rise hidden lg:block"
        style={{ transform: `translateY(${parallaxOffset * 0.7}px)`, animationDelay: '2s' }}
      />
      <div
        className="bubble w-32 h-32 bottom-1/4 right-[25%] bubble-float hidden lg:block"
        style={{ transform: `translateY(${parallaxOffset * 0.4}px)`, animationDelay: '4s' }}
      />
      <div
        className="bubble w-16 h-16 top-1/2 left-[20%] bubble-rise hidden lg:block"
        style={{ transform: `translateY(${parallaxOffset * 0.6}px)`, animationDelay: '1s' }}
      />

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass-card rounded-full px-4 py-2 mb-6 animate-fade-in">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-medium tracking-wide text-foreground uppercase">
              Intelligent Due Diligence
            </span>
          </div>

          {/* Headline - Black text */}
          <h1 className="text-display font-serif text-black leading-tight mb-5 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Data Driven Intelligent Automation for Growth
          </h1>

          {/* Subtext - black for readability */}
          <p className="text-body text-black max-w-lg mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            AI-powered insights and automation that deliver measurable results.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <HoverBorderGradient
              containerClassName="rounded-full"
              as="button"
              className="bg-white text-black flex items-center space-x-2"
              onClick={() => scrollToSection('#contact')}
            >
              <span>Contact Us</span>
              <ArrowRight className="w-4 h-4" />
            </HoverBorderGradient>
          </div>

          {/* Trust indicators - dark text */}
          <div className="flex flex-wrap items-center gap-8 mt-14 pt-6 border-t border-foreground/10 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="flex flex-col">
              <span className="text-2xl font-semibold gradient-text">500+</span>
              <span className="text-caption text-foreground/60">Businesses</span>
            </div>
            <div className="w-px h-10 bg-foreground/10 hidden sm:block" />
            <div className="flex flex-col">
              <span className="text-2xl font-semibold gradient-text">98%</span>
              <span className="text-caption text-foreground/60">Satisfaction</span>
            </div>
            <div className="w-px h-10 bg-foreground/10 hidden sm:block" />
            <div className="flex flex-col">
              <span className="text-2xl font-semibold gradient-text">40%</span>
              <span className="text-caption text-foreground/60">Cost Reduction</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollToSection('#about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 hover:opacity-70 transition-opacity cursor-pointer group"
      >
        <span className="text-caption text-foreground/60 uppercase tracking-widest">Scroll</span>
        <div className="w-5 h-8 rounded-full border border-foreground/20 flex items-start justify-center p-1 group-hover:border-primary/50 transition-colors">
          <div className="w-1 h-2 rounded-full bg-primary animate-bounce" />
        </div>
      </button>
    </section>
  );
};

export default HeroSection;
