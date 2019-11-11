import PropTypes from 'prop-types';

export const offersPropTypes = PropTypes.shape({
  image: PropTypes.string.isRequired,
  priceValue: PropTypes.number.isRequired,
  priceText: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  coordinates: PropTypes.array.isRequired
});
