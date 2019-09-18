import React from 'react';
import classNames from 'classnames';

import { Image } from '$constants/images';

const styles = require('./styles.module.scss');

export const ReactView: React.FunctionComponent<{}> = () => (
  <React.Fragment>
    <p className={styles.view__title}>React component</p>
    <img
      className={classNames(styles.view__img, 'rotate-animation')}
      src={Image.REACT_LOGO}
      alt="React logo"
      width="300"
      height="300"
    />
  </React.Fragment>
);
