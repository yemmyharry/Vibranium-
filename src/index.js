import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Challenge from './challenge'
//import Stating from './components/trial'
import * as serviceWorker from './serviceWorker';


ReactDOM.render(<Challenge />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
