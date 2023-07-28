import ContentLayout from 'src/components/layouts/ContentLayout';

import { API_BREAKPOINT } from 'src/shared/config';

import { useModal } from 'src/shared/lib/hooks';

import styles from './PlanSection.module.scss';

const PlanSection = ({ img_plan1, size, length, width, name, id }) => {
  const { open } = useModal();

  const handleOpenModal = () => {
    open('request', {
      name,
      id,
    });
  };

  return (
    <ContentLayout rootClassName={styles.plan} as="section" id="plan_section">
      <p className={styles.plan__title}>План помещений</p>

      <div className={styles.plan__content}>
        <div className={styles.plan__img_wrapper}>
          <img
            height="640"
            width="948"
            alt="plan"
            loading="lazy"
            className={styles.plan__img}
            src={`${API_BREAKPOINT}${img_plan1}`}
          />
        </div>
        <div className={styles.plan__right_part}>
          <div className={styles.plan__specifications_list}>
            <span>Площадь дома/общая площадь: {size} м2</span>
            <span>Площадь застройки: {size}</span>
            <span>Строительный объем: {size} м2</span>
            <span>Высота дома: {length} м</span>
            <span>
              Угол наклона кровли: {width} <sup>o</sup>
            </span>
            <span>Площадь кровли: {size} м2</span>
          </div>
          <button className={styles.plan__mirror}>Отзеркалить</button>
          <button className={styles.plan__send_btn} onClick={handleOpenModal}>
            Оставиь заявку
          </button>
        </div>
      </div>
    </ContentLayout>
  );
};

export default PlanSection;
