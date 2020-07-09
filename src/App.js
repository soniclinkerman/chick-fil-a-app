import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/home/home';
import Breakfast from './pages/breakfast/breakfast';
import Header from './components/Header/header';
import Scroll from './components/Scroll/scroll';

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Scroll>
          <Route path="/catering" exact component={Breakfast}/>
        </Scroll>
      </Switch>
      
    </div>
  );
}

export default App;
