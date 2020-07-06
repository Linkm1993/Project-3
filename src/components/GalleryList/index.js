import React from "react";
import "./styles.css"

export function GalleryList({children}) {
  return (
    <ul className="gallery-group container">
      <div className="row text-center">
      {children}
      </div>
    </ul>
  )
}

export function GalleryListItem({handleClick, handleMemes, src, title}) {
  return <div className="col-xs-4">
        <img src={src} 
          className="gallery-row"
          onLoad={handleMemes} 
          onClick={handleClick} 
          alt={title} 
          style = {{backgroundColor: 'rgba(0,0,0,.4)', 
                padding: '5px', 
                borderRadius: '5px', 
                margin: 'auto', 
                width: '150px'}}/>
        </div>
}
