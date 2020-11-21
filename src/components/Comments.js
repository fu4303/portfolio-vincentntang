import React, {Component} from "react";
import ThemeContext from '../context/ThemeContext';
export default class Comments extends Component {
  static contextType = ThemeContext;

  constructor(props){ 
    super(props);
    this.commentBox = React.createRef();
    // this.scriptEl = document.createElement("script");
    this.state = {
      keyForceRender: 0
    }
  }
  componentDidMount () {
      // // this.scriptEl = document.createElement("script");
      // this.scriptEl.setAttribute("src", "https://utteranc.es/client.js");
      // this.scriptEl.setAttribute("crossorigin","anonymous");
      // this.scriptEl.setAttribute("async", true);
      // this.scriptEl.setAttribute("repo", "vincentntang/vincentntang.com-comments");
      // this.scriptEl.setAttribute("issue-term", "pathname");
      // this.scriptEl.setAttribute( "theme", "github-dark");
      
      // this.commentBox.current.appendChild(this.scriptEl);

      let scriptEl = document.createElement("script");
      scriptEl.setAttribute("src", "https://utteranc.es/client.js");
      scriptEl.setAttribute("crossorigin","anonymous");
      scriptEl.setAttribute("async", true);
      scriptEl.setAttribute("repo", "vincentntang/vincentntang.com-comments");
      scriptEl.setAttribute("issue-term", "pathname");
      scriptEl.setAttribute( "theme", "github-dark");
      this.commentBox.current.appendChild(scriptEl);
  }

  async componentDidUpdate(previousProps, previousState) {
    console.log(this.state.keyForceRender,"KeyForceRender");
    console.log(previousState.keyForceRender,"KeyForceRender prev State")

    if(previousState.keyForceRender !== this.state.keyForceRender) {
      return;
    }
    const theme = this.context;
    if(theme.dark){
      let scriptEl = document.createElement("script");
      scriptEl.setAttribute("src", "https://utteranc.es/client.js");
      scriptEl.setAttribute("crossorigin","anonymous");
      scriptEl.setAttribute("async", true);
      scriptEl.setAttribute("repo", "vincentntang/vincentntang.com-comments");
      scriptEl.setAttribute("issue-term", "pathname");
      scriptEl.setAttribute( "theme", "github-dark");
      this.commentBox.current.textContent = '';
      this.commentBox.current.appendChild(scriptEl);
      await this.setState(prevState => ({
        keyForceRender: prevState.keyForceRender + 1
      }))
    } else {
      let scriptEl = document.createElement("script");
      scriptEl.setAttribute("src", "https://utteranc.es/client.js");
      scriptEl.setAttribute("crossorigin","anonymous");
      scriptEl.setAttribute("async", true);
      scriptEl.setAttribute("repo", "vincentntang/vincentntang.com-comments");
      scriptEl.setAttribute("issue-term", "pathname");
      scriptEl.setAttribute( "theme", "github-light");
      this.commentBox.current.textContent = '';
      this.commentBox.current.appendChild(scriptEl);
      await this.setState(prevState => ({
        keyForceRender: prevState.keyForceRender + 1
      }))
    }
    // if(theme.dark){
    //   console.log(this.commentBox,"CommentBox")
    //   this.scriptEl.setAttribute("theme", "github-dark")
    //   this.commentBox.current.appendChild(this.scriptEl);
    //   this.keyForceRender++;
    // } else {
    //   this.scriptEl.setAttribute("theme", "github-light")
    //   this.commentBox.current.appendChild(this.scriptEl);
    //   this.keyForceRender++;
    // }
  }

  render() {
    return (
        <div className="comment-box-wrapper container pt-7">
          <h1 className="mb-0">Comments</h1>
          <hr className="my-0"/>
          <div key={this.keyForceRender} ref={this.commentBox} className="comment-box"></div>
        </div>
    );
  }
}