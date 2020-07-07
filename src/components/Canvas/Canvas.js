import React from 'react';
import html2canvas from 'html2canvas';
import axios from 'axios';
import Uploaded from '../Upload';
import '../../App.css';

const renderImage = (action) => {
	window.scrollTo(0, 0);
	html2canvas(document.getElementById('canvas')).then((data) => {
		let pngFile = data.toDataURL();
		if (action === 'save') {
			let a = document.getElementById('downloader'); // For the user to be able to download result image
			a.href = pngFile;
			a.click();
		} else if (action === 'share') {
			axios.post('/api/insert', {
				image: pngFile
			});
		}
	});
};

export default ({
	image,
	text1,
	font1,
	textPosition1,
	textColor1,
	textSize1,
	text2,
	font2,
	textPosition2,
	textColor2,
	textSize2,
	setImage
	// saturation,
	// blur,
	// invert
}) => {
	return (
		<div className="canvasContainer">
			<div
				id="canvas"
				className="canvas"
				style={{ position: 'relative', height: '310px', width: '414px', margin: '0 auto' }}
			>
				<div
					id="imagelayer"
					className="imageLayer"
					style={{
						position: 'absolute',
						top: 0,
						left: 0,
						right: 0,
						bottom: 0,
						backgroundImage: `url(${image})`,
						// filter: `saturate(${saturation}) blur(${blur}px) invert(${invert}%)`,
						backgroundSize: '100% 100%',
						zIndex: '1'
					}}
				/>
				<div /* div for text 1 */
					className={`textLayer textLayer1 ${font1}`}
					style={{
						position: 'absolute',
						left: 0,
						right: 0,
						top: `${textPosition1}%`,
						color: `${textColor1}`,
						fontWeight: 'bolder',
						fontSize: `${textSize1}px`,
						zIndex: '2'
					}}
				>
					{text1}
				</div>
				<div /* div for text 2 */
					className={`textLayer textLayer1 ${font2}`}
					style={{
						position: 'absolute',
						left: 0,
						right: 0,
						top: `${textPosition2}%`,
						color: `${textColor2}`,
						fontWeight: 'bolder',
						fontSize: `${textSize2}px`,
						zIndex: '2'
					}}
				>
					{text2}
				</div>
			</div>

			<div id="shareSave" aria-label="Canvas Button Group" className="d-flex justify-content-center">
				<button type="button" class="btn btn-secondary mx-2 mt-1" onClick={(e) => renderImage('share')}>
					Save to DB
				</button>
				<button type="button" class="btn btn-secondary mx-2 mt-1" onClick={(e) => renderImage('save')}>
					Download
				</button>
				<Uploaded setImage={setImage} />
				<a id="downloader" href="#canvas" download style={{ visibility: 'hidden', width: 0, height: 0 }}>
					download
				</a>
			</div>
		</div>
	);
};
