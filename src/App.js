import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Login from '../src/components/pages/Login';
import Registration from '../src/components/pages/Registration';
// Components
import Welcome from "../src/components/pages/Welcome";
import MainPage from "../src/components/pages/MainPage";

function renderPages() {
  if (localStorage.getItem("verified") === "true" ) {
    return (
      <Router>
        <Route exact path="/" component={Welcome} />
        <Route exact path="/MainPage" component={MainPage} />
        <Route exact path="/Registration" component={Registration} />
        <Route exact path="/Login" component={Login} />
      </Router>
)
  } else {
    return (
      <Router>
        <Route exact path = "/" component={Welcome} />
      </Router> 
    )
  }

}

function App() {  
  return (
      <div className = "App">
        {renderPages()}
      </div>
  );
}

export default App;
