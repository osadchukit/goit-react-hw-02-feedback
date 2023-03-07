import { Component } from 'react';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';
import { Box, Section } from './App.styled';

class App extends Component {
  // static defaultProps = {};
  // static propsType = {};

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
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
    const options = Object.keys(this.state);
    const { good, neutral, bad } = this.state;

    return (
      <Box>
        <h2>Please leave feedback</h2>
        <FeedbackOptions
          onLeaveFeedback={this.onLeaveFeedback}
          options={options}
        />
        <Section>
          <h2>Statistics</h2>
          {good + neutral + bad === 0 ? (
            <p>There is no feedback</p>
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              countTotalFeedback={this.countTotalFeedback}
              countPositiveFeedbackPercentage={
                this.countPositiveFeedbackPercentage
              }
            ></Statistics>
          )}
        </Section>
      </Box>
    );
  }
}

export default App;
