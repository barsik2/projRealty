import ContentLayout from 'src/components/layouts/ContentLayout';

import styles from './WorkingProcess.module.scss';

const WorkingProcess = () => {
  return (
    <ContentLayout
      rootClassName={styles.workingProcess}
      className={styles.workingProcess__content}
    >
      <img
        className={styles.workingProcess__img}
        loading="lazy"
        src="/images/working-process.webp"
        alt="working process"
        height="557"
      />
      <div className={styles.workingProcess__text}>
        <p className={styles.workingProcess__text_title}>
          Строим дома любой сложности,{'\n'}из любых материалов и в срок
        </p>
        <p className={styles.workingProcess__text_description}>
          подготовим проект индивидуально под вас
        </p>
      </div>
    </ContentLayout>
  );
};

export default WorkingProcess;
