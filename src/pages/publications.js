import React, { Component } from 'react';
import Helmet from 'react-helmet';
import Layout from '../layout';
import config from '../../data/SiteConfig';
import publications from '../../data/publications';
import digitalOcean from '../../content/common/do.png';
import sitePoint from '../../content/common/sitepoint.png';
import codrops from '../../content/common/codrops.png';
import envato from '../../content/common/envato.png';
import progress from '../../content/common/progress.png';

export default class PublicationsPage extends Component {
  render() {
    const logoMap = {
      DigitalOcean: digitalOcean,
      SitePoint: sitePoint,
      Codrops: codrops,
      'Envato Tuts+': envato,
      Progress: progress,
    };

    const pubs = Object.entries(publications);
    return (
      <Layout>
        <Helmet title={`Published Articles – ${config.siteTitle}`} />
        <div className="container">
          <h1>Published Articles</h1>
          {pubs.map((publication, i) => {
            const company = publication[0];
            const articles = publication[1];

            return (
              <article>
                <h2 className="publication-company">
                  <img src={logoMap[company]} alt="Company" />
                  {company}
                </h2>
                <ul key={i}>
                  {articles.map((article, i) => {
                    return (
                      <li key={i}>
                        <a
                          href={article.path}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {article.title}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </article>
            );
          })}
        </div>
      </Layout>
    );
  }
}
