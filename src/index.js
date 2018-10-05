//  react is module and React is the the obj we are importing
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
//how we install bootrstrap
import 'bootstrap/dist/css/bootstrap.css';
// bcasue counter is default export we dont need curly braces


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
 