import React from 'react';
import OfferCard from '../offer-card/offer-card.jsx';
import PropTypes from "prop-types";

const OffersList = ({offers}) => (
  offers.map((offer, index) => (
    <OfferCard offer={offer} key={`offer-${index}`} />
  ))
);

export default OffersList;

OffersList.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape({
    image: PropTypes.string.isRequired,
    priceValue: PropTypes.number.isRequired,
    priceText: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
  }))
};
