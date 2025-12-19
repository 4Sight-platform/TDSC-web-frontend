import { FileText, Download, ArrowRight } from 'lucide-react';
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient';
import { BackgroundGradient } from '@/components/ui/background-gradient';
import AnimatedSection from './AnimatedSection';

const publications = [
  {
    title: 'Future of Intelligent Automation',
    type: 'Whitepaper',
    date: 'Dec 2024',
  },
  {
    title: 'Due Diligence Best Practices',
    type: 'Report',
    date: 'Nov 2024',
  },
  {
    title: 'AI Readiness Guide',
    type: 'Guide',
    date: 'Oct 2024',
  },
  {
    title: 'Automation ROI Calculator',
    type: 'Tool',
    date: 'Sep 2024',
  },
];

const PublicationsSection = () => {
  return (
    <AnimatedSection id="publications" className="py-24 md:py-32 relative overflow-hidden">
      {/* Bubbles */}
      <div className="bubble w-28 h-28 top-16 left-[10%] bubble-float hidden lg:block" />
      <div className="bubble w-18 h-18 bottom-20 right-[15%] bubble-rise hidden lg:block" style={{ animationDelay: '2.5s' }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-14">
          <div>
            <div className="golden-line mb-5" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground">
              Publications &{' '}
              <span className="gradient-text">Insights</span>
            </h2>
          </div>
          <HoverBorderGradient
            containerClassName="rounded-full self-start md:self-auto"
            as="button"
            className="bg-white text-black flex items-center space-x-2"
          >
            <span>View All</span>
            <ArrowRight className="w-4 h-4" />
          </HoverBorderGradient>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {publications.map((pub, index) => (
            <div
              key={pub.title}
              className="group cursor-pointer animate-on-scroll"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <BackgroundGradient
                className="rounded-[18px] bg-white dark:bg-zinc-900 p-5 sm:p-6 h-full"
                animate={false}
              >
                {/* Document icon */}
                <div className="w-full aspect-[4/3] rounded-xl bg-gradient-to-br from-muted/60 to-muted/30 mb-5 flex items-center justify-center group-hover:from-primary/10 group-hover:to-primary/5 transition-all duration-300">
                  <FileText className="w-10 h-10 lg:w-12 lg:h-12 text-muted-foreground/40 group-hover:text-primary/70 transition-colors duration-300" strokeWidth={1} />
                </div>

                {/* Type badge */}
                <span className="inline-block px-3 py-1 rounded-full bg-black/5 text-black text-xs font-medium mb-3">
                  {pub.type}
                </span>

                {/* Content */}
                <h3 className="text-base lg:text-lg font-semibold text-foreground mb-4 line-clamp-2 group-hover:text-black transition-colors leading-snug">
                  {pub.title}
                </h3>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-border/40">
                  <span className="text-sm text-muted-foreground">{pub.date}</span>
                  <div className="w-8 h-8 rounded-full bg-muted/50 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    <Download className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default PublicationsSection;