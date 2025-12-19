import { Sparkles, BarChart3, Zap, ArrowRight } from 'lucide-react';
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient';
import { Link } from 'react-router-dom';
import AnimatedSection from './AnimatedSection';
import { useParallax } from '@/hooks/useParallax';

const features = [
  {
    icon: Zap,
    title: 'Real-Time Integration',
    description: 'Connect data sources instantly.',
  },
  {
    icon: BarChart3,
    title: 'SEO Grader',
    description: 'Optimize digital presence.',
  },
  {
    icon: Sparkles,
    title: 'Automation Dashboard',
    description: 'Control workflows in one place.',
  },
];

const ForesightSection = () => {
  const parallaxOffset = useParallax(0.2);

  return (
    <AnimatedSection id="foresight" className="py-24 md:py-32 lg:py-40 relative overflow-hidden">
      {/* Dark contrast background */}
      <div className="absolute inset-0 bg-turquin" />

      {/* Parallax floating orbs - larger */}
      <div
        className="absolute w-96 h-96 rounded-full bg-cerule/20 blur-3xl -top-20 left-1/4"
        style={{
          transform: `translateY(${parallaxOffset}px)`,
          animation: 'pulse-soft 4s ease-in-out infinite'
        }}
      />
      <div
        className="absolute w-80 h-80 rounded-full bg-sagace/15 blur-3xl bottom-0 right-1/4"
        style={{
          transform: `translateY(${parallaxOffset * 0.7}px)`,
          animation: 'pulse-soft 5s ease-in-out infinite',
          animationDelay: '2s'
        }}
      />
      <div
        className="absolute w-64 h-64 rounded-full bg-cerule/15 blur-2xl top-1/2 right-[5%]"
        style={{ transform: `translateY(${parallaxOffset * 1.2}px)` }}
      />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="animate-on-scroll lg:pr-8">
            <div className="w-16 h-1 bg-gradient-to-r from-cerule to-sagace mb-6 rounded-full" />

            <p className="text-sm md:text-base text-cerule uppercase tracking-[0.2em] mb-4 font-medium">Introducing</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-tight tracking-tight mb-6">
              4Sight{' '}
              <span className="text-cerule">by TDSC</span>
            </h2>

            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-lg leading-relaxed">
              Next-gen automation platform for scaling businesses with AI-powered insights.
            </p>

            <Link to="/foresight">
              <HoverBorderGradient
                containerClassName="rounded-full"
                as="div"
                className="bg-white text-black flex items-center space-x-2 cursor-pointer"
              >
                <span>Explore 4Sight</span>
                <ArrowRight className="w-5 h-5" />
              </HoverBorderGradient>
            </Link>
          </div>

          {/* Right - Feature Cards */}
          <div className="space-y-5">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="animate-on-scroll bg-white/8 backdrop-blur-md border border-cerule/20 rounded-2xl p-6 lg:p-8 hover:border-cerule/50 hover:bg-white/12 transition-all duration-300 hover:-translate-x-2 cursor-pointer group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-xl bg-cerule/20 flex items-center justify-center group-hover:bg-cerule transition-all duration-300 flex-shrink-0">
                    <feature.icon className="w-7 h-7 lg:w-8 lg:h-8 text-cerule group-hover:text-white transition-colors" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-lg lg:text-xl font-semibold text-white mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm lg:text-base text-white/70">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Stats */}
            <div className="flex items-center gap-4 pt-4">
              <div className="bg-white/8 border border-sagace/40 rounded-full px-6 py-3 backdrop-blur-sm">
                <span className="text-xl lg:text-2xl font-bold text-cerule">50+</span>
                <span className="text-sm text-white/70 ml-2">Integrations</span>
              </div>
              <div className="bg-white/8 border border-sagace/40 rounded-full px-6 py-3 backdrop-blur-sm">
                <span className="text-xl lg:text-2xl font-bold text-cerule">99.9%</span>
                <span className="text-sm text-white/70 ml-2">Uptime</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default ForesightSection;
