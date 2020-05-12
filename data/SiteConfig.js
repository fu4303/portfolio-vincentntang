const config = {
  siteTitle: 'Vincent Tang',
  siteTitleShort: 'Vincent Tang',
  siteTitleAlt: 'Vincent Tang',
  siteLogo: '/logos/tania.jpg',
  siteUrl: 'https://www.vincentntang.com',
  repo: 'https://github.com/vincentntang/vincentntang.com',
  pathPrefix: '',
  dateFromFormat: 'YYYY-MM-DD',
  dateFormat: 'MMMM Do, YYYY',
  siteDescription:
    'Vincent Tang is web developer and writer specializing in modern JavaScript who breaks down complex concepts in an accessible and intuitive way.',
  siteRss: '/rss.xml',
  googleAnalyticsID: 'UA-125472858-2',
  postDefaultCategoryID: 'Tech',
  commentsApi: 'https://tania-comments-api.herokuapp.com/comments',
  userName: 'Vincent',
  userEmail: 'vincentntang@gmail.com',
  userTwitter: 'vincentntang',
  menuLinks: [
    {
      name: 'Blog',
      link: '/blog/',
    },
    {
      name: 'Talks',
      link: '/speaking/'
    },
    // { 
    //   name: "Work",
    //   link: "/work/"
    // },
    {
      name: 'About',
      link: '/about/',
    },
    {
      name: 'Contact',
      link: '/contact',
    },
    // {
    //   name: 'Contact',
    //   link: '/contact/',
    // },
  ],
  themeColor: '#3F80FF', // Used for setting manifest and progress theme colors.
  backgroundColor: '#ffffff',
}

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === '/') {
  config.pathPrefix = ''
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, '')}`
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === '/') config.siteUrl = config.siteUrl.slice(0, -1)

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== '/') config.siteRss = `/${config.siteRss}`

module.exports = config
