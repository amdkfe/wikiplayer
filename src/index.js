import React from 'react';
import ReactDOM from 'react-dom';
import 'tachyons';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
<div className= 'tc wrapper main'>
  <App />
</div>
  , document.getElementById('root'));
registerServiceWorker();
