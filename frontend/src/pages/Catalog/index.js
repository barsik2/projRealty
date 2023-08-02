import { useState, useEffect, useCallback } from 'react';
import { ButtonGroup, Dropdown, Nav, Tab } from 'react-bootstrap';

import api from 'src/shared/api';

import ContentLayout from 'src/components/layouts/ContentLayout';
import CardsSection from './components/CardsSection';
import FiltersSection from './components/FilterSection';

import styles from './CatalogPage.module.scss';

const ORDER_KEYS = {
  '': 'По умолчанию',
  price: 'По цене',
};

const DEFAULT_FILTERS = {
  order: 'desc',
  orderBy: '',
  garage: '',
  floor: '',
  tent: '',
  style: '',
  rooms: '',
  price_min: '',
  price_max: '',
  size_min: '',
  size_max: '',
  name: '',
};

const CatalogPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState(DEFAULT_FILTERS);

  const fetchData = useCallback(async () => {
    try {
      if (!isLoading) {
        setIsLoading(true);
        const { data } = await api.get('house/filters', {
          params: filters,
        });

        setIsLoading(false);
        setData(data.rows);
      }
    } catch (error) {
      setIsLoading(false);
      console.error(error);
    }
  }, [filters, isLoading]);

  useEffect(() => {
    fetchData();
  }, []);

  const reset = () => {
    setFilters(DEFAULT_FILTERS);
  };

  const updateFilters = (newFilter) => {
    setFilters((prevState) => ({ ...prevState, ...newFilter }));
  };

  return (
    <ContentLayout rootClassName={styles.catalog}>
      <h1 className={styles.catalog__title}>Каталог проектов</h1>
      <div className={styles.catalog__main_content}>
        <div className={styles.catalog__left_part}>
          <Tab.Container defaultActiveKey="house">
            <Nav className={styles.catalog__tab}>
              <Nav.Item>
                <Nav.Link className={styles.catalog__tab_link} eventKey="house">
                  Дома
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  className={styles.catalog__tab_link}
                  eventKey="garage"
                >
                  Гаражи
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  className={styles.catalog__tab_link}
                  eventKey="individual"
                >
                  Индивидуальные постройки
                </Nav.Link>
              </Nav.Item>
            </Nav>
            <div className={styles.catalog__dropdown}>
              <Dropdown as={ButtonGroup}>
                <div className={styles.catalog__dropdown_wrapper}>
                  <button className={styles.catalog__dropdown_order}>
                    order by
                  </button>
                  <Dropdown.Toggle className={styles.catalog__dropdown_btn}>
                    <span>{ORDER_KEYS[filters.orderBy]}</span>
                  </Dropdown.Toggle>
                </div>

                <Dropdown.Menu>
                  <Dropdown.ItemText>По рейтингу</Dropdown.ItemText>
                  <Dropdown.ItemText>По цене</Dropdown.ItemText>
                  <Dropdown.ItemText>По площади</Dropdown.ItemText>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div>
              <Tab.Content>
                <Tab.Pane eventKey="house" title="Дома">
                  <CardsSection cards={data} />
                </Tab.Pane>
                <Tab.Pane eventKey="garage" title="Гаражи">
                  <div className={styles.catalog__left_part}><CardsSection cards={data} /></div>
                </Tab.Pane>
                <Tab.Pane
                  eventKey="individual"
                  title="Индивидуальные постройки"
                >
                  <div className={styles.catalog__left_part}>
                    <CardsSection cards={data} />
                  </div>
                </Tab.Pane>
              </Tab.Content>
            </div>
          </Tab.Container>
        </div>
        <FiltersSection
          filters={filters}
          updateFilters={updateFilters}
          handleSearch={fetchData}
          handleReset={reset}
        />
      </div>
    </ContentLayout>
  );
};

export default CatalogPage;
