import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Crew from './pages/Crew';
import Mars from './pages/Destination/Mars';
import Moon from './pages/Destination/Moon';
import Titan from './pages/Destination/Titan';
import Europa from './pages/Destination/Europa';

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

        <Route exact path='/destination' component={Moon} />
        <Route exact path='/destination/Moon' component={Moon} />
        <Route exact path='/destination/Mars' component={Mars} />
        <Route exact path='/destination/Titan' component={Titan} />
        <Route exact path='/destination/Europa' component={Europa} />

        <Route path='/crew'>
          <Crew data={data} />
        </Route>
      </Switch>
    </Router>
  );
}
