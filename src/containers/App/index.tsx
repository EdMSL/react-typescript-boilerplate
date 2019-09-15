import React from 'react';
import { connect } from 'react-redux';
import { hot } from 'react-hot-loader';
import { ConnectedRouter } from 'connected-react-router';
import { NavLink, Switch, Route } from 'react-router-dom';

import { history, IAppState } from '$redux/store';
import * as FIRST_ACTIONS from '$modules/first/actions';
import { New } from '$components/New';
import { Modal } from '$components/UI/Modal';

interface IStateProps {
  tasks: IAppState['first']['tasks'],
}

const mapStateToProps = ({
  first: { tasks },
}: IAppState): IStateProps => ({
  tasks,
});

const mapDispatchToProps = {
  addTask: FIRST_ACTIONS.addTask,
};

export type IAppProps = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps;

const UnconnectedApp: React.FunctionComponent<IAppProps> = () => (
  <ConnectedRouter history={history}>
    <div className="main-wrapper">
      <div>
        <NavLink
          exact
          to="/"
          activeClassName="active"
        >
            Root
        </NavLink>
        <NavLink
          to="/modal"
          activeClassName="active"
        >
            Something
        </NavLink>
      </div>
      <Switch>
        <Route
          exact
          path="/"
          component={New}
        />
        <Route
          path="/modal"
          component={Modal}
        />
      </Switch>
    </div>
  </ConnectedRouter>
);

export const App = connect(mapStateToProps, mapDispatchToProps)(hot(module)(UnconnectedApp));
