import React from 'react';

export default ({image, text, textPosition}) => {

    return (
        <div className = "canvas" style = {{position: "absolute", minHeight: "310px", minWidth: "414px", backgroundColor: "black", margin: "0 auto"}}>
            <div className = "imageLayer" style = {{position: "absolute", top: 0, left: 0, right: 0, bottom: 0, backgroundImage: `url(${image})`, backgroundSize: "cover"}}>
                <div className = "textLayer" style = {{position: "absolute", left: 0, right: 0, top: `${textPosition}%`}}>
                    {text}
                </div>
            </div>
        </div>
    )
}