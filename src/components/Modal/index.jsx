import React from 'react';

export const Modal = () => {
  return (
    <section className="modal modal--closed">
      <div className="modal__overlay" />
      <div className="modal__body">
        <h2 className="modal__title">Modal title</h2>
        <p className="modal__text">Modal text</p>
        <button
          type="button"
          className="button button--close"
        >
          Close
        </button>
      </div>
    </section>
  );
};
