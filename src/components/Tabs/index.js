import React from 'react';

import { Wrapper } from './Tabs.styled';

export default function Tabs() {
  return (
    <Wrapper>
      <button aria-selected='true'>Moon</button>
      <button aria-selected='false'>Mars</button>
      <button aria-selected='false'>Europa</button>
      <button aria-selected='false'>Titan</button>
    </Wrapper>
  );
}
