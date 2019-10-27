import React from 'react';
import renderer from 'react-test-renderer';
import OffersList from './offers-list.jsx';

const offers = [{image: `image`, priceValue: 100, priceText: `text`, name: `name`, type: `type`}];

it(`renders correct OffersList component`, () => {
  const tree = renderer.create(<OffersList offers={offers} />).toJSON();
  expect(tree).toMatchSnapshot();
});
