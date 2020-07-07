import React from "react";
import { useHistory } from "react-router-dom";
import Captcah from "../Captcha/Captcha";


function Welcome()  {
    const history = useHistory();

    const handleClick = event => {
        event.preventDefault();
        history.push("/MainPage");
    }

    return (
        <div className='container'>
            <div className='row d-flex justify-content-center'>
                    <div className='jumbotron'>
                        <h1>Meme, Myself, and I!</h1>
                        <h2>Create, Download, Share</h2>
                        <div className='d-flex justify-content-center'>
                            <div className='col-md-6'>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non tellus lacinia, ultricies magna non, fringilla justo. Nullam ut consequat lacus, a aliquet ex. Cras a nisl finibus, commodo eros at, dictum sapien. Maecenas a elit fringilla mauris pellentesque ornare. Sed quis ligula pellentesque metus euismod lacinia ut vitae lectus. Cras blandit sed risus tristique tempor. Suspendisse bibendum nulla et dapibus pretium. Phasellus fermentum gravida tortor, ut posuere quam ullamcorper a. Integer quis enim lacus. Nulla pharetra ligula at lorem ultricies porttitor.</p>
                            </div>
                            <div className='col-md-6'>
                                <img src='https://i.redd.it/qblm7745ex921.jpg'></img>
                            </div>
                        </div>
                        <div className='d-flex justify-content-center'>
                        <h3>Verify and start memeing</h3>
                        </div>    
                        <div className='d-flex justify-content-center'>
                            <Captcah />
                        </div>

                    </div>
            </div>
        </div>
    );

    }

export default Welcome;

