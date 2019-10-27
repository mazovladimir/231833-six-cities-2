import React, {Component} from 'react';
import OfferCard from '../offer-card/offer-card.jsx';
import PropTypes from "prop-types";

class OffersList extends Component {
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
          <div key={`offer-${index}`} onMouseEnter={this.mouseOver.bind(this, offer)} onMouseLeave={this.mouseOut} >
            <OfferCard offer={offer} activeCard={this.state.activeCard}/>
          </div>
        ))}
      </React.Fragment>
    );
  }
}

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
