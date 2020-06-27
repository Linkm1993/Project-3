import React from "react";

export function GalleryList({children}) {
  return <ul>{children}</ul>
}

export function GalleryListItem(props) {
  return <img src={props.src} alt={props.title} style = {{backgroundColor: 'rgba(0,0,0,.4)', padding: '5px', borderRadius: '5px', margin: 'auto', width: '150px'}}/>
}
