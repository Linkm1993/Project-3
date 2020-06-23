import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import Canvas from "../Canvas/Canvas";
import API from "../../utils/api"
import {GalleryList, GalleryListItem} from "../GalleryList"
import Twitter from "react-twitter-auth"
import html2canvas from "html2canvas";
import OptionsPage from "../Canvas/Options"

function renderImage () {
    let capture = document.getElementById("canvas")
    let pngData;
    html2canvas(capture).then(canvas => {
      pngData = canvas.toDataURL();
      document.querySelector("#resultImage").src = pngData;
    });
    }

function TestPage2()  {
    const history = useHistory();
    const [memes, setMemes] = useState([])
    const [options, setOptions] = useState({textPosition: 0, textColor: "#FFFFFF"}) 
      
    const handleClick = event => {
        event.preventDefault();
        history.push("/testpage3");
    }

    const handleMemes = event => {
        event.preventDefault();
        console.log("Handling Memes")
        API.getMemes()
            .then(res =>setMemes(res.data))
            .catch(err => console.log(err))
    }
    return (
        <div className="App">
            <p>This is my test text2 </p>

            <Canvas textPosition = {options.textPosition} image = "/images/modenProblems.jpg" text = "We are going on a trip" textColor = {options.textColor} />
            <OptionsPage options = {options} setOptions = {setOptions} /> 
             <button onClick = {() => renderImage()} >Render</button>
            <button onClick = {Twitter}>Twitter</button>
            <img id = "resultImage" alt = "result will render here" />
            <button onClick={handleClick}>Switch to page 3</button>

            <button onClick={handleMemes}>Load Memes</button>
        {!memes.length ? ( 
            <h1> No Memes to Display</h1>
        ) : (
            <GalleryList>
                {memes.map(meme => { 
                    return (
                        <GalleryListItem  
                            src={meme.image} 
                            title={meme.title} 
                        />) 
                    }) 
                })
        
            </GalleryList>
        )}
        </div>
    );
}

export default TestPage2;
