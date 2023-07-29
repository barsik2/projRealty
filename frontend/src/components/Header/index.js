import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import clsx from 'clsx';

import { HOME } from 'src/shared/config/routes';

import ContentLayout from 'src/components/layouts/ContentLayout';

import { LINKS } from './constants/header.constants';

import './Header.scss';

const Header = () => {
  const { pathname } = useLocation();

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
    </ContentLayout>
  );
};

export default Header;
