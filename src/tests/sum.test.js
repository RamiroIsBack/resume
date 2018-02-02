import React from 'react';
import renderer from 'react-test-renderer';

import {SumContainer} from '../components/containers';

it('sums allright', () => {
  let number = 4;
  const component = renderer.create(
    <SumContainer number = {number} />
  ).toJSON();
  expect (component).toMatchSnapshot();
});
