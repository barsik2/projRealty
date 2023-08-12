import { ABOUT, CATEGORY, HOME, SERVICES } from 'src/shared/config/routes';

import { useModal } from 'src/shared/lib/hooks';

import ContentLayout from '../layouts/ContentLayout';

import './Footer.scss';
import { NavLink } from 'react-router-dom';

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

          <NavLink className="footer__links_item_link" to={CATEGORY}>
            Проекты домов
          </NavLink>
          <NavLink className="footer__links_item_link" to={SERVICES}>
            Услуги
          </NavLink>
        </div>
        <div className="footer__links_item">
          <p className="footer__links_item_title">Наши проекты</p>

          <NavLink className="footer__links_item_link" href="">
            Готовые работы
          </NavLink>
          <NavLink className="footer__links_item_link" to={HOME}>
            Отзывы
          </NavLink>
        </div>
        <div className="footer__links_item">
          <p className="footer__links_item_title">Контакты</p>

          <a className="footer__links_item_link" href="tel:+7-921-966-25-05">
            +7-921-966-25-05
          </a>
          <a className="footer__links_item_link" href="mailto:stroy.dom.saintp@gmail.com">
            stroy.dom.saintp@gmail.com 
          </a>
        </div>
        <div className="footer__links_item">
          <p className="footer__links_item_title">Другое</p>

          <NavLink className="footer__links_item_link" to={ABOUT}>
            О компании
          </NavLink>
          <button className="footer__links_item_link" onClick={handleReview}>
            Оставить отзыв
          </button>
        </div>
      </div>
      <div className="footer__under_link">
        <address className="footer__address">
          Санкт-Петербург, линия 26-я В.О., д.15, к. 2,
        </address>
        <div className="footer__logo">
          <span className="footer__logo_img_wrapper">
            <img
              src="/images/logo.svg"
              alt="logo"
              width="66"
              height="64"
              loading="lazy"
            />
          </span>
          <span>Строй-дом</span>
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
