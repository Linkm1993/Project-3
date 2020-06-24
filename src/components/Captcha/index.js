import React, { Component } from 'react';
import Recaptcha from 'react-recaptcha';

class Captcha extends Component {
  constructor(props) {
    super(props)

    this.handleSubscribe = this.handleSubmit.bind(this);
    this.recaptchaLoaded = this.recaptchaLoaded.bind(this);
    this.verifyCallback = this.verifyCallback.bind(this);

    this.state = {
      isVerified: false
    }
  }

  recaptchaLoaded() {
    console.log('Captcha is running!');
  }

  handleSubmit() {
    if (this.state.isVerified) {
      window.location.href='/TestPage2'
    } else {
      alert('Be gone bot!');
    }
  }

  verifyCallback(response) {
    if (response) {
      this.setState({
        isVerified: true
      })
    }
  }

  render() {
    return (
        <div className="recaptcha">
          <Recaptcha
            sitekey="6LdbQaUZAAAAAI9_76pHoxqJ-QSmx9ahpIWHbkQq"
            render="explicit"
            onloadCallback={this.recaptchaLoaded}
            verifyCallback={this.verifyCallback}
          />
        <button className="Route" onClick={this.handleSubscribe}>Verify</button>
        </div>
    );
  }
}

export default Captcha;