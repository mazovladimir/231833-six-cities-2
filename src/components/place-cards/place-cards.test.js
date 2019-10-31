import React from 'react';
import renderer from 'react-test-renderer';
import PlaceCards from './place-cards.jsx';

const offers = [{image: `image`, priceValue: 100, priceText: `text`, name: `name`, type: `type`}];

it(`renders correct PlaceCards component`, () => {
  const tree = renderer.create(<PlaceCards offers={offers} />).toJSON();
  expect(tree).toMatchSnapshot();
});
