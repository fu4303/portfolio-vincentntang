import React, { Component } from 'react';
import vincentBlue from '../../content/common/vincent_blue.jpg';
import patreon from '../../content/thumbnails/patreon.png';
import twitter from '../../content/thumbnails/twitter.png'
import github from '../../content/thumbnails/github.png'
import kofi from '../../content/thumbnails/kofi.png';

export default class UserInfo extends Component {
  render() {
    return (
      <aside className="note">
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

              {/* <div className="flex">
                <a
                  href="https://ko-fi.com/vincentntang"
                  className="donate-button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={kofi} className="coffee-icon" alt="Coffee icon" />
                  Buy me a coffee!
                </a>
                <a
                  className="patreon-button"
                  href="https://www.patreon.com/vincentntang"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={patreon} height="50" width="50" /> Patreon
                </a>
              </div> */}
              <div className="flex">
                <a
                  href="https://twitter.com/intent/follow?original_referer=http%3A%2F%2Flocalhost%3A8000%2F&ref_src=twsrc%5Etfw&region=follow_link&screen_name=vincentntang&tw_p=followbutton"
                  className="donate-button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {/* <img src={twitter} className="coffee-icon" alt="Coffee icon" /> */}
                  Follow on Twitter
                </a>
                <a
                  className="patreon-button"
                  href="https://github.com/vincentntang/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {/* <img src={github} height="50" width="50" />  */}
                  Follow on Github
                </a>
              </div>
            </div>
          </div>
        </div>
      </aside>
    );
  }
}
