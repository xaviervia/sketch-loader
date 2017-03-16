const {task} = require('folktale/data/task')

module.exports = function (zip, path) {
  return task(function ({resolve}) {
    zip
      .file(path)
      .async('string')
      .then(function (content) {
        resolve([path, JSON.parse(content)])
      })
  })
}
