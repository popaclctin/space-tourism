import React from 'react';

import { Wrapper } from './Dots.styled';

export default function Dots() {
  return (
    <Wrapper>
      <button aria-selected='true'></button>
      <button aria-selected='false'></button>
      <button aria-selected='false'></button>
    </Wrapper>
  );
}
