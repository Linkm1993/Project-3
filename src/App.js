import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Wrapper from "../src/components/Wrapper";
import TestPage1 from "../src/components/pages/TestPage1";
import TestPage2 from "../src/components/pages/TestPage2";
import Canvas from "./components/Canvas";

function App() {  
  const [textPosition, setTextPosition] = useState(0);
  return (
    <Router>
      <div className = "App">
         <Canvas textPosition = {textPosition} image = "https://www.wallpaperflare.com/static/617/455/618/avatar-the-last-airbender-last-air-bender-wallpaper-preview.jpg" text = "We are going on a trip" />
         <input type="range" id="points" name="points" min="0" max="100" value={textPosition} onChange = {(e) => setTextPosition(e.target.value)} />

        <Wrapper>
          <Route exact path="/" component={TestPage1} />
          <Route exact path="/testpage2" component={TestPage2} />
        </Wrapper>
      </div>
    </Router>

  );
}

export default App;
