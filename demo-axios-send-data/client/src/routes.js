import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/ui/App';
import PostList from './components/ui/PostList';
import NewPost from './components/ui/NewPost';
import Article from './components/ui/Article';

export const renderRoutes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={PostList} />
      <Route path='/write'  component={NewPost} />
      <Route path='/article/:id'  component={Article} />
    </Route>
  </Router>
);
