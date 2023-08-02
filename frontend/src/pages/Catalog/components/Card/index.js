import { CATEGORY } from 'src/shared/config/routes';
import { API_BREAKPOINT } from 'src/shared/config';

import styles from './Card.module.scss';

const Card = ({ id, img_title, short_description, size, name }) => {
  return (
    <a className={styles.card} href={`${CATEGORY}/${id}`}>
      <img
        className={styles.card__img}
        width="335"
        height="200"
        loading="lazy"
        alt="name"
        src={`${API_BREAKPOINT}${img_title}`}
      />
      <div className={styles.card__text}>
        <h3 className={styles.card__text_title}>
          <span className={styles.card__text_title_first}>{name.replace('T', 'SD')}</span>
          <span className={styles.card__text_title_second}>{size} м2</span>
        </h3>
        <p className={styles.card__text_description}>{short_description}</p>
      </div>
    </a>
  );
};

export default Card;
