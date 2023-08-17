import { useState, useEffect, useCallback, useContext, useRef } from 'react';
import { ButtonGroup, Dropdown, Nav, Tab } from 'react-bootstrap';

import api from 'src/shared/api';

import ContentLayout from 'src/components/layouts/ContentLayout';
import CardsSection from './components/CardsSection';
import FiltersSection from './components/FilterSection';

import styles from './CatalogPage.module.scss';
import { Context } from 'src';
import { DEFAULT_FILTERS } from './components/FilterSection/constants/filter.constants';
import { observer } from 'mobx-react-lite';
import _ from 'lodash';
import clsx from 'clsx';
import './CatalogPage.module.scss';

const CatalogPage = observer(() => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const { filter } = useContext(Context);
  const [sortBy, setSortBy] = useState({ iter: 'name', order: 'asc' });
  const [orderBy, setOrderBy] = useState({ order: 'По умолчанию' });
  const [showMenu, setShowMenu] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const menuRef = useRef(false);
  // const [filters, setFilters] = useState(filter.filters);

  const fetchData = useCallback(async () => {
    try {
      setIsLoading(true);
      if (!isLoading) {
        const { data } = await api.get('house/filters', {
          params: filter.filters,
        });
        setIsLoading(false);
        setData(data.rows);
      }
    } catch (error) {
      setIsLoading(false);
      console.error(error);
    }
    setShowFilter(false);
  }, [filter.filters, isLoading]);

  useEffect(() => {
    // Добавление обработчика события клика вне меню
    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    };

    // Добавление обработчика события клика только при отображении меню
    if (showMenu) {
      document.addEventListener('click', handleOutsideClick);
    }

    // Удаление обработчика события клика при скрытии меню
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [showMenu]);

  useEffect(() => {
    fetchData();
  }, []);

  const reset = async () => {
    filter.setFilters(DEFAULT_FILTERS);
    filter.setSelectedSize({});
    setShowFilter(false);
    try {
      setIsLoading(true);
      if (!isLoading) {
        const { data } = await api.get('house/filters', {
          params: filter.filters,
        });
        setIsLoading(false);
        setData(data.rows);
      }
    } catch (error) {
      setIsLoading(false);
      console.error(error);
    }
  };
  const handleCloseFilter = () => {
    setShowFilter(false);
  };

  const updateFilters = (newFilter) => {
    // setFilters((prevState) => ({ ...prevState, ...newFilter }));
    filter.setFilters(newFilter);
  };
  const onSort = (item) => {
    setSortBy((prevState) => ({ ...prevState, iter: item }));
    setShowMenu(false);
    if (item === 'rate') {
      setOrderBy({ order: 'По рейтингу' });
    }
    if (item === 'price') {
      setOrderBy({ order: 'По цене' });
    }
    if (item === 'size') {
      setOrderBy({ order: 'По площади' });
    }
    if (item === 'id') {
      setOrderBy({ order: 'По умолчанию' });
    }
  };

  const sortedData = _.orderBy(data, [sortBy.iter], [sortBy.order]);

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
                  <button
                    onClick={() =>
                      setSortBy((prevState) => ({
                        ...prevState,
                        order: prevState.order === 'asc' ? 'desc' : 'asc',
                      }))
                    }
                    className={
                      sortBy.order === 'asc'
                        ? styles.catalog__dropdown_order_asc
                        : styles.catalog__dropdown_order_desc
                    }
                  ></button>
                  <div
                    className={`${styles.catalog__dropdown_toggler}`}
                    ref={menuRef}
                    onClick={() =>
                      setShowMenu((prevState) =>
                        prevState === true ? false : true
                      )
                    }
                  >
                    <span>{orderBy.order}</span>
                  </div>
                </div>
                <div
                  className={`${styles.catalog__dropdown_menu} ${
                    showMenu ? styles.show : ''
                  }`}
                >
                  <span
                    style={{ cursor: 'pointer' }}
                    className={clsx(
                      orderBy.order === 'По рейтингу'
                        ? `${styles.catalog__dropdown_item} ${styles.selected}`
                        : styles.catalog__dropdown_item
                    )}
                    onClick={() => onSort('rate')}
                  >
                    По рейтингу
                  </span>
                  <span
                    style={{ cursor: 'pointer' }}
                    className={clsx(
                      orderBy.order === 'По цене'
                        ? `${styles.catalog__dropdown_item} ${styles.selected}`
                        : styles.catalog__dropdown_item
                    )}
                    onClick={() => onSort('price')}
                  >
                    По цене
                  </span>
                  <span
                    style={{ cursor: 'pointer' }}
                    className={clsx(
                      orderBy.order === 'По площади'
                        ? `${styles.catalog__dropdown_item} ${styles.selected}`
                        : styles.catalog__dropdown_item
                    )}
                    onClick={() => onSort('size')}
                  >
                    По площади
                  </span>
                  <span
                    style={{ cursor: 'pointer' }}
                    className={clsx(
                      orderBy.order === 'По умолчанию'
                        ? `${styles.catalog__dropdown_item} ${styles.selected}`
                        : styles.catalog__dropdown_item
                    )}
                    onClick={() => onSort('id')}
                  >
                    По умолчанию
                  </span>
                </div>
              </Dropdown>
              <button
                className={styles.catalog__filter_btn}
                onClick={() => setShowFilter(true)}
                
              >
                <svg
                  width="22"
                  height="20"
                  viewBox="0 0 22 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.0002 0.666504H1.00016C0.823352 0.666504 0.653782 0.736742 0.528758 0.861766C0.403734 0.98679 0.333496 1.15636 0.333496 1.33317V2.4465C0.333621 2.60396 0.364905 2.75984 0.425547 2.90515C0.486189 3.05046 0.574989 3.18233 0.686829 3.29317L8.3335 11.0532V17.8532L9.66683 18.3598V10.6665C9.66734 10.5788 9.65052 10.4918 9.61734 10.4106C9.58417 10.3293 9.53528 10.2555 9.4735 10.1932L1.66683 2.39317V1.99984H20.3335V2.4065L12.5535 10.1932C12.4869 10.2532 12.433 10.3261 12.3952 10.4074C12.3574 10.4887 12.3364 10.5769 12.3335 10.6665V19.4732L13.6668 19.9998V10.9998L21.3135 3.33317C21.4271 3.21952 21.5169 3.08432 21.5776 2.93549C21.6383 2.78666 21.6686 2.62721 21.6668 2.4665V1.33317C21.6668 1.15636 21.5966 0.98679 21.4716 0.861766C21.3465 0.736742 21.177 0.666504 21.0002 0.666504Z"
                    fill="white"
                  />
                </svg>
              </button>
            </div>

            <div>
              <Tab.Content>
                <Tab.Pane eventKey="house" title="Дома">
                  <CardsSection cards={sortedData} />
                </Tab.Pane>
                <Tab.Pane eventKey="garage" title="Гаражи">
                  <div className={styles.catalog__left_part}>
                    <CardsSection cards={sortedData} />
                  </div>
                </Tab.Pane>
                <Tab.Pane
                  eventKey="individual"
                  title="Индивидуальные постройки"
                >
                  <div className={styles.catalog__left_part}>
                    <CardsSection cards={sortedData} />
                  </div>
                </Tab.Pane>
              </Tab.Content>
            </div>
          </Tab.Container>
        </div>
        <FiltersSection
          // filters={filters}
          updateFilters={updateFilters}
          handleSearch={fetchData}
          handleReset={reset}
          showFilter={showFilter}
          closeFilter={handleCloseFilter}
        />
      </div>
    </ContentLayout>
  );
});

export default CatalogPage;
