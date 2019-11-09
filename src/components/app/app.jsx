import React from 'react';
import Main from '../main/main.jsx';
import {offersPropTypes} from '../../prop-types/prop-types';
import PropTypes from 'prop-types';

const App = ({offers}) => {
  return (
    <Main offers={offers}/>
  );
};

export default App;

App.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape(offersPropTypes))
};
