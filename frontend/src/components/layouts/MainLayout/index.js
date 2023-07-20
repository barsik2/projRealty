import Footer from 'src/components/Footer/Footer';
import Header from 'src/components/Header';

import styles from './MainLayout.module.css';

const MainLayout = ({ children }) => {
  return (
    <div className={styles.mainLayout}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
