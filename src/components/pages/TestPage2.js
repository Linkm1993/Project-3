import React, { useState } from 'react';
import Canvas from '../Canvas/Canvas';
import API from '../../utils/api';
import { GalleryList, GalleryListItem } from '../GalleryList';
import Upload from '../Upload';
import Twitter from 'react-twitter-auth';
import OptionsPage from '../Canvas/Options';

function TestPage2() {
	const [ memes, setMemes ] = useState([]);
	const [ options, setOptions ] = useState({
		text1: 'Going on a trip',
		textPosition1: 0,
		textColor1: '#FFFFFF',
		textSize1: 16,
		text2: '',
		textPosition2: 0,
		textColor2: '#FFFFFF',
		textSize2: 16,
		saturation: 1,
		blur: 0,
		invert: 0
	});
	const [ image, setImage ] = useState('/images/modenProblems.jpg');

	const handleMemes = (event) => {
		event.preventDefault();
		console.log('Handling Memes');
		API.getMemes().then((res) => setMemes(res.data)).catch((err) => console.log(err));
	};
	return (
		<div className="App">
			<div className="gallery" style={{ width: '414px' }}>
				<button onClick={Twitter}>Twitter</button>
				<img id="resultImage" alt="result will render here" />
				<button onClick={handleMemes}>Load Memes</button>
				{!memes.length ? (
					<h1> No Memes to Display</h1>
				) : (
					<GalleryList>
						{memes.map((meme) => {
							return <GalleryListItem src={meme.image} title={meme.title} image={image} />;
						})})
					</GalleryList>
				)}

				<Upload setImage={setImage} />
			</div>


			<Canvas
				textSize1={options.textSize1}
				textPosition1={options.textPosition1}
				image={image}
				text1={options.text1}
				textColor1={options.textColor1}
				textSize2={options.textSize2}
				textPosition2={options.textPosition2}
				text2={options.text2}
				textColor2={options.textColor2}
				saturation={options.saturation}
				blur={options.blur}
				invert={options.invert}
			/>
			<OptionsPage options={options} setOptions={setOptions} />
		</div>
	);
}

export default TestPage2;
