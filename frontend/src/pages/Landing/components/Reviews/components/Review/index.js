import styles from './Review.module.scss';

const Review = ({ name, imgSrc, review }) => {
  return (
    <div className={styles.review}>
      <p className={styles.review__name}>{name}</p>
      <img
        className={styles.review__img}
        width="212"
        height="187"
        alt="house"
        loading="lazy"
        src={imgSrc}
      />
      <p className={styles.review__review}>{review}</p>
    </div>
  );
};

export default Review;
