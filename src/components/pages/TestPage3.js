import React from "react";
import { useHistory } from "react-router-dom";


function TestPage3()  {
    const history = useHistory();
    
    const handleClick = event => {
        event.preventDefault();
        history.push("/testpage2");
    }

    return (
        <div>
            <p>This is my test page 3 </p>
            <button onClick={handleClick}>Switch to page 2</button>
        </div>
    );
}

export default TestPage3;
