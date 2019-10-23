import React from 'react';
import renderer from 'react-test-renderer';
import PlaceCards from './place-cards.jsx';

it(`renders correct placeCards component`, () => {
  const tree = renderer.create(<PlaceCards placeCards={[{title: `Example Title`, price: 80}]} />).toJSON();
  expect(tree).toMatchSnapshot();
});
