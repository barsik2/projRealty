import ContentLayout from 'src/components/layouts/ContentLayout';

import { useModal } from 'src/shared/lib/hooks';

import styles from './InfoSection.module.scss';

const InfoSection = ({
  short_description,
  full_description,
  price,
  size,
  rooms,
  garage,
  name,
  id,
  length,
  width,
  material,
}) => {
  const { open } = useModal();

  const handleOpenModal = () => {

    open('request', {
      name: name.replace('T', 'SD'),
      id,
    });
  };

  return (
    <ContentLayout
      as="section"
      id="info_section"
      rootClassName={styles.info}
      className={styles.info__content}
    >
      <div className={styles.info__left_section}>
        <h4 className={styles.info__title}>{short_description}</h4>
        <p className={styles.info__sup_title}>
          Задайте вопрос об этом проекте +7-800-35-35 или отправьте заявку
        </p>
        <div>
          <p className={styles.info__title_info}>Описание</p>
          <div className={styles.info__description}>{full_description}</div>
        </div>
      </div>
      <div className={styles.info__right_section}>
        <p className={styles.info__price} onClick={handleOpenModal}>
          {price} р.
          <span>
            В ипотеку от 15000 p.<sup>*</sup>
          </span>
        </p>
        <div className={styles.info__additional}>
          <p className={styles.info__specifications_title}>Характеристики</p>
          <div className={styles.info__specifications_list}>
            <span>Площадь дома: {size} м2</span>
            <span>Количество комнат: {rooms}</span>
            <span>Гараж: {garage} места</span>
            <span>Длина: {length} м2</span>
            <span>Ширина: {width} м2</span>
            <span>Материалы стен: {material}</span>
          </div>
        </div>
      </div>
    </ContentLayout>
  );
};

export default InfoSection;
