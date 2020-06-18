import React from "react";

export function GalleryList({children}) {
  return <ul>{children}</ul>
}

export function GalleryListItem(props) {
  return <img src={props.src} alt={props.title} />
}
