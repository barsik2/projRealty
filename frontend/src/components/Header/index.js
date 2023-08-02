import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import clsx from 'clsx';
import Offcanvas from 'react-bootstrap/Offcanvas';

import { HOME } from 'src/shared/config/routes';

import ContentLayout from 'src/components/layouts/ContentLayout';

import { LINKS } from './constants/header.constants';

import './Header.scss';

const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const { pathname } = useLocation();

  useEffect(() => {
    handleClose();
  }, [pathname]);

  const handleClose = () => setIsOpenMenu(false);
  const handleOpen = () => setIsOpenMenu(true);

  return (
    <ContentLayout
      as="header"
      rootClassName="header"
      className="header__content"
    >
      <Link className="header__logo" to={HOME}>
        <span className="header__logo_img_wrapper">
          <img
            src="/images/logo.svg"
            alt="logo"
            width="47"
            height="45"
            loading="lazy"
          />
        </span>
        <span>Строй-дом</span>
      </Link>

      <nav className="header__navigation">
        {LINKS.map((link) => (
          <Link
            className={clsx('header__link', pathname === link.href && 'active')}
            to={link.href}
            key={link.label}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <button className="header__burger" onClick={handleOpen}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M3 6.00098H21M3 12.001H21M3 18.001H21"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>

      <Offcanvas
        className="header__menu"
        show={isOpenMenu}
        onHide={handleClose}
        placement="end"
      >
        <Offcanvas.Header closeButton closeVariant="white" />
        <Offcanvas.Body className="header__menu_content">
          {LINKS.map((link) => (
            <Link
              className={clsx(
                'header__link_burger',
                pathname === link.href && 'active'
              )}
              to={link.href}
              key={link.label}
            >
              {link.label}
            </Link>
          ))}
        </Offcanvas.Body>
      </Offcanvas>
    </ContentLayout>
  );
};

export default Header;
