import React from 'react'
import tripAPI from '../../services/apiService'

class APICalls extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            apiResults:[],
            currentObj:'',
            currentObjPath:'',
            objSelected:'-',
            objKeySelected:'-',
            renderResults:''
        }
    } 

    updateCurrentObj = (i) => {
       
    }

    renderBreadCrumbs = () => {
       
    }

    handleObjSelected = (e) => {
        this.setState({objSelected:e.target.value})
    }

    handleObjKeySelected = (e) => {
        this.setState({objKeySelected:e.target.value})
    }

    renderSelection = (e) => {
        if(this.state.objSelected === '-'){
            this.setState({renderResults:this.state.apiResults})
            return
        }
        if(this.state.objKeySelected === '-') {
            this.setState({renderResults:this.state.apiResults[this.state.objSelected]})
            return
        }
        this.setState({renderResults:this.state.apiResults[this.state.objSelected][this.state.objKeySelected]}) 
    }
    componentDidMount(){
        tripAPI().then((res)=>{
            this.setState({apiResults:res},()=>{
            })
        })
        
    }

    render () {
        return (
            <div>
                <span>Response Object</span>
                <select value={this.state.objSelected} onChange={this.handleObjSelected}>
                <option>-</option>
                {this.state.apiResults.map((e,i)=>{
                    return <option key={i} value={i}>{i}</option>
                })}
                </select>

                {this.state.apiResults[this.state.objSelected]?
                <select value={this.state.objKeySelected} onChange={this.handleObjKeySelected}>
                <option>-</option>
                {Object.keys(this.state.apiResults[this.state.objSelected]).map((e,i)=>{
                    return <option  key={i} value={e.toLowerCase()}>{e}</option>
                })}

                
                </select>:<p></p>
            }
                <button onClick={this.renderSelection}>
                    Run
                </button>
                <pre>{JSON.stringify({data:this.state.renderResults},null,4)}</pre>
                
            
            </div>
        )
    }
}

export default APICalls