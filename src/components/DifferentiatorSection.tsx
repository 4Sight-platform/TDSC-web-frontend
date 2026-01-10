import { Brain, LucideIcon } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { useParallax } from '@/hooks/useParallax';
import { TiltCard } from '@/components/ui/TiltCard';
import { motion } from 'framer-motion';
import diyIcon from '@/assets/diy-icon.png';
import growthIcon from '@/assets/growth-icon.png';

interface Differentiator {
  icon?: LucideIcon;
  customIcon?: string;
  title: string;
  tagline: string;
  gradient: string;
}

const differentiators: Differentiator[] = [
  {
    icon: Brain,
    title: 'Data Driven Intelligence',
    tagline: 'Transform raw data into actionable insights with AI-powered analytics',
    gradient: 'from-cerule/20 to-turquin/10',
  },
  {
    customIcon: diyIcon,
    title: 'DIY',
    tagline: 'Self-service tools that empower you to take control of your growth',
    gradient: 'from-sagace/30 to-cerule/10',
  },
  {
    customIcon: growthIcon,
    title: 'Accelerated Growth',
    tagline: 'Scale faster with automated workflows and intelligent optimization',
    gradient: 'from-turquin/15 to-sagace/20',
  },
];

const DifferentiatorSection = () => {
  const parallaxOffset = useParallax(0.15);

  return (
    <AnimatedSection id="about" className="py-20 md:py-28 relative overflow-hidden">
      {/* Rich colorful gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-turquin/50 via-cerule/40 to-turquin/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-turquin/40 via-transparent to-cerule/30" />

      {/* Parallax background elements */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-cerule/8 rounded-full blur-3xl"
        style={{ transform: `translateY(${parallaxOffset}px)` }}
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-80 h-80 bg-sagace/15 rounded-full blur-3xl"
        style={{ transform: `translateY(${parallaxOffset * 1.2}px)` }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, delay: 2 }}
      />

      {/* Connecting lines between cards (desktop only) */}
      <div className="absolute top-1/2 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-cerule/20 to-transparent hidden lg:block" />

      {/* Parallax floating bubbles */}
      <motion.div
        className="bubble w-20 h-20 top-20 right-[20%] hidden lg:block"
        style={{ transform: `translateY(${parallaxOffset * 0.8}px)` }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 5, repeat: Infinity }}
      />
      <motion.div
        className="bubble w-14 h-14 bottom-32 left-[15%] hidden lg:block"
        style={{ transform: `translateY(${parallaxOffset * 0.6}px)` }}
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 6, repeat: Infinity, delay: 1 }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="golden-line mx-auto mb-5" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white mb-4">
            Automation,{' '}
            <span className="text-sagace">Redefined</span>
          </h2>
          <p className="text-white/80 text-lg">
            Three pillars of intelligent business transformation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {differentiators.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <TiltCard
                className={`h-full bg-gradient-to-br ${item.gradient} backdrop-blur-sm`}
                glowColor="rgba(142, 202, 230, 0.3)"
              >
                <div className="glass-card rounded-2xl p-8 lg:p-10 h-full text-center border border-white/20">
                  {/* Icon with animated ring */}
                  <div className="relative w-20 h-20 lg:w-24 lg:h-24 mx-auto mb-6">
                    {/* Animated outer ring */}
                    <motion.div
                      className="absolute inset-0 rounded-xl"
                      style={{
                        background: 'linear-gradient(135deg, hsl(197 62% 72%) 0%, hsl(38 45% 91%) 100%)',
                      }}
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    />
                    {/* Inner icon container */}
                    <div className="absolute inset-1 rounded-xl flex items-center justify-center overflow-hidden bg-white/90 backdrop-blur-sm">
                      {item.customIcon ? (
                        <img src={item.customIcon} alt={item.title} className="w-full h-full object-cover" />
                      ) : item.icon ? (
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <item.icon className="w-10 h-10 lg:w-12 lg:h-12 text-turquin" strokeWidth={1.5} />
                        </motion.div>
                      ) : null}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl lg:text-2xl font-serif text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm lg:text-base text-foreground/70 leading-relaxed">
                    {item.tagline}
                  </p>

                  {/* Decorative element */}
                  <motion.div
                    className="mt-6 w-12 h-1 bg-gradient-to-r from-cerule to-sagace rounded-full mx-auto"
                    initial={{ width: 0 }}
                    whileInView={{ width: 48 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                  />
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default DifferentiatorSection;

