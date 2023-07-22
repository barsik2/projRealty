import ContentLayout from 'src/components/layouts/ContentLayout';

import styles from './PlanSection.module.scss';
import { API_BREAKPOINT } from 'src/shared/config';

const PlanSection = ({ img_plan1 }) => {
  return (
    <ContentLayout
      rootClassName={styles.plan}
      className={styles.plan__content}
      as="section"
      id="plan_section"
    >
      <div>
        <p className={styles.plan__title}>План помещений</p>

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
      </div>
      <div>
        <div>info</div>
        <button></button>
        <button>Оставиь заявку</button>
      </div>
    </ContentLayout>
  );
};

export default PlanSection;
