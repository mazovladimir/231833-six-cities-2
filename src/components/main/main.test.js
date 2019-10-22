import React from 'react';
import renderer from 'react-test-renderer';
import Main from './main.jsx';

it(`renders correct main component`, () => {
  const tree = renderer.create(<Main />).toJSON();
  expect(tree).toMatchSnapshot();
});
