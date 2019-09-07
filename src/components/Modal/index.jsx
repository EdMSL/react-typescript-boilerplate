import React from 'react';
import classNames from 'classnames';

const styles = require('./styles.module.scss');

export const Modal = () => (
  <section className={classNames(styles.modal, styles['modal--closed'])}>
    <div className={styles.modal__overlay} />
    <div className={styles.modal__body}>
      <h2 className={styles.modal__title}>Modal title</h2>
      <p className={styles.modal__text}>Modal text</p>
      <button
        type="button"
        className="button button--close"
      >
          Close
      </button>
    </div>
  </section>
);
