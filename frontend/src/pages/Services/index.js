import ContentLayout from 'src/components/layouts/ContentLayout';

import { LIST_OF_SERVICES } from './constants/services.constants';

import ServiceCard from './components/ServiceCard';

import styles from './Service.module.scss';
import { useState } from 'react';

const Services = () => {
  const [service, setService] = useState({})
  return (
    <div>
      <ContentLayout rootClassName={styles.service__title} as="h2">
        Каталог услуг
      </ContentLayout>

      <ContentLayout rootClassName={styles.service__description}>
        Мы предлагаем качественно выполненную работу в срок
      </ContentLayout>

      <ContentLayout className={styles.service__card_wrapper}>
        {LIST_OF_SERVICES.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </ContentLayout>
    </div>
  );
};

export default Services;
