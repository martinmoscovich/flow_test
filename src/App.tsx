import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./About";
import "./App.css";
import External from "./External";
import Home from "./Home";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div>
        <div className="menu">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/external">External</Link>
        </div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/external">
            <External />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
