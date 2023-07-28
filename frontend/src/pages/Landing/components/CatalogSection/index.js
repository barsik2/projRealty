import ContentLayout from 'src/components/layouts/ContentLayout';

import { CATEGORY } from 'src/shared/config/routes';

import { cards } from './constants/catalogSection.constants';

import CatalogCard from './components/CatalogCard';

import './CatalogSection.scss';

const CatalogSection = () => {
  return (
    <ContentLayout
      id="catalog_section"
      as="section"
      rootClassName="catalog__wrapper"
    >
      <h2 className="catalog__title">Каталог недвижимости</h2>
      <div className="catalog__list">
        {cards.map((card) => (
          <CatalogCard
            className={card.className}
            imgSrc={card.imgSrc}
            key={card.label}
            label={card.label}
            withSup={card.withSup}
          />
        ))}
      </div>
      <a className="catalog__link_more" href={CATEGORY}>
        Смотреть ещё
      </a>
    </ContentLayout>
  );
};

export default CatalogSection;
