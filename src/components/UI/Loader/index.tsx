import React from 'react';
import classNames from 'classnames';

const styles = require('./styles.module.scss');

export const Loader: React.FunctionComponent<{}> = () => (
  <div className={styles['loader-wrapper']}>
    <div className={classNames(styles.loader, 'rotate-animation')} />
  </div>
);
