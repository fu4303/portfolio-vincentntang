import React, { Component } from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../layout'
import PostListing from '../components/PostListing'
import SEO from '../components/SEO'
import config from '../../data/SiteConfig'
import Img from 'gatsby-image'; // Lazy Load images

import speakingData from '../../data/speakingData';

export default class Speaking extends Component {
  state = {
    // searchTerm: '',
    // currentCategories: [],
    // posts: this.props.data.posts.edges,
    // filteredPosts: this.props.data.posts.edges,
  }

  // handleChange = async event => {
  //   const { name, value } = event.target

  //   await this.setState({ [name]: value })

  //   this.filterPosts()
  // }

  // filterPosts = () => {
  //   const { posts, searchTerm, currentCategories } = this.state

  //   let filteredPosts = posts.filter(post =>
  //     post.node.frontmatter.title.toLowerCase().includes(searchTerm.toLowerCase())
  //   )

  //   if (currentCategories.length > 0) {
  //     filteredPosts = filteredPosts.filter(
  //       post =>
  //         post.node.frontmatter.categories &&
  //         currentCategories.every(cat => post.node.frontmatter.categories.includes(cat))
  //     )
  //   }

  //   this.setState({ filteredPosts })
  // }

  // updateCategories = category => {
  //   const { currentCategories } = this.state

  //   if (!currentCategories.includes(category)) {
  //     this.setState(prevState => ({
  //       currentCategories: [...prevState.currentCategories, category],
  //     }))
  //   } else {
  //     this.setState(prevState => ({
  //       currentCategories: prevState.currentCategories.filter(cat => category !== cat),
  //     }))
  //   }
  // }

  render() {
    // const { filteredPosts, searchTerm, currentCategories } = this.state
    // const filterCount = filteredPosts.length
    // const categories = this.props.data.categories.group

    return (
      <Layout>
        <Helmet title={`Articles – ${config.siteTitle}`} />
        <SEO />
        <div className="container">
          <h1>Speaking</h1>
          <p>Over the past few years, I've been fortunate enough to share my ideas, skills, and knowledge at meetups, hackathons, and events. Here you'll find an archive of slide decks, demos, and resources I made available.</p>
          <p>I'm available for speaking opportunities please feel free to get in touch at <a href="mailto:hello@vincentntang.com">here</a></p>
          <div className="speaking-wrapper">
            {/* New Content */}
            {this.props.data.allSpeakingDataJson.edges.map(item => {
              console.log(item,"item");
              return (
                <div name={item.node.title} className="speaking-card">
                  {/* <img src={item.fullImg} alt="text"/> */}
                  {/* <Img fixed={item.node.fullImg.childImageSharp.fixed}/> */}
                  <Img className="mb-2" fluid={item.node.fullImg.childImageSharp.fluid}/>
                  <div>{item.node.venue}</div>
                  <div className="text-13 mb-2">{item.node.date} — {item.node.location}</div>
                  <div className="text-15" style={{height:'72px'}}>{item.node.title}</div>
                  {Object.keys(item.node.links).map((key) => {
                    if(item.node.links[key] !== null){
                      return <li><a key={key} href={item.node.links[key]}>{key}</a></li>
                    }
                  })}
                  {/* <ul className="text-14">
                    {item.node.links && Object.keys(item.node.links).map(key => {
                      return <li><a href={item.node.links[key]}>{key}</a></li>
                    })}
                  </ul> */}
                </div>
              )
            })}
          </div>
          {/* <div className="speaking-wrapper"> */}
            {/* Old content */}
            {/* {speakingData.map(item => {
              return (
                <div className="speaking-card">
                  <img src={item.fullImg} alt="text"/>
                  <div>{item.venue}</div>
                  <div className="text-13 mb-2">{item.date} — {item.location}</div>
                  <div className="text-14">{item.title}</div>
                  <ul className="text-14">
                    {item.links && Object.keys(item.links).map(key => {
                      return <li><a href={item.links[key]}>{key}</a></li>
                    })}
                  </ul>
                </div>
              )
            })} */}
          {/* </div> */}
        </div>
      </Layout>
    )
  }
}

// Automatically passes as props to react component
export const pageQuery = graphql`
  query {
    allSpeakingDataJson {
      edges {
        node {
          # path
          location
          venue
          fullImg {
            childImageSharp {
              fluid(maxWidth: 300, maxHeight: 220) {
                src
                srcSet
                aspectRatio
                tracedSVG
              }
              fixed(width: 400, height: 200) {
                src
                srcSet
                height
                width
                tracedSVG
              }
            }
          }
          date
          title
          links {
            demo
            repo
            slides
            site
            video
          }
        }
      }
    }
  }
`
