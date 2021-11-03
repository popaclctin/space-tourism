import React from 'react';

import { Wrapper } from './Tabs.style';

export default function Tabs() {
  return (
    <Wrapper>
      <button className='active'>Moon</button>
      <button>Mars</button>
      <button>Europa</button>
    </Wrapper>
  );
}
