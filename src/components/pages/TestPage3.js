import React from "react";
import { useHistory } from "react-router-dom";

function TestPage3()  {
    const history = useHistory();
      
    function handleClick () {
        history.push("/testpage2");
    }

        return (
            <div>
                <p>This is my test text3 </p>
                <button onClick={handleClick}>Switch to page 2</button>
            </div>
        );
}

export default TestPage3;
