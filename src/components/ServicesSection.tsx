import { FileSearch, Cpu, GraduationCap, ArrowRight, CheckCircle2 } from 'lucide-react';
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient';
import { GlowCard } from '@/components/ui/GlowCard';
import AnimatedSection from './AnimatedSection';
import { useParallax } from '@/hooks/useParallax';
import { motion } from 'framer-motion';

const services = [
  {
    icon: FileSearch,
    title: 'Due Diligence',
    description: 'Uncover risks and opportunities in your data journey with comprehensive analysis.',
    features: ['Risk Assessment', 'Data Quality Audit', 'Compliance Check'],
    color: 'cerule',
  },
  {
    icon: Cpu,
    title: 'AI Assessment',
    description: 'Evaluate your organization\'s AI readiness and create a roadmap for success.',
    features: ['Readiness Score', 'Gap Analysis', 'Implementation Plan'],
    color: 'turquin',
  },
  {
    icon: GraduationCap,
    title: 'AI Training',
    description: 'Equip your team with cutting-edge AI skills and practical knowledge.',
    features: ['Custom Curriculum', 'Hands-on Labs', 'Certification'],
    color: 'sagace',
  },
];

const ServicesSection = () => {
  const parallaxOffset = useParallax(0.18);

  return (
    <AnimatedSection id="services" className="py-24 md:py-32 relative overflow-hidden">
      {/* Rich colorful gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-turquin/60 via-cerule/50 to-turquin/70" />
      <div className="absolute inset-0 bg-gradient-to-t from-turquin/50 via-cerule/30 to-turquin/40" />

      {/* Parallax background pattern */}
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{ transform: `translateY(${parallaxOffset * 0.5}px)` }}
      >
        <div className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, hsl(var(--primary) / 0.15) 0%, transparent 50%),
                             radial-gradient(circle at 75% 75%, hsl(var(--accent) / 0.12) 0%, transparent 50%)`,
          }}
        />
      </motion.div>

      {/* Decorative geometric shapes */}
      <motion.div
        className="absolute top-20 right-10 w-32 h-32 border border-cerule/20 rounded-2xl hidden lg:block"
        animate={{ rotate: [0, 90, 180, 270, 360] }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-24 h-24 border border-sagace/30 rounded-full hidden lg:block"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      {/* Parallax bubbles */}
      <motion.div
        className="bubble w-24 h-24 top-20 right-[18%] hidden lg:block"
        style={{ transform: `translateY(${parallaxOffset}px)` }}
        animate={{ opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div
        className="bubble w-16 h-16 bottom-28 left-[12%] hidden lg:block"
        style={{ transform: `translateY(${parallaxOffset * 0.8}px)` }}
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 5, repeat: Infinity, delay: 1 }}
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
            We Also{' '}
            <span className="text-sagace">Provide</span>
          </h2>
          <p className="text-lg text-white/80">
            Specialized services for your transformation journey
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="h-full"
            >
              <GlowCard
                className="h-full"
                glowColor={`hsl(var(--${service.color === 'cerule' ? 'primary' : service.color === 'turquin' ? 'foreground' : 'secondary'}))`}
                hoverScale={1.03}
              >
                <div className="p-8 lg:p-10 h-full flex flex-col">
                  {/* Icon with animated background */}
                  <motion.div
                    className="relative w-16 h-16 lg:w-20 lg:h-20 mb-6"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-cerule/20 to-sagace/20 rounded-2xl" />
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-cerule to-turquin rounded-2xl opacity-0"
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <service.icon
                        className="w-8 h-8 lg:w-10 lg:h-10 text-turquin"
                        strokeWidth={1.5}
                      />
                    </div>
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-xl lg:text-2xl font-serif text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm lg:text-base text-foreground/70 mb-6 flex-grow">
                    {service.description}
                  </p>

                  {/* Feature list */}
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, i) => (
                      <motion.div
                        key={feature}
                        className="flex items-center gap-2 text-sm text-foreground/80"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + i * 0.1 }}
                      >
                        <CheckCircle2 className="w-4 h-4 text-cerule flex-shrink-0" />
                        <span>{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA */}
                  <motion.button
                    className="text-sm text-turquin hover:text-cerule transition-colors flex items-center gap-2 group font-medium mt-auto"
                    whileHover={{ x: 4 }}
                  >
                    Learn more
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="flex justify-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <HoverBorderGradient
            containerClassName="rounded-full"
            as="button"
            className="bg-white text-black flex items-center space-x-2"
          >
            <span>Get in Touch</span>
            <ArrowRight className="w-4 h-4" />
          </HoverBorderGradient>
        </motion.div>
      </div>
    </AnimatedSection>
  );
};

export default ServicesSection;

