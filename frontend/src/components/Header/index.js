import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import clsx from 'clsx';

import { HOME_ROUTE } from 'src/constRoute/consts';

import ContentLayout from 'src/components/layouts/ContentLayout';

import './Header.scss';
import { LINKS } from './constants/header.constants';

const Header = () => {
  const { pathname } = useLocation();

  return (
    <ContentLayout
      as="header"
      rootClassName="header"
      className="header__content"
    >
      <Link className="header__logo" to={HOME_ROUTE}>
        <img
          src="/images/logo.svg"
          alt="logo"
          width="47"
          height="45"
          loading="lazy"
        />
        <span>Stroy-Dom</span>
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
