import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import IfStatement from './Containers/IfStatement/IfStatement'
import Restaurant from './Containers/Restaurants/Restaurants'
class App extends Component {
  temp = () =>{
    return (<h1>HOME</h1>)
  }
  render() {
    return (
      <HashRouter>
      <>
        <Route path='/' exact component={ this.temp } />
        <Route path='/ifelse' exact component={ IfStatement } />
        <Route path='/restaurant' exact component={ Restaurant} />
      </>
    </HashRouter>
    );
  }
}

export default App;