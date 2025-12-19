import { Brain, LucideIcon } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { useParallax } from '@/hooks/useParallax';
import diyIcon from '@/assets/diy-icon.png';
import growthIcon from '@/assets/growth-icon.png';

interface Differentiator {
  icon?: LucideIcon;
  customIcon?: string;
  title: string;
  tagline: string;
}

const differentiators: Differentiator[] = [
  {
    icon: Brain,
    title: 'Data Intelligence',
    tagline: 'Data-driven Intelligence',
  },
  {
    customIcon: diyIcon,
    title: 'DIY',
    tagline: 'Do it yourself',
  },
  {
    customIcon: growthIcon,
    title: 'Accelerated Growth',
    tagline: 'Accelerated Growth using AI',
  },
];

const DifferentiatorSection = () => {
  const parallaxOffset = useParallax(0.15);

  return (
    <AnimatedSection id="about" className="py-20 md:py-24 relative overflow-hidden bg-background">
      {/* Parallax background elements */}
      <div
        className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl"
        style={{ transform: `translateY(${parallaxOffset}px)` }}
      />
      <div
        className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl"
        style={{ transform: `translateY(${parallaxOffset * 1.2}px)` }}
      />

      {/* Parallax floating bubbles */}
      <div
        className="bubble w-20 h-20 top-20 right-[20%] bubble-float hidden lg:block"
        style={{ transform: `translateY(${parallaxOffset * 0.8}px)` }}
      />
      <div
        className="bubble w-14 h-14 bottom-32 left-[15%] bubble-rise hidden lg:block"
        style={{ transform: `translateY(${parallaxOffset * 0.6}px)`, animationDelay: '2s' }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="golden-line mx-auto mb-5" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground">
            Automation,{' '}
            <span className="gradient-text">Redefined</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-10">
          {differentiators.map((item, index) => (
            <div
              key={item.title}
              className="group relative animate-on-scroll"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="glass-card rounded-2xl p-8 lg:p-10 h-full hover:shadow-lg transition-all duration-500 hover:-translate-y-1 text-center">
                {/* Icon */}
                <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-transform duration-300 overflow-hidden"
                  style={{
                    background: 'linear-gradient(135deg, hsl(197 62% 72%) 0%, hsl(38 45% 91%) 100%)',
                    boxShadow: '0 4px 16px rgba(142, 202, 230, 0.25)'
                  }}
                >
                  {item.customIcon ? (
                    <img src={item.customIcon} alt={item.title} className="w-full h-full object-cover" />
                  ) : item.icon ? (
                    <item.icon className="w-7 h-7 lg:w-9 lg:h-9 text-primary-foreground" strokeWidth={1.5} />
                  ) : null}
                </div>

                {/* Content - Dark text on light background */}
                <h3 className="text-xl lg:text-2xl font-serif text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm lg:text-base text-foreground/70">
                  {item.tagline}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default DifferentiatorSection;
