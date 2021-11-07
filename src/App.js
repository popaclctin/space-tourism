import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Destination from './pages/Destination';
import Crew from './pages/Crew';
import Test from './pages/Test';

import { GlobalStyle } from './styles/Global.styled';

import dataJson from './data';

export default function App() {
  const [data, setData] = useState(dataJson);

  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/destination'>
          <Destination data={data} />
        </Route>
        <Route path='/crew'>
          <Crew data={data} />
        </Route>
      </Switch>
    </Router>
  );
}
