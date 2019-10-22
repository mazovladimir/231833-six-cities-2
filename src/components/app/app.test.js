import React from 'react';
import renderer from 'react-test-renderer';
import App from './app.jsx';

it(`renders correct main component`, () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});
