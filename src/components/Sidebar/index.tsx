import React, { useCallback } from 'react';
import classNames from 'classnames';
import styles from './styles.module.scss';

import { Icon } from '$components/UI/Icon';
import { Button } from '$components/UI/Button';
import { Image } from '$constants/images';

interface IProps {
  isSidebarMinimized: boolean,
  userAvatar: string,
  minimizeSidebar: (isMinimize: boolean) => void,
}

export const Sidebar: React.FC<IProps> = ({
  isSidebarMinimized,
  userAvatar,
  minimizeSidebar,
}) => {
  const onMinimizeSidebarBtnClick = useCallback(() => {
    minimizeSidebar(!isSidebarMinimized);
  }, [isSidebarMinimized, minimizeSidebar]);

  return (
    <aside
      className={classNames(styles.sidebar, isSidebarMinimized && styles['sidebar--minimized'])}
    >
      <Button
        className={styles.sidebar__button}
        onClick={onMinimizeSidebarBtnClick}
      >
        <Icon
          icon={isSidebarMinimized ? 'keyboard-arrow-right' : 'keyboard-arrow-left'}
          size={44}
        />
      </Button>
      <div
        className={classNames(
          styles.avatar__container,
          isSidebarMinimized && styles['avatar__container--minimized'],
        )}
      >
        {
          userAvatar !== ''
            ? (
              <img
                src={userAvatar}
                alt="Avatar"
              />
            )
            : (
              <picture>
                <source
                  type="image/webp"
                  srcSet={`${Image.NO_AVATAR.X1}.webp 1x, ${Image.NO_AVATAR.X2}.webp 2x, ${Image.NO_AVATAR.X3}.webp 3x`} // eslint-disable-line max-len
                />
                <img
                  src={Image.NO_AVATAR.X1}
                  srcSet={`${Image.NO_AVATAR.X2} 2x, ${Image.NO_AVATAR.X3} 3x`}
                  alt="No avatar"
                />
              </picture>
            )
        }
      </div>
    </aside>
  );
};
