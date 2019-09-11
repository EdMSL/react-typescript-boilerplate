import React from 'react';

import { Second } from '$components/Second';
import { Third } from '$components/Third';
import { SEC_IN_MINUTE } from '$constants/defaultParameters';

const styles = require('./styles.module.scss');

export const STATUS = ['on_hold',
  'in_progress', 'review'];

const url = 'https://www.google.ru/search?newwindow=1&sxsrf=ACYBGNSZSLnDGS5SrQfT4ziECdZX6_F2lQ%3A1568092071458&ei=py93Xc7IG66MrwSNvKWwAQ&q=prefer-const+eslint&oq=prefer-const+eslint&gs_l=psy-ab.3..0i203j0i8i7i10i30j0i30j0i8i30l3.152350.152350..154009...0.3..0.198.198.0j1......0....2j1..gws-wiz.......0i71.rG98LPLVsAc&ved=0ahUKEwiOuJOXvsXkAhUuxosKHQ1eCRYQ4dUDCAs&uact=5';

const str = "I'am string";
const obj = {
  a: 1,
  b: 2,
};

type IArr = number[];
type IDigit = number;
interface IDig {
  digit: number, noDigit: string,
}

const newStr = '1';
(/^a$/).test(newStr);

const arr: IArr = [1, 2];

const rule = arr.indexOf(1) !== -1;

const dig: IDig['digit'] = 4;

interface ITestFunc {
  (param: string, param2: string): string,
}

export const test: ITestFunc = (param, param2) => {
  const { a, b } = obj;
  let c = 0;
  if (param !== '0') {
    c += a;
  } else {
    c += b;
  }

  return param2 + c;
};

type IOtherTestFunc = (param: number) => number;

const func: IOtherTestFunc = (param) => {
  const a = 0;
  const b = a + STATUS[STATUS.length - 1];
  const c = STATUS[1];
  return a + SEC_IN_MINUTE;
};

interface IAddTask {
  type: string,
  payload: number,
}

test('1', newStr);

export const New: React.FunctionComponent = () => (
  <React.Fragment>
    <h1 className={styles.new}>New Block react</h1>
    <button
      type="button"
      className="ddd"
    >
      {`Open ${obj.a}`}
    </button>
    <Second />
    <Third />
  </React.Fragment>
);
