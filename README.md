# The i18next Dedupe FixModuleIdAndChunkIdPlugin ReactDOM Problem

If you load the `dist/index.html` file in your browser, you can see the error in the console:

```
Uncaught TypeError: i18next.use is not a function
```

This problem appears when a combination of these things happens:

- A vendors bundled with `DllPlugin` containing at least `i18next`, `i18next-xhr-backend` and `react-dom`.
- Version of `react-dom` is 15.4.0.
- Both plugins [`DedupePlugin`](https://webpack.github.io/docs/list-of-plugins.html#dedupeplugin) and [`FixModuleIdAndChunkIdPlugin`](https://github.com/cfansimon/fix-moduleid-and-chunkid-plugin) are used in the vendors bundle.

If you remove any of the above conditions, the problem disappears. For example, it works again if you:

- Downgrade `react-dom` to 15.3.2.
- Remove the `DedupePlugin` of the vendors build process.
- Remove the `FixModuleIdAndChunkIdPlugin` of the vendors build process.

It happens with any version of i18next, so it's not related with the [webpack2](https://github.com/i18next/i18next/issues/836) problem.

It can be solved if you add *something* to the `node_modules/i18next/index.js` file, like for example:

```javascript
var a;
module.exports = require('./dist/commonjs/index.js').default;
```

Any small change is enough to make it work.

----

You can generate a new build using `npm start`.
