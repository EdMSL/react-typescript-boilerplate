import React from 'react';

import { Second } from '$components/Second';
import { Third } from '$components/Third';

const styles = require('./styles.module.scss');
const reactLogo = require('$images/content/logo.svg');
const dog = require('$images/content/dog.jpg');

export const New: React.FunctionComponent = () => (
  <React.Fragment>
    <h1 className={styles.new}>New Block react</h1>
    <img
      src={reactLogo}
      alt="logo"
    />
    <picture>
      <source
        type="image/webp"
        srcSet={`${dog}.webp`}
      />
      <img
        src={dog}
        alt="Logo React"
      />
    </picture>
    <svg className={styles.svg}>
      <use xlinkHref="images/sprite.svg#icon-keyboard-arrow-down" />
    </svg>
    <svg className={styles.svg}>
      <use xlinkHref="images/sprite.svg#icon-keyboard-arrow-up" />
    </svg>
    <Second />
    <Third />
  </React.Fragment>
);
