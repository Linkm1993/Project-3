import React, {useState} from 'react';
import html2canvas from 'html2canvas';

const renderImage = (action) => {
    html2canvas(document.getElementById('capture'))
    .then (data => {
        let pngFile = data.toDataURL(); 
        if (action === 'save') {
            let a = document.getElementById('downloader'); // For the user to be able to download result image
            a.href = pngFile;
            a.click();
        } else if (action === 'share') {
            console.log('shared to twitter');
            // stuff to twitter
        }

    })
}


export default ({image, text1, textPosition1, textColor1, textSize1, text2, textPosition2,textColor2,textSize2}) => {

    const [shareSave, setShareSave] = useState("hidden")

    return (
        <div id = "canvas" className = "canvas" style = {{position: "relative", height: "310px", width: "414px", margin: "0 auto"}}>
            <div id = 'capture' className = "imageLayer" style = {{position: "absolute", top: 0, left: 0, right: 0, bottom: 0, backgroundImage: `url(${image})`, backgroundSize: "cover", zIndex: "1"}} onClick = {e => setShareSave("visible")}>
            </div>
                <div className = "textLayer" style = {{position: "absolute", left: 0, right: 0, top: `${textPosition1}%`, color: `${textColor1}`, fontWeight: "bolder", fontSize: `${textSize1}px`, zIndex: "99"}}>
                    {text1}
                </div>
                <div className = "textLayer" style = {{position: "absolute", left: 0, right: 0, top: `${textPosition2}%`, color: `${textColor2}`, fontWeight: "bolder", fontSize: `${textSize2}px`, zIndex: "99"}}>
                    {text2}
                </div>
            
        <div id = "canvasOptions" style = {{position: "absolute", top: 0, bottom: 0, left: 0, right: 0, backgroundColor: "rgba(0,0,0,0.8)", visibility: shareSave, zIndex: 3}}>
            
            <p style = {{color: "white", fontWeight: "bolder", marginTop: "30%"}} onClick = {e =>setShareSave("hidden")}>X</p>
            <button onClick = {e => renderImage('share')}>Share</button><button onClick = {e => renderImage('save')}>Save</button>
            <a id = 'downloader' href = '#canvas' download style = {{ visibility: 'hidden', width: 0, height: 0}}>download</a>
        </div>
        </div>
    )
} 