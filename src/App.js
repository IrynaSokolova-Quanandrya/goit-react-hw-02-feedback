import "./App.css";
import React, { Component } from "react";
import Section from "./components/Section/Section";
import FeedbackOptions from "./components/Feedback/FeedbackOptions";
import Statistics from "./components/Statistics/Statistics";

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  leaveFeedback(vote) {
    console.log(vote);
    this.setState((state) => {
      return { [vote]: state[vote] + 1 };
    });
  }
  countTotalFeedback() {
    return this.state.good + this.state.neutral + this.state.bad;
  }
  countPositiveFeedbackPercentage() {
    return this.state.good === 0
      ? "0"
      : Math.round((this.state.good * 100) / this.countTotalFeedback()) + "%";
  }
  render() {
    const { good, neutral, bad } = this.state;

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            // options={}
            onLeaveFeedback={this.leaveFeedback.bind(this)}
          />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          ></Statistics>
        </Section>
      </>
    );
  }
}
export default Feedback;
