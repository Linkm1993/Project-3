import React, { useState } from "react";
import { useSpring, animated } from 'react-spring';

    const Toggle = () => {
    const [isToggled, setToggle] = useState(false);
    const fade = useSpring( {
    color: isToggled ? 'tomato' : 'green'  
    });

    return (
         <div>
            <animated.h1 style={fade}>Welcome</animated.h1>
            <button onClick={() => setToggle(!isToggled)}>Get Started!</button>
        </div>
    );
}

export default Toggle;