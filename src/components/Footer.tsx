
import { cn } from '@/lib/utils';
import { Github, Twitter, Linkedin, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-foreground text-white py-16">
      <div className="container px-6 mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-12">
          {/* Logo and Description */}
          <div className="md:w-1/3">
            <div className="flex items-center space-x-2 mb-4">
              <span className="inline-block w-8 h-8 rounded-full bg-primary"></span>
              <span className="font-display font-bold text-xl">EKGarden</span>
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
                <a href="#concept" className="text-white/70 hover:text-white transition-colors">
                  EKG Concept
                </a>
              </li>
              <li>
                <a href="#value" className="text-white/70 hover:text-white transition-colors">
                  Value Proposition
                </a>
              </li>
              <li>
                <a href="#process" className="text-white/70 hover:text-white transition-colors">
                  Implementation Process
                </a>
              </li>
              <li>
                <a href="#technology" className="text-white/70 hover:text-white transition-colors">
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
                <a href="#" className="text-white/70 hover:text-white transition-colors">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">
                  Whitepapers
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">
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
                <span className="text-white/70">Email:</span>
                <a href="mailto:info@ekgarden.com" className="text-white/70 hover:text-white ml-2 transition-colors">
                  info@ekgarden.com
                </a>
              </li>
              <li className="flex items-center">
                <span className="text-white/70">Phone:</span>
                <a href="tel:+11234567890" className="text-white/70 hover:text-white ml-2 transition-colors">
                  +1 (123) 456-7890
                </a>
              </li>
              <li>
                <a href="#contact" className="text-primary hover:text-primary/80 transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-white/10 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">
            &copy; {new Date().getFullYear()} Enterprise Knowledge Garden. All rights reserved.
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
