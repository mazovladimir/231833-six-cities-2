import React from 'react';
import renderer from 'react-test-renderer';
import PlaceCard from './place-card.jsx';

const offer = {image: `image`, priceValue: 100, priceText: `text`, name: `name`, type: `type`};

it(`renders correct PlaceCard component`, () => {
  const onMouseEnter = jest.fn();
  const onMouseLeave = jest.fn();
  const component = renderer.create(<PlaceCard offer={offer} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}/>);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
  tree.props.onMouseEnter();
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
  tree.props.onMouseLeave();
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
