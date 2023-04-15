module.exports = {
  url: process.env.URL || 'http://localhost:8080',
  siteName: 'PRSPR',
  siteDescription:
    'Website for PRSPR',
  siteType: 'Organization', // schema
  locale: 'en_EN',
  lang: 'en',
  skipContent: 'Skip to content',
  author: 'Bharath M. Palavalli', // i.e. Lene Saile - author's name. Must be set.
  authorEmail: 'bmp@prspr.world', // i.e. hola@lenesaile.com - email of the author
    authorWebsite: 'https://bharathpalavalli.com', // i.e. https.://www.lenesaile.com - the personal site of the author
  themeColor: '#DD4462', //  Manifest: defines the default theme color for the application
  themeBgColor: '#F3F3F3', // Manifest: defines a placeholder background color for the application page to display before its stylesheet is loaded
  meta_data: {
    opengraph_default: '/assets/images/opengraph-default.jpg', // fallback/default meta image
    opengraph_default_alt:
      'PRSPR will unlock the power of the commons for a brighter, better future is possible and want to pave the way for the next generation!', // alt text for default meta image
      twitterSite: 'https://twitter.com/prspr', // i.e. @site - twitter profile of the site
      twitterCreator: 'https://twitter.com/bharathmp', // i.e. @author -  twitter profile of the site
      mastodonProfile: 'https://mastodon.social/@prspr' // i.e. https://front-end.social/@lene - url to your mastodon instance/profile
  },
  blog: {
    // this is for the rss feed
    name: 'PRSPR Together',
    description:
      'Conversations amongst a few of us has led to a demand to move this beyond phone calls, WhatsApp chats and lunch discussions, here is the latest from our discussions with people around the world.'
  },
  pagination: {
    itemsPerPage: 20
  },
  address: {
    // edit all presets or leave empty. They are being used in the pages for privacy.md and imprint.md
    firma: 'PRSPR',
    street: '',
    city: '',
    state: '',
    zip: '',
    mobileDisplay: '',
    mobileCall: '',
    email: 'join@prspr.world',
    cif: ''
  },
  menu: {
    closedText: 'Menu'
  }
};
