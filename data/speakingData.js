import airtable from '../content/thumbnails/airtable.png'
import js from '../content/thumbnails/js.png'
import builtOnAir from "./images/built-on-air.png"
import enterpriseConnect from "./images/enterprise-connect.png"
import renderTale from "./images/render-tale.png"
import startupWeekend from "./images/startup-weekend.jpg"
import orlandoJs1 from "./images/orlando-js-1.png"
import orlandoJs from "./images/orlandoJs.png";
import nasaEarth from "./images/nasaEarth.png";
import hackathonRadose from "./images/hackathonRadose.jpg"

export default [
  {
    date: 'July 22 2019',
    location: 'St Louis, MO',
    title: 'Pill Dispensing System',
    venue: 'Healthcare Hacks 2019',
    path:
      'https://builtonair.com/boa-podcast-s02e08-vincent-tang-airtable-super-producer/',
    img: airtable,
    fullImg: hackathonRadose,
    links: {
      site: 'https://devpost.com/software/remote-pharmacy',
    }
  },
  {
    date: 'May 18 2019',
    location: 'The Internet',
    title: 'Plugin spotlights from a super producer',
    venue: 'Airtable',
    path:
      'https://builtonair.com/boa-podcast-s02e08-vincent-tang-airtable-super-producer/',
    img: airtable,
    fullImg: builtOnAir,
    links: {
      site: 'https://airtable.com',
      slides: 'https://slides.com/vincentntang/built-on-air-airtable#/',
      video: 'https://builtonair.com/boa-podcast-s02e08-vincent-tang-airtable-super-producer/',
    }
  },
  {
    date: 'March 18 2019',
    location: 'Orlando, FL',
    title: 'Programmable Communications with Hackathons',
    venue: 'Enterprise Connect',
    path:
      'https://schedule.enterpriseconnect.com/search/vincent+tang',
    img: airtable,
    fullImg: enterpriseConnect,
    links: {
      site: 'https://schedule.enterpriseconnect.com/search/vincent+tang',
      slides: 'https://docs.google.com/presentation/d/1DiH_JI8Wx_OpyJPvM23HCtdcA2oy9zkUj_p3RT_bkFs/edit?usp=sharing',
      demo: 'https://vimeo.com/326350210',
    }
  },
  {
    date: 'Jan 19, 2019',
    location: 'Orlando, FL',
    title: 'Rendering Tale: Comparing Canvas, SVG, WebGL, and CSS',
    venue: 'Orlando JS',
    path: 'https://www.meetup.com/OrlandoJS/',
    img: js,
    fullImg: renderTale,
    links: {
      slides: 'https://slides.com/vincentntang/comparing-svg-canvas-webgl-css#/',
      video: 'https://www.youtube.com/watch?v=OWbVcMfEShI&t=',
    }
  },
  {
    date: 'November 30, 2018',
    location: 'Orlando, FL',
    title: '3D Rendering Engine in HTML Canvas',
    venue: 'Orlando JS',
    path:
      'https://schedule.enterpriseconnect.com/search/vincent+tang',
    img: airtable,
    fullImg: orlandoJs,
    links: {
      slides: 'https://slides.com/vincentntang/vanishing-points-html-canvas#/',
      repo: 'https://github.com/vincentntang/canvas-vanishing-points',
      demo: 'https://vincentntang.github.io/canvas-vanishing-points/'
    }
  },
  {
    date: 'Sept 19, 2018',
    location: 'Orlando, FL',
    title: 'Injecting Javascript Anywhere',
    venue: 'Orlando JS',
    path:
      'https://schedule.enterpriseconnect.com/search/vincent+tang',
    img: airtable,
    fullImg: orlandoJs,
    links: {
      slides: 'https://slides.com/vincentntang/userscripts-with-tampermonkey',
    }
  },
  {
    date: 'November 27, 2018',
    location: 'Orlando, FL',
    title: 'Startup Weekend Orlando',
    venue: 'Techstars',
    path: 'https://www.techstars.com/content/uncategorized/startupweekendorlando2018recap/',
    img: airtable,
    fullImg: startupWeekend,
    links: {
      site: 'https://devpost.com/software/sensae-app',
      repo: 'github.com/vincentntang/sensae-app/',
      demo: 'https://sensaeapp.co/quiz'
    }  
  },
  {
    date: 'November 27, 2018',
    location: 'Orlando, FL',
    title: 'Exploring the Earth',
    venue: 'NASA Space Apps',
    path: 'https://www.techstars.com/content/uncategorized/startupweekendorlando2018recap/',
    img: airtable,
    fullImg: nasaEarth,
    links: {
      site: 'https://devpost.com/software/nasa-space-apps-2018',
      demo: 'https://nasa-space-app-2018.herokuapp.com/'
    }  
  },
]
