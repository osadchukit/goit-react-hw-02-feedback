import React from 'react';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';
import { Box } from './App.styled';

class App extends React.Component {
  // static defaultProps = {};
  // static propsType = {};

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addGood = () => {
    this.setState(prevGood => ({
      good: prevGood.good + 1,
    }));
  };

  addNeutral = () => {
    this.setState(prevNeutral => {
      return { neutral: prevNeutral.neutral + 1 };
    });
  };

  addBad = () => {
    this.setState(prevBad => ({
      bad: prevBad.bad + 1,
    }));
  };

  render() {
    return (
      <Box>
        <h2>Please leave feedback</h2>
        <FeedbackOptions
          addGood={this.addGood}
          addNeutral={this.addNeutral}
          addBad={this.addBad}
        />
        <h2>Statistics</h2>
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
        ></Statistics>
      </Box>
    );
  }
}

export default App;
