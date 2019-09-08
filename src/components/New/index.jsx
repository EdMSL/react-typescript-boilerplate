import React from 'react';

import { Third } from '$components/Third';
import { Second } from '$components/Second';

const styles = require('./styles.module.scss');

export const New = () => (
  <React.Fragment>
    <h1 className={styles.new}>New Block react</h1>
    <Second />
    <Third />
  </React.Fragment>
);
