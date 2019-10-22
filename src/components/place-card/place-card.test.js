import React from 'react';
import renderer from 'react-test-renderer';
import PlaceCard from './place-card.jsx';

it(`renders correct offers-list component`, () => {
  const tree = renderer.create(<PlaceCard offers={[{title: `Example Title`, price: 80}]} />).toJSON();
  expect(tree).toMatchSnapshot();
});
