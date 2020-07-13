import React from 'react';
import {Router, Route, Switch,Redirect} from 'react-router-dom';
import history from './history';
import './App.css';

import FishEnter from './components/FishEnter';
import Landing from './components/Landing';
import OptionsMenu from './components/OptionsMenu';
import ViewFish from './components/ViewFish';

function App() {
  return (
    <div>
    <Router history={history}>
    <div className="">
      <header className="">
      <h2>Livewell</h2>
      </header>
      <Route exact path="/" component={Landing}/>
      <Route exact path="/options-menu" component={OptionsMenu}/>
      <Route exact path="/fish-enter" component={FishEnter}/>
      <Route exact path="/view-fish" component={ViewFish}/>
    </div>
    </Router>
    </div>
  );
}

export default App;
