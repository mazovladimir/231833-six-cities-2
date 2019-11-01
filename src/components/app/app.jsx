import React from 'react';
import Main from '../main/main.jsx';
import PropTypes from "prop-types";

const App = ({offers}) => {
  return (
    <Main offers={offers}/>
  );
};

export default App;

App.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape({
    image: PropTypes.string.isRequired,
    priceValue: PropTypes.number.isRequired,
    priceText: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
  }))
};
