import React, { ReactElement, memo } from 'react';
import classNames from 'classnames';

const styles = require('./styles.module.scss');

interface IButtonProps {
  children: string | ReactElement | [string | ReactElement, string | ReactElement],
  className?: string,
  id?: string,
  isSubmit?: boolean,
  isDisabled?: boolean,
  onClick?: (e: React.SyntheticEvent) => void,
}
export const Button: React.FunctionComponent<IButtonProps> = memo(({
  children,
  className = '',
  id,
  isSubmit,
  isDisabled,
  onClick,
}) => (
  /* eslint-disable react/button-has-type */
  <button
    type={isSubmit ? 'submit' : 'button'}
    className={classNames(styles.button, className)}
    disabled={isDisabled}
    id={id}
    onClick={isSubmit ? null : onClick}
  >
    {
      typeof children === 'string'
        ? <span>{children}</span>
        : children
    }
  </button>
));
