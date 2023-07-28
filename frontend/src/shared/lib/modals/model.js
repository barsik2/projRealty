import { createContext, useState } from 'react';

import { RequestModal, ReviewModal } from './ui';

const initialState = {
  open: (type, options) => {},
  close: () => {},
  store: {},
};

const ModalContext = createContext(initialState);

const ModalProvider = ({ children }) => {
  const [store, setStore] = useState({ type: '', modalProps: {} });

  const open = (type, modalProps) => {
    setStore({
      ...store,
      type,
      modalProps,
    });
  };

  const close = () => {
    setStore({
      ...store,
      type: '',
      modalProps: {},
    });
  };

  return (
    <ModalContext.Provider value={{ open, close, store }}>
      {children}
      <RequestModal />
      <ReviewModal />
    </ModalContext.Provider>
  );
};

export { ModalProvider, ModalContext };
