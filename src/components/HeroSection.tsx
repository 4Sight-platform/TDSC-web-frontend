import { HoverBorderGradient } from '@/components/ui/hover-border-gradient';
import { ArrowRight, Sparkles, BarChart3, Zap, Brain, TrendingUp, Shield } from 'lucide-react';
import bannerCollage from '@/assets/banner-collage.png';
import { useParallax } from '@/hooks/useParallax';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

// Animated counter component
const AnimatedCounter = ({ target, suffix = '' }: { target: number; suffix?: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [target]);

  return <span>{count}{suffix}</span>;
};

// Floating tech icon component
const FloatingIcon = ({
  icon: Icon,
  className,
  delay = 0
}: {
  icon: React.ElementType;
  className: string;
  delay?: number;
}) => (
  <motion.div
    className={`absolute hidden lg:flex items-center justify-center w-12 h-12 rounded-xl bg-white/15 backdrop-blur-sm shadow-lg border border-white/20 ${className}`}
    initial={{ opacity: 0, y: 20 }}
    animate={{
      opacity: [0.6, 0.9, 0.6],
      y: [0, -15, 0],
    }}
    transition={{
      duration: 4,
      delay,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  >
    <Icon className="w-6 h-6 text-white" strokeWidth={1.5} />
  </motion.div>
);

const HeroSection = () => {
  const parallaxOffset = useParallax(0.3);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Rich Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-turquin via-cerule/40 to-sagace/60" />

      {/* Additional color overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-turquin/80 via-transparent to-cerule/30" />

      {/* Parallax Background image - more prominent */}
      <div
        className="absolute inset-0 z-0"
        style={{ transform: `translateY(${parallaxOffset}px)` }}
      >
        <img
          src={bannerCollage}
          alt="Small business owners success stories"
          className="w-full h-[120%] object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-turquin/60 via-cerule/40 to-turquin/70" />
      </div>

      {/* Noise texture overlay for depth */}
      <div className="absolute inset-0 noise-overlay pointer-events-none opacity-40" />

      {/* Floating Tech Icons */}
      <FloatingIcon icon={Brain} className="top-[25%] right-[15%]" delay={0} />
      <FloatingIcon icon={BarChart3} className="top-[35%] right-[8%]" delay={0.5} />
      <FloatingIcon icon={Zap} className="top-[55%] right-[12%]" delay={1} />
      <FloatingIcon icon={TrendingUp} className="top-[20%] left-[8%]" delay={1.5} />
      <FloatingIcon icon={Shield} className="top-[45%] left-[5%]" delay={2} />

      {/* Animated accent lines */}
      <motion.div
        className="absolute top-1/4 left-0 w-32 h-px bg-gradient-to-r from-transparent via-cerule to-transparent hidden lg:block"
        animate={{ x: [0, 100, 0], opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/3 right-0 w-48 h-px bg-gradient-to-l from-transparent via-sagace to-transparent hidden lg:block"
        animate={{ x: [0, -80, 0], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, delay: 2 }}
      />

      {/* Parallax floating glass bubbles */}
      <motion.div
        className="bubble w-40 h-40 top-1/4 right-[15%] hidden lg:block"
        style={{ transform: `translateY(${parallaxOffset * 0.5}px)` }}
        animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="bubble w-24 h-24 top-1/3 left-[10%] hidden lg:block"
        style={{ transform: `translateY(${parallaxOffset * 0.7}px)` }}
        animate={{ scale: [1, 1.08, 1], opacity: [0.25, 0.45, 0.25] }}
        transition={{ duration: 5, repeat: Infinity, delay: 1 }}
      />
      <motion.div
        className="bubble w-32 h-32 bottom-1/4 right-[25%] hidden lg:block"
        style={{ transform: `translateY(${parallaxOffset * 0.4}px)` }}
        animate={{ scale: [1, 1.06, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 7, repeat: Infinity, delay: 2 }}
      />

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Sparkles className="w-4 h-4 text-sagace" />
            <span className="text-xs font-medium tracking-wide text-white uppercase">
              Intelligent Due Diligence
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="text-display font-serif leading-tight mb-5"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="text-white">Data Driven</span>{' '}
            <span className="text-sagace">Intelligent Automation</span>{' '}
            <span className="text-white">for Growth</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            className="text-white/90 max-w-lg mb-8 text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            AI-powered insights and automation that deliver measurable results for modern businesses.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-wrap items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <HoverBorderGradient
              containerClassName="rounded-full"
              as="button"
              className="bg-white text-black flex items-center space-x-2"
              onClick={() => scrollToSection('#contact')}
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </HoverBorderGradient>

            <button
              onClick={() => scrollToSection('#foresight')}
              className="px-6 py-2.5 rounded-full text-sm font-medium text-white hover:text-sagace transition-colors duration-300 flex items-center gap-2 border-2 border-white/50 hover:border-sagace bg-white/10 backdrop-blur-sm"
            >
              <span>Explore 4Sight</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>

          {/* Trust indicators - with animated counters */}
          <motion.div
            className="flex flex-wrap items-center gap-8 mt-14 pt-6 border-t border-white/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="flex flex-col">
              <span className="text-2xl font-semibold text-cerule">
                <AnimatedCounter target={500} suffix="+" />
              </span>
              <span className="text-caption text-white/70">Businesses</span>
            </div>
            <div className="w-px h-10 bg-white/20 hidden sm:block" />
            <div className="flex flex-col">
              <span className="text-2xl font-semibold text-cerule">
                <AnimatedCounter target={98} suffix="%" />
              </span>
              <span className="text-caption text-white/70">Satisfaction</span>
            </div>
            <div className="w-px h-10 bg-white/20 hidden sm:block" />
            <div className="flex flex-col">
              <span className="text-2xl font-semibold text-cerule">
                <AnimatedCounter target={40} suffix="%" />
              </span>
              <span className="text-caption text-white/70">Cost Reduction</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => scrollToSection('#about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 hover:opacity-70 transition-opacity cursor-pointer group"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <span className="text-caption text-white/60 uppercase tracking-widest">Scroll</span>
        <div className="w-5 h-8 rounded-full border border-white/30 flex items-start justify-center p-1 group-hover:border-cerule/50 transition-colors">
          <motion.div
            className="w-1 h-2 rounded-full bg-cerule"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.button>
    </section>
  );
};

export default HeroSection;

