const fs = require('fs')
const sketchLoader = require('../')
const fixture = require('./fixtures/simple.json')

module.exports = [
  {
    description: 'passes the parsed sketch data to the callback',
    test: check => {
      fs.readFile(__dirname + '/fixtures/simple.sketch', (error, data) => {
        const context = {
          async: () => (error, moduleValue) => {
            check(JSON.parse(moduleValue.slice(17)))
          }
        }

        sketchLoader.bind(context)(data)
      })
    },
    shouldEqual: fixture
  }
]
