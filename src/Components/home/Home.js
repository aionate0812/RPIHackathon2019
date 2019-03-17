import React from 'react'
import { Link } from 'react-router-dom'
import './home.css'
const Home = () => {
  return (<>
    <div className='container'>
      <div className="row justify-content-center">
        <div className="toast-body">
          <img src="http://2ality.com/2011/10/logo-js/js.jpg" className="rounded mr-2" alt="JavaScript" width='50' height='50' />
          <strong className="mr-auto">Notice! </strong>
          Hello, World! These examples are written and explained with JavaScript!
         </div>
      </div>
      <div className='row'>
        <Link className='col-lg-4 col-sm-12 noDesc' to='ifelse'>
          <h3>If/Else Statements</h3>
          <img src='https://media.giphy.com/media/55IcZKfutOQZG/giphy.gif' alt='ifelse' style={{ 'maxWidth': '300px' }} />
          <p>Learn the basics and fundamentals of if/else statements with examplations and visual imagery.</p>
        </Link>
        <Link className='col-lg-4 col-sm-12 noDesc' to='loops'>
          <h3>For Loop</h3>
          <img src='https://media.giphy.com/media/K5kfQExKk731K/giphy.gif' alt='forloop' style={{ 'maxWidth': '300px' }} />
          <p>See in action the looping cycles of for loops with sandbox test ground.</p>
        </Link>
        <Link className='col-lg-4 col-sm-12 noDesc' to='apicalls'>
          <h3>API</h3>
          <img src='https://media.giphy.com/media/ini6gpWb8ZbQ4/giphy.gif' alt='api' style={{ 'maxWidth': '300px' }} />
          <p>How JSON Objects are represented and explained in bucket format.</p>
        </Link>
      </div>
    </div>

  </>)
}

export default Home