import React from "react";
// import { listStyleImage } from "html2canvas/dist/types/css/property-descriptors/list-style-image";

export function GalleryList({children}) {
  return <ul>{children}</ul>
}

export function GalleryListItem({handleClick, src, title}) {
  
  return <img src={src} onClick={handleClick} alt={title} style = {{backgroundColor: 'rgba(0,0,0,.4)', padding: '5px', borderRadius: '5px', margin: 'auto', width: '150px'}}/>
}
