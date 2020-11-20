import React, { Component } from 'react';
import vincentBlue from '../../content/common/vincent_blue.jpg';
import patreon from '../../content/thumbnails/patreon.png';
import twitter from '../../content/thumbnails/twitter.png'
import github from '../../content/thumbnails/github.png'
import kofi from '../../content/thumbnails/kofi.png';

export default class UserInfo extends Component {
  render() {
    return (
      <>
        <div className="hero-full">
          <div className="container hero-container">
            <div className="image-left">
              <img src={vincentBlue} alt="Vincent Portrait"/>
            </div>
            <div className="content-right">
              <h1>Hi <span className="hand-wave">👋</span></h1>
              <img className="display-right-float" src={vincentBlue} alt="Vincent Portrait"/>
              <p>I'm Vincent Tang, a web developer specializing in modern Javascript. This website is my digital garden of notes on backend, frontend, and devops! I also run a coding podcast called <a target="_blank" rel="noreferrer" href="https://codechefs.dev">Code Chefs</a></p>
              <a className="button mr-2" target="_blank" rel="noreferrer" href="https://tinyletter.com/vincentntang">Join Newsletter</a>
              <a className="button mr-2" target="_blank" rel="noreferrer" href="https://twitter.com/vincentntang">Twitter</a>
              <a className="button" target="_blank" rel="noreferrer" href="https://github.com/vincentntang">Github</a>
            </div>
          </div>
        </div>
        {/* <aside className="note">
          <div className="container note-container">
            <div className="flex-author">
              <div className="flex-avatar">
                <img className="avatar" src={vincentBlue} alt="Vincent Tang" />
              </div>
              <div>
                <p>
                  {`I'm Vincent, a web developer specializing in modern JavaScript. I make
                open source coding projects and write free, quality articles and tutorials that help
                developers daily`}
                </p>
                <div className="flex">
                  <a
                    href="https://twitter.com/intent/follow?original_referer=http%3A%2F%2Flocalhost%3A8000%2F&ref_src=twsrc%5Etfw&region=follow_link&screen_name=vincentntang&tw_p=followbutton"
                    className="donate-button"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Follow on Twitter
                  </a>
                  <a
                    className="patreon-button"
                    href="https://github.com/vincentntang/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Follow on Github
                  </a>
                </div>
              </div>
            </div>
          </div>
        </aside> */}
      </>
    );
  }
}
