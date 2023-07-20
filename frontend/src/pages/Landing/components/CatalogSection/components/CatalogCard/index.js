import clsx from 'clsx';

import './CatalogCard.scss';

const CatalogCard = ({ className, link, imgSrc, label, withSup }) => {
  return (
    <a className={clsx('catalog__card', className)} href={link}>
      <img className="catalog__img" src={imgSrc} loading="lazy" alt="" />
      <span className="catalog__label">{label}{withSup && <sup>2</sup>}</span>
    </a>
  );
};

export default CatalogCard;
