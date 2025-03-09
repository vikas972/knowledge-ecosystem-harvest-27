
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X, Sprout } from 'lucide-react';

const navLinks = [
  { name: 'Concept', href: '#concept' },
  { name: 'Value', href: '#value' },
  { name: 'Process', href: '#process' },
  { name: 'Structure', href: '#structure' },
  { name: 'Technology', href: '#technology' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out',
        isScrolled 
          ? 'py-3 bg-white/80 backdrop-blur-lg shadow-subtle'
          : 'py-5 bg-transparent'
      )}
    >
      <div className="container px-6 mx-auto flex items-center justify-between">
        <a href="#" className="flex items-center space-x-2">
          <span className="inline-block w-8 h-8 rounded-full bg-primary flex items-center justify-center">
            <Sprout className="w-5 h-5 text-white" />
          </span>
          <span className="font-display font-bold text-xl">EKG</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a href="#contact" className="btn-primary py-2 px-4">
            Get Started
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          'md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-subtle overflow-hidden transition-all duration-300 ease-in-out',
          mobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <div className="px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block py-2 text-foreground/80 hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="block btn-primary text-center mt-4"
            onClick={() => setMobileMenuOpen(false)}
          >
            Get Started
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
