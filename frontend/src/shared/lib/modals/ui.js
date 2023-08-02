import { useState } from 'react';
import { Modal } from 'react-bootstrap';
import api from 'src/shared/api';

import { useModal } from 'src/shared/lib/hooks';

import styles from './Modal.module.scss';

const RequestModal = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    number: '',
    email: '',
  });

  const { store, close } = useModal();

  const { modalProps, type } = store;

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSendRequest = async (event) => {
    try {
      event.preventDefault();
      await api.post('/order', {
        data: {
          ...formData,
          house_id: modalProps.id,
        },
      });
      close();
    } catch (error) {
      console.error(error);
      close();
    }
  };

  return (
    <Modal
      show={type === 'request'}
      onHide={close}
      dialogClassName={styles.modal}
      centered
    >
      <button className={styles.modal__close_btn} onClick={close}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          viewBox="0 0 50 50"
          fill="none"
        >
          <path
            d="M25 3.125C12.8125 3.125 3.125 12.8125 3.125 25C3.125 37.1875 12.8125 46.875 25 46.875C37.1875 46.875 46.875 37.1875 46.875 25C46.875 12.8125 37.1875 3.125 25 3.125ZM33.4375 35.9375L25 27.5L16.5625 35.9375L14.0625 33.4375L22.5 25L14.0625 16.5625L16.5625 14.0625L25 22.5L33.4375 14.0625L35.9375 16.5625L27.5 25L35.9375 33.4375L33.4375 35.9375Z"
            fill="black"
          />
        </svg>
      </button>
      <div className={styles.modal__content}>
        <h1 className={styles.modal__title}>ОСТАВИТЬ ЗАЯВКУ</h1>
        <form className={styles.modal__form} onSubmit={handleSendRequest}>
          <label>
            ФИО:
            <input
              required
              name="fullname"
              value={formData.fullname}
              onChange={handleChange}
              className="input_name"
              type="text"
              placeholder="Введите фио"
            />
          </label>
          <label>
            Номер телефона:
            <input
              required
              name="number"
              value={formData.number}
              onChange={handleChange}
              className="input_name"
              type="tel"
              placeholder="Введите номер телефона"
            />
          </label>
          <label>
            Почта:
            <input
              required
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="input_name"
              type="email"
              placeholder="Введите адрес электронной почты"
            />
          </label>
          {modalProps?.name && (
            <p className={styles.modal__project_name}>
              Проект: {modalProps.name}
            </p>
          )}
          <button className={styles.modal__send_btn} type="submit">
            Отправить заявку
          </button>
        </form>
      </div>
    </Modal>
  );
};

const ReviewModal = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    review: '',
  });

  const { store, close } = useModal();

  const { modalProps, type } = store;

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSendReview = async (event) => {
    try {
      event.preventDefault();
      // await api.post('/order', {
      //   data: {
      //     ...formData,
      //     house_id: modalProps.id,
      //   },
      // });
      close();
    } catch (error) {
      console.error(error);
      close();
    }
  };

  return (
    <Modal
      show={type === 'review'}
      onHide={close}
      dialogClassName={styles.modal}
      centered
    >
      <button className={styles.modal__close_btn} onClick={close}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          viewBox="0 0 50 50"
          fill="none"
        >
          <path
            d="M25 3.125C12.8125 3.125 3.125 12.8125 3.125 25C3.125 37.1875 12.8125 46.875 25 46.875C37.1875 46.875 46.875 37.1875 46.875 25C46.875 12.8125 37.1875 3.125 25 3.125ZM33.4375 35.9375L25 27.5L16.5625 35.9375L14.0625 33.4375L22.5 25L14.0625 16.5625L16.5625 14.0625L25 22.5L33.4375 14.0625L35.9375 16.5625L27.5 25L35.9375 33.4375L33.4375 35.9375Z"
            fill="black"
          />
        </svg>
      </button>
      <div className={styles.modal__content}>
        <h1 className={styles.modal__title}>ОСТАВИТЬ Отзыв</h1>
        <form className={styles.modal__form} onSubmit={handleSendReview}>
          <label>
            ФИО:
            <input
              required
              name="fullname"
              value={formData.fullname}
              onChange={handleChange}
              className="input_name"
              type="text"
              placeholder="Введите фио"
            />
          </label>
          <label>
            Почта:
            <input
              required
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="input_name"
              type="email"
              placeholder="Введите адрес электронной почты"
            />
          </label>
          <label>
            Отзыв
            <textarea
              required
              name="review"
              value={formData.review}
              onChange={handleChange}
              className="input_name"
              type="text"
              placeholder="Введите отзыв"
            />
          </label>
          {modalProps?.name && (
            <p className={styles.modal__project_name}>
              Проект: {modalProps?.name}
            </p>
          )}
          <button className={styles.modal__send_btn} type="submit">
            Отправить отзыв
          </button>
        </form>
      </div>
    </Modal>
  );
};

export { RequestModal, ReviewModal };
