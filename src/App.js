import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Mars from './pages/Destination/Mars';
import Moon from './pages/Destination/Moon';
import Titan from './pages/Destination/Titan';
import Europa from './pages/Destination/Europa';

import { GlobalStyle } from './styles/Global.styled';

import Hurley from './pages/Crew/Hurley';
import Shuttleworth from './pages/Crew/Shuttleworth';
import Glover from './pages/Crew/Glover';
import Ansari from './pages/Crew/Ansari';
import Capsule from './pages/Technology/Capsule';
import Port from './pages/Technology/Port';
import Vehicle from './pages/Technology/Vehicle';

export default function App() {
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

        <Route exact path='/crew' component={Hurley} />
        <Route exact path='/crew/Hurley' component={Hurley} />
        <Route exact path='/crew/Shuttleworth' component={Shuttleworth} />
        <Route exact path='/crew/Glover' component={Glover} />
        <Route exact path='/crew/Ansari' component={Ansari} />

        <Route exact path='/technology' component={Vehicle} />
        <Route exact path='/technology/vehicle' component={Vehicle} />
        <Route exact path='/technology/port' component={Port} />
        <Route exact path='/technology/capsule' component={Capsule} />
      </Switch>
    </Router>
  );
}
