import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import OfferCard from './offer-card.jsx';

const offers = [{image: `image`, priceValue: 100, priceText: `text`, name: `name`, type: `type`}];

Enzyme.configure({adapter: new Adapter()});

it(`mouseover and mouseleave for OffersCard`, () => {
  const wrapper = shallow(<OfferCard offer={offers[0]} activeCard={null}/>);
  // wrapper.simulate(`mouseenter`);
  expect(wrapper.find(`.place-card`).prop(`activeCard`)).toBe(null);
});
