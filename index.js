// lib to read and write to the zip
const JSZip = require('jszip')
const fs = require('fs')

module.exports = function (source) {
  var callback = this.async()

  JSZip
    .loadAsync(source)
    .then(function (zip) {
      zip
        .file('document.json')
        .async('string')
        .then(function (content) {
          var result = {
            document: JSON.parse(content)
          }

          callback(null, 'module.exports = ' + JSON.stringify(result))
        })
    })
    .catch(function (error) {
      callback(error)
    })
}

module.exports.raw = true
