import React from 'react'

const Example1 = (props) => {
  return (<>
     <div className="row">
              <p>The 'if' Statement is a flag trigger. 'if' the expression in the parentheses is true, then proceed with statement inside the brackets.</p>
              <p>If the expression in the parentheses is false, then ignore the statement inside the brackets.</p>
              <p>The syntax: <code>if(condition)&#123;body&#125;;</code></p>
         
          </div>
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <button className="nav-link active disabled" value="0">Example 1 (If)</button>
      </li>
      <li className="nav-item">
        <button className="nav-link" value="1" onClick={props.tabSwap}>Example 2 (If, Else)</button>
      </li>
      <li className="nav-item">
        <button className="nav-link" value="2" onClick={props.tabSwap}>Example 3 (If, Else, Else, ...)</button>
      </li>
      <li className="nav-item">
        <button className="nav-link" value="3" onClick={props.tabSwap}>Example 4 (Advanced Conditionals)</button>
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
        <svg viewBox="100 0 600 250">
          <text x="100" y="150">Station A</text>
          <text x="600" y="18">Albany</text>
          <path className="track" fill="none" stroke="lightgray" strokeWidth="5px" d="M100 120 C 300 120, 400 120, 400 80 C 400 40, 500, 40, 700, 40" />
          <path className="marker" fill="none" stroke="black" strokeWidth="5px" d="M100 120 C 300 120, 400 120, 400 80 C 400 40, 500, 40, 700, 40" />
        </svg>
      </div>
      <div className="col-lg-4 col-sm-12">
        <p>In this example the black moving line represents a train route from Station A going to the next station.</p>
        <p>The parameter is 'x', if 'x' is '1' then the train will go to Albany</p>
        <p>Since we set the parameter x to be 1 at the beginning; note the 'let x = 1'. The train fully complete it's route.</p>
      </div>
    </div>
  </>)
}
export default Example1