import React, { Component } from "react";
import "./Feedback.scss";
// import propTypes from 'prop-types';

class FeedbackOptions extends Component {
  render() {
    return (
      <>
        <button
          type="button"
          className="feedback__btn"
          onClick={() => this.props.onLeaveFeedback("good")}
        >
          Good
        </button>
        <button
          type="button"
          className="feedback__btn"
          onClick={() => this.props.onLeaveFeedback("neutral")}
        >
          Neutral
        </button>
        <button
          type="button"
          className="feedback__btn"
          onClick={() => this.props.onLeaveFeedback("bad")}
        >
          Bad
        </button>
      </>
    );
  }
}

// FeedbackOptions.propTypes = {
//     leaveFeedback: propTypes.func.isRequired
// }
export default FeedbackOptions;
