import React from 'react';

import { Second } from '$components/Second';
import { Third } from '$components/Third';
import { Icon } from '$components/Icon';

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
    <Icon
      icon="keyboard-arrow-left"
      width={44}
    />
    <Icon
      icon="home"
      width={44}
    />
    <Icon
      icon="info"
      width={44}
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
    <Second />
    <Third />
  </React.Fragment>
);
