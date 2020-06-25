import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import Canvas from "../Canvas/Canvas";
import API from "../../utils/api"
import {GalleryList, GalleryListItem} from "../GalleryList"
import Upload from "../Upload"
import Twitter from "react-twitter-auth"
import html2canvas from "html2canvas";
import OptionsPage from "../Canvas/Options"

function TestPage2()  {
    const history = useHistory();
    const [memes, setMemes] = useState([])
    const [options, setOptions] = useState({text1: "Going on a trip", textPosition1: 0, textColor1: "#FFFFFF", textSize1: 16, text2: "", textPosition2: 0, textColor2: "#FFFFFF", textSize2: 16}) 
      
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

            <Canvas textSize1 = {options.textSize1} textPosition1 = {options.textPosition1} image = "/images/modenProblems.jpg" text1 = {options.text1} textColor1 = {options.textColor1} textSize2 = {options.textSize2} textPosition2 = {options.textPosition2} text2 = {options.text2} textColor2 = {options.textColor2} />
            <OptionsPage options = {options} setOptions = {setOptions} /> 
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

        <Upload />
        </div>
    );
}

export default TestPage2;
