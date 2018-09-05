import React from 'react';
import ReactDOM from 'react-dom';
import 'tachyons';
import './index.css';
import {Players} from './Players'
import PlayerCard from './PlayerCard';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
<div>
  <App />
  <PlayerCard name={Players[0].name} team={Players[0].team} image={Players[0].image}/>
</div>
  , document.getElementById('root'));
registerServiceWorker();
