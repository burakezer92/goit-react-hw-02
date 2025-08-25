function Feedback({ good, neutral, bad, positive }) {
  if (good + neutral + bad != 0) {
    return (
      <>
      <br />
        Good: {good}<br />
        Neutral: {neutral}<br />
        Bad: {bad}<br />
        Positive: {positive}
      </>
    );
  } else {
    return <><br />No feedback yet</>;
  }
}

export default Feedback;
