import React from 'react'

const Example2 = (props) => {
  return (<>
     <div className="row">
     <p>The 'else' tag follows the 'if' statement as the condition that will run when conditions are not met.</p>
            <p>We now have an new flag, since the 'if' statement above is false, it will do the 'else' statement.</p>
              <p>The syntax: <code>if(condition)&#123;body&#125;; else&#123;body&#125;;</code></p>
          </div>
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <button className="nav-link" value="0"onClick={props.tabSwap}>Example 1 (If)</button>
      </li>
      <li className="nav-item">
        <button className="nav-link active disabled" value="1" >Example 2 (If, Else)</button>
      </li>
      <li className="nav-item">
        <button className="nav-link" value="2" onClick={props.tabSwap}>Example 3 (If, Else, Else, ...)</button>
      </li>
      <li className="nav-item">
        <button className="nav-link" value="3" onClick={props.tabSwap}>Example 4 (Advanced Conditionals)</button>
      </li>
    </ul>
    <div className="codeContainer pl-5 pr-5">
      <div className="row"> <p>Code Snippet Example 2</p></div>
      <div className="row"> <code>let x = 0;</code></div>
      <div className="row"> <code>if(x === 1)&#123;</code></div>
      <div className="row"><code>'Go to Albany'</code></div>
      <div className="row"><code>&#125;;</code></div>
      <div className="row"> <code>else&#123;</code></div>
      <div className="row"><code>'Go to Boston'</code></div>
      <div className="row"><code>&#125;;</code></div>
    </div>
    <div className="row">
      <div className="col-lg-8 col-sm-12">
        <svg viewBox="100 0 600 250">
          <text x="100" y="150">Station A</text>
          <text x="600" y="18">Albany</text>
          <text x="600" y="170">Boston</text>
          <path className="track" fill="none" stroke="lightgray" strokeWidth="5px" d="M100 120 C 300 120, 400 120, 400 80 C 400 40, 500, 40, 700, 40" />
          <path className="track" fill="none" stroke="lightgray" strokeWidth="5px" d="M100 120 C 300 120, 400 120, 400 160 C 400 200, 500, 200, 700, 200" />
          <path className="marker" fill="none" stroke="black" strokeWidth="5px" d="M100 120 C 300 120, 400 120, 400 160 C 400 200, 500, 200, 700, 200" />
        </svg>
      </div>
      <div className="col-lg-4 col-sm-12">
        <p>In this example the black moving line represents a train route from Station A going to the next station.</p>
        <p>The parameter is 'x', if 'x' is '1' then the train will go to Albany</p>
        <p>However, we set the parameter x to be 0 at the beginning; note the 'let x = 0'. The parameter 'x' is no longer true</p>
        <p>The 'else' statement will trigger if none of the 'if' above are true</p>
        <p>So the train route is going from Station A to Boston</p>
      </div>
    </div>
  </>)
}
export default Example2