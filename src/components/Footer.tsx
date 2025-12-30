import { Link } from 'react-router-dom';
import { Instagram, Twitter, Linkedin, Mail } from 'lucide-react';
import { navLinks, socialLinks } from '../data/navigation';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const getSocialIcon = (iconName: string) => {
    switch (iconName) {
      case 'instagram':
        return <Instagram size={20} />;
      case 'twitter':
        return <Twitter size={20} />;
      case 'linkedin':
        return <Linkedin size={20} />;
      default:
        return null;
    }
  };

  return (
    <footer className="relative bg-black/40 backdrop-blur-xl border-t border-white/10">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />
      
      <div className="container-custom py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="text-3xl font-bold text-gradient inline-block mb-6">
              LENS
            </Link>
            <p className="mt-4 text-neutral-400 max-w-md leading-relaxed">
              Capturing moments and creating visual stories through the lens.
              Professional photography services for all occasions.
            </p>
            <div className="flex items-center space-x-3 mt-8">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 text-neutral-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-xl transition-all"
                  aria-label={social.name}
                >
                  {getSocialIcon(social.icon)}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-6">
              Navigation
            </h3>
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-neutral-400 hover:text-white transition-colors text-sm inline-flex items-center group"
                  >
                    <span className="w-0 group-hover:w-4 h-0.5 bg-gradient-to-r from-primary-500 to-accent-500 transition-all duration-300 mr-0 group-hover:mr-2" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-6">
              Contact
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:hello@lens.photography"
                  className="text-neutral-400 hover:text-white transition-colors text-sm flex items-center group"
                >
                  <Mail size={16} className="mr-3 text-primary-400" />
                  <span>hello@lens.photography</span>
                </a>
              </li>
              <li className="text-neutral-400 text-sm flex items-center">
                <div className="w-2 h-2 rounded-full bg-green-500 mr-3 animate-pulse" />
                Available for projects
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-neutral-500">
              &copy; {currentYear} LENS Photography. All rights reserved.
            </p>
            <div className="flex items-center space-x-8">
              <a href="#" className="text-sm text-neutral-500 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-neutral-500 hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
