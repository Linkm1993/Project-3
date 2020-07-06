import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Login from '../src/components/pages/Login';
import Registration from '../src/components/pages/Registration';

// Components
import Wrapper from "../src/components/Wrapper";
import Welcome from "../src/components/pages/Welcome";
import TestPage2 from "../src/components/pages/TestPage2";

function renderPages() {
  if (localStorage.getItem("verified") === "true" ) {
    return (<Wrapper>
      <Route exact path="/" component={Welcome} />
      <Route exact path="/testpage2" component={TestPage2} />
      <Route exact path="/register" component={Registration} />
			<Route exact path="/login" component={Login} />
    </Wrapper>)
  } else {
    return (<Route exact path = "/" component={Welcome} />)
  }

}

function App() {  
  return (
    <Router>
      <div className = "App">
        {renderPages()}
      </div>
    </Router>
  );
}

export default App;
