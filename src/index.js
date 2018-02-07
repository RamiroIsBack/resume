import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import store from './stores';
import { Provider } from 'react-redux';
import './index.css';
import {App} from './components/layout';
import registerServiceWorker from './registerServiceWorker';
class Resume extends Component{
  render(){
    return(
      <Provider store={store.configure(null)}>
        <div>
          <App/>
        </div>
      </Provider>
    );
  }
}

ReactDOM.render(<Resume />, document.getElementById('root'));
registerServiceWorker();
