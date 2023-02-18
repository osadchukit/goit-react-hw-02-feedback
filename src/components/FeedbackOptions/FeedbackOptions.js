import { Bytton } from 'components/App/App.styled';
import React from 'react';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ addGood, addNeutral, addBad }) => {
  return (
    <div>
      <Bytton type="button" onClick={addGood}>
        Good
      </Bytton>
      <Bytton type="button" onClick={addNeutral}>
        Neutral
      </Bytton>
      <Bytton type="button" onClick={addBad}>
        bad
      </Bytton>
    </div>
  );
};

FeedbackOptions.propTypes = {
  addGood: PropTypes.func.isRequired,
  addNeutral: PropTypes.func.isRequired,
  addBad: PropTypes.func.isRequired,
};
