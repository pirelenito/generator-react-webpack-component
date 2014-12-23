var React = require("react");


require("./<%= slug %>.scss");


module.exports = React.createClass({
  render: function() {
    return <div className="<%= slug %>"></div>;
  }
});
