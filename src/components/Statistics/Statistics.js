import React from "react";
import "./Statistics.scss";

function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <ul className="statistics__list">
      <li>No feedback given</li>
      <li>Good:{good}</li>
      <li>Neutral: {neutral} </li>
      <li>Bad: {bad} </li>
      <li>Total:{total}</li>
      <li>Positive feedback: {positivePercentage}</li>
    </ul>
  );
}

export default Statistics;
