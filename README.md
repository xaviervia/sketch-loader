# sketch-loader

[![https://travis-ci.org/xaviervia/sketch-loader.svg?branch=master](https://travis-ci.org/xaviervia/sketch-loader.svg?branch=master)](https://travis-ci.org/xaviervia/sketch-loader/builds) [![npm version](https://img.shields.io/npm/v/sketch-loader.svg?maxAge=1000)](https://www.npmjs.com/package/sketch-loader)


Webpack loader for Sketch (+43) files

```
npm install --save sketch-loader
```

```javascript
module: {
  loaders: [
    {
      test: /\.sketch$/,
      loader: 'sketch'
    }
  ]
}
```

Then importing:

```javascript
import sketchFile from './some-file.sketch'

sketchFile.document // parsed contents of document.json
sketchFile.user // parsed contents of user.json
sketchFile.meta // parsed contents of meta.json
sketchFile.pages['0F364A54-A488-4D6F-BAA4-F93FB057C5A3'] // parsed contents of pages/0F364A54-A488-4D6F-BAA4-F93FB057C5A3.json, and so on for every page file
```

You can check the example in [examples/simple/sagui.config.js](examples/simple/sagui.config.js)

## What is the structure of the contents?

As far as I know, there is no official documentation yet. 

Meanwhile here you can find [Flowtype definitions for Sketch 43+ JSON](https://github.com/darknoon/sketchapp-json-flow-types/blob/master/types.js) by @darknoon to use as guide.

## License

MIT License
