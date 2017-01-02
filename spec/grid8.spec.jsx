import React from 'react/addons';
import Grid8 from '../lib/grid8.jsx';

describe('Grid8', function() {
  var component;

  beforeEach(function() {
    component = React.addons.TestUtils.renderIntoDocument(
      <Grid8/>
    );
  });

  it('should render', function() {
    expect(component.getDOMNode().className).toEqual('grid8');
  });
});
