import React, { Component } from 'react';
import store from '../../stores';
import { Provider } from 'react-redux';
import Layout from '../../css'
import {
  IntroContainer,
  SummaryContainer,
  ServicesContainer,
  SkillsContainer,
  TimeLineContainer,
  SideBarContainer,
  NombreContainer,
} from '../containers';
class App extends Component {


  render() {

    return (
      <Provider store={store.configure(null)}>
        <div>

          <NombreContainer />

          <div className='container'>
            <div className='IntroContainer'>
              <IntroContainer  />

            </div>
            <div className='SummaryContainer'>
              <SummaryContainer  />

            </div>
            <div className='ServicesContainer'>
              <ServicesContainer  />
              <hr/>
            </div>
            
            <div className='TimeLineContainer'>
              <TimeLineContainer  />
            </div>

            <div className='SideBarSpace'/>

          </div>
          <div className='sidebar__contaniner'>
            <SideBarContainer  />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
