import { Hero } from '../components/section/hero';
import { FeaturedWorks } from '../components/section/FeaturedWorks';

export const Home = () => {
  return (
    <main>
      {/*другие блоки сайта*/}
      <Hero />
      <FeaturedWorks />
      {/* <PortfolioPreview /> */}
    </main>
  );
};
