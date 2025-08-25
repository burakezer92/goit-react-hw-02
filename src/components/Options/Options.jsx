import css from "../Options/options.module.css"

function Options(prop) {
  console.log(prop.total);
  if (prop.total>0) {
    return (
      <div className={css.group}>
        <button onClick={prop.good}>Good</button>
        <button onClick={prop.neutral}>Neutral</button>
        <button onClick={prop.bad}>Bad</button>
        <button onClick={prop.reset}>Reset</button>
      </div>
    );
  } else {
    return (
      <div className={css.group}>
        <button onClick={prop.good}>Good</button>
        <button onClick={prop.neutral}>Neutral</button>
        <button onClick={prop.bad}>Bad</button>
      </div>
    );
  }
}

export default Options;
