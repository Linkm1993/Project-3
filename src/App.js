import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

// Components
import Wrapper from "../src/components/Wrapper";
import TestPage1 from "../src/components/pages/TestPage1";
import TestPage2 from "../src/components/pages/TestPage2";
import TestPage3 from "../src/components/pages/TestPage3";

function App() {  
  return (
    <Router>
      <div className = "App">
        <Wrapper>
          <Route exact path="/" component={TestPage1} />
          <Route exact path="/testpage2" component={TestPage2} />
          <Route exact path="/testpage3" component={TestPage3} />
        </Wrapper>
        </div>
    </Router>
  );
}

export default App;
