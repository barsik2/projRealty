import BenefitSection from './components/BenefitSection';
import BonusSection from './components/BonusSection';
import CatalogSection from './components/CatalogSection';
import MainSection from './components/MainSection';
import OurWorkSection from './components/OurWorkSection';
import RequestSection from './components/RequestSection';
import Reviews from './components/Reviews';
import WeOfferSection from './components/WeOfferSection';
import WorkingProcess from './components/WorkingProcess';

const Landing = () => {
  return (
    <>
      <MainSection />
      <BenefitSection />
      <CatalogSection />
      <RequestSection />
      <WeOfferSection />
      <WorkingProcess />
      <BonusSection />
      <OurWorkSection />
      <Reviews />
    </>
  );
};

export default Landing;
