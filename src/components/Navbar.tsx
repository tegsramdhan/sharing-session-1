import { useEffect, useState } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useTheme } from '../ThemeContext';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isDarkMode, toggleDarkMode } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-surface/70 backdrop-blur-md border-b border-white/10 shadow-sm py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <nav className="flex justify-between items-center px-6 md:px-12 max-w-[1280px] mx-auto">
        <div className="text-xl md:text-2xl font-bold tracking-tight text-on-surface">
          Aesthetic Travel
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-semibold uppercase tracking-wider">
          <a href="#destinations" className="text-primary border-b-2 border-primary pb-1">Destinasi</a>
          <a href="#about" className="text-on-surface-variant hover:text-primary transition-colors pb-1">Tentang</a>
          <a href="#contact" className="text-on-surface-variant hover:text-primary transition-colors pb-1">Kontak</a>
        </div>

        <div className="flex items-center gap-4">
          <button 
            onClick={toggleDarkMode}
            aria-label="Toggle Theme" 
            className="p-2 rounded-full hover:bg-surface-container transition-colors text-primary"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          
          <button 
            className="md:hidden p-2 rounded-full hover:bg-surface-container transition-colors text-on-surface"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-surface border-b border-outline/20 py-4 px-6 flex flex-col gap-4 shadow-lg glass-card">
          <a href="#destinations" className="text-primary font-semibold text-lg" onClick={() => setMobileMenuOpen(false)}>Destinasi</a>
          <a href="#about" className="text-on-surface text-lg" onClick={() => setMobileMenuOpen(false)}>Tentang</a>
          <a href="#contact" className="text-on-surface text-lg" onClick={() => setMobileMenuOpen(false)}>Kontak</a>
        </div>
      )}
    </header>
  );
}
