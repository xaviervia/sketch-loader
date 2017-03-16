# sketch-loader

Webpack loader for Sketch (+43) files

```
npm install --save ast-loader
```

```javascript
module: {
  loaders: [
    {
      test: /\.ast$/,
      loader: 'ast'
    }
  ]
}
```

You can check the example in [examples/simple/sagui.config.js](examples/simple/sagui.config.js)

## License

MIT License
