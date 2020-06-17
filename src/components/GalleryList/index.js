import React from "react";

export function GalleryList({ children}) {
  return <ul>{children}</ul>
}

export function GalleryListItem(props) {
  return (
    <img href={props.href} alt={props.title} />
  )
}
