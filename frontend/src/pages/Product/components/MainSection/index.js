import ContentLayout from 'src/components/layouts/ContentLayout';

import Navigation from './components/Navigation';

import styles from './MainSection.module.scss';
import { API_BREAKPOINT } from 'src/shared/config';

const MainSection = ({ img_title, name, size }) => {
  return (
    <section className={styles.wrapper}>
      <Navigation name={name} />
      <img
        className={styles.bg_img}
        width="100%"
        height="653"
        alt={name}
        src={`${API_BREAKPOINT}${img_title}`}
      />
      <ContentLayout rootClassName={styles.name} className={styles.name__content}>
        <h2 className={styles.name__title}>
          <span className={styles.name__title_first}>{name}</span>
          <span>
            {size}м2
          </span>
        </h2>
      </ContentLayout>
    </section>
  );
};

export default MainSection;
