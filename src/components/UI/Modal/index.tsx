import React, { Component, ReactNode } from 'react';
import classNames from 'classnames';

import { Button } from '$components/UI/Button';

const styles = require('./styles.module.scss');

interface IComponentState {
  isOpen: boolean,
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
  };

  close = (): void => {
    this.setState(() => ({
      isOpen: false,
    }));
  };

  render(): ReactNode {
    const { isOpen } = this.state;

    return (
      <React.Fragment>
        <Button onClick={this.open}>
          ffff
        </Button>
        <section className={classNames(styles.modal, !isOpen && styles['modal--closed'])}>
          <div className={styles.modal__overlay} />
          <div className={styles.modal__body}>
            <h2 className={styles.modal__title}>Modal title</h2>
            <p className={styles.modal__text}>Modal text</p>
            <Button onClick={this.close}>
              Close
            </Button>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
