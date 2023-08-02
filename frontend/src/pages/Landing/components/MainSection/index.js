import ContentLayout from 'src/components/layouts/ContentLayout';

import styles from './MainSection.module.scss';

const MainSection = () => {
  return (
    <ContentLayout
      as="section"
      className={styles.mainSection}
      rootClassName={styles.mainSectionWrapper}
    >
      <h1 className={styles.title}>
        Строй-Дом
      </h1>

      <p className={styles.description}>
        построй дом своей мечты!
      </p>

      <a className={styles.catalogLink} href="#catalog_section">
        Смотреть каталог
      </a>
    </ContentLayout>
  );
};

export default MainSection;
