# generator-react-webpack-component

A [Yeoman](http://yeoman.io) generator to create small, reusable [React](http://facebook.github.io/react/) components using [webpack](http://webpack.github.io/) and [Babel](http://babeljs.io/) as the build tool.

It bundles the component code into a single **UMD JavaScript** file (having support for [AMD](https://github.com/amdjs/amdjs-api/wiki/AMD), [CommonJS](http://wiki.commonjs.org/wiki/CommonJS) and globals). Initially it contains just `React` as an external dependency of your component.

Although you might use this generator to create a big applications, its focus it to create small components.

## Features

* ES6 and ES7 syntax support through [Babel](http://babeljs.io/);
* No Grunt;
* No Gupl;
* [EditorConfig](http://editorconfig.org/) already setup;
* Uses `npm` as the task runner;
* Development server with live-reload `npm run dev`;
* Testing and linting support through [Karma](http://karma-runner.github.io/) (with source-maps) and [ESLint](http://eslint.org/);
* Continuous test execution on file changes `npm run watch-test`.
* Be listed on http://react-components.com/ and https://react.parts/ (`react-component` keyword).

## Getting Started

To install `generator-react-webpack-component` from npm, run:

```bash
npm install -g generator-react-webpack-component
```

Then create a folder that will hold the component code, such as:

```bash
mkdir banana-react-component
```

Finally, enter in the component folder and initiate the generator:

```bash
cd banana-react-component
yo react-webpack-component
```

### Getting To Know Yeoman

If you'd like to get to know Yeoman better, check out the complete [Getting Started Guide](https://github.com/yeoman/yeoman/wiki/Getting-Started).

## License

MIT
