// lib to read and write to the zip
const sketch2json = require('sketch2json')

module.exports = function (source) {
  var callback = this.async()

  sketch2json(source).then(result => {
    callback(null, 'module.exports = ' + JSON.stringify(result))
  })
}

module.exports.raw = true
