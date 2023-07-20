import CatalogSection from './components/CatalogSection';
import MainSection from './components/MainSection';
import OurWorkSection from './components/OurWorkSection';
import RequestSection from './components/RequestSection';
import WeOfferSection from './components/WeOfferSection';

const Landing = () => {
  return (
    <>
      <MainSection />
      <CatalogSection />
      <RequestSection />
      <WeOfferSection />
      <OurWorkSection />
    </>
  );
};

export default Landing;
