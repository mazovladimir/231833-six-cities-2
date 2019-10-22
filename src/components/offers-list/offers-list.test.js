import React from 'react';
import renderer from 'react-test-renderer';
import OffersList from './offers-list.jsx';

it(`renders correct offers-list component`, () => {
  const tree = renderer.create(<OffersList offers={[{title: `Example Title`, price: 80}]} />).toJSON();
  expect(tree).toMatchSnapshot();
});
