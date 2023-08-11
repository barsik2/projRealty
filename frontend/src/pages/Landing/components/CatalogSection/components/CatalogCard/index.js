import clsx from 'clsx';

import './CatalogCard.scss';
import { NavLink } from 'react-router-dom';
import { useContext} from 'react';
import { Context } from 'src';


const CatalogCard = ({ className, link, imgSrc, label, withSup, param, queryParam }) => {
const {filter} = useContext(Context)
const setNewFilter = (param) => {
  filter.setFilters({...filter.filters, [queryParam]:param})
}

  return (
    <NavLink className={clsx('catalog__card', className)} to={link} onClick={() => setNewFilter(param)}>
      <img className="catalog__img" src={imgSrc} loading="lazy" alt="" />
      <span className="catalog__label">{label}{withSup && <sup>2</sup>}</span>
    </NavLink>
  );
};

export default CatalogCard;
