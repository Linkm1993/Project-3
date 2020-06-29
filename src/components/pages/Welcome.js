import React from "react";
import { useHistory } from "react-router-dom";
import Captcah from "../Captcha";
import { Typography,Button } from 'antd';

function Welcome()  {
    const history = useHistory();
    const { Title } = Typography;

    const handleClick = event => {
        event.preventDefault();
        history.push("/testpage2");
    }

    return (
        <div className="Wcont">
            <Title class="h2" level={2}>Meme myself and I app!</Title>
            <Title class="h3" level={3}>Create <span>Download</span> <span className="yellow">Share!</span></Title>
            <Button className="GetStartedb" type="primary" onClick={handleClick}>Get Started</Button>
            <Captcah />
        </div>
    );

    }

export default Welcome;

