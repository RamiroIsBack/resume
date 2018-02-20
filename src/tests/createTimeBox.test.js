/**
 * @jest-environment node
 */

import React from 'react';
import renderer from 'react-test-renderer';
import {TimeBox} from '../components/presentational'
import {Firebase} from '../utils';

it('getTimeBoxComponents', () => {
  return Firebase.getCopyForTesting()
    .then(result => { //the return is a promise: result(copyList)
      let component = {};
      let timeBoxComponentList = [];
      let rawList = result;
      let timeBoxRawListObject = {};
      for(let i = 0; i<rawList.length; i++){
        if(rawList[i].nombre ==='timeLine'){
          timeBoxRawListObject = rawList[i];
        }
      }
      for (var property in timeBoxRawListObject) {
        if (timeBoxRawListObject.hasOwnProperty(property)) {
          if (property!=='nombre' && property !=='id'){
            //console.log(JSON.stringify(property));
            component = renderer.create(
              <div className = {timeBoxRawListObject[property].className} key ={property}>
                <TimeBox
                  urlClick ='handleClickMethod'
                  copy = {timeBoxRawListObject[property]}
                  screenSize = {700}
                />
              </div>
            ).toJSON();
          }
        }
        timeBoxComponentList.push( component   );
      }

      expect (timeBoxComponentList).toMatchSnapshot();

    });
});
// @magnusart got it right
// https://www.bountysource.com/issues/41190983-syntax-error-invalid-or-unexpected-token-with-png
