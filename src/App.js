import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/home/home';
import Breakfast from './pages/breakfast/breakfast';
import Header from './components/Header/header';

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/catering" exact component={Breakfast}/>
      </Switch>
      
    </div>
  );
}

export default App;
