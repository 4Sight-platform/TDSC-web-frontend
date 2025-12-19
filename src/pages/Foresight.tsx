import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Check, Zap, BarChart3, Sparkles, Globe, Shield, Clock, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEOCalculator from '@/components/SEOCalculator';

const features = [
  { icon: Zap, title: 'Real-Time Data Integration', desc: 'Connect all your data sources instantly' },
  { icon: BarChart3, title: 'SEO Maturity Grader', desc: 'Automated digital presence optimization' },
  { icon: Sparkles, title: 'Automation Dashboard', desc: 'Control workflows from one place' },
  { icon: Globe, title: 'Multi-Channel Analytics', desc: 'Unified insights across platforms' },
  { icon: Shield, title: 'Enterprise Security', desc: 'Bank-grade data protection' },
  { icon: Clock, title: '24/7 Monitoring', desc: 'Always-on performance tracking' },
];

const pricingPlans = [
  {
    name: 'Starter',
    price: '$299',
    period: '/month',
    description: 'Perfect for small businesses getting started',
    features: ['Up to 5 data sources', 'Basic SEO analysis', 'Email support', '10 automated workflows', 'Weekly reports'],
    highlighted: false,
  },
  {
    name: 'Professional',
    price: '$599',
    period: '/month',
    description: 'For growing businesses ready to scale',
    features: ['Up to 25 data sources', 'Advanced SEO grader', 'Priority support', 'Unlimited workflows', 'Real-time reports', 'API access', 'Custom integrations'],
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For large organizations with custom needs',
    features: ['Unlimited data sources', 'White-label options', 'Dedicated account manager', 'Custom development', 'SLA guarantee', 'On-premise deployment'],
    highlighted: false,
  },
];

const faqs = [
  { q: 'How quickly can I get started?', a: 'Most businesses are up and running within 24-48 hours. Our onboarding team will guide you through the entire setup process.' },
  { q: 'What integrations are supported?', a: 'We support 50+ integrations including Google Analytics, HubSpot, Salesforce, Shopify, and all major marketing platforms.' },
  { q: 'Is my data secure?', a: 'Absolutely. We use bank-grade encryption, are SOC 2 compliant, and never share your data with third parties.' },
  { q: 'Can I cancel anytime?', a: 'Yes, all plans are month-to-month with no long-term contracts required.' },
];

const Foresight = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-olive/20 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-sea-glass/30 rounded-full blur-3xl animate-blob" style={{ animationDelay: '2s' }} />

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <span className="inline-block px-4 py-1.5 rounded-full glass-card text-olive-dark text-sm font-medium mb-6">
              4Sight by TDSC
            </span>
            <h1 className="text-4xl md:text-6xl font-serif font-semibold text-foreground mb-6 leading-tight">
              Automate <span className="gradient-text">Intelligently</span>.
              <br />Grow <span className="gradient-text">Exponentially</span>.
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
              The next-generation automation platform for businesses ready to scale with AI-powered insights.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="hero" size="xl">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="glass" size="xl">
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-sandstone-light">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground text-center mb-4">
            Everything You Need
          </h2>
          <p className="text-muted-foreground text-center max-w-xl mx-auto mb-14">
            Powerful features designed to accelerate your growth
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <div key={i} className="glass-card rounded-2xl p-6 hover:shadow-glow transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-olive/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-olive-dark" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Calculator */}
      <SEOCalculator />

      {/* Pricing Section */}
      <section className="py-20 bg-sandstone-light">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground text-center mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-muted-foreground text-center max-w-xl mx-auto mb-14">
            Choose the plan that fits your business
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {pricingPlans.map((plan, i) => (
              <div
                key={i}
                className={`rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 ${plan.highlighted
                    ? 'glass-card-strong shadow-glow border-2 border-olive/30'
                    : 'glass-card'
                  }`}
              >
                {plan.highlighted && (
                  <span className="inline-block px-3 py-1 rounded-full bg-olive text-primary-foreground text-xs font-medium mb-4">
                    Most Popular
                  </span>
                )}
                <h3 className="text-xl font-semibold text-foreground mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-3">
                  <span className="text-3xl font-bold gradient-text">{plan.price}</span>
                  <span className="text-muted-foreground text-sm">{plan.period}</span>
                </div>
                <p className="text-sm text-muted-foreground mb-6">{plan.description}</p>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-foreground">
                      <Check className="w-4 h-4 text-olive" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button variant={plan.highlighted ? 'hero' : 'glass'} className="w-full">
                  Get Started
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground text-center mb-14">
            Frequently Asked Questions
          </h2>
          <div className="max-w-2xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="glass-card rounded-xl overflow-hidden cursor-pointer"
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                <div className="flex items-center justify-between p-5">
                  <h3 className="font-medium text-foreground">{faq.q}</h3>
                  {openFaq === i ? (
                    <ChevronUp className="w-5 h-5 text-muted-foreground" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-muted-foreground" />
                  )}
                </div>
                <div
                  className={`px-5 overflow-hidden transition-all duration-300 ${openFaq === i ? 'pb-5 max-h-40' : 'max-h-0'
                    }`}
                >
                  <p className="text-muted-foreground text-sm">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-sandstone-light">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Start your free 14-day trial today. No credit card required.
          </p>
          <Button variant="hero" size="xl">
            Start Free Trial
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Foresight;
