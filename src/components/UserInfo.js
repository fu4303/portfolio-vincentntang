import React, { Component } from 'react';
import Img from 'gatsby-image';

export default class UserInfo extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const vincentBlue = this.props.gatsbyImg;
    return (
      <div className="hero-full">
        <div className="container hero-container">
          <div className="image-left">
            <Img key={1} fixed={vincentBlue.node.fixed}/>
          </div>
          <div className="content-right">
            <h1 className="text-36">Hi <span className="hand-wave">👋</span></h1>
            <Img className="display-right-float" key={2} fixed={vincentBlue.node.fixed}/>
            <p>I'm Vincent Tang, a web developer specializing in modern Javascript. This website is my digital garden of notes on backend, frontend, and devops! I also run a coding podcast called <a target="_blank" rel="noreferrer" href="https://codechefs.dev">Code Chefs</a></p>
            <a className="button mr-2" target="_blank" rel="noreferrer" href="https://tinyletter.com/vincentntang">Join Newsletter</a>
            <a className="button mr-2" target="_blank" rel="noreferrer" href="https://twitter.com/vincentntang">Twitter</a>
            <a className="button" target="_blank" rel="noreferrer" href="https://github.com/vincentntang">Github</a>
          </div>
        </div>
      </div>
    );
  }
}