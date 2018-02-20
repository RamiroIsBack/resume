/**
 * @jest-environment node
 */

import React from 'react';
import renderer from 'react-test-renderer';

import {Firebase,PopularFunctions} from '../utils';


it('selectSpecificCopyfromDB', () => {
  //only work with promises!!
  return Firebase.getCopyForTesting()
    .then(result => { //the return is a promise: result(copyList)
      let props = {
        copy:{
          copyList: result
        }
      };
      expect (PopularFunctions.selectSpecificCopy(props,'summaryPic')).toMatchSnapshot();

    });
});
