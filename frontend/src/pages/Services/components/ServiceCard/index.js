import { useModal } from 'src/shared/lib/hooks';
import styles from './ServiceCard.module.scss';

const ServiceCard = ({ title, description, price }) => {
  const {open} = useModal()
  const handleService = () => {
    open('service', {
      name:title,
    })
  }
  return (
    <div className={styles.card}  onClick={handleService}>
      <div className={styles.card__info}>
        <p className={styles.card__info_title}>{title}</p>
        {description && (
          <p className={styles.card__info_description}>{description}</p>
        )}
      </div>
      <div className={styles.card__price}>{price}</div>
    </div>
  );
};

export default ServiceCard;
