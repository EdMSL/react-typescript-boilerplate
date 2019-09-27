import React, { memo } from 'react';

import { PATHS } from '$constants/paths';

interface IProps {
  icon: string,
  className?: string,
  size?: number,
}

const DEFAULT_SVG_SIZE = 24;

export const Icon: React.FunctionComponent<IProps> = memo(({
  icon,
  className = '',
  size = DEFAULT_SVG_SIZE,
}) => (
  <svg
    className={icon === 'unknown' ? 'hide' : className}
    width={size}
    height={size}
  >
    {/* // svg sprite generate automaticaly by svgspritemap plugin */}
    <use xlinkHref={`${PATHS.SVG_SPRITE}#icon-${icon}`} />
  </svg>
));
