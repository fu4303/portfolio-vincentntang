import React, { Component } from 'react'

export default class NewsletterForm extends Component {
  render() {
    return (
      <>
        <button>
          <a target="_blank" rel="noreferrer" href="https://tinyletter.com/vincentntang">Join Newsletter</a>
        </button>
        {/* <form  action="https://tinyletter.com/vincentntang" 
      method="post" target="popupwindow" 
      onsubmit="window.open('https://tinyletter.com/vincentntang', 'popupwindow', 'scrollbars=yes,width=800,height=600');return true"><p>
        <label for="tlemail">Enter your email address</label></p><p><input type="text"  name="email" id="tlemail" />
        </p><input type="hidden" value="1" name="embed"/><input type="submit" value="Subscribe" /><p></p></form> */}
      {/* <div className="centered-iframe">
        <iframe
          width="480"
          height="180"
          src="https://vincentntang.substack.com/embed"
          frameborder="0"
          scrolling="no"
        ></iframe>
      </div> */}
      {/* // <form
      //   id="newsletter-form"
      //   className="newsletter-form"
      //   action="https://newsletter.vincentntang.com/sendy/subscribe"
      //   method="POST"
      //   acceptCharset="utf-8"
      //   target="_blank"
      // >
      //   <input type="email" name="email" required className="email" placeholder="Email address" />
      //   <input type="hidden" name="list" value="P2bfC2WL3TvnTWEmucMbbg" />
      //   <input type="submit" name="submit" id="submit-sidebar" value="Submit" />
      // </form> */}
      </>
    )
  }
}

