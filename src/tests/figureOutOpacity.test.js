/**
 * @jest-environment node
 */

import React from 'react';
import renderer from 'react-test-renderer';

import {PopularFunctions} from '../utils';

it('figureOutOpacity', () => {
  let props = {
    section:{
      imgLoaded: true,
    },
  };
  expect (PopularFunctions.figureOutOpacity(props)).toMatchSnapshot();
});

// it('sums allright', () => {
//   let number = 4;
//   const component = renderer.create(
//     <SumContainer number = {number} />
//   ).toJSON();
//   expect (component).toMatchSnapshot();
// });
