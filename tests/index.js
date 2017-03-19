const getZipContentsTests = require('./getZipContentsTests')
const getFileFromZipTests = require('./getFileFromZipTests')
const getSketchContentsTests = require('./getSketchContentsTests')

const withNamespace = namespace => ({description, test, shouldEqual}) => ({
  description: `${namespace}: ${description}`,
  test,
  shouldEqual
})

module.exports = []
  .concat(getZipContentsTests.map(withNamespace('getZipContents')))
  .concat(getFileFromZipTests.map(withNamespace('getFileFromZip')))
  .concat(getSketchContentsTests.map(withNamespace('getSketchContents')))
