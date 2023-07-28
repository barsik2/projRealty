import { ABOUT, SERVICES } from 'src/shared/config/routes';

import { useModal } from 'src/shared/lib/hooks';

import ContentLayout from '../layouts/ContentLayout';

import './Footer.scss';

const Footer = () => {
  const { open } = useModal()

  const handleReview = () => {
    open('review')
  }

  return (
    <ContentLayout
      className="footer__content"
      rootClassName="footer"
      as="footer"
    >
      <div className="footer__links">
        <div className="footer__links_item">
          <p className="footer__links_item_title">Каталог</p>

          <a className="footer__links_item_link" href="">
            Проекты домов
          </a>
          <a className="footer__links_item_link" href={SERVICES}>
            Услуги
          </a>
        </div>
        <div className="footer__links_item">
          <p className="footer__links_item_title">Наши проекты</p>

          <a className="footer__links_item_link" href="">
            Готовые работы
          </a>
          <a className="footer__links_item_link" href="">
            Отзывы
          </a>
        </div>
        <div className="footer__links_item">
          <p className="footer__links_item_title">Контакты</p>

          <a className="footer__links_item_link" href="tel:+7-800-555-35-35">
            +7-800-555-35-35
          </a>
          <a className="footer__links_item_link" href="mailto:terned@mail.ru">
            terned@mail.ru
          </a>
        </div>
        <div className="footer__links_item">
          <p className="footer__links_item_title">Другое</p>

          <a className="footer__links_item_link" href={ABOUT}>
            О компании
          </a>
          <button className="footer__links_item_link" onClick={handleReview}>
            Оставить отзыв
          </button>
        </div>
      </div>
      <div className="footer__under_link">
        <address className="footer__address">
          Санкт-Петербург, ул. Романова 327, 3{'\n'}этаж
        </address>
        <div className="footer__logo">
          <img
            src="/images/logo.svg"
            alt="logo"
            width="66"
            height="64"
            loading="lazy"
          />
          <span>Stroy-Dom</span>
        </div>
      </div>
      <div className="footer__socials">
        <a className="footer__socials_item" href="">
          <img src="/images/vk.webp" width="37" height="37" alt="vk" />
        </a>
        <a className="footer__socials_item" href="">
          <img src="/images/instagram.webp" width="37" height="37" alt="instagram" />
        </a>
        <a className="footer__socials_item" href="">
          <img src="/images/telegram.webp" width="37" height="37" alt="telegram" />
        </a>
      </div>
    </ContentLayout>
  );
};

export default Footer;
