import React, { Component } from 'react';
import ForLoop from './Containers/ForLoop/ForLoop'
import { HashRouter, Route } from 'react-router-dom';
import Nav from './Components/Navbar/Navbar'
import Footer from './Components/Navbar/Footer'
import Home from './Components/home/Home'
import IfStatement from './Containers/IfStatement/IfStatement'
import Restaurant from './Containers/Restaurants/Restaurants'
import APICalls from './Containers/APICalls/APICalls'

class App extends Component {
  render() {
    return (
      <HashRouter>
        <>
          <Route path='/' component={Nav} />
          <div className='container mt-5 mb-5'>
            <Route path='/' exact component={Home} />
            <Route path='/ifelse' exact component={IfStatement} />
            <Route path='/restaurant' exact component={Restaurant} />
            <Route path='/loops' exact component={ForLoop} />
            <Route path='/apicalls' exact component={APICalls} />
          </div>
          <div className='mt-5'>
          <Route path='/' component={Footer} />
          </div>
        </>
      </HashRouter>
    );
  }
}

export default App;