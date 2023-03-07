import { nanoid } from 'nanoid';
import { Button } from 'components/App/App.styled';
import React from 'react';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map(nameButton => (
        <Button
          key={nanoid()}
          type="button"
          onClick={() => onLeaveFeedback(nameButton)}
        >
          {nameButton[0].toUpperCase() + nameButton.slice(1)}
        </Button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array,
  onLeaveFeedback: PropTypes.func,
};
