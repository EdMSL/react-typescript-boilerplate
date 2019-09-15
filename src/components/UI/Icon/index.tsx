import React from 'react';

import { PATHS } from '$constants/paths';

interface IProps {
  icon: string,
  className?: string,
  width?: number,
  height?: number,
}

const DEFAULT_SVG_SIZE = 24;

export const Icon: React.FunctionComponent<IProps> = ({
  icon,
  className = '',
  width = DEFAULT_SVG_SIZE,
  height = width,
}) => (
  <svg
    className={className}
    width={width}
    height={height}
  >
    <use xlinkHref={`${PATHS.SVG_SPRITE}#icon-${icon}`} />
  </svg>
);
