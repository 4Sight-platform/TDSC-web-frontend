import { useState } from 'react';
import { Linkedin, Twitter, Instagram, Facebook, Youtube, Mail, X, Share2 } from 'lucide-react';

const socialLinks = [
  { icon: Linkedin, label: 'LinkedIn', url: 'https://linkedin.com', color: 'hover:text-[#0077B5]' },
  { icon: Twitter, label: 'Twitter', url: 'https://twitter.com', color: 'hover:text-[#1DA1F2]' },
  { icon: Instagram, label: 'Instagram', url: 'https://instagram.com', color: 'hover:text-[#E4405F]' },
  { icon: Facebook, label: 'Facebook', url: 'https://facebook.com', color: 'hover:text-[#1877F2]' },
  { icon: Youtube, label: 'YouTube', url: 'https://youtube.com', color: 'hover:text-[#FF0000]' },
  { icon: Mail, label: 'Email', url: 'mailto:hello@tdsc.com', color: 'hover:text-cerule' },
];

const SocialSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50">
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex flex-col items-center gap-2 p-3 rounded-l-xl cursor-pointer transition-all duration-300 group bg-turquin border border-cerule/30 border-r-0"
        aria-label="Toggle social links"
      >
        {isOpen ? (
          <X className="w-5 h-5 text-white transition-transform duration-300 group-hover:rotate-90" />
        ) : (
          <Share2 className="w-5 h-5 text-white transition-transform duration-300 group-hover:scale-110" />
        )}
        <span 
          className="text-[10px] text-white/80 hidden md:block font-medium"
          style={{ writingMode: 'vertical-rl' }}
        >
          Connect
        </span>
      </button>

      {/* Social Panel */}
      <div 
        className={`absolute right-full top-0 p-4 rounded-l-xl transition-all duration-300 bg-turquin border border-cerule/30 border-r-0 ${
          isOpen ? 'opacity-100 pointer-events-auto translate-x-0' : 'opacity-0 pointer-events-none translate-x-5'
        }`}
      >
        <div className="flex flex-col gap-4">
          <h4 className="text-xs font-medium text-white/90 whitespace-nowrap">
            Follow Us
          </h4>
          <div className="flex flex-col gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-3 text-white/70 ${social.color} transition-all duration-300 group`}
              >
                <div className="p-2 rounded-lg bg-white/10 group-hover:bg-white/20 transition-colors duration-300">
                  <social.icon className="w-4 h-4" />
                </div>
                <span className="text-xs whitespace-nowrap">{social.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialSidebar;
