const JSZip = require('jszip')
const {task} = require('folktale/data/task')

module.exports = function (zippedFolder) {
  return task(function ({resolve, reject}) {
    console.log('wtf')
    JSZip
      .loadAsync(zippedFolder)
      .then(function (zip) {
        resolve(zip)
      })
      .catch(function (error) {
        reject(error)
      })
  })
}
