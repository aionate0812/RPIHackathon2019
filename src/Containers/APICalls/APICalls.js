import React from 'react'
import {tripApiQuery} from '../../services/apiService'

class APICalls extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            apiResults: [],
            currentObj: '',
            currentObjPath: '',
            objSelected: 'Index',
            objKeySelected: 'Object',
            renderResults: '',
            query:'restaurants',
        }
    }

    updateCurrentObj = (i) => {

    }

    renderBreadCrumbs = () => {

    }

    handleObjSelected = (e) => {
        this.setState({ objSelected: e.target.value })
    }

    handleObjKeySelected = (e) => {
        this.setState({ objKeySelected: e.target.value })
    }

    renderSelection = (e) => {
        if (this.state.objSelected === 'Index') {
            this.setState({ renderResults: this.state.apiResults })
            return
        }
        if (this.state.objKeySelected === 'Object') {
            this.setState({ renderResults: this.state.apiResults[this.state.objSelected] })
            return
        }
        this.setState({ renderResults: this.state.apiResults[this.state.objSelected][this.state.objKeySelected] })
    }

    getApiandSave = (q) => {
        if(!JSON.parse(localStorage.getItem(q))){
            tripApiQuery(q).then((res) => {
                this.setState({ apiResults: res }, () => {
                })
              localStorage.setItem(q,JSON.stringify(res))
            })
          } else {
            this.setState({apiResults:JSON.parse(localStorage.getItem(q))})
      
          }
    }
    searchOnClick = () => {
        this.setState({apiResults:[]},()=>{
            this.getApiandSave(this.state.query)
        })
        
    }
    handleSearchQuery = (e) => {
        this.setState({query:e.target.value})
    }
    componentDidMount() {
        this.getApiandSave(this.state.query)
    }

    render() {
        return (
            <>
                <div className='container'>
                    <h2>API Call and Objects</h2>
                    <p>API calls are done through GET requests to a back-end server. The response is given back as an JSON file where it would be parsed into an Object</p>
                    <p>Below is a sandbox using TripAdvisor's API to for Restaurants around Troy.</p>
                    <p>Objects often have nested variables and catagories, its very easy to get lost! You can have Objects within Objects, Arrays within Objects and so on!</p>
                    <p>If you run the code with the default search 'Index', the JSON object will display the whole entire array of Objects. Similarily with the default search 'Object' after selecting an 'Index'.</p>
                    <p>Notice that if you select the different 'Object', you can specifically target certain variables.</p>
                </div>
                <div className='container'>
                <div className='row'>
                <span className='col-4 font-weight-bolder'>Select Query for API</span> 
                <select className='btn btn-warning col-2 mr-2'value={this.state.query} onChange={this.handleSearchQuery}>
                <option value='restaurants'>restaurants</option>
                <option value='attractions'>attractions</option>
                <option value='hotels'>hotels</option>
                </select>
                <button className='btn btn-success col-2'onClick={this.searchOnClick}>Search API</button>
                </div>
                <div className='row mt-2 mb-2'>
                    <span className='col-4 mt-3'>Response Object </span>
                    <select className="btn btn-warning col-2 mr-2" value={this.state.objSelected} onChange={this.handleObjSelected}>
                        <option>Index</option>
                        {this.state.apiResults.map((e, i) => {
                            return <option key={i} value={i}>{i}</option>
                        })}
                    </select>
                    {this.state.apiResults[this.state.objSelected] ?
                        <select className='btn btn-info col-2 mr-2'value={this.state.objKeySelected} onChange={this.handleObjKeySelected}>
                            <option>Object</option>
                            {Object.keys(this.state.apiResults[this.state.objSelected]).map((e, i) => {
                                return <option key={i} value={e.toLowerCase()}>{e}</option>
                            })}
                        </select> : <p></p>
                    }
                    
                    <button className="btn btn-success" onClick={this.renderSelection}>
                        Run
                </button>

                </div>
                </div>
                <div className='container'>
                <div className='row bg-dark mt-3'>
                    <pre className='text-white'>{JSON.stringify({ data: this.state.renderResults }, null, 4)}</pre>
                </div>
                </div>
            </>
        )
    }
}

export default APICalls