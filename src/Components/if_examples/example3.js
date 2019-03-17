import React from 'react'

const Example3 = (props) => {
  return (<>
    <div className="row">

      <p>With multiple 'if' statements and 'else' statements you can chain them. If one condition is not met but another one is met, do the other condition but not the 'else'</p>
      <p>The syntax: <code>if(condition)&#123;body&#125;; else if(condition2)&#123;body2&#125;; else if(condition3)&#123;body3&#125;;else&#123;body4&#125;;</code></p>
    </div>
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <button className="nav-link" value="0" onClick={props.tabSwap}>Example 1 (If)</button>
      </li>
      <li className="nav-item">
        <button className="nav-link" value="1" onClick={props.tabSwap}>Example 2 (If, Else)</button>
      </li>
      <li className="nav-item">
        <button className="nav-link active disabled" value="2">Example 3 (If, Else, Else, ...)</button>
      </li>
      <li className="nav-item">
        <button className="nav-link" value="3" onClick={props.tabSwap}>Example 4 (Advanced Conditionals)</button>
      </li>
    </ul>
    <div className="codeContainer pl-5 pr-5">
      <div className="row"> <p>Code Snippet Example 3</p></div>
      <div className="row"> <code>let x = 2;</code></div>
      <div className="row"> <code>if(x === 1)&#123;</code></div>
      <div className="row"><code>'Go to Albany'</code></div>
      <div className="row"><code>&#125;;</code></div>
      <div className="row"> <code>else if(x === 2)&#123;</code></div>
      <div className="row"><code>'Go to Pennsylvania'</code></div>
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
          <text x="600" y="100">Pennsylvania</text>
          <path className="track" fill="none" stroke="lightgray" strokeWidth="5px" d="M100 120 C 300 120, 400 120, 400 80 C 400 40, 500 40, 700, 40" />
          <path className="track" fill="none" stroke="lightgray" strokeWidth="5px" d="M100 120 C 300 120, 400 120, 400 160 C 400 200, 500, 200, 700, 200" />
          <path className="track" fill="none" stroke="lightgray" strokeWidth="5px" d="M100 120 C 300 120, 400 120, 400 80, C400 80, 500 80, 700 80" />
          <path className="marker" fill="none" stroke="black" strokeWidth="5px" d="M100 120 C 300 120, 400 120, 400 80, C400 80, 500 80, 700 80" />
        </svg>
      </div>
      <div className="col-lg-4 col-sm-12">
        <p>In this example 'x' is defined as 2. The first 'if' statement is false so it moves on to the next statement which is 'else if'.</p>
        <p>Since 'x' is now 2, the train will go from Station A to Pennsylvania.
          the 'else' statement is not reached. It is important to note that an 'if' statement should be followed by an 'else' statement.</p>
          <p>It is possible to have 'if' followed by another 'if' statement, if both conditions are considered true then both will activate their statements</p>
      </div>
    </div>
    <div className="row">
      <p>Not only can you use 'if' and 'else' statements you can chain them.</p>
      <p>'if' one condition is met, inside that body there can be another 'if' statement which has their own conditions</p>
      <p>The syntax: <code>if(condition)&#123;if(another condition)&#123;body&#125;;&#125;; else&#123;body&#125;;</code></p>
    </div>
    <div className="codeContainer pl-5 pr-5 mb-5">
      <div className="row"> <p>Code Snippet Example 3</p></div>
      <div className="row"> <code>let x = 1;</code></div>
      <div className="row"> <code>let y = 3;</code></div>
      <div className="row"> <code>if(x === 1)&#123;</code></div>
      <div className="row"> <code>if(y === 3)&#123;</code></div>
      <div className="row"><code>'Go to Troy instead of Albany'</code></div>
      <div className="row"><code>&#125;;</code></div>
      <div className='row'><code>else&#123;</code></div>
      <div className="row"><code>'Go to Albany'</code></div>
      <div className="row"><code>&#125;;</code></div>
      <div className="row"> <code>if(x === 2)&#123;</code></div>
      <div className="row"><code>'Go to Pennsylvania'</code></div>
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
          <text x="600" y="100">Pennsylvania</text>
          <text x="650" y="57">Troy</text>
          <path className="track" fill="none" stroke="lightgray" strokeWidth="5px" d="M100 120 C 300 120, 400 120, 400 80 C 400 40, 500 40, 700, 40" />
          <path className="track" fill="none" stroke="lightgray" strokeWidth="5px" d="M100 120 C 300 120, 400 120, 400 160 C 400 200, 500, 200, 700, 200" />
          <path className="track" fill="none" stroke="lightgray" strokeWidth="5px" d="M100 120 C 300 120, 400 120, 400 80, C400 80, 500 80, 700 80" />
          <path className="track" fill="none" stroke="lightgray" strokeWidth="5px" d="M100 120 C 300 120, 400 120, 400 80 C 400 40, 500 40, 600 40, C 600 65 , 700 65, 700 65" />
          <path className="marker" fill="none" stroke="black" strokeWidth="5px" d="M100 120 C 300 120, 400 120, 400 80 C 400 40, 500 40, 600 40, C 600 65 , 700 65, 700 65" />
        </svg>
      </div>
      <div className="col-lg-4 col-sm-12 mb-5">
        <p>Now we have two parameters! We have the 'x' and 'y' variable, where 'x' is  and 'y' is 3.</p>
        <p>As you can see 'x' is in fact 1 and starts to go into the body of statement. Inside the body there is another 'if' statement with passes the condition 'y === 3'</p>
        <p>If 'y' was not 3 then the train route would head to Albany, since it 'y' is in fact 3 the destination is Troy.</p>
      </div>
    </div>
  </>)
}
export default Example3