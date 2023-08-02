import styles from './BenefitSection.module.scss';

// need improve this shit with clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);
const BenefitSection = () => {
  return (
    <section className={styles.benefit}>
      <picture>
        <source
          srcSet="/images/benefit_mobile.webp"
          media="(max-width: 600px)"
          type="image/webp"
        />
        <source
          srcSet="/images/benefit_tablet.webp"
          media="(max-width: 800px)"
          type="image/webp"
        />
        <img
          loading="lazy"
          alt="benefits"
          src="/images/benefit.webp"
          height={452}
        />
      </picture>
    </section>
  );
};

export default BenefitSection;
