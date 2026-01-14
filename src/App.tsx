import { Header } from './components/layout/Header';
import { Hero } from './components/section/hero';

function App() {
  return (
    <div className="min-h-screen bg-[#FDFCF8] text-stone-800 font-sans">
      <Header />
      <main>
        <Hero />
        {/* Здесь позже будут Портфолио, Цены и Контакты */}
      </main>
    </div>
  );
}

export default App;
