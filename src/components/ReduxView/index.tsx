import React from 'react';
import classNames from 'classnames';

import { Image } from '$constants/images';

const styles = require('./styles.module.scss');

export const ReduxView: React.FunctionComponent<{}> = () => (
  <React.Fragment>
    <p className={styles.view__title}>Redux component</p>
    <img
      className={classNames(styles.view__img, 'rotate-animation')}
      src={Image.REDUX_LOGO}
      alt="Redux logo"
      width="300"
      height="300"
    />
  </React.Fragment>
);
