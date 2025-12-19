import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: '4Sight', href: '#foresight' },
    { label: 'Services', href: '#services' },
    { label: 'Publications', href: '#publications' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
        ? 'py-2.5 glass-card-strong'
        : 'py-4 bg-transparent'
        }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300">
            <span className="text-primary-foreground font-serif font-semibold text-base">T</span>
          </div>
          <span className="text-lg font-serif font-medium text-foreground tracking-tight">
            TDSC
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-3">
          {navLinks.map((link) => (
            <HoverBorderGradient
              key={link.label}
              containerClassName="rounded-full"
              as="button"
              className="bg-white text-black flex items-center"
              onClick={() => scrollToSection(link.href)}
            >
              <span className="text-xs font-medium tracking-wide uppercase">{link.label}</span>
            </HoverBorderGradient>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <HoverBorderGradient
            containerClassName="rounded-full"
            as="button"
            className="bg-white text-black flex items-center space-x-2"
            onClick={() => scrollToSection('#contact')}
          >
            <span>Contact</span>
          </HoverBorderGradient>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-muted/50 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="w-5 h-5 text-foreground" />
          ) : (
            <Menu className="w-5 h-5 text-foreground" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 glass-card-strong overflow-hidden transition-all duration-500 ${isMobileMenuOpen ? 'max-h-80 py-4' : 'max-h-0 py-0'
          }`}
      >
        <div className="container mx-auto px-6 flex flex-col gap-3">
          {navLinks.map((link) => (
            <HoverBorderGradient
              key={link.label}
              containerClassName="rounded-full w-full"
              as="button"
              className="bg-white text-black flex items-center justify-center w-full"
              onClick={() => scrollToSection(link.href)}
            >
              <span className="text-sm font-medium">{link.label}</span>
            </HoverBorderGradient>
          ))}
          <HoverBorderGradient
            containerClassName="rounded-full mt-2"
            as="button"
            className="bg-white text-black flex items-center space-x-2 w-full justify-center"
            onClick={() => scrollToSection('#contact')}
          >
            <span>Contact</span>
          </HoverBorderGradient>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;