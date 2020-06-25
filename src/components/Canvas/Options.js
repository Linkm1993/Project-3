import React from 'react';

export default ({options, setOptions}) => {

    return (
        <div className = "Options" style = {{ margin: '5px auto', width: "414px", }}>
            <div id = 'text1div' style = {{backgroundColor: 'rgba(0,0,0,.4)', padding: '5px', borderRadius: '5px'}}>
            <input type = 'text' style = {{width: '325px'}} value = {options.text1} onChange = {(e) => setOptions({...options, text1: e.target.value})}></input> <input type="color" id="head" name="head" value={options.textColor1} onChange = {(e) => setOptions({...options, textColor1: e.target.value})}></input>
            <br /> Size: <input type="range" min="12" max="100" style = {{width: '70%'}}value={options.textSize1} onChange = {(e) => setOptions({...options, textSize1: e.target.value})} />
            <br /> Position: <input type="range" min="0" max="100" style = {{width: '70%'}}value={options.textPosition1} onChange = {(e) => setOptions({...options, textPosition1: e.target.value})} />
            </div>

            <div id = 'text2div' style = {{backgroundColor: 'rgba(0,0,0,.4)', padding: '5px', borderRadius: '5px', marginTop: '5px'}}>
            <input type = 'text' style = {{width: '325px'}} value = {options.text2} onChange = {(e) => setOptions({...options, text2: e.target.value})}></input> <input type="color" id="head" name="head" value={options.textColor2} onChange = {(e) => setOptions({...options, textColor2: e.target.value})}></input>
            <br /> Size: <input type="range" min="12" max="100" style = {{width: '70%'}}value={options.textSize2} onChange = {(e) => setOptions({...options, textSize2: e.target.value})} />
            <br /> Position: <input type="range" min="0" max="100" style = {{width: '70%'}}value={options.textPosition2} onChange = {(e) => setOptions({...options, textPosition2: e.target.value})} />
            </div>
        </div>
    )
}