import { useState, useEffect } from 'react';
import { Camera, Menu, X } from 'lucide-react'; // Иконки

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Следим за скроллом, чтобы менять фон шапки
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Портфолио', href: '#portfolio'},
    { name: 'Обо мне', href: '#about'},
    { name: 'Услуги', href: '#services'},
    { name: 'Контакты', href: '#contacts'},
  ]

  return (
    <header className={`fixed w-full top-0 left-0 z-50 bg-[#FDFCF8] transition-all duration-300 shadow-sm ${
      isScrolled ? 'bg-white/90 backdrop-blur-md py-3 shadow-md' : 'bg-transparent py-5'
    }`}>
      {/* полоска хедера. Ничего не менять */}
      <div className="max-w-7xl mx-auto px-6 h-[40px] flex justify-between items-center">

        {/* Логотип */}
        <div className="flex items-center gap-2">
          <Camera className={isScrolled ? 'text-black' : 'text-stone-800'} />
          <span className={`text-xl font-serif uppercase tracking-tighter ${
            isScrolled ? 'text-black' : 'text-stone-700'
          }`}>
            Vera Andreeva
          </span>
        </div>

        {/* Меню для десктопа */}
        <nav className="hidden md:flex gap-8">
          {navLinks.map((item) => (
            <a 
              key={item.name} 
              href={item.href}
              className={`text-sm uppercase tracking-widest hover:opacity-50 transition-opacity ${
                isScrolled ? 'text-black' : 'text-stone-700'
              }`}
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Кнопка бургера */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className={`md:hidden ${isScrolled ? 'text-black' : 'text-grey-600'}`}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Мобильное меню (шторка) */}
      <div className={`
        md:hidden absolute top-full left-0 w-full bg-white transition-all duration-300 overflow-hidden
        ${isOpen ? 'h-screen opacity-100 visible' : 'h-0 opacity-0 invisible'}
      `}>
        <nav className="flex flex-col items-center gap-8 pt-20">
          {navLinks.map((item) => (
            <a 
              key={item.name} 
              href={item.href}
              onClick={() => setIsOpen(false)} // Закрываем при клике
              className="text-2xl font-serif text-black uppercase"
            >
              {item.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};
