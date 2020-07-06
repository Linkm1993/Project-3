import React from 'react';
// import ReactDOM from "react-dom"

function Upload({ setImage }) {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const uploadedImage = React.useRef(null);
	const imageUploader = React.useRef(null);

	const handleImageUpload = (event) => {
		const [ file ] = event.target.files;
		if (file) {
			const reader = new FileReader();
			const { current } = uploadedImage;
			current.file = file;
			reader.onload = (event) => {
				current.src = event.target.result;
				setImage(event.target.result);
			};
			reader.readAsDataURL(file);
		}
	};
	return (
		<div>
			<input
				type="file"
				accept="image/*"
				onChange={handleImageUpload}
				ref={imageUploader}
				style={{
					display: 'none'
				}}
			/>
				<img
					alt="upload location"
					ref={uploadedImage}
					style={{
						display: 'none'
					}}
				/>

			<button onClick={() => imageUploader.current.click()}>Upload Image</button>
		</div>
	);
}

export default Upload;
