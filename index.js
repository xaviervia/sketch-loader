// lib to read and write to the zip
const fs = require('fs')
const {List} = require('immutable-ext')
const Task = require('folktale/data/task')
const getFileListFromZip = require('./getFileListFromZip')
const getFileFromZip = require('./getFileFromZip')

module.exports = function (source) {
  var callback = this.async()

  getFileListFromZip(source)
    .chain(function (zip) {
      return List(
        Object
          .keys(zip.files)
          .filter(function (path) {
          return path.slice(-5) === '.json'
        })
      )
        .traverse(Task.of, path => getFileFromZip(zip, path))
    })
    .chain(function (parsedPairsList) {
      var result = parsedPairsList
        .reduce(
          function (result, pair) {
            if (pair[0] === 'document.json') {
              result.document = pair[1]
            } else if (pair[0] === 'user.json') {
              result.user = pair[1]
            } else if (pair[0] === 'meta.json') {
              result.meta = pair[1]
            } else {
              result.pages[pair[0].split('/')[1].slice(0, -5)] = pair[1]
            }

            return result
          }, {pages: {}}
        )

      callback(null, 'module.exports = ' + JSON.stringify(result))
    })
    .run()
}

module.exports.raw = true
