import { Link } from 'react-router-dom';

export const FeaturedWorks = () => {
  return (
    <section className="py-20 bg-[#FDFCF8] px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Заголовок секции */}
        <div className="text-center mb-16">
          <h2 className="text-[10px] uppercase tracking-[0.4em] text-stone-400">
            Selected Works
          </h2>
        </div>

        {/* Сетка Bento (на мобилке 1 колонка, на десктопе 4) */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px]">
          
          {/*вертик офто слева*/}
          <div className="md:col-span-1 md:row-span-2 overflow-hidden bg-stone-100">
            <img 
              src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1000&auto=format&fit=crop" 
              alt="Wedding"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/*пример квадратного фото в верхнем ряду*/}
          <div className="md:col-span-1 md:row-span-1 overflow-hidden bg-stone-100">
            <img 
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop" 
              alt="Portrait"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/*пример широкого фото*/}
          <div className="md:col-span-2 md:row-span-1 overflow-hidden bg-stone-100">
            <img 
              src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1000&auto=format&fit=crop" 
              alt="Nature"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/*пример квадратного фото*/}
          <div className="md:col-span-1 md:row-span-1 overflow-hidden bg-stone-100">
            <img 
              src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1000&auto=format&fit=crop" 
              alt="Details"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* пример широкого фото */}
          <div className="md:col-span-2 md:row-span-1 overflow-hidden bg-stone-100">
            <img 
              src="https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?q=80&w=1000&auto=format&fit=crop" 
              alt="Family"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>

        </div>

        {/* Кнопка под сеткой (как на макете) */}
        <div className="mt-16 text-center">
          <Link 
            to="/portfolio" 
            className="inline-block px-12 py-4 border border-stone-200 text-[10px] uppercase tracking-[0.3em] text-stone-500 hover:bg-stone-800 hover:text-white hover:border-stone-800 transition-all duration-500"
          >
            View all works
          </Link>
        </div>
      </div>
    </section>
  );
};
