import React from 'react';
import renderer from 'react-test-renderer';
import Main from './main.jsx';

const offers = [{image: `image`, priceValue: 100, priceText: `text`, name: `name`, type: `type`}];

it(`renders correct main component`, () => {
  const tree = renderer.create(<Main offers={offers}/>).toJSON();
  expect(tree).toMatchSnapshot();
});
