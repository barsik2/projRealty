import { useState, useEffect } from 'react';

import api from 'src/shared/api';

import ContentLayout from 'src/components/layouts/ContentLayout';
import CardsSection from './components/CardsSection';
import FiltersSection from './components/FilterSection';

import styles from './CatalogPage.module.scss';
import { Dropdown } from 'react-bootstrap';

const ORDER_KEYS = {
  price: 'Цена',
};

const CatalogPage = () => {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({
    order: 'desc',
    orderBy: '',
    garage: '',
    floor: '',
    tent: '',
    style: '',
    rooms: '',
    priceFrom: '',
    priceTo: '',
    sizeFrom: '',
    sizeTo: '',
    name: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await api.get('house/filters', {
        params: filters,
      });

      setData(data.rows);
    };

    fetchData();
  }, [filters]);

  const updateFilters = (newFilter) => {
    setFilters((prevState) => ({ ...prevState, ...newFilter }));
  };

  return (
    <ContentLayout rootClassName={styles.catalog}>
      <h1 className={styles.catalog__title}>Каталог проектов</h1>
      <div className={styles.catalog__main_content}>
        <div className={styles.catalog__left_part}>
          <div className={styles.catalog__order}>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                По умолчанию
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item>Action</Dropdown.Item>
                <Dropdown.Item>Another action</Dropdown.Item>
                <Dropdown.Item>Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <CardsSection cards={data} />
        </div>
        <FiltersSection filters={filters} updateFilters={updateFilters} />
      </div>
    </ContentLayout>
  );
};

export default CatalogPage;
