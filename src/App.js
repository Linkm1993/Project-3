import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Wrapper from "../src/components/Wrapper";
import TestPage1 from "../src/components/pages/TestPage1";
import TestPage2 from "../src/components/pages/TestPage2";

function App() {
  

  
  return (
    <Router>
      <div>
        <Wrapper>
          <Route exact path="/" component={TestPage1} />
          <Route exact path="/testpage2" component={TestPage2} />
        </Wrapper>
      </div>
    </Router>
  );
}

export default App;
