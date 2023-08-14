import { useState, useEffect, useCallback, useContext } from 'react';
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

const CatalogPage = observer(() => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const { filter } = useContext(Context);
  const [sortBy, setSortBy] = useState({ iter: 'name', order: 'asc' });
  const [orderBy, setOrderBy] = useState({order:'По умолчанию'})
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
  }, [filter.filters, isLoading]);

  useEffect(() => {
    fetchData();
  }, []);

  const reset = async () => {
    filter.setFilters(DEFAULT_FILTERS);
    filter.setSelectedSize({});
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

  const updateFilters = (newFilter) => {
    // setFilters((prevState) => ({ ...prevState, ...newFilter }));
    filter.setFilters(newFilter);
  };
  const onSort = (item) => {
    setSortBy((prevState) => ({...prevState, iter: item}));
    if(item==='rate') {
      setOrderBy({order:'По рейтингу'})
    }
    if(item==='price') {
      setOrderBy({order:'По цене'})
    }
    if(item==='size') {
      setOrderBy({order:'По площади'})
    }
    if(item==='id') {
      setOrderBy({order:'По умолчанию'})
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

            {!data.length ? null : (
              <div className={styles.catalog__dropdown}>
                <Dropdown as={ButtonGroup}>
                  <div className={styles.catalog__dropdown_wrapper}>
                    <button
                      onClick={()=>setSortBy((prevState)=>({...prevState, order:prevState.order ==='asc'?'desc':'asc' } ))}
                      className={
                        sortBy.order === 'asc'
                          ? styles.catalog__dropdown_order_asc
                          : styles.catalog__dropdown_order_desc
                      }
                    ></button>
                    <Dropdown.Toggle className={styles.catalog__dropdown_btn}>
                      <span>{orderBy.order}</span>
                    </Dropdown.Toggle>
                  </div>
                  <Dropdown.Menu>
                    <span
                      style={{ cursor: 'pointer' }}
                      className="dropdown-item pointer"
                      onClick={() => onSort('rate')}
                    >
                      По рейтингу
                    </span>
                    <span
                      style={{ cursor: 'pointer' }}
                      className="dropdown-item"
                      onClick={() => onSort('price')}
                    >
                      По цене
                    </span>
                    <span
                      style={{ cursor: 'pointer' }}
                      className="dropdown-item"
                      onClick={() => onSort('size')}
                    >
                      По площади
                    </span>
                    <span
                      style={{ cursor: 'pointer' }}
                      className="dropdown-item"
                      onClick={() => onSort('id')}
                    >
                      По умолчанию
                    </span>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            )}

            <div>
              <Tab.Content>
                <Tab.Pane eventKey="house" title="Дома">
                  {!data.length ? (
                    <h1>Проекты в разработке...</h1>
                  ) : (
                    <CardsSection cards={sortedData} />
                  )}
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
                    {!data.length ? (
                      <h1>Проекты в разработке...</h1>
                    ) : (
                      <CardsSection cards={sortedData} />
                    )}
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
        />
      </div>
    </ContentLayout>
  );
});

export default CatalogPage;
