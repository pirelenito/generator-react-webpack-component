import React from 'react/addons';
import <%= libname %> from '../lib/<%= slug %>.jsx';

describe('<%= libname %>', function() {
  var component;

  beforeEach(function() {
    component = React.addons.TestUtils.renderIntoDocument(
      <<%= libname %>/>
    );
  });

  it('should render', function() {
    expect(component.getDOMNode().className).toEqual('<%= slug %>');
  });
});
