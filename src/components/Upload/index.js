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
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center'
			}}
		>
			<input
				type="file"
				accept="image/*"
				onChange={handleImageUpload}
				ref={imageUploader}
				style={{
					display: 'none'
				}}
			/>
			<div
				style={{
					height: '60px',
					width: '60px',
					border: '2px dashed black'
				}}
				// onClick={() => imageUploader.current.click()}
			>
				<img
					alt="upload location"
					ref={uploadedImage}
					style={{
						width: '100%',
						// height: "60px",
						position: 'relative'
					}}
				/>
			</div>

			<button onClick={() => imageUploader.current.click()}>click here</button>
		</div>
	);
}

export default Upload;
