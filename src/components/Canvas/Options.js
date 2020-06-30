import React from 'react';

export default ({ options, setOptions }) => {
	return (
		<div id="Options">
			<div id="text1div" className="textOptionsDiv">
				<input
					type="text"
					value={options.text1}
					onChange={(e) => setOptions({ ...options, text1: e.target.value })}
				/>{' '}
				<input
					type="color"
					id="head"
					name="head"
					value={options.textColor1}
					onChange={(e) => setOptions({ ...options, textColor1: e.target.value })}
				/>
				<br /> Size:{' '}
				<input
					type="range"
					min="12"
					max="100"
					value={options.textSize1}
					onChange={(e) => setOptions({ ...options, textSize1: e.target.value })}
				/>
				<br /> Position:{' '}
				<input
					type="range"
					min="0"
					max="100"
					value={options.textPosition1}
					onChange={(e) => setOptions({ ...options, textPosition1: e.target.value })}
				/>
			</div>

			<div id="text2div" className="textOptionsDiv">
				<input
					type="text"
					value={options.text2}
					onChange={(e) => setOptions({ ...options, text2: e.target.value })}
				/>{' '}
				<input
					type="color"
					id="head"
					name="head"
					value={options.textColor2}
					onChange={(e) => setOptions({ ...options, textColor2: e.target.value })}
				/>
				<br /> Size:{' '}
				<input
					type="range"
					min="12"
					max="100"
					value={options.textSize2}
					onChange={(e) => setOptions({ ...options, textSize2: e.target.value })}
				/>
				<br /> Position:{' '}
				<input
					type="range"
					min="0"
					max="100"
					value={options.textPosition2}
					onChange={(e) => setOptions({ ...options, textPosition2: e.target.value })}
				/>
			</div>

			<div id="imagediv" className="imageOptionsDiv">
				<strong>Image Options:</strong>
				<br /> Saturation:{' '}
				<input
					type="range"
					min="0"
					max="4"
					value={options.saturation}
					onChange={(e) => setOptions({ ...options, saturation: e.target.value })}
				/>
				<br /> Blur:{' '}
				<input
					type="range"
					min="0"
					max="10"
					value={options.blur}
					onChange={(e) => setOptions({ ...options, blur: e.target.value })}
				/>
				<br /> Invert:{' '}
				<input
					type="range"
					min="0"
					max="100"
					value={options.invert}
					onChange={(e) => setOptions({ ...options, invert: e.target.value })}
				/>
			</div>
		</div>
	);
};
