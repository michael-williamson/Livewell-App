import React from 'react';
import {Router, Route, Switch,Redirect} from 'react-router-dom';
import history from './history';
import './App.css';

import FishEnter from './components/FishEnter';
import Landing from './components/Landing';

function App() {
  return (
    <div>
    <Router history={history}>
    <div className="">
      <header className="">
      <h2>Livewell</h2>
      </header>
      <Route path="/" component={Landing}/>
      <Route path="/fish-enter" component={FishEnter}/>
    </div>
    </Router>
    </div>
  );
}

export default App;
