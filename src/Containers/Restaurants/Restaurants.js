import React , { Component } from 'react';
import Card from '../../Components/restaurant/restaurantCard'
import {tripAPI} from '../../services/apiService'

class restaurantList extends Component {
  constructor(props) {
    super(props);
    this.state = {
        list: []
    }
  }
  componentDidMount(){
    if(!JSON.parse(localStorage.getItem('restaurants'))){
      tripAPI().then((res)=>{
        this.setState({list:res})
        localStorage.setItem('restaurants',JSON.stringify(res))
      })
    } else {
      this.setState({list:JSON.parse(localStorage.getItem('restaurants'))})

    }
    
    
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