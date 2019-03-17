import React from 'react'
import {Link} from 'react-router-dom'
const CurrentEvent = () => {
  let today = new Date();
  let hours = today.getHours();
  if (hours >= 6  && hours <= 10) {
    return (
      <>
    <h4>Its almost time for breakfast. What should I eat?</h4>
    <Link className="btn btn-primary" to="/restaurant">Search Restaurants!</Link>
    </>
    )
  }
  else if (hours >= 11 && hours <= 15) {
    return (
      <>
    <h4>Its almost time for lunch. What should I eat?</h4>
    <Link className="btn btn-primary" to="/restaurant">Search Restaurants!</Link>
    </>
    )
  }
  else if (hours >= 17 && hours <= 21) {
    return (
      <>
    <h4>Its almost time for dinner. What should I eat?</h4>
    <Link className="btn btn-primary" to="/restaurant">Search Restaurants!</Link>
    </>
    )
  }
  else if (hours === 14 || hours === 0){
    return(<h4>I'm craving snacks.</h4>)
  }
  else{
    return (<h4>Looks like its not time to eat.</h4>)
  }
  }

const Example4 = (props) => {
  let today = new Date();
  let hours = today.getHours();
  let newHours = hours;
  let minutes = today.getMinutes();
  minutes = minutes < 10 ? '0'+minutes : minutes;
  let ending = "AM"
  if (hours > 12) {
    newHours = hours - 12;
    ending = "PM"
  }
  let time = hours + ":" + minutes;
  let newTime = newHours + ":" + minutes + ending;

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
    <div className="col-12 pl-5 pr-5" style={{"backgroundColor":"lightblue", "opacity":"80%"}}>
      <div className="row"> <p>Code Snippet Example 4</p></div>
      <div className="row"> <code>if(hours >= 6  && hours &#60;= 11) &#123;</code></div>
      <div className="row"><code>'Its almost time for breakfast. What should I eat?';</code></div>
      <div className="row"><code>&#125;;</code></div>
      <div className="row"> <code>else if(hours >= 11  && hours &#60;= 15) &#123;</code></div>
      <div className="row"><code>'Its almost time for lunch. What should I eat?';</code></div>
      <div className="row"><code>&#125;;</code></div>
      <div className="row"> <code>else if(hours >= 17  && hours &#60;= 21) &#123;</code></div>
      <div className="row"><code>'Its almost time for dinner. What should I eat?';</code></div>
      <div className="row"><code>&#125;;</code></div>
      <div className="row"> <code>else if(hours === 14  || hours === 0) &#123;</code></div>
      <div className="row"><code>'I'm craving snacks.;</code></div>
      <div className="row"><code>&#125;;</code></div>
      <div className="row"> <code>else&#123;</code></div>
      <div className="row"><code>'Looks like its not time to eat.';</code></div>
      <div className="row"><code>&#125;;</code></div>
    </div>
    <div className="row">
      <div className="col-lg-8 col-sm-12">
        <h3>It is currently {time} in 24-hour format.</h3>
        <h3>It is currently {newTime} in 12-hour format.</h3>
        <CurrentEvent />
      </div>
      <div className="col-lg-4 col-sm-12">
      <p>In this example the time is taken when reaching this page. We have to create multiple conditions with 'if' and 'else' to specifically target time slots.</p>
      <p>We use the hours in the 24-hour format to easily give us a range between breakfast, lunch, and dinner without having to parse the information.</p>
      <p>Inside the conditions we have '&&' which is an 'AND' statement. We can use it to check if both the LEFT and RIGHT side of the condition is BOTH true</p>
      <p>If either one of them is false then the whole condition is false. We use this to get specifically times between 6AM and 11PM, 11AM and 3PM, etc</p>
      <p>The '||' is an 'OR' statement which is used to check both the LEFT and RIGHT side but if EITHER of them is true then the whole condition is true.</p>
</div>
    </div>
  </>)
}
export default Example4