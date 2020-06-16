import React from "react";
import { useHistory } from "react-router-dom";

function TestPage2()  {
    const history = useHistory();
      
    function handleClick () {
        history.push("/");
    }

        return (
            <div>
                <p>This is my test text2 </p>
                <button onClick={handleClick}>Switch to page 1</button>
            </div>
        );
}

export default TestPage2;
