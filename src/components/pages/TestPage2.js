import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import Canvas from "../Canvas/Canvas";

function TestPage2()  {
    const history = useHistory();
    const [textPosition, setTextPosition] = useState(0);
      
    const handleClick = event => {
        event.preventDefault();
        history.push("/testpage3");
    }
        return (
            <div className="App">
                <Canvas textPosition = {textPosition} image = "https://www.wallpaperflare.com/static/617/455/618/avatar-the-last-airbender-last-air-bender-wallpaper-preview.jpg" text = "We are going on a trip" />
                <input type="range" id="points" name="points" min="0" max="100" value={textPosition} onChange = {(e) => setTextPosition(e.target.value)} />
                <p>This is my test text2 </p>
                <button onClick={handleClick}>Switch to page 3</button>
            </div>
        );
}

export default TestPage2;
