import { FileText, Download, ArrowRight, BookOpen, Calculator, FileBarChart, Lightbulb } from 'lucide-react';
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient';
import { TiltCard } from '@/components/ui/TiltCard';
import AnimatedSection from './AnimatedSection';
import { motion } from 'framer-motion';
import { useParallax } from '@/hooks/useParallax';

const publications = [
  {
    title: 'Future of Intelligent Automation',
    type: 'Whitepaper',
    date: 'Dec 2024',
    icon: Lightbulb,
    gradient: 'from-cerule/30 to-turquin/20',
    badgeColor: 'bg-cerule/20 text-turquin border-cerule/30',
    pages: 24,
  },
  {
    title: 'Due Diligence Best Practices',
    type: 'Report',
    date: 'Nov 2024',
    icon: FileBarChart,
    gradient: 'from-turquin/25 to-cerule/15',
    badgeColor: 'bg-turquin/15 text-turquin border-turquin/30',
    pages: 18,
  },
  {
    title: 'AI Readiness Guide',
    type: 'Guide',
    date: 'Oct 2024',
    icon: BookOpen,
    gradient: 'from-sagace/40 to-cerule/20',
    badgeColor: 'bg-sagace/30 text-turquin border-sagace/40',
    pages: 32,
  },
  {
    title: 'Automation ROI Calculator',
    type: 'Tool',
    date: 'Sep 2024',
    icon: Calculator,
    gradient: 'from-cerule/25 to-sagace/30',
    badgeColor: 'bg-cerule/15 text-turquin border-cerule/25',
    pages: 12,
  },
];

const PublicationsSection = () => {
  const parallaxOffset = useParallax(0.15);

  return (
    <AnimatedSection id="publications" className="py-24 md:py-32 relative overflow-hidden">
      {/* Rich colorful gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-turquin/55 via-cerule/45 to-turquin/65" />
      <div className="absolute inset-0 bg-gradient-to-t from-turquin/45 via-cerule/35 to-turquin/40" />

      {/* Bubbles */}
      <motion.div
        className="bubble w-28 h-28 top-16 left-[10%] hidden lg:block"
        style={{ transform: `translateY(${parallaxOffset * 0.6}px)` }}
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="bubble w-18 h-18 bottom-20 right-[15%] hidden lg:block"
        style={{ transform: `translateY(${parallaxOffset * 0.8}px)` }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 5, repeat: Infinity, delay: 1.5 }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <div className="golden-line mb-5" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white mb-2">
              Publications &{' '}
              <span className="text-sagace">Insights</span>
            </h2>
            <p className="text-white/80 text-lg">
              Expert resources to accelerate your journey
            </p>
          </div>
          <HoverBorderGradient
            containerClassName="rounded-full self-start md:self-auto"
            as="button"
            className="bg-white text-black flex items-center space-x-2"
          >
            <span>View All</span>
            <ArrowRight className="w-4 h-4" />
          </HoverBorderGradient>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {publications.map((pub, index) => (
            <motion.div
              key={pub.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <TiltCard
                className={`h-full bg-gradient-to-br ${pub.gradient}`}
                tiltAmount={8}
                glowColor="rgba(142, 202, 230, 0.25)"
              >
                <div className="rounded-2xl p-6 h-full bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm border border-white/30">
                  {/* Document icon area */}
                  <motion.div
                    className="w-full aspect-[4/3] rounded-xl bg-gradient-to-br from-muted/40 to-muted/20 mb-5 flex items-center justify-center relative overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Animated background pattern */}
                    <motion.div
                      className="absolute inset-0 opacity-20"
                      style={{
                        backgroundImage: 'radial-gradient(circle at 50% 50%, hsl(197, 62%, 72%) 0%, transparent 70%)',
                      }}
                      animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.3, 0.1] }}
                      transition={{ duration: 4, repeat: Infinity }}
                    />
                    <pub.icon
                      className="w-12 h-12 lg:w-14 lg:h-14 text-turquin/60 group-hover:text-cerule transition-colors duration-300 relative z-10"
                      strokeWidth={1}
                    />

                    {/* Page count badge */}
                    <div className="absolute bottom-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md text-xs font-medium text-turquin shadow-sm">
                      {pub.pages} pages
                    </div>
                  </motion.div>

                  {/* Type badge with color */}
                  <motion.span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-3 border ${pub.badgeColor}`}
                    whileHover={{ scale: 1.05 }}
                  >
                    {pub.type}
                  </motion.span>

                  {/* Content */}
                  <h3 className="text-base lg:text-lg font-semibold text-foreground mb-4 line-clamp-2 group-hover:text-turquin transition-colors leading-snug">
                    {pub.title}
                  </h3>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-border/40">
                    <span className="text-sm text-muted-foreground">{pub.date}</span>
                    <motion.div
                      className="w-10 h-10 rounded-full bg-gradient-to-br from-cerule/20 to-sagace/20 flex items-center justify-center group-hover:from-cerule group-hover:to-turquin transition-all duration-300"
                      whileHover={{ scale: 1.1, rotate: 10 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Download className="w-4 h-4 text-turquin group-hover:text-white transition-colors" />
                    </motion.div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div >
    </AnimatedSection >
  );
};

export default PublicationsSection;