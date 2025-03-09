
import { cn } from '@/lib/utils';
import { Github, Twitter, Linkedin, Facebook, Mail, Phone, ExternalLink, FileClock, BookOpen, HelpCircle, Sprout } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-foreground text-white py-16">
      <div className="container px-6 mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-12">
          {/* Logo and Description */}
          <div className="md:w-1/3">
            <div className="flex items-center space-x-2 mb-4">
              <span className="inline-block w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <Sprout className="w-5 h-5 text-white" />
              </span>
              <span className="font-display font-bold text-xl">EKG</span>
            </div>
            <p className="text-white/70 mb-6">
              Transforming enterprise knowledge management through structured, AI-powered solutions
              that help organizations cultivate, organize, and leverage their intellectual assets.
            </p>
            <div className="flex items-center space-x-4">
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#concept" className="text-white/70 hover:text-white transition-colors flex items-center gap-2">
                  <ExternalLink size={16} />
                  EKG Concept
                </a>
              </li>
              <li>
                <a href="#value" className="text-white/70 hover:text-white transition-colors flex items-center gap-2">
                  <ExternalLink size={16} />
                  Value Proposition
                </a>
              </li>
              <li>
                <a href="#process" className="text-white/70 hover:text-white transition-colors flex items-center gap-2">
                  <ExternalLink size={16} />
                  Implementation Process
                </a>
              </li>
              <li>
                <a href="#technology" className="text-white/70 hover:text-white transition-colors flex items-center gap-2">
                  <ExternalLink size={16} />
                  Technology Stack
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors flex items-center gap-2">
                  <FileClock size={16} />
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors flex items-center gap-2">
                  <BookOpen size={16} />
                  Whitepapers
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors flex items-center gap-2">
                  <BookOpen size={16} />
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors flex items-center gap-2">
                  <HelpCircle size={16} />
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Mail size={16} className="text-white/70 mr-2" />
                <span className="text-white/70">Email:</span>
                <a href="mailto:vimlendu.mishra@intellectdesign.com" className="text-white/70 hover:text-white ml-2 transition-colors">
                  vimlendu.mishra@intellectdesign.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone size={16} className="text-white/70 mr-2" />
                <span className="text-white/70">Phone:</span>
                <a href="tel:+11234567890" className="text-white/70 hover:text-white ml-2 transition-colors">
                  +1 (123) 456-7890
                </a>
              </li>
              <li>
                <a href="#contact" className="text-primary hover:text-primary/80 transition-colors flex items-center gap-2">
                  <ExternalLink size={16} className="text-primary" />
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-white/10 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">
            &copy; {new Date().getFullYear()} Enterprise Knowledge Garden (EKG). All rights reserved.
          </p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
