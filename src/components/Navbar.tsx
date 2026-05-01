import { Link, useLocation } from 'react-router-dom';
import { School } from 'lucide-react';
import { motion } from 'motion/react';

export default function Navbar() {
  const location = useLocation();

  const links = [
    { name: 'Home', path: '/' },
    { name: 'HTML', path: '/category/html' },
    { name: 'CSS', path: '/category/css' },
    { name: 'JS', path: '/category/js' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 w-full border-b bg-white/80 backdrop-blur-md border-slate-100 shadow-sm shadow-blue-500/5 z-50">
      <nav className="flex justify-between items-center h-16 px-6 max-w-(--font-display) mx-auto" style={{ maxWidth: '1120px' }}>
        <Link 
          to="/" 
          className="text-2xl font-black text-primary tracking-tight cursor-pointer active:scale-95 duration-150"
        >
          DevLearner
        </Link>
        
        <div className="hidden md:flex items-center gap-8 font-display font-medium text-sm">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`transition-colors duration-200 relative py-1 ${
                location.pathname === link.path 
                  ? 'text-primary' 
                  : 'text-on-surface-variant hover:text-primary'
              }`}
            >
              {link.name}
              {location.pathname === link.path && (
                <motion.div 
                  layoutId="nav-underline"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"
                />
              )}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-secondary-container/20 rounded-full transition-colors duration-200 cursor-pointer active:scale-95">
            <School className="w-6 h-6 text-primary" />
          </button>
        </div>
      </nav>
    </header>
  );
}
