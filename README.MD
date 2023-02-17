# React boilerplate with TypeScript &middot; ![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)

This boilerplate includes several starter component examples and a request to [GitHub](https://github.com/) API.

The following packages are used here:

* **[React](https://reactjs.org/)**
* **[Redux](https://redux.js.org/)** (**[React-Redux](https://github.com/reduxjs/react-redux)**)
* **[Redux Saga](https://github.com/redux-saga/redux-saga/)**
* **[Redux Persist](https://github.com/rt2zz/redux-persist/)**
* **[Connected React Router](https://github.com/supasate/connected-react-router/)**
* **[Axios](https://github.com/axios/axios/)**
* **[Typescript](https://www.typescriptlang.org/)**
* **[Webpack](https://webpack.js.org/)** (with **[Webpack-Merge](https://github.com/survivejs/webpack-merge/)** and plugins)
* **[Babel](https://babeljs.io/)**
* **[Classnames](https://github.com/JedWatson/classnames/)**
* **[Cross Env](https://github.com/kentcdodds/cross-env/)**
* **[Stylelint](https://stylelint.io/)** with some **[plugins](https://stylelint.io/user-guide/plugins)**
* **[Eslint](https://eslint.org/)** (with **[Airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb/)** config as base)
* **[Imagemin](https://github.com/imagemin/imagemin/)** (**[Imagemin Webpack](https://github.com/itgalaxy/imagemin-webpack/)**)
* **[SASS](https://sass-lang.com/)** (**[SASS Loader](https://github.com/webpack-contrib/sass-loader/)**)
* **[PostCSS](https://postcss.org/)** (**[PostCSS Loader](https://github.com/postcss/postcss-loader/)**)
* and some other.

### Decription

Simple template for React app with Redux as state container and TypeScript, a typed superset of JavaScript.
Redux Saga used for asynchronous things. Reduxsause for more simple reducers creating.
For HTTP requests used Axios. Webpack as bundler.

As CSS pre-processor used SASS with CSS-Modules. For simple job with classes used classnames package. PostCSS with autoprefixer for add vendor prefixes, css-mqpacker for pack same CSS media query rules into one. Imagemin for images compress and convert to [Webp](https://ru.wikipedia.org/wiki/WebP/). Prettier used for CSS code formatting (but not used for js, ts, etc.).

For linting used Stylelint for CSS and Eslint for js, ts, jsx and tsx.

[Husky](https://github.com/typicode/husky/) and [lint-staged](https://github.com/okonet/lint-staged) used for precommit linting and fix style errors.

### Testing

```bash
npm test
```

will start typescript compiler for check errors and linting with autofix style errors in all files from src folder.

You can also

```bash
npm run tslint
```
or
```bash
npm run eslint
```
or
```bash
npm run stylelint
```
for separate running typescript compiler, eslint and stylelint with fixing errors.


### License

This boilerplate is [MIT licensed](./LICENSE).
