import ContentLayout from 'src/components/layouts/ContentLayout';

import { CATEGORY_ROUTE } from 'src/constRoute/consts';

import styles from './Navigation.module.scss';

const Navigation = ({ name }) => {
  return (
    <ContentLayout
      as="nav"
      rootClassName={styles.navigation}
      className={styles.navigation__content}
    >
      <a href={CATEGORY_ROUTE} className={styles.navigation__catalog}>Каталог</a>
      <span>{name}</span>
      <a href="#info_section">Характеристика</a>
      <a href="#plan_section">Планировка</a>
    </ContentLayout>
  );
};

export default Navigation;
