import Form from 'react-bootstrap/Form';

import { FLOORS, SELECTS, SIZE } from './constants/filter.constants';

import './FilterSection.scss';
import clsx from 'clsx';

const FiltersSection = ({ filters, updateFilters }) => {
  const handleSelect = (event) => {
    const { value, name } = event.target;
    updateFilters({ ...filters, [name]: value });
  };

  const handleSize = (event) => {
    const value = event.target.textContent.replaceAll(' ', '');

    let sizeFrom = '';
    let sizeTo = '';

    const newFilters = { ...filters, sizeFrom, sizeTo };

    if (value.includes('-')) {
      const [from, to] = value.split('-');

      newFilters.sizeFrom = from;
      newFilters.sizeTo = to;
    } else {
      newFilters[event.target.name] = value.replace(/[^0-9]/gi, '');
    }

    updateFilters(newFilters);
  };

  const handleFloors = (event) => {
    let value = event.target.textContent;

    if (value === filters.floors) {
      value = '';
    }

    updateFilters({ ...filters, floors: value });
  };

  return (
    <div className="filter">
      <form className="filter__form" onClick={(e) => e.preventDefault()}>
        <input
          className="filter__input_name"
          type="text"
          name="name"
          placeholder="По названию..."
          value={filters.name}
        />
        <div className="filter__filters">
          <div className="filter__size">
            <p className="filter__title">Площадь</p>

            <div className="filter__btn_container">
              {SIZE.map((size) => (
                <button onClick={handleSize} name={size.name} key={size.value}>
                  {size.value}
                </button>
              ))}
            </div>
            <div className="filter__input_size_container">
              <input placeholder="от" type="text" inputMode="numeric" /> -
              <input placeholder="до" type="text" inputMode="numeric" />
            </div>
          </div>
          <div className="filter__floor">
            <p className="filter__title">Этажи</p>

            <div className="filter__btn_container">
              {FLOORS.map((floor) => (
                <button
                  className={clsx(filters.floors === floor.value && 'active')}
                  onClick={handleFloors}
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
          <div className="filter__price">
            <p className="filter__title">Стоимость</p>
            <div className="filter__input_price_container">
              <input placeholder="от" type="text" inputMode="numeric" /> -
              <input placeholder="до" type="text" inputMode="numeric" />
            </div>
          </div>
        </div>

        <div className="filter__bottom_container">
          <button className="filter__aply">Применить</button>

          <button className="filter__reset">сбросить</button>
        </div>
      </form>
    </div>
  );
};

export default FiltersSection;
