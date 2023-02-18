import React from 'react';
// import PropTypes from 'prop-types';

export const Statistics = ({ good, neutral, bad }) => {
  return good + neutral + bad === 0 ? (
    <p>There is no feedback</p>
  ) : (
    <div>
      <p>
        Good: <span>{good}</span>
      </p>
      <p>
        Neutral: <span>{neutral}</span>
      </p>
      <p>
        Bad: <span>{bad}</span>
      </p>
      <p>
        Totall: <span>{good + neutral + bad}</span>
      </p>
      <p>
        Positive feedback:{' '}
        <span>{Math.round((100 / (good + neutral + bad)) * good)}%</span>
      </p>
    </div>
  );
};
