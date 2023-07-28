import { useContext } from 'react';

import { ModalContext } from 'src/shared/lib//modals/model';

const useModal = () => {
  const context = useContext(ModalContext);

  return context;
};

export { useModal };
