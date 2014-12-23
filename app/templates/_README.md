# <%= appname %>

Get the AMD module located at `<%= slug %>.js` and include it in your project.

Here is a sample integration:

```js
require.config({
  paths: {
    'react': 'vendor/bower_components/react/react',
    '<%= libname %>': '<%= slug %>'
  }
});

require(['react', '<%= libname %>'], function(React, <%= libname %>) {

  React.render(React.createElement(<%= libname %>), document.getElementById('widget-container'));

});
```

## Development

* Run tests: `npm test`;
* Build `npm run build`;
* Development server `npm run dev`.
