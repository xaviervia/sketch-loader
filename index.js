// lib to read and write to the zip
const {task} = require('folktale/data/task')
const getSketchContents = require('./getSketchContents')

module.exports = function (source) {
  var callback = this.async()

  getSketchContents(source)
    .chain(result =>
      task(({resolve}) => {
        callback(null, 'module.exports = ' + JSON.stringify(result))

        resolve(result)
      })
    )
    .run()
}

module.exports.raw = true
