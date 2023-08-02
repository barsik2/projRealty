import { useModal } from 'src/shared/lib/hooks';

import ContentLayout from 'src/components/layouts/ContentLayout';

import './RequestSection.scss';

const RequestSection = () => {
  const { open } = useModal();

  const handleOpenModal = () => {
    open('request', {
      id: 'request from landing',
    });
  };

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
        <button className="request__link" onClick={handleOpenModal}>
          Оставить заявку
        </button>
      </div>
      <img
        className="request__home_img"
        src="/images/request_home.webp"
        loading="lazy"
        width="426"
        height="593"
        alt="Home"
      />
    </ContentLayout>
  );
};

export default RequestSection;
