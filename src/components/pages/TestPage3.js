import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import API from "../../utils/api"
import {GalleryList, GalleryListItem} from "../GalleryList"

function TestPage3()  {
    const history = useHistory();
    const [memes, setMemes] = useState([])
    
    const handleClick = event => {
        event.preventDefault();
        history.push("/testpage2");
    }

    // function to make a call to the database, return memes, and store in state
    const handleMemes = event => {
        event.preventDefault();
        console.log("Handling Memes")
        API.getMemes()
            .then(res =>setMemes(res.data))
            .catch(err => console.log(err))
    }

    return (
        <div>
            <p>This is my test text3 </p>
            <button onClick={handleClick}>Switch to page 2</button>
            <button onClick={handleMemes}>Load Memes</button>
            {!memes.length ? ( 
                <h1> No Memes to Display</h1>
            ) : (
                <GalleryList>
                    {memes.map(meme => { 
                        return <GalleryListItem  
                            src={meme.image} 
                            title={meme.title} /> 
                        }) 
                    })
                </GalleryList>
            )}
        </div>
    );
}

export default TestPage3;
