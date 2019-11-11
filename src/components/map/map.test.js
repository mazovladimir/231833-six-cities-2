import React from 'react';
import renderer from 'react-test-renderer';
import Map from './map.jsx';

const offers = [{image: `image`, priceValue: 100, priceText: `text`, name: `name`, type: `type`, coordinates: [1, 2]}];

it(`renders correct map component`, () => {
  const tree = renderer.create(<Map offers={offers} />).toJSON();
  expect(tree).toMatchSnapshot();
});
