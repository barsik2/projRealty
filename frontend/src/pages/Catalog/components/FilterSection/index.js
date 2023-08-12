import Form from 'react-bootstrap/Form';
import clsx from 'clsx';

import { FLOORS, SELECTS, SIZE } from './constants/filter.constants';

import styles from './FilterSection.module.scss';

const FiltersSection = ({
  filters,
  updateFilters,
  handleReset,
  handleSearch,
}) => {
  const handleSelect = (event) => {
    const { value, name } = event.target;
    updateFilters({ ...filters, [name]: value });
  };

  const handleSizeBtn = (event, sizeName) => {
    const value = event.target.textContent.replaceAll(' ', '');

    let size_min = '';
    let size_max = '';

    const newFilters = { ...filters, size_min, size_max };

    if (value.includes('-')) {
      const [from, to] = value.split('-');

      newFilters.size_min = from;
      newFilters.size_max = to;
    } else {
      newFilters[event.target.name] = value.replace(/[^0-9]/gi, '');
    }
    console.log(value.replace(/[^0-9]/gi, ''), sizeName);

    updateFilters(newFilters);
    console.log(filters[event.target.name], )
  };

  const handleInput = (event) => {
    const value = event.target.value.trim();

    updateFilters({ ...filters, [event.target.name]: value });
  };

  const handleFloors = (event, queryParam) => {
    let value = event.target.textContent;

    if (value === filters[queryParam]) {
      value = '';
    }

    updateFilters({ ...filters, [queryParam]: value });
  };

  return (
    <div className={styles.filter}>
      <form className={styles.filter__form} onClick={(e) => e.preventDefault()}>
        <input
          className={styles.filter__input_name}
          type="text"
          name="name"
          placeholder="По названию..."
          value={filters.name}
          onChange={handleInput}
        />
        <div className={styles.filter__filters}>
          <div className={styles.filter__size}>
            <p className={styles.filter__title}>Площадь</p>

            <div className={styles.filter__btn_container}>
              {SIZE.map((size) => (
                <button
                  className={clsx(
                    filters[size.name] === size.value && styles.active
                  )}
                  onClick={(event) => handleSizeBtn(event, size.value)}
                  name={size.name}
                  key={size.value}
                >
                  {size.value}
                </button>
              ))}
            </div>
            <div className={styles.filter__input_size_container}>
              <input
                name="size_from"
                placeholder="от"
                type="text"
                inputMode="numeric"
                onChange={handleInput}
              />{' '}
              -
              <input
                name="size_to"
                placeholder="до"
                type="text"
                inputMode="numeric"
                onChange={handleInput}
              />
            </div>
          </div>
          <div className={styles.filter__floor}>
            <p className={styles.filter__title}>Этажи</p>

            <div className={styles.filter__btn_container}>
              {FLOORS.map((floor) => (
                <button
                  className={clsx(
                    filters[floor.name] === floor.value && styles.active
                  )}
                  onClick={(event) => handleFloors(event, floor.name)}
                  name={floor.value}
                  key={floor.value}
                >
                  {floor.value}
                </button>
              ))}
            </div>
          </div>
          {SELECTS.map((select) => (
            <Form.Select
              key={select.name}
              name={select.name}
              value={filters[select.name]}
              onChange={handleSelect}
            >
              {select.options.map((option) => (
                <option key={option.label} value={option.value}>
                  {option.label}
                </option>
              ))}
            </Form.Select>
          ))}
          <div className={styles.filter__price}>
            <p className={styles.filter__title}>Стоимость</p>
            <div className={styles.filter__input_price_container}>
              <input
                name="price_min"
                placeholder="от"
                type="text"
                inputMode="numeric"
                onChange={handleInput}
              />{' '}
              -
              <input
                name="price_max"
                placeholder="до"
                type="text"
                inputMode="numeric"
                onChange={handleInput}
              />
            </div>
          </div>
        </div>

        <div className={styles.filter__bottom_container}>
          <button className={styles.filter__apply} onClick={handleSearch}>
            Применить
          </button>

          <button className={styles.filter__reset} onClick={handleReset}>
            сбросить
          </button>
        </div>
      </form>
    </div>
  );
};

export default FiltersSection;
