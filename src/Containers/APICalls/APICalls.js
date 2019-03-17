import React from 'react'
import tripAPI from '../../services/apiService'

class APICalls extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            apiResults: [],
            currentObj: '',
            currentObjPath: '',
            objSelected: '-',
            objKeySelected: '-',
            renderResults: ''
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
        if (this.state.objSelected === '-') {
            this.setState({ renderResults: this.state.apiResults })
            return
        }
        if (this.state.objKeySelected === '-') {
            this.setState({ renderResults: this.state.apiResults[this.state.objSelected] })
            return
        }
        this.setState({ renderResults: this.state.apiResults[this.state.objSelected][this.state.objKeySelected] })
    }
    componentDidMount() {
        tripAPI().then((res) => {
            this.setState({ apiResults: res }, () => {
            })
        })

    }

    render() {
        return (
            <>
                <div className='container'>
                    <h2>API Call and Objects</h2>
                    <p>API Calls are done through get requests to a back-end server. THe response is given back as an JSON file where it would be parsed into an Object</p>
                    <p>Below is a sandbox using TripAdvisor's API.</p>
                    <p>Objects often have nested variables and catagories, its very easy to get lost! You can have Objects within Objects, Arrays within Objects and so on!</p>
                </div>
                <div className='container'>
                    <span>Response Object </span>
                    <select className="btn btn-info col-1" value={this.state.objSelected} onChange={this.handleObjSelected}>
                        <option>-</option>
                        {this.state.apiResults.map((e, i) => {
                            return <option key={i} value={i}>{i}</option>
                        })}
                    </select>

                    {this.state.apiResults[this.state.objSelected] ?
                        <select value={this.state.objKeySelected} onChange={this.handleObjKeySelected}>
                            <option>-</option>
                            {Object.keys(this.state.apiResults[this.state.objSelected]).map((e, i) => {
                                return <option key={i} value={e.toLowerCase()}>{e}</option>
                            })}
                        </select> : <p></p>
                    }
                    <button className="btn btn-success" onClick={this.renderSelection}>
                        Run
                </button>
                    <pre>{JSON.stringify({ data: this.state.renderResults }, null, 4)}</pre>
                </div>
            </>
        )
    }
}

export default APICalls