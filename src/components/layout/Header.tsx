import { useState, useEffect } from 'react';
import { Camera, Menu, X } from 'lucide-react'; // Иконки

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Следим за скроллом, чтобы менять фон шапки
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Логотип */}
        <div className="flex items-center gap-2 font-serif text-2xl tracking-widest uppercase">
          <Camera size={28} />
          <span>Vera Andreeva</span>
        </div>

        {/* Меню для десктопа */}
        <nav className="hidden md:flex gap-8 text-sm uppercase tracking-widest font-medium">
          <a href="#portfolio" className="hover:text-gray-500 transition">Portfolio</a>
          <a href="#about" className="hover:text-gray-500 transition">About</a>
          <a href="#pricing" className="hover:text-gray-500 transition">Pricing</a>
          <a href="#contact" className="hover:text-gray-500 transition">Contact</a>
        </nav>

        {/* Бургер для мобилок */}
        <div className="md:hidden">
          <Menu size={24} />
        </div>
      </div>
    </header>
  );
};
