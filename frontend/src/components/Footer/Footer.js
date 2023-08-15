import { ABOUT, CATEGORY, HOME, SERVICES } from 'src/shared/config/routes';

import { useModal } from 'src/shared/lib/hooks';

import ContentLayout from '../layouts/ContentLayout';

import './Footer.scss';
import { NavLink, useLocation } from 'react-router-dom';

const Footer = () => {
  const {pathname} = useLocation()
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

          <a className="footer__links_item_link" href={CATEGORY}>
            Проекты домов
          </a>
          <a className="footer__links_item_link" href={SERVICES}>
            Услуги
          </a>
        </div>
        <div className="footer__links_item">
          <p className="footer__links_item_title">Наши проекты</p>

          <a className="footer__links_item_link" href={HOME + '#our_work'}>
            Готовые работы
          </a>
          <a className="footer__links_item_link" href={HOME + '#reviews'}>
            Отзывы
          </a>
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
        <a className="footer__socials_item" href="https://vk.com/public222018152" target='blank'>
          <img src="/images/vk.webp" width="37" height="37" alt="vk" />
        </a>
        <a className="footer__socials_item" href="https://instagram.com/stroi_dom.rus?igshid=MzRlODBiNWFlZA==" target="blank">
          <img src="/images/instagram.webp" width="37" height="37" alt="instagram" />
        </a>
        <a className="footer__socials_item" href="https://t.me/stroi_dom_russia" target='blank'>
          <img src="/images/telegram.webp" width="37" height="37" alt="telegram" />
        </a>
      </div>
    </ContentLayout>
  );
};

export default Footer;
