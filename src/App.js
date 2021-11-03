import React from 'react';

import ExploreBtn from './components/ExploreBtn';
import NavBar from './components/NavBar';
import Tabs from './components/Tabs';
import Dots from './components/Dots';

import { GlobalStyle } from './GlobalStyle';

export default function App() {
  return (
    <>
      <GlobalStyle />
      <NavBar />
      <ExploreBtn />
      <Tabs />
      <Dots />
    </>
  );
}
