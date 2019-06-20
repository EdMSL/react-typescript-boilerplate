import React from 'react';

const styles = require('./logo.css');

export const Logo = () => {
  console.log('render Logo');
  return (
    <div className={styles.logo} />
  );
};
