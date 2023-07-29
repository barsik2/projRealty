import ContentLayout from 'src/components/layouts/ContentLayout';

import styles from './BenefitSection.module.scss';

// need improve this shit with clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);
const BenefitSection = () => {
  return (
    <ContentLayout rootClassName={styles.benefit}>
      <img
        loading="lazy"
        alt="benefits"
        src="/images/benefit.webp"
        height={452}
      />
    </ContentLayout>
  );
};

export default BenefitSection;
