import React from "react";

function Footer(props) {
  return (
    <footer className={`footer  ${props.sticky ? "fixed-bottom" : ""} navbar-light bg-light py-2`} >
        <p className="h5 col">Copyright 2020 </p>
    </footer>
  );
}

export default Footer;
