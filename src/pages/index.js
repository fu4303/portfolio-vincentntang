import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import GitHubButton from 'react-github-btn';
import Layout from '../layout';
import PostListing from '../components/PostListing';
import ProjectListing from '../components/ProjectListing';
import SimpleListing from '../components/SimpleListing';
import NewsletterForm from '../components/NewsletterForm';
import SEO from '../components/SEO';
import config from '../../data/SiteConfig';
import projects from '../../data/projects';
import speaking from '../../data/speakingData';
import podcasts from '../../data/podcasts';
import quotes from '../../data/quotes';
import vtYellow from '../../content/common/VT_yellowBG.png';

export default class Index extends Component {
  render() {
    const { data } = this.props;

    const latestPostEdges = data.latest.edges;
    const popularPostEdges = data.popular.edges;

    return (
      <Layout>
        <Helmet title={`${config.siteTitle} – Web developer & writer`} />
        <SEO />
        <div className="container">
          <div className="lead">
            <a
              // href="https://taniarascia.github.io/new-moon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={vtYellow}
                className="new-moon-icon"
                title="Hmm? What's this?"
                alt="Hmm? What's this?"
              />
            </a>
            <h1>{`Hi, I'm Vincent`}</h1>
            <p>
              {`I'm a web developer specializing in modern JavaScript who loves to learn new things. Welcome to my digital garden of topics in backend, frontend, devops, and more 🌱 `}
            </p>
            <div className="social-buttons">
              <div>
                <a
                  className="twitter-follow-button"
                  href="https://twitter.com/vincentntang"
                  data-size="large"
                  data-show-screen-name="false"
                >
                  Follow @vincentntang
                </a>
              </div>
              <div>
                <GitHubButton
                  href="https://github.com/vincentntang"
                  data-size="large"
                  data-show-count="true"
                  aria-label="Follow @vincentntang on GitHub"
                >
                  Follow
                </GitHubButton>
              </div>
            </div>
          </div>
        </div>

        <div className="container front-page">
          <section className="section">
            <h2>Latest Articles</h2>
            <PostListing simple postEdges={latestPostEdges} />
          </section>

          {/* <section className="section">
            <h2>Most Popular</h2>
            <PostListing simple postEdges={popularPostEdges} />
          </section> */}

          {/* <section className="section">
            <h2>Open Source Projects</h2>
            <ProjectListing projects={projects} />
          </section> */}

          {/* <section className="section">
            <h2>Podcasts</h2>
            <SimpleListing simple data={podcasts} />
          </section> */}

          <section className="section">
            <h2>Speaking</h2>
            <SimpleListing simple data={speaking} />
          </section>

          {/* <section className="section">
            <h2>{`Other People's Opinions`}</h2>
            <div className="quotations">
              {quotes.map(quote => (
                <blockquote className="quotation">
                  <p>{quote.quote}</p>
                  <cite>— {quote.name}</cite>
                </blockquote>
              ))}
            </div>
          </section> */}

          <section className="newsletter-section section">
            <h2>Newsletter</h2>
            <p>
              Join me in my journey exploring the realm of software development. Frontend, Backend, DevOps and more.
              Unsubscribe whenever. No spam unless it's the Hawaiian kind 🥩
            </p>
            <NewsletterForm />
          </section>
        </div>
      </Layout>
    );
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    latest: allMarkdownRemark(
      limit: 6
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { template: { eq: "post" } } }
    ) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            categories
            thumbnail {
              childImageSharp {
                fixed(width: 150, height: 150) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
            date
            template
          }
        }
      }
    }
    popular: allMarkdownRemark(
      limit: 7
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { categories: { eq: "Popular" } } }
    ) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            categories
            thumbnail {
              childImageSharp {
                fixed(width: 150, height: 150) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
            date
            template
          }
        }
      }
    }
  }
`;
