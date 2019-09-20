import React from 'react';
import { connect } from 'react-redux';
import { hot } from 'react-hot-loader';
import { ConnectedRouter } from 'connected-react-router';
import {
  NavLink,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import classNames from 'classnames';

import { history, IAppState } from '$redux/store';
import * as USER_ACTIONS from '$modules/user/actions';
import { PathName } from '$constants/paths';
import { Sidebar } from '$components/Sidebar';
import { ReactView } from '$components/ReactView';
import { ReduxView } from '$components/ReduxView';

const styles = require('./styles.module.scss');

interface IStateProps {
  view: IAppState['content']['view'],
  isSidebarMinimized: IAppState['user']['isSidebarMinimized'],
  userAvatar: IAppState['user']['userAvatar'],
}

const mapStateToProps = ({
  content: { view },
  user: { isSidebarMinimized, userAvatar },
}: IAppState): IStateProps => ({
  view,
  isSidebarMinimized,
  userAvatar,
});

const mapDispatchToProps = {
  minimizeSidebar: USER_ACTIONS.minimizeSidebar,
};

export type IAppProps = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps;

const UnconnectedApp: React.FunctionComponent<IAppProps> = ({
  view,
  isSidebarMinimized,
  minimizeSidebar,
  userAvatar,
}) => (
  <ConnectedRouter history={history}>
    <main>
      <div className={classNames('main-wrapper', styles[view])}>
        <Sidebar
          isSidebarMinimized={isSidebarMinimized}
          minimizeSidebar={minimizeSidebar}
          userAvatar={userAvatar}
        />
        <section className={classNames(styles.router, isSidebarMinimized && styles['router--full'])}>
          <NavLink
            exact
            to={PathName.REACT_VIEW}
            className={classNames(styles.router__button, styles['router__button--react'])}
            activeClassName={styles['router__button--react--active']}
          >
            React
          </NavLink>
          <NavLink
            exact
            to={PathName.REDUX_VIEW}
            className={classNames(styles.router__button, styles['router__button--redux'])}
            activeClassName={styles['router__button--redux--active']}
          >
            Redux
          </NavLink>
        </section>
        <section className={classNames(styles.view, isSidebarMinimized && styles['view--full'])}>
          <Switch>
            <Route
              exact
              path={PathName.REACT_VIEW}
              component={ReactView}
            />
            <Route
              path={PathName.REDUX_VIEW}
              component={ReduxView}
            />
            <Redirect
              from="/*"
              to={PathName.REACT_VIEW}
            />
          </Switch>
        </section>
      </div>
    </main>
  </ConnectedRouter>
);

export const App = connect(mapStateToProps, mapDispatchToProps)(hot(module)(UnconnectedApp));
