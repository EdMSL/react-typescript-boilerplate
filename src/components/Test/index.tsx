import React from 'react';

import { Second } from '$components/Second';
import { Third } from '$components/Third';

const styles = require('./styles.module.scss');

export const STATUS = ['on_hold',
  'in_progress',
  'review',
];

const url = 'https://www.google.ru/search?newwindow=1&sxsrf=ACYBGNSZSLnDGS5SrQfT4ziECdZX6_F2lQ%3A1568092071458&ei=py93Xc7IG66MrwSNvKWwAQ&q=prefer-const+eslint&oq=prefer-const+eslint&gs_l=psy-ab.3..0i203j0i8i7i10i30j0i30j0i8i30l3.152350.152350..154009...0.3..0.198.198.0j1......0....2j1..gws-wiz.......0i71.rG98LPLVsAc&ved=0ahUKEwiOuJOXvsXkAhUuxosKHQ1eCRYQ4dUDCAs&uact=5';

const obj = {
  a: 1,
  b: 2,
};

export const test = (param, param2): number => {
  const { a, b } = obj;
  if (param > 0) {
    return param + a;
  }

  return param2 + b;
};

interface IAddTask {
  type: string;
  payload: number;
}

export const New: React.FunctionComponent = () => (
  <React.Fragment>
    <h1 className={styles.new}>New Block react</h1>
    <button type="button">Open</button>
    <Second />
    <Third />
  </React.Fragment>
);
