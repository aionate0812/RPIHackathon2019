import React, { Component } from 'react';
import ForLoop from './Containers/ForLoop/ForLoop'
import { HashRouter, Route } from 'react-router-dom';
import Nav from './Components/Navbar/Navbar'
import IfStatement from './Containers/IfStatement/IfStatement'
import Restaurant from './Containers/Restaurants/Restaurants'
class App extends Component {
  temp = () => {
    return (<h1>HOME</h1>)
  }
  render() {
    return (
      <HashRouter>
        <>
          <Route path='/' component={Nav} />
          <div className='container mt-5'>
            <Route path='/' exact component={this.temp} />
            <Route path='/ifelse' exact component={IfStatement} />
            <Route path='/restaurant' exact component={Restaurant} />
            <Route path='/loops' exact component={ForLoop} />
          </div>
        </>
      </HashRouter>
    );
  }
}

export default App;