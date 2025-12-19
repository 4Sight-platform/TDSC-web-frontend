import { FileSearch, Cpu, GraduationCap, ArrowRight } from 'lucide-react';
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient';
import { BackgroundGradient } from '@/components/ui/background-gradient';
import AnimatedSection from './AnimatedSection';
import { useParallax } from '@/hooks/useParallax';

const services = [
  {
    icon: FileSearch,
    title: 'Due Diligence',
    description: 'Uncover risks and opportunities in your data journey.',
  },
  {
    icon: Cpu,
    title: 'AI Assessment',
    description: 'Evaluate AI readiness.',
  },
  {
    icon: GraduationCap,
    title: 'AI Training',
    description: 'Equip your team effectively in AI.',
  },
];

const ServicesSection = () => {
  const parallaxOffset = useParallax(0.18);

  return (
    <AnimatedSection id="services" className="py-20 md:py-28 relative overflow-hidden bg-muted/30">
      {/* Parallax background pattern */}
      <div
        className="absolute inset-0 opacity-30"
        style={{ transform: `translateY(${parallaxOffset * 0.5}px)` }}
      >
        <div className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, hsl(var(--primary) / 0.1) 0%, transparent 50%),
                             radial-gradient(circle at 75% 75%, hsl(var(--accent) / 0.08) 0%, transparent 50%)`,
          }}
        />
      </div>

      {/* Parallax bubbles */}
      <div
        className="bubble w-24 h-24 top-20 right-[18%] bubble-float opacity-40 hidden lg:block"
        style={{ transform: `translateY(${parallaxOffset}px)` }}
      />
      <div
        className="bubble w-16 h-16 bottom-28 left-[12%] bubble-rise opacity-30 hidden lg:block"
        style={{ transform: `translateY(${parallaxOffset * 0.8}px)`, animationDelay: '2s' }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="golden-line mx-auto mb-5" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground mb-4">
            We Also{' '}
            <span className="gradient-text">Provide</span>
          </h2>
          <p className="text-base md:text-lg text-foreground/70">
            Specialized services for your transformation journey.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative animate-on-scroll h-full"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <BackgroundGradient className="rounded-[22px] bg-white dark:bg-zinc-900 p-6 sm:p-8 h-full min-h-[280px] flex flex-col">
                {/* Icon */}
                <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-xl bg-primary/15 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:scale-105 transition-all duration-300">
                  <service.icon
                    className="w-7 h-7 lg:w-8 lg:h-8 text-primary group-hover:text-primary-foreground transition-colors duration-300"
                    strokeWidth={1.5}
                  />
                </div>

                {/* Content */}
                <h3 className="text-xl lg:text-2xl font-serif text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-sm lg:text-base text-foreground/70 mb-5 flex-grow">
                  {service.description}
                </p>

                {/* CTA */}
                <button className="text-sm text-black hover:text-black/70 transition-colors flex items-center gap-2 group/btn font-medium mt-auto">
                  Learn more
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </BackgroundGradient>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="flex justify-center mt-20">
          <HoverBorderGradient
            containerClassName="rounded-full"
            as="button"
            className="bg-white text-black flex items-center space-x-2"
          >
            <span>Get in Touch</span>
          </HoverBorderGradient>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default ServicesSection;
