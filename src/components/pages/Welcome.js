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
            <Title level={2}>Welcome to the Meme myself and I app!</Title>
            <Title level={3}>Create Download Share!</Title>
            <Button shape="round" onClick={handleClick}>Get Started</Button>
            <Captcah />
        </div>
    );
}

export default Welcome;

