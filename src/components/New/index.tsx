import React from 'react';

import { Second } from '$components/Second';
import { Third } from '$components/Third';

const styles = require('./styles.module.scss');

export const New: React.FunctionComponent = () => (
  <React.Fragment>
    <h1 className={styles.new}>New Block react</h1>
    <Second />
    <Third />
  </React.Fragment>
);
