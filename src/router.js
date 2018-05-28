import React from 'react';
import { Router, Route, Switch, Redirect, routerRedux } from 'dva/router';
import dynamic from 'dva/dynamic';
import Head from './components/Head';
import Foot from './components/Foot';

const { ConnectedRouter } = routerRedux;

function RouterConfig({ history, app }) {
  const Home = dynamic({
    app,
    models: () => [
      // import('./models/example'),
    ],
    component: () => import('./routes/Home'),
  });

  const About = dynamic({
    app,
    models: () => [
      // import('./models/example'),
    ],
    component: () => import('./routes/About'),
  });

  const Solute = dynamic({
    app,
    models: () => [
      // import('./models/example'),
    ],
    component: () => import('./routes/Solute'),
  });

  const Treads = dynamic({
    app,
    models: () => [
      import('./models/treads'),
    ],
    component: () => import('./routes/Treads'),
  });

  const TreadsContent = dynamic({
    app,
    models: () => [
      import('./models/treads'),
    ],
    component: () => import('./routes/TreadsContent'),
  });

  return (
    <ConnectedRouter history={history}>
      <div>
        <Head />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/solute" exact component={Solute} />
          <Route path="/treads" component={Treads} />
          <Route path="/treadsContent/:resultId" component={TreadsContent} />
          <Redirect to="/" />
        </Switch>
        <Foot />
      </div>

    </ConnectedRouter>
  );
}

export default RouterConfig;
