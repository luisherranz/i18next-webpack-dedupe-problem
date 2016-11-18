# i18next Webpack Dedupe Problem

If you load the `dist/index.html` file in your browser, you can see the error in the console:

```
Uncaught TypeError: i18next.use is not a function
```

This problem appears when a combination of these things happens:

- A vendors bundled with `DllPlugin` containing at least `i18next`, `i18next-xhr-backend` and `react-dom`.
- Both plugins `DedupePlugin` and `FixModuleIdAndChunkIdPlugin` are used in the vendors bundle.

If you remove any of the above conditions, the problem disappears. For example, it works again if you:

- Remove `react-dom` from the vendors bundle.
- Remove the `DedupePlugin` of the vendors build process.
- Remove the `FixModuleIdAndChunkIdPlugin` of the vendors build process.

----

You can generate a new build using `npm start`.
