import { Header } from './components/layout/Header';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      {/* Тут будет остальной контент */}
      <main className="pt-20 text-center">
        <section className="h-screen flex items-center justify-center bg-zinc-100">
          <h1 className="text-4xl font-serif uppercase tracking-[0.2em]">
            Vera Andreeva
          </h1>
        </section>
        
        <section className="h-screen flex items-center justify-center">
          <p className="text-gray-500 italic">Здесь скоро будет портфолио...</p>
        </section>
      </main>
    </div>
  );
}

export default App;
