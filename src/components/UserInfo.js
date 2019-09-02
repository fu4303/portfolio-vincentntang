import React, { Component } from 'react';
import vincent from '../../content/common/vincentwarm.jpg';
import patreon from '../../content/thumbnails/patreon.png';
import kofi from '../../content/thumbnails/kofi.png';

export default class UserInfo extends Component {
  render() {
    return (
      <aside className="note">
        <div className="container note-container">
          <div className="flex-author">
            <div className="flex-avatar">
              <img className="avatar" src={vincent} alt="Vincent Tang" />
            </div>
            <div>
              <p>
                {`I'm Vincent, a web developer specializing in modern JavaScript. I make
              open source coding projects and write free, quality articles and tutorials that help
              developers daily`}
              </p>

              <div className="flex">
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
              </div>
            </div>
          </div>
        </div>
      </aside>
    );
  }
}
