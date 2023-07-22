import { CATEGORY_ROUTE } from 'src/constRoute/consts';

import styles from './Card.module.scss';

const Card = ({ id, img_title, short_description, size, name }) => {
  return (
    <a className={styles.card} href={`${CATEGORY_ROUTE}/${id}`}>
      <img
        className={styles.card__img}
        width="335"
        height="200"
        loading="lazy"
        alt="name"
        src={`http://195.24.67.222:5000/${img_title}`}
      />
      <div className={styles.card__text}>
        <h3 className={styles.card__text_title}>
          <span className={styles.card__text_title_first}>{name}</span>
          <span className={styles.card__text_title_second}>{size} м2</span>
        </h3>
        <p className={styles.card__text_description}>{short_description}</p>
      </div>
    </a>
  );
};

export default Card;
