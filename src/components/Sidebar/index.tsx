import React from 'react';
import classNames from 'classnames';

import { Icon } from '$components/UI/Icon';
import { Button } from '$components/UI/Button';
import { Image } from '$constants/images';
import * as USER_ACTIONS from '$modules/user/actions';
import { IUserRootState } from '$modules/user/reducer';

const styles = require('./styles.module.scss');

interface IProps {
  isSidebarMinimized: IUserRootState['isSidebarMinimized'],
  userAvatar: IUserRootState['userAvatar'],
  minimizeSidebar: typeof USER_ACTIONS.minimizeSidebar,
}

export const Sidebar: React.FunctionComponent<IProps> = ({
  isSidebarMinimized,
  minimizeSidebar,
  userAvatar,
}) => {
  const onMinimizeSidebarBtnClick = React.useCallback(() => {
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
