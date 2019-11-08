import React, {Component} from "react";
import leaflet from "leaflet";
import PropTypes from "prop-types";

class Map extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {offers} = this.props;
    const city = [52.38333, 4.9];
    const icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });
    const zoom = 12;
    const map = leaflet.map(`map`, {
      center: city,
      zoom,
      zoomControl: false,
      marker: true
    });
    map.setView(city, zoom);
    leaflet.tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
      attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
    }).addTo(map);
    offers.forEach((offer) => {
      leaflet.marker(offer.coordinates, {icon}).addTo(map);
    });
  }

  render() {
    return <div id="map"></div>;
  }
}

export default Map;

Map.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape({
    image: PropTypes.string.isRequired,
    priceValue: PropTypes.number.isRequired,
    priceText: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    coordinates: PropTypes.array.isRequired
  }))
};
