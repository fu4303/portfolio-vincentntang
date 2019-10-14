import React, { Component } from 'react'
import { Link } from 'gatsby'

export default class SimpleListing extends Component {
  render() {
    const { data } = this.props

    return (
      <section className="simple-posts">
        {data.map(post => {
          return (
            // TODO - set the link to speaking/query parameter using
            // http://www.echoecho.com/htmllinks08.htm 
            <Link to={`/speaking/`} key={post.title} target="_blank" rel="noopener noreferrer">
              <div className="each">
                <h2>
                  <img src={post.fullImg} alt={post.title} />
                  {post.title}
                </h2>
              </div>
            </Link>
          )
        })}
      </section>
    )
  }
}
