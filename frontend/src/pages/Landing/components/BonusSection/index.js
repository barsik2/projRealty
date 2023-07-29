import ContentLayout from 'src/components/layouts/ContentLayout';

import styles from './BonusSection.module.scss';

const BonusSection = () => {
  return (
    <ContentLayout
      rootClassName={styles.bonus}
      className={styles.bonus__content}
    >
      <div>
        <h4 className={styles.bonus__title}>Бонус stroy-dom</h4>
        <ul className={styles.bonus__list}>
          <li className={styles.bonus__list_item}>
            · Бесплатный подбор проекта, материалов, дизайна
          </li>
          <li className={styles.bonus__list_item}>
            · Индивидуальная планировка и изменение проектов
          </li>
          <li className={styles.bonus__list_item}>
            · При выборе готового проекта, скидка на все двери 10 %
          </li>
        </ul>
      </div>
      <div>
        <img
          src="/images/gift.svg"
          width="68"
          height="68"
          alt="gift"
          loading="lazy"
        />
      </div>
    </ContentLayout>
  );
};

export default BonusSection;
