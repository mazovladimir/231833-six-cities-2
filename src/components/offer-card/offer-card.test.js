import React from 'react';
import renderer from 'react-test-renderer';
import OfferCard from './offer-card.jsx';

const offer = {image: `image`, priceValue: 100, priceText: `text`, name: `name`, type: `type`};

it(`renders correct OfferCard component`, () => {
  const tree = renderer.create(<OfferCard offer={offer} />).toJSON();
  expect(tree).toMatchSnapshot();
});
