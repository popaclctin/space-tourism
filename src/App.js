import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';

import { GlobalStyle } from './styles/Global.style';

export default function App() {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route path='/'>
          <Home></Home>
        </Route>
      </Switch>
    </Router>
  );
}
