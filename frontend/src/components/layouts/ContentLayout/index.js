import { createElement } from 'react';
import clsx from 'clsx';

import './ContentLayout.scss';

const ContentLayout = ({
  as = 'div',
  className = '',
  rootClassName = '',
  children,
  ...props
}) => {
  return createElement(
    as,
    {
      className: rootClassName,
      ...props,
    },
    <div className={clsx('content__layout', className)}>{children}</div>
  );
};

export default ContentLayout;
