import React from "react";
import { useHistory } from "react-router-dom";
import WelcomeImage from "";

function Welcome()  {
    const history = useHistory();
      
    function handleClick () {
        history.push("/testpage2");
    }

const headerStyle = {
  "backgroundImage": `url(${WelcomeImage})`,
  "maxWidth": "100vw",
  height: "calc(100vw * .43333)",
  "backgroundSize": "cover",
  position: "relative"
}

    return (
        <header style={headerStyle}>
            <h1>Memo Generator</h1>
            <p>Create..Download..Share</p>
            <button onClick={handleClick}>Get Started!</button>
        </header>
    );
}

export default Welcome;
