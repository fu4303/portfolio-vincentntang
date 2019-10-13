import React, { Component } from 'react';
import { Link } from 'gatsby';
import NewsletterForm from './NewsletterForm';

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer-inside container d-flex justify-content-space-between">
          <NewsletterForm/>
          {/* <a
            href="https://ko-fi.com/vincentntang"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ko-Fi
          </a> */}
          {/* <a
            href="https://patreon.com/vincentntang"
            target="_blank"
            rel="noopener noreferrer"
          >
            Patreon
          </a> */}
          <div className="d-flex">
            <a
              href="https://vincentntang.com/contact"
              target="_blank"
              rel="noopener noreferrer"
            >
              Newsletter
            </a>        
            <a
              href="https://www.vincentntang.com/rss.xml"
              target="_blank"
              rel="noopener noreferrer"
            >
              RSS
            </a>
            <a
              href="https://github.com/vincentntang/vincentntang.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              View source
            </a>
          </div>
          <div className="d-flex">
            <a>Right aligned</a>
          </div>
        </div>
      </footer>
    );
  }
}
