import React , { Component } from 'react';
import Card from '../../Components/restaurant/restaurantCard'
import api from '../../services/apiService'

class restaurantList extends Component {
  constructor(props) {
    super(props);
    this.state = {
        list: []
    }
  }
  componentDidMount(){
    api().then((res)=>{
      this.setState({list:res})
    })
  }
  CardList = () =>{
    return(
      this.state.list.map((e,i)=>{
        return (<Card ele = {e} key={i}/>)
      })
    )
  }
  render(){
    return(<>
    <div className="container">
    <div className="row">
    <this.CardList />
    </div>
    </div>
    </>)
  }

}

export default restaurantList;