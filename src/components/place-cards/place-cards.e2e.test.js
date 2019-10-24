import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PlaceCards from './place-cards.jsx';

Enzyme.configure({adapter: new Adapter()});

it(`callback to title placeCard`, () => {
  const handleClick = jest.fn();
  const wrapper = shallow(<PlaceCards placeCards={[{title: `Example`, price: 80}]} handleClick={handleClick} />);
  wrapper.find(`.place-card__name > a`).simulate(`click`);

  expect(handleClick).toHaveBeenCalledTimes(1);
});
