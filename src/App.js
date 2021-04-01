import React from "react";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Projects from "./Components/Projects";
function App() {
  return (
    <Router>
      <div className="app app__container">
        <div className="container app__row">
          <div className="row">
            <div className="col-lg-3">
              <Sidebar></Sidebar>
            </div>
            <div className="col-lg-9 app__main-content">
              <Navbar />
              <Switch>
                <Route exact path="/">
                  <About />
                </Route>

                <Route path="/resume">
                  <Resume />
                </Route>

                <Route path="/projects">
                  <Projects />
                </Route>
                <Route>
                  <Redirect to="/" />
                </Route>
                
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
