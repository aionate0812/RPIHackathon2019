import React from 'react'
const currentEvent = () => {
  let today = new Date();
  let hours = today.getHours();
  let minutes = today.getMinutes();
  minutes = minutes < 10 ? "0" + minutes : minutes;
  let ending = "AM"
  if (hours > 12) {
    hours = hours - 12;
    ending = "PM"
  }
  let event = "";
  if (hours > 0 && ending === 'PM' || hours < 3 && ending === 'AM') {
    return (<h3>Its almost lunch. What should I eat?</h3>)
  }
}
const Example1 = (props) => {
  let today = new Date();
  let hours = today.getHours();
  let minutes = today.getMinutes();
  minutes = minutes < 10 ? "0" + minutes : minutes;
  let ending = "AM"
  if (hours > 12) {
    hours = hours - 12;
    ending = "PM"
  }
  let time = hours + ":" + minutes + ending;
  return (<>
    <div className="row">
      <p>Simple variable conditions such as if 'x' is a value is basic and can get the job done.</p>
      <p>But sometimes complicated conditions are needed to calculate when something becomes true when we aren't sure when those conditions could be met.</p>
      <p>Lets suppose 'x' isn't a variable we can control, such as the weather.</p>
      <p>The weather can change based on time of day, geography, climate, as well as other factors</p>
      <p>We would create complex 'if' and 'else' statements to see when these conditions are met and act upon them</p>

    </div>
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <button className="nav-link" value="0" onClick={props.tabSwap}>Example 1 (If)</button>
      </li>
      <li className="nav-item">
        <button className="nav-link" value="1" onClick={props.tabSwap}>Example 2 (If, Else)</button>
      </li>
      <li className="nav-item">
        <button className="nav-link" value="2" onClick={props.tabSwap}>Example 3 (If, Else, Else, ...)</button>
      </li>
      <li className="nav-item">
        <button className="nav-link active disabled" value="3" >Example 4 (Advanced Conditionals)</button>
      </li>
    </ul>
    <div className="codeContainer pl-5 pr-5">
      <div className="row"> <p>Code Snippet Example 1</p></div>
      <div className="row"> <code>let x = 1;</code></div>
      <div className="row"> <code>if(x === 1)&#123;</code></div>
      <div className="row"><code>'Go to Albany'</code></div>
      <div className="row"><code>&#125;;</code></div>
    </div>
    <div className="row">
      <div className="col-lg-8 col-sm-12">
        <h4>It is currently {time}.</h4>
      </div>
      <div className="col-lg-4 col-sm-12">

      </div>
    </div>
  </>)
}
export default Example1