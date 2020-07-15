import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import history from './history';
import './App.css';

import Header from './components/Header';
import FishEnter from './components/FishEnter';
import Landing from './components/Landing';
import OptionsMenu from './components/OptionsMenu';
import ViewFish from './components/ViewFish';
import FishDelete from './components/FishDelete';
import NoMatch from './components/NoMatch';

import catfish from './images/catfish.jpg';
import bass from './images/bass.jpg';
import pond from './images/pond.jpg';

function App() {
  return (
    <div className="App">
      <img src={catfish} alt="catfish" className="catfish"/>
      <img src={bass} alt="Large Mouth bass" className="bass"/>
      <img src={pond} alt="person in a pond" className="pond"/>
      <img src={catfish} alt="catfish" className="catfish2"/>
      <img src={bass} alt="Large Mouth bass" className="bass2"/>
      <img src={pond} alt="guy in a pond" className="pond2"/>
    <Router history={history}>
      <Header/>
      <Switch>
        <Route exact path="/" component={Landing}/>
        <Route exact path="/options-menu" component={OptionsMenu}/>
        <Route exact path="/fish-enter" component={FishEnter}/>
        <Route exact path="/view-fish" component={ViewFish}/>
        <Route exact path="/fish-delete/:id" component={FishDelete}/>
        <Route component={NoMatch}/>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
