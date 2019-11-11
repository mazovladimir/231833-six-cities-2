import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PlaceCard from './place-card.jsx';

Enzyme.configure({adapter: new Adapter()});

it(`mouseover and mouseleave for PlaceCard`, () => {
  const offer = {image: `image`, priceValue: 100, priceText: `text`, name: `name`, type: `type`, coordinates: [1, 2]};
  const onMouseEnter = jest.fn();
  const onMouseLeave = jest.fn();
  const wrapper = shallow(<PlaceCard offer={offer} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}/>);
  const card = wrapper.find(`.place-card`);
  card.simulate(`mouseEnter`);
  expect(onMouseEnter).toHaveBeenNthCalledWith(1, offer);
  card.simulate(`mouseLeave`);
  expect(onMouseLeave).toHaveBeenCalledTimes(1);
});
