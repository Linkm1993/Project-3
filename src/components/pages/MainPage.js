import React, { useState } from 'react';
import Canvas from '../Canvas/Canvas';
import API from '../../utils/api';
import { GalleryList, GalleryListItem } from '../GalleryList';
import OptionsPage from '../Canvas/Options';
import Wrapper from "../Wrapper"
import Header from "../Header"
import Footer from "../Footer"

function MainPage() {
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
		<div>
			<Header/>
			<Wrapper>
			<div className="container" id="top-container">
				<div className="row mt-4">
					{/* canvas component - need to figure out how to center it. Start with Row and work backwards?*/}
					<div className="col-md-9">
						<Canvas
							textSize1={options.textSize1}
							textPosition1={options.textPosition1}
							image={image}
							setImage={setImage}
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
						{/* need to figure out how to center within column */}
						<OptionsPage options={options} setOptions={setOptions} />
					</div>
				</div>
			</div>
			<div className="container">
				
				<div className="row mt-4">
					{/* need to figure out how to center within row/column */}
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
			<Footer sticky="true" />
		</div>
	);
}

export default MainPage;
