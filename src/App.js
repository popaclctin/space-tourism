import React from 'react';

import ExploreBtn from './components/ExploreBtn';
import NavBar from './components/NavBar';

import { GlobalStyle } from './GlobalStyle';

export default function App() {
  return (
    <>
      <GlobalStyle />
      <NavBar />
      <ExploreBtn />
    </>
  );
}
