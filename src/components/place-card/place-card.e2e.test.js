import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PlaceCards from '../place-cards/place-cards.jsx';

const offers = [{image: `image`, priceValue: 100, priceText: `text`, name: `name`, type: `type`}];
const activeCard = null;

Enzyme.configure({adapter: new Adapter()});

it(`mouseover and mouseleave for PlaceCard`, () => {
  const onMouseEnter = jest.fn();
  const onMouseLeave = jest.fn();
  const wrapper = mount(<PlaceCards offers={offers} activeCard={activeCard} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}/>);
  expect(wrapper.find(`PlaceCard`).prop(`activeCard`)).toEqual(null);
  wrapper.find(`PlaceCard`).simulate(`mouseenter`);
  expect(wrapper.find(`PlaceCard`).prop(`activeCard`)).toEqual(offers[0]);
  wrapper.find(`PlaceCard`).simulate(`mouseleave`);
  expect(wrapper.find(`PlaceCard`).prop(`activeCard`)).toEqual(null);
});
