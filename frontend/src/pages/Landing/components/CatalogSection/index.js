import ContentLayout from 'src/components/layouts/ContentLayout';

import { CATEGORY } from 'src/shared/config/routes';

import { cards } from './constants/catalogSection.constants';

import CatalogCard from './components/CatalogCard';

import './CatalogSection.scss';
import { useContext, useEffect } from 'react';
import { Context } from 'src';
import { DEFAULT_FILTERS } from 'src/pages/Catalog/components/FilterSection/constants/filter.constants';
import { NavLink } from 'react-router-dom';

const CatalogSection = () => {
  const {filter} = useContext(Context)
  useEffect(() => {
    filter.setFilters(DEFAULT_FILTERS)
  },[])
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
            link={card.link}
            param={card.filter}
            queryParam={card.queryParam}
          />
        ))}
      </div>
      <NavLink className="catalog__link_more" to={CATEGORY}>
        Смотреть ещё
      </NavLink>
    </ContentLayout>
  );
};

export default CatalogSection;
