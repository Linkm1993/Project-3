import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

// Components
import Welcome from "../src/components/pages/Welcome";
import TestPage2 from "../src/components/pages/TestPage2";

function renderPages() {
  if (localStorage.getItem("verified") === "true" ) {
    return (
      <Router>
        <Route exact path="/" component={Welcome} />
        <Route exact path="/testpage2" component={TestPage2} />
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
