# vincentntang.com [![Netlify Status](https://api.netlify.com/api/v1/badges/7fe9c1e7-26cf-4f96-a7dc-103d822fb5c3/deploy-status)](https://app.netlify.com/sites/vincentntang/deploys) [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

Personal website running on Gatsby, React, and Node.js.

## Installation

Run local server:

```bash
yarn
yarn run dev
```

Navigate to `localhost:8000`.

## Features

- Posts and pages in Markdown
- Tags and categories
- Night mode
- DOS mode (404)
- Code theme (starring [New Moon](https://taniarascia.github.io/new-moon))
- Sass (starring [Primitive](https://taniarascia.github.io/primitive))

## Contributing

If you see any typos or formatting errors in a post, or any other issue that needs to be addressed, please do not hesitate to open a pull request and fix it!

## Acknowledgements

- Ruben Harutyunyan - [Gatsby Advanced Starter](https://github.com/vagr9k/gatsby-advanced-starter/)
- Muhammad Muhsin - [Using React Context API with Gatsby](https://www.gatsbyjs.org/blog/2019-01-31-using-react-context-api-with-gatsby/)
- Thomas Frössman - [ExitWP](https://github.com/thomasf/exitwp) - WordPress XML to Markdown

## License

This project is open source and available under the [MIT License](LICENSE).

## Adding new features

1. Use `yarn add <gatsby plugin>` to get the new name


## Notes with Michal - Gatsby Team

https://www.gatsbyjs.org/docs/gatsby-image/#common-fragments-with-gatsby-transformer-sharp 

```
childImageSharp {
  fixed(width: 400, height: 200) {
    src
    srcSet
    height
    width
    # base64
    tracedSVG
  }
```

vs premade fragments

```
childImageSharp {
  fixed(width: 150, height: 150) {
    ...GatsbyImageSharpFixed
  }
}
```

## More Notes

When you update the `speaking.json` file, it breaks the `/speaking` page

Run `yarn clean` to remove the cache, `yarn dev` to rerun it again