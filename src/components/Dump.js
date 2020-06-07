import React from 'react';
import PropTypes from 'prop-types';

function Dump({ value, at }) {
  return (
    <div className="dump">
      <p>{value}</p>
      <br />
      <p>{at}</p>
    </div>
  );
}

export default Dump;
