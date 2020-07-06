import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/home/home';
import Breakfast from './pages/breakfast/breakfast';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/catering/breakfast" exact component={Breakfast}/>
      </Switch>
      
    </div>
  );
}

export default App;
