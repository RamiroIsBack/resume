/**
 * @jest-environment node
 */

import React from 'react';
import renderer from 'react-test-renderer';
import {Service} from '../components/presentational'
import {Firebase} from '../utils';

it('getServicesComponents', () => {
  return Firebase.getCopyForTesting()
    .then(result => { //the return is a promise: result(copyList)
      let component = {};
      let servicesComponentList = [];
      let animeIt =true;
      let rawList = result;
      let serviceRawListObject = {};
      for(let i = 0; i<rawList.length; i++){
        if(rawList[i].nombre ==='services'){
          serviceRawListObject = rawList[i];
        }
      }
      for (var property in serviceRawListObject) {
        if (serviceRawListObject.hasOwnProperty(property)) {
          if (property!=='nombre' && property !=='id'){
            //console.log(JSON.stringify(property));
            component = renderer.create(
              <div key ={property}>
                <Service
                  sectionSelected= {animeIt}
                  serviceInfo ={serviceRawListObject[property]}
                />
              </div>
            ).toJSON();
          }
        }
        servicesComponentList.push( component   );
      }

      expect (servicesComponentList).toMatchSnapshot();

    });
});
// @magnusart got it right
// https://www.bountysource.com/issues/41190983-syntax-error-invalid-or-unexpected-token-with-png
