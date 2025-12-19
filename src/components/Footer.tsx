import { useState } from 'react';
import { Linkedin, MessageCircle, Send, MapPin, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import AnimatedSection from './AnimatedSection';

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organisation: '',
    phone: '',
    queryType: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <footer id="contact" className="bg-turquin text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-cerule/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-sagace/5 rounded-full blur-3xl" />

      <AnimatedSection className="py-16 md:py-20">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left - Contact Form */}
            <div>
              <div className="golden-line mb-4 opacity-60" />
              <h3 className="text-headline font-serif mb-4 text-white">
                Start a{' '}
                <span className="text-cerule">Conversation</span>
              </h3>
              <p className="text-body text-white/70 mb-6 max-w-sm">
                Ready to transform with intelligent automation?
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Row 1: Name & Email */}
                <div className="grid md:grid-cols-2 gap-4">
                  <Input
                    placeholder="Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-cerule h-10 rounded-lg text-sm"
                  />
                  <Input
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-cerule h-10 rounded-lg text-sm"
                  />
                </div>

                {/* Row 2: Organisation & Phone */}
                <div className="grid md:grid-cols-2 gap-4">
                  <Input
                    placeholder="Organisation"
                    value={formData.organisation}
                    onChange={(e) => setFormData({ ...formData, organisation: e.target.value })}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-cerule h-10 rounded-lg text-sm"
                  />
                  <Input
                    type="tel"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-cerule h-10 rounded-lg text-sm"
                  />
                </div>

                {/* Row 3: Query Type */}
                <select
                  value={formData.queryType}
                  onChange={(e) => setFormData({ ...formData, queryType: e.target.value })}
                  className="w-full bg-white/10 border border-white/20 text-white h-10 rounded-lg text-sm px-3 focus:border-cerule focus:outline-none focus:ring-1 focus:ring-cerule appearance-none cursor-pointer"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='white'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 12px center',
                    backgroundSize: '16px'
                  }}
                >
                  <option value="" disabled className="text-gray-500">Select Query Type</option>
                  <option value="general" className="bg-turquin text-white">General Inquiry</option>
                  <option value="demo" className="bg-turquin text-white">Request a Demo</option>
                  <option value="partnership" className="bg-turquin text-white">Partnership</option>
                  <option value="support" className="bg-turquin text-white">Support</option>
                  <option value="other" className="bg-turquin text-white">Other</option>
                </select>

                {/* Row 4: Message */}
                <Textarea
                  placeholder="Message..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-cerule min-h-24 rounded-lg resize-none text-sm"
                />
                <Button type="submit" className="bg-cerule text-white hover:bg-cerule/90" size="sm">
                  Send
                  <Send className="w-3.5 h-3.5 ml-1.5" />
                </Button>
              </form>
            </div>

            {/* Right - Info & Social */}
            <div className="lg:pl-8">
              {/* Logo */}
              <div className="flex items-center gap-2.5 mb-6">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cerule to-sagace flex items-center justify-center">
                  <span className="text-turquin font-serif font-semibold text-lg">T</span>
                </div>
                <span className="text-xl font-serif font-medium text-white">TDSC</span>
              </div>

              <p className="text-body text-white/70 mb-6 max-w-xs">
                Intelligent automation for business growth.
              </p>

              {/* Contact Info */}
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 text-caption text-white/60 hover:text-cerule transition-colors cursor-pointer">
                  <MapPin className="w-4 h-4" />
                  <span>Innovation Hub, Tech City</span>
                </div>
                <div className="flex items-center gap-3 text-caption text-white/60 hover:text-cerule transition-colors cursor-pointer">
                  <Mail className="w-4 h-4" />
                  <span>hello@tdsc.com</span>
                </div>
                <div className="flex items-center gap-3 text-caption text-white/60 hover:text-cerule transition-colors cursor-pointer">
                  <Phone className="w-4 h-4" />
                  <span>+1 (555) 123-4567</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-3">
                <a
                  href="#"
                  className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-cerule transition-colors duration-300 group"
                >
                  <Linkedin className="w-4 h-4 text-white/70 group-hover:text-white" />
                </a>
                <a
                  href="#"
                  className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-cerule transition-colors duration-300 group"
                >
                  <MessageCircle className="w-4 h-4 text-white/70 group-hover:text-white" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/15 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
            <p className="text-caption text-white/50">
              © 2025 TDSC. All rights reserved.
            </p>
            <div className="flex items-center gap-5">
              <a href="#" className="text-caption text-white/50 hover:text-cerule transition-colors">
                Privacy
              </a>
              <a href="#" className="text-caption text-white/50 hover:text-cerule transition-colors">
                Terms
              </a>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </footer>
  );
};

export default Footer;