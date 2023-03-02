import { Component } from 'react';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';
import { Box } from './App.styled';

class App extends Component {
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

  countTotalFeedback = () =>
    this.state.good + this.state.neutral + this.state.bad;

  countPositiveFeedbackPercentage = () =>
    Math.round(
      (100 / (this.state.good + this.state.neutral + this.state.bad)) *
        this.state.good
    );

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
          countTotalFeedback={this.countTotalFeedback}
          countPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage}
        ></Statistics>
      </Box>
    );
  }
}

export default App;
