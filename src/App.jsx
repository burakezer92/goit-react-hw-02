import "./App.css";
import { useState, useEffect } from "react";
import Description from "./components/Description/Description.jsx";
import Options from "./components/Options/Options.jsx";
import Feedback from "./components/Feedback/Feedback.jsx";

function App() {
  const [good, setGood] = useState(Number(localStorage.getItem("good")));
  const [neutral, setNeutral] = useState(
    Number(localStorage.getItem("neutral"))
  );
  const [bad, setBad] = useState(Number(localStorage.getItem("bad")));
  const totalFeedback = good + neutral + bad;
  let positive = Math.round((good / totalFeedback) * 100);

  useEffect(() => {
    localStorage.setItem("good", good);
    localStorage.setItem("neutral", neutral);
    localStorage.setItem("bad", bad);
  }, [good, neutral, bad]);

  const goodClick = () => {
    setGood((good) => good + 1);
  };

  const neutralClick = () => {
    setNeutral((neutral) => neutral + 1);
  };

  const badClick = () => {
    setBad((bad) => bad + 1);
  };

  const resetClick = () => {
    setGood((good) => 0);
    setNeutral((neutral) => 0);
    setBad((bad) => 0);
  };

  return (
    <>
      <Description />
      <Options
        good={goodClick}
        neutral={neutralClick}
        bad={badClick}
        reset={resetClick}
        total={totalFeedback}
      />
      <Feedback good={good} neutral={neutral} bad={bad} positive={positive} />
    </>
  );
}

export default App;
