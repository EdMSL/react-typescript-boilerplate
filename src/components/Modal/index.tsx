import React, { Component, ReactNode } from 'react';
import classNames from 'classnames';

const styles = require('./styles.module.scss');

interface IComponentState {
  isOpen: boolean;
}

export class Modal extends Component<{}, IComponentState> {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  open = (): void => {
    this.setState(() => ({
      isOpen: true,
    }));
  }

  close = (): void => {
    this.setState(() => ({
      isOpen: false,
    }));
  }

  render(): ReactNode {
    const { isOpen } = this.state;

    return (
      <React.Fragment>
        <button
          type="button"
          onClick={this.open}
        >
          Open
        </button>
        <section className={classNames(styles.modal, !isOpen && styles['modal--closed'])}>
          <div
            className={styles.modal__overlay}
          />
          <div className={styles.modal__body}>
            <h2 className={styles.modal__title}>Modal title</h2>
            <p className={styles.modal__text}>Modal text</p>
            <button
              type="button"
              className="button button--close"
              onClick={this.close}
            >
                Close
            </button>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
