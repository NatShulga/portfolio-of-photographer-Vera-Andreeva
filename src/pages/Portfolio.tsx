import { portfolioData, type Category } from '../data/photos';

export const Portfolio = () => {
  const categories: Category[] = [
    'wedding & love-story',
    'individual',
    'family',
    'event',
    "children's birthday party",
    'street-style',
  ];

  return (
    <main className="min-h-screen bg-[#FDFCF8] pt-32 pb-20">
      <div className="mx-auto max-w-[1800px] px-36">
        <h1 className="mb-20 text-center font-serif text-3xl tracking-[0.3em] text-stone-800 uppercase">
          Portfolio
        </h1>

        <div className="space-y-32">
          {categories.map((cat) => {
            const categoryPhotos = portfolioData.filter((p) => p.category === cat);

            return (
              <section key={cat} className="group/section">
                <div className="mx-4 mb-8 flex items-end justify-between border-b border-stone-200 pb-2">
                  <h2 className="font-serif text-xl tracking-widest text-stone-800 uppercase">
                    {cat.replace(/-/g, ' ')}
                  </h2>
                  <span className="text-[10px] tracking-widest text-stone-400 uppercase">
                    Next →
                  </span>
                </div>

                <div className="no-scrollbar flex flex-nowrap gap-6 overflow-x-auto scroll-smooth px-4 pb-2">
                  {categoryPhotos.map((photo) => (
                    <div
                      key={photo.id}
                      // ИСПРАВЛЕНИЕ: заменили min-w на w и поставили 240px
                      // Это позволит вставить ~5-6 фото в ряд
                      className="group relative w-[220px] md:w-[240px] flex-shrink-0"
                    >
                      <div className="aspect-[4/5] overflow-hidden rounded-sm bg-stone-100">
                        <img
                          src={photo.src}
                          alt={photo.alt}
                          className="h-full w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                      </div>

                      <div className="mt-3 flex items-center justify-between">
                        <p className="text-[9px] tracking-tighter text-stone-500 uppercase">
                          {photo.alt || 'wedding & love-story'}
                        </p>
                        <span className="text-[9px] text-stone-300">2026</span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </main>
  );
};
