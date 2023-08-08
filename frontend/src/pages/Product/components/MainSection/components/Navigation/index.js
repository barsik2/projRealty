import ContentLayout from 'src/components/layouts/ContentLayout';

import { CATEGORY } from 'src/shared/config/routes';

import styles from './Navigation.module.scss';

const Navigation = ({ name }) => {
  return (
    <ContentLayout
      as="nav"
      rootClassName={styles.navigation}
      className={styles.navigation__content}
    >
      <a href={CATEGORY} className={styles.navigation__catalog}>
        Каталог
      </a>
      <span>{name?.replace('T', 'SD')}</span>
      <a href="#info_section">Характеристика</a>
      <a href="#plan_section">Планировка</a>
    </ContentLayout>
  );
};

export default Navigation;
