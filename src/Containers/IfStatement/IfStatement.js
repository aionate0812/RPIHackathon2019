import React, { Component } from 'react';
import './IfStatement.css'
import Example1 from '../../Components/if_examples/example1'
import Example2 from '../../Components/if_examples/example2'
import Example3 from '../../Components/if_examples/example3'
import Example4 from '../../Components/if_examples/example4'
class IfStatement extends Component {
  constructor(props) {
    super(props);
    this.state = {
        activeIndex: "0",
    }
  }

  tabSwap = (e) =>{
      this.setState({
        activeIndex: e.target.value,
      })
  }
  currentTab = () =>{
    if(this.state.activeIndex === '0'){
      return(<Example1 tabSwap = {this.tabSwap}/>)
    }
    else if(this.state.activeIndex === '1'){
      return(<Example2 tabSwap = {this.tabSwap}/>)
    }
    else if(this.state.activeIndex === '2'){
      return(<Example3 tabSwap = {this.tabSwap}/>)
    }
    else if(this.state.activeIndex === '3'){
      return(<Example4 tabSwap = {this.tabSwap}/>)
    }
  }

  render() {
    return (
      <>
        <div className="container">
          <h3>What is an 'if statement'</h3>
          <this.currentTab />
        </div>
      </>
    );
  }
}

export default IfStatement;
