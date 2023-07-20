import ContentLayout from 'src/components/layouts/ContentLayout';

import './WeOfferSection.scss';
import { POINTS } from './constants/WeOffet.constants';
import Point from './components/Point';

const WeOfferSection = () => {
  return (
    <ContentLayout
      className="offer__content"
      rootClassName="offer"
      as="section"
    >
      <h2 className="offer__title">Что мы предлагаем</h2>

      <p className="offer__description">
        Основные преимущества компании Территория Недвижимости
      </p>

      <div className="offer__points">
        {POINTS.map((point) => (
          <Point
            key={point.description}
            alt={point.alt}
            imgSrc={point.imgSrc}
            description={point.description}
          />
        ))}
      </div>
    </ContentLayout>
  );
};

export default WeOfferSection;
