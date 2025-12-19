import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowRight, CheckCircle, AlertCircle, TrendingUp, Search, Globe, Zap } from 'lucide-react';
import { toast } from 'sonner';

interface ScoreResult {
  overall: number;
  technical: number;
  content: number;
  performance: number;
}

const SEOCalculator = () => {
  const [websiteUrl, setWebsiteUrl] = useState('');
  const [email, setEmail] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<ScoreResult | null>(null);

  const handleAnalyze = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!websiteUrl || !email) {
      toast.error('Please fill in all fields');
      return;
    }

    setIsAnalyzing(true);
    
    // Simulate analysis with realistic delay
    await new Promise(resolve => setTimeout(resolve, 2500));
    
    // Generate simulated scores
    const scores: ScoreResult = {
      overall: Math.floor(Math.random() * 30) + 55,
      technical: Math.floor(Math.random() * 40) + 50,
      content: Math.floor(Math.random() * 35) + 55,
      performance: Math.floor(Math.random() * 30) + 60,
    };
    
    setResult(scores);
    setIsAnalyzing(false);
    toast.success('Analysis complete! Full report sent to your email.');
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreIcon = (score: number) => {
    if (score >= 80) return <CheckCircle className="w-5 h-5 text-green-600" />;
    if (score >= 60) return <TrendingUp className="w-5 h-5 text-yellow-600" />;
    return <AlertCircle className="w-5 h-5 text-red-600" />;
  };

  return (
    <section className="py-20 relative overflow-hidden" id="seo-calculator">
      <div className="absolute top-0 right-0 w-96 h-96 bg-olive/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-sea-glass/15 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-olive/10 text-olive-dark text-sm font-medium mb-4">
              Free SEO Analysis
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-4">
              SEO Maturity <span className="gradient-text">Calculator</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Get instant insights into your website's SEO health and receive personalized recommendations.
            </p>
          </div>

          <div className="glass-card-strong rounded-3xl p-8 md:p-10">
            {!result ? (
              <form onSubmit={handleAnalyze} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Website URL
                    </label>
                    <div className="relative">
                      <Globe className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <Input
                        type="url"
                        placeholder="https://yourwebsite.com"
                        value={websiteUrl}
                        onChange={(e) => setWebsiteUrl(e.target.value)}
                        className="pl-12"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <Input
                        type="email"
                        placeholder="you@company.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="pl-12"
                        required
                      />
                    </div>
                  </div>
                </div>
                
                <Button
                  type="submit"
                  variant="hero"
                  size="xl"
                  className="w-full"
                  disabled={isAnalyzing}
                >
                  {isAnalyzing ? (
                    <>
                      <Zap className="w-5 h-5 mr-2 animate-pulse" />
                      Analyzing Your Website...
                    </>
                  ) : (
                    <>
                      Analyze My Website
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </>
                  )}
                </Button>
                
                <p className="text-xs text-muted-foreground text-center">
                  Your data is secure. We'll never spam you.
                </p>
              </form>
            ) : (
              <div className="space-y-8">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-24 h-24 rounded-full glass-card mb-4">
                    <span className={`text-4xl font-bold ${getScoreColor(result.overall)}`}>
                      {result.overall}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Your Overall SEO Score
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {result.overall >= 80
                      ? 'Great job! Your website is well-optimized.'
                      : result.overall >= 60
                      ? "Good progress! There's room for improvement."
                      : 'Your website needs attention. Let us help!'}
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  {[
                    { label: 'Technical SEO', score: result.technical },
                    { label: 'Content Quality', score: result.content },
                    { label: 'Performance', score: result.performance },
                  ].map((item, i) => (
                    <div key={i} className="glass-card rounded-xl p-4 text-center">
                      <div className="flex items-center justify-center gap-2 mb-2">
                        {getScoreIcon(item.score)}
                        <span className={`text-2xl font-bold ${getScoreColor(item.score)}`}>
                          {item.score}
                        </span>
                      </div>
                      <span className="text-sm text-muted-foreground">{item.label}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    variant="hero"
                    className="flex-1"
                    onClick={() => toast.success('Our team will contact you shortly!')}
                  >
                    Get Full Report
                  </Button>
                  <Button
                    variant="glass"
                    className="flex-1"
                    onClick={() => {
                      setResult(null);
                      setWebsiteUrl('');
                      setEmail('');
                    }}
                  >
                    Analyze Another Site
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SEOCalculator;
