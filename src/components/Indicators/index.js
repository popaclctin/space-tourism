import React from 'react';

import { Wrapper } from './Indicators.style';

export default function Indicators() {
  return (
    <Wrapper>
      <button className='active'>1</button>
      <button>2</button>
      <button>3</button>
    </Wrapper>
  );
}
