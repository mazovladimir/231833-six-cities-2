import React, {Component} from 'react';
import PlaceCard from '../place-card/place-card.jsx';
import PropTypes from 'prop-types';

class PlaceCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeCard: null
    };
    this.mouseOver = this.mouseOver.bind(this);
    this.mouseOut = this.mouseOut.bind(this);
  }

  mouseOver(offer) {
    this.setState({activeCard: offer});
  }

  mouseOut() {
    this.setState({activeCard: null});
  }

  render() {
    const {offers} = this.props;
    return (
      <React.Fragment>
        {offers.map((offer, index) => (
          <PlaceCard
            key={`offer-${index}`}
            offer={offer}
            onMouseEnter={this.mouseOver.bind(this, offer)}
            onMouseLeave={this.mouseOut.bind(this)}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default PlaceCards;

PlaceCards.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape({
    image: PropTypes.string.isRequired,
    priceValue: PropTypes.number.isRequired,
    priceText: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
  }))
};
