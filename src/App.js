import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/home/home";
import Breakfast from "./pages/breakfast/breakfast";
import Header from "./components/Header/header";
import Scroll from "./components/Scroll/scroll";
import SignIn from "./pages/sign-in/sign-in";
import SignUp from "./pages/sign-up/sign-up";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />

          <Route path="/sign-in" exact component={SignIn} />
          <Route path="/sign-up" exact component={SignUp} />

          <Scroll>
            <Route path="/catering" exact component={Breakfast} />
          </Scroll>
        </Switch>
      </ErrorBoundary>
    </div>
  );
}

export default App;
