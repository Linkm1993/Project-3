import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';


// Components
import Welcome from "../src/components/pages/Welcome";
import MainPage from "../src/components/pages/MainPage";

function renderPages() {
  if (localStorage.getItem("verified") === "true" ) {
    return (
      <Router>
        <Route exact path="/" component={Welcome} />
        <Route exact path="/MainPage" component={MainPage} />
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
