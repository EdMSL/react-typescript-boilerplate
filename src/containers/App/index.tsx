import React from 'react';
import {
  NavLink,
  Routes,
  Route,
  BrowserRouter,
} from 'react-router-dom';
import classNames from 'classnames';
import styles from './styles.module.scss';

import { PathName } from '$constants/paths';
import { Sidebar } from '$components/Sidebar';
import { ReactView } from '$components/ReactView';
import { ReduxView } from '$components/ReduxView';
import { IAppState } from '$types/state';
import { useAppDispatch, useAppSelector } from '$hooks/hooks';
import { minimizeSidebar } from '$store/user';

export const App: React.FC = () => {
  const view = useAppSelector((state: IAppState) => state.CONTENT.view);
  const isSidebarMinimized = useAppSelector((state: IAppState) => state.USER.isSidebarMinimized);
  const userAvatar = useAppSelector((state: IAppState) => state.USER.userAvatar);

  const dispatch = useAppDispatch();

  const toggleSidebar = () => dispatch(minimizeSidebar(!isSidebarMinimized));

  return (
    <BrowserRouter>
      <main>
        <div
          className={classNames('main-wrapper', styles[view])}
        >
          <Sidebar
            isSidebarMinimized={isSidebarMinimized}
            minimizeSidebar={toggleSidebar}
            userAvatar={userAvatar}
          />
          <section
            className={classNames(
              styles.router,
              isSidebarMinimized && styles['router--full'],
            )}
          >
            <NavLink
              to={PathName.REACT_VIEW}
              className={({ isActive }) => classNames(
                styles.router__button,
                styles['router__button--react'],
                isActive ? styles['router__button--react--active'] : '',
              )}
            >
              React
            </NavLink>
            <NavLink
              to={PathName.REDUX_VIEW}
              className={({ isActive }) => classNames(styles.router__button, styles['router__button--redux'], isActive ? styles['router__button--redux--active'] : '')}
            >
              Redux
            </NavLink>
          </section>
          <section className={classNames(styles.view, isSidebarMinimized && styles['view--full'])}>
            <Routes>
              <Route
                path={PathName.REACT_VIEW}
                element={<ReactView />}
              />
              <Route
                path={PathName.REDUX_VIEW}
                element={<ReduxView />}
              />
            </Routes>
          </section>
        </div>
      </main>
    </BrowserRouter>
  );
};
