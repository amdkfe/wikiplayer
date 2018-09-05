import React from 'react';
import ReactDOM from 'react-dom';
import 'tachyons';
import './index.css';
import {Players} from './Players'
import PlayerCard from './PlayerCard';
import CardList from './CardList';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
<div>
  <App />
  <CardList Players = {Players}/>
</div>
  , document.getElementById('root'));
registerServiceWorker();
