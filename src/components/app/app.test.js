import React from 'react';
import renderer from 'react-test-renderer';
import App from './app.jsx';
import offers from '../../mocks/offers.js';

it(`renders correct app component`, () => {
  const tree = renderer.create(<App offers={offers}/>).toJSON();
  expect(tree).toMatchSnapshot();
});
