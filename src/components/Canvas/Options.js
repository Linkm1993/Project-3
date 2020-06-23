import React from 'react';

export default ({options, setOptions}) => {

    return (
        <div className = "Options" style = {{ display: "flex", flexDirection: "column-reverse"}}>
            <input type="range" id="points" name="points" min="0" max="100" value={options.textPosition} onChange = {(e) => setOptions({...options, textPosition: e.target.value})} />
            <input type="color" id="head" name="head" value={options.textColor} onChange = {(e) => setOptions({...options, textColor: e.target.value})}></input>
        </div>
    )
}