import React from 'react';

import { Wrapper } from './Dots.styled';

export default function Dots() {
  return (
    <Wrapper>
      <button aria-selected='true'>
        <span class='sr-only'>The commander</span>
      </button>
      <button aria-selected='false'>
        <span class='sr-only'>The mission specialist</span>
      </button>
      <button aria-selected='false'>
        <span class='sr-only'>The pilot</span>
      </button>
      <button aria-selected='false'>
        <span class='sr-only'>The crew engineer</span>
      </button>
    </Wrapper>
  );
}
