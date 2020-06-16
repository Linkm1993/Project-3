import React , {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Canvas from "./components/Canvas";

function App() {

  const [textPosition, setTextPosition] = useState(0);
  return (
    <div className="App">
      <Canvas textPosition = {textPosition} image = "https://www.wallpaperflare.com/static/617/455/618/avatar-the-last-airbender-last-air-bender-wallpaper-preview.jpg" text = "We are going on a trip" />
      <input type="range" id="points" name="points" min="0" max="100" value={textPosition} onChange = {(e) => setTextPosition(e.target.value)} />
    
    </div>


  );
}

export default App;
