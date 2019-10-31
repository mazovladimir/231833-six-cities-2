import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PlaceCard from './place-card.jsx';

const offers = [{image: `image`, priceValue: 100, priceText: `text`, name: `name`, type: `type`}];
const activeCard = null;

Enzyme.configure({adapter: new Adapter()});

it(`mouseover and mouseleave for PlaceCard`, () => {
  const mouseOverHandler = jest.fn();
  const mouseOutHandler = jest.fn();
  const wrapper = shallow(<PlaceCard offer={offers[0]} activeCard={activeCard} mouseOverHandler={mouseOverHandler} mouseOutHandler={mouseOutHandler}/>);
  // wrapper.simulate(`mouseenter`);
  expect(wrapper.prop(`activeCard`)).toEqual(null);
});
