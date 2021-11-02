import React, { Component } from "react";

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedbackGood = () => {
    this.setState((prevState) => {
      return {
        good: prevState.good + 1,
      };
    });
  };
  handleFeedbackNeutral = () => {
    this.setState((prevState) => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };
  handleFeedbackBad = () => {
    this.setState((prevState) => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };

  render() {
    const { good, neutral, bad } = this.state;
    const arr = [{ good, neutral, bad }];
    const countTotalFeedback = arr.reduce(
      (prev, { good, neutral, bad }) => prev + good + neutral + bad,
      0
    );
    const countPositiveFeedbackPercentage =
      good === 0 ? "0" : Math.round((good * 100) / countTotalFeedback) + "%";
    return (
      <div className="feedback">
        <h1 className="feedback__title">Please leave feedback</h1>
        <button
          type="button"
          className="feedback__btn"
          onClick={this.handleFeedbackGood}
        >
          Good
        </button>
        <button
          type="button"
          className="feedback__btn"
          onClick={this.handleFeedbackNeutral}
        >
          Neutral
        </button>
        <button
          type="button"
          className="feedback__btn"
          onClick={this.handleFeedbackBad}
        >
          Bad
        </button>
        <h2 className="feedback__title">Statistics</h2>
        <p className="feedback__text">No feedback given</p>
        <p className="feedback__text">Good:{good}</p>
        <p className="feedback__text">Neutral: {neutral} </p>
        <p className="feedback__text">Bad: {bad} </p>
        <p className="feedback__text">Total:{countTotalFeedback}</p>
        <p className="feedback__text">
          Positive feedback: {countPositiveFeedbackPercentage}{" "}
        </p>
      </div>
    );
  }
}
export default Feedback;
