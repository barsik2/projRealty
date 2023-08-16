import ContentLayout from 'src/components/layouts/ContentLayout';

import styles from './Reviews.module.scss';
import { REVIEWS } from './constants/reviewsSection.constants';
import Review from './components/Review';

const Reviews = () => {
  return (
    <ContentLayout
      rootClassName={styles.reviews}
      className={styles.reviews__content}
    >
      <div className={styles.reviews__title_container} id='reviews'>
        <h4 className={styles.reviews__title}>Что говорят клиенты</h4>
        <img src="/images/stars.webp" alt="stars" width="225" height="41" />
      </div>
      <div className={styles.reviews__container}>
        {REVIEWS.map((review) => (
          <Review key={review.name} {...review} />
        ))}
      </div>
    </ContentLayout>
  );
};

export default Reviews;
