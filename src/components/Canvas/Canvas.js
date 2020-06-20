import React, {useState} from 'react';
import html2canvas from 'html2canvas';




export default ({image, text, textPosition}) => {

    const [shareSave, setShareSave] = useState("hidden")

    return (
        <div id = "canvas" className = "canvas" style = {{position: "absolute", minHeight: "310px", minWidth: "414px", margin: "0 auto"}}>
            <div className = "imageLayer" style = {{position: "absolute", top: 0, left: 0, right: 0, bottom: 0, backgroundImage: `url(${image})`, backgroundSize: "cover", zIndex: "1"}} onClick = {e => setShareSave("visible")}>
                <div className = "textLayer" style = {{position: "absolute", left: 0, right: 0, top: `${textPosition}%`, color: "white", fontWeight: "bolder", zIndex: "2"}}>
                    {text}
                </div>
            </div>
        <div id = "canvasOptions" style = {{position: "absolute", top: 0, bottom: 0, left: 0, right: 0, backgroundColor: "rgba(0,0,0,0.8)", visibility: shareSave, zIndex: 3}}>
            
            <p style = {{color: "white", fontWeight: "bolder", marginTop: "30%"}} onClick = {e =>setShareSave("hidden")}>X</p>
            <button>Share</button><button>Save</button>
        </div>
        </div>
    )
} 