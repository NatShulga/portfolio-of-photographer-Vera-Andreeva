import { Link } from 'react-router-dom';

export const FeaturedWorks = () => {
  // Выносим данные в массив
  const featuredItems = [
    {
      id: '01',
      category: 'wedding & love-story',
      title: 'WEDDING & LOVE',
      src: '/wedding.jpg',
      gridClass: 'md:col-span-1 md:row-span-2' // Высокое фото
    },
    {
      id: '02',
      category: 'individual',
      title: 'INDIVIDUAL',
      src: '/individual.jpg',
      gridClass: 'md:col-span-1 md:row-span-1'
    },
    {
      id: '03',
      category: 'event',
      title: 'EVENTS',
      src: '/event.jpg',
      gridClass: 'md:col-span-2 md:row-span-1' // Широкое фото
    },
    {
      id: '04',
      category: 'family',
      title: 'FAMILY',
      src: '/family.jpg',
      gridClass: 'md:col-span-1 md:row-span-1'
    },
    {
      id: '05',
      category: "children's birthday party",
      title: 'KIDS BIRTHDAY',
      src: '/kids-b.jpg',
      gridClass: 'md:col-span-2 md:row-span-1'
    }
  ];

  return (
    <section className="py-10 bg-[#FDFCF8] px-4">
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center mb-15">
          <h2 className="text-[15px] uppercase tracking-[0.4em] text-stone-400">
           Gallery
          </h2>
        </div>

        {/* Сетка */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-x-6 gap-y-12 auto-rows-[350px]">
          {featuredItems.map((item) => (
            <Link 
              key={item.id} 
              to={`/portfolio?category=${item.category}`} 
              className={`flex flex-col group ${item.gridClass}`}
            >
              {/* Контейнер для фото */}
              <div className="flex-grow overflow-hidden bg-stone-100 mb-2">
                <img 
                  src={item.src} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Подпись под фото */}
              <div className="flex justify-between items-baseline border-b border-stone-100 pb-2">
                <span className="text-[10px] text-stone-600 font-light">{item.id}</span>
                <h3 className="text-[12px] uppercase tracking-[0.2em] text-stone-600 group-hover:text-black transition-colors">
                  {item.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-20 text-center">
          <Link 
            to="/portfolio" 
            className="inline-block px-12 py-4 border border-stone-200 text-[13px] uppercase tracking-[0.3em] text-stone-500 hover:bg-stone-800 hover:text-white transition-all duration-500"
          >
            View all works
          </Link>
        </div>
      </div>
    </section>
  );
};
