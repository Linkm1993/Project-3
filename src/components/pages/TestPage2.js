import React, { useState } from 'react';
import Canvas from '../Canvas/Canvas';
import API from '../../utils/api';
import { GalleryList, GalleryListItem } from '../GalleryList';
import Upload from '../Upload';
import OptionsPage from '../Canvas/Options';
import Wrapper from "../Wrapper"

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

	window.onload = function handleMemes() {
		console.log('Handling Memes');
		API.getMemes().then((res) => setMemes(res.data)).catch((err) => console.log(err));
	};

	const handleClick = (e) => {
		setImage(e.target.src)
	}
		
	return (
		//header
		<Wrapper>
		<div className="container">
			<div className="row">
				{/* canvas component */}
				<div className="col-md-9">
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
				</div>
				{/* canvas options */}
				<div className="col-md-3">
					<OptionsPage options={options} setOptions={setOptions} />
				</div>
			</div>
			<div className="row">
				<div className="gallery col-md-12" style={{ width: '414px' }}>
					{!memes.length ? (
						<h1> No Memes to Display</h1>
					) : (
						<GalleryList>
							{memes.map((meme) => {
								return <GalleryListItem src={meme.image} title={meme.title} image={image} handleClick={handleClick} />;
							})}
						</GalleryList>
					)}
				</div>
			</div>
		</div>
		</Wrapper>
		// footer
	);
}

export default TestPage2;
