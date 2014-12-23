var React = require('react');
var TestUtils = React.addons.TestUtils;
var <%= libname %> = require('../lib/<%= slug %>.jsx');


describe("<%= libname %>", function() {
  var component;

  beforeEach(function() {
    component = TestUtils.renderIntoDocument(
      <<%= libname %> name="Jonh"/>
    );
  });

  it("should render", function() {
    expect(component.getDOMNode().className).toEqual('<%= slug %>');
  });
});
