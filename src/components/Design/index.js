import React from "react";
import TweenOne from 'rc-tween-one';
import PathPlugin from 'rc-tween-one/lib/plugin/PathPlugin';

TweenOne.plugins.push(PathPlugin);
const duration = 7000;
const ease = 'easeInOutSine';

const loop = {
  yoyo: true,
  repeat: -1,
  duration,
  ease,
};
const animate = {
  redSquare: {
    ...loop,
    y: 15,
    duration: 3000,
    delay: 100,
  },
  redSquare1: {
    ...loop,
    y: 15,
    duration: 4000,
    delay: 200,
  },
  redSquare2: {
    ...loop,
    y: 15,
    duration: 5000,
    delay: 300,
  },
  redSquare3: {
    ...loop,
    y: 12,
    duration: 4000,
    delay: 200,
  },
  track: {
    ...loop,
    rotate: 20,
  },
};


export default function BannerImage() {
  return (
    <div className="wrapper-design">
      <svg width="482px" height="500px" viewBox="0 0 482 500">
        <defs>
          <path
            d="M151,55 C129.666667,62.6666667 116,74.3333333 110,90 C104,105.666667 103,118.5 107,128.5 L225.5,96 C219.833333,79 209.666667,67 195,60 C180.333333,53 165.666667,51.3333333 151,55 L137,0 L306.5,6.5 L306.5,156 L227,187.5 L61.5,191 C4.5,175 -12.6666667,147.833333 10,109.5 C32.6666667,71.1666667 75,34.6666667 137,0 L151,55 Z"
            id="mask"
          />
        </defs>
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" transform="translate(0, 30)">
          <g id="Group-13" transform="translate(0.000000, 41.000000)">
            <TweenOne component="g" animation={animate.redSquare}>
              <rect
                stroke="#F5222D"
                strokeWidth="2.6"
                transform="translate(184.000000, 18.000000) rotate(8.000000) translate(-184.000000, -18.000000) "
                x="300.8"
                y="200.8"
                width="30.4"
                height="30.4"
                rx="7.6"
              />
            </TweenOne>
          </g>
          <g id="Group-14" transform="translate(0.000000, 41.000000)">
            <TweenOne component="g" animation={animate.redSquare1}>
              <rect
                stroke="#F5222D"
                strokeWidth="1.6"
                transform="translate(184.000000, 18.000000) rotate(8.000000) translate(-184.000000, -18.000000) "
                x="10.8"
                y="50.8"
                width="30.4"
                height="30.4"
                rx="7.6"
              />
            </TweenOne>
          </g>
          <g id="Group-15" transform="translate(0.000000, 41.000000)">
            <TweenOne component="g" animation={animate.redSquare2}>
              <rect
                stroke="#F5222D"
                strokeWidth="2.6"
                transform="translate(184.000000, 18.000000) rotate(8.000000) translate(-184.000000, -18.000000) "
                x="150.8"
                y="100.8"
                width="50.4"
                height="50.4"
                rx="8.6"
              />
            </TweenOne>
          </g>
          <g id="Group-16" transform="translate(0.000000, 41.000000)">
            <TweenOne component="g" animation={animate.redSquare3}>
              <rect
                stroke="#F5222D"
                strokeWidth="1.6"
                transform="translate(184.000000, 20.000000) rotate(13.000000) translate(-184.000000, -18.000000) "
                x="500.8"
                y="200.8"
                width="30.4"
                height="30.4"
                rx="5.6"
              />
            </TweenOne>
          </g>
          
           
        </g>
      </svg>
    </div>
  );
}