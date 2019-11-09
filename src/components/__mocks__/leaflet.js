const leaflet = jest.mock(`leaflet`);

leaflet.icon = () => {
  return {
  };
};

leaflet.tileLayer = () => {
  return {
    addTo: jest.fn()
  };
};

leaflet.marker = () => {
  return {
    addTo: jest.fn()
  };
};

leaflet.map = () => {
  return {
    setView: jest.fn()
  };
};

leaflet.setView = () => {
  return {
  };
};

module.exports = leaflet;

