import React, { ReactElement, memo } from 'react';
import classNames from 'classnames';

const styles = require('./styles.module.scss');

interface IButtonProps {
  children: string | ReactElement | [string | ReactElement, string | ReactElement],
  isSubmit?: boolean,
  isDisabled?: boolean,
  onClick?: (e: React.SyntheticEvent) => void,
  className?: string,
}
export const Button: React.FunctionComponent<IButtonProps> = memo(({
  children,
  className = '',
  isSubmit,
  isDisabled,
  onClick,
}) => (
  /* eslint-disable react/button-has-type */
  <button
    type={isSubmit ? 'submit' : 'button'}
    className={classNames(styles.button, className)}
    disabled={isDisabled}
    onClick={isSubmit ? null : onClick}
  >
    {
      typeof children === 'string'
        ? <span>{children}</span>
        : children
    }
  </button>
));
