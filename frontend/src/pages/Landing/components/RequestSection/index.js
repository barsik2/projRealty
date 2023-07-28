import { Link } from 'react-router-dom';

import { CATEGORY } from 'src/shared/config/routes';

import ContentLayout from 'src/components/layouts/ContentLayout';

import './RequestSection.scss';

const RequestSection = () => {
  return (
    <ContentLayout
      className="request__content"
      rootClassName="request"
      as="section"
    >
      <div className="request__left_part">
        <h2 className="request__title">
          Выбери дом своей мечты{'\n'}и проснись в нем уже{'\n'}завтра
        </h2>
        <Link className="request__link" to={CATEGORY}>
          Оставить заявку
        </Link>
      </div>
      <img
        className="request__home_img"
        src="/images/request_home.webp"
        loading="lazy"
        width="426"
        height="533"
        alt="Home"
      />
    </ContentLayout>
  );
};

export default RequestSection;
