const path = require('path')

module.exports = {
  application: 'paginate',
  root: path.resolve(__dirname, '..'),
  isProd: false,
  database: {
    mongoDebug: true,
    mongodb: [
      {
        name: 'finance',
        url: process.env.FINANCE_URI,
        options: {}
      }
    ]
  },
  port: process.env.PORT || 8827
}
