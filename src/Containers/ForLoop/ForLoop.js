import React from 'react'
import '../ForLoop/ForLoop.css'


class ForLoop extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            loopVariable:'0',
            loopLogicStop:'',
            setLoopVariableValue:'',
            lengthOfLoop:'',
            runLoop:false,
            output:'',
            interval:'',
            

        }
    }

    setLoopVariable = (e) => {
        this.setState({loopVariable:e.target.value}, ()=>{console.log(this.state.loopVariable)})
    }

    setLoopLogicStop = (e) => {
        this.setState({loopLogicStop:e.target.value}, ()=>{console.log(this.state.loopLogicStop)})
    }

    setLoopVariableValue = (e) => {
        this.setState({loopVariableValue:e.target.value}, ()=>{console.log(this.state.loopVariableValue)})
    }
    
    runCirclePerSecond = (i) => {
         return setInterval(()=>{
            let newOutput = this.state.output
            if(Number.isNaN(Number(i))){
                this.setState({output:newOutput+`${i}\n`})
            } else {
            this.setState({output:newOutput+`${i++}\n`}) 
            }
        },1000)

    }
    runCircle = () =>{
        this.setState({runLoop:true})
        setTimeout(()=>{this.setState(
            {runLoop:false}
            ,()=>{
                let newOutput = this.state.output
                if(Number.isNaN(Number(this.state.loopVariable))){
                    this.setState({output:newOutput+`${(this.state.output.slice((this.state.loopVariable.length+1)*-1))}\n`})
                } else {
                this.setState({output:newOutput+`${Number((this.state.output.slice((this.state.loopVariable.length+1)*-1)))+1}\n`}) 
                }
                console.log('interval',this.state.interval) 
            clearInterval(this.state.interval)
            })
            },5000)
            
        this.setState({interval:this.runCirclePerSecond(this.state.loopVariable)})
        

    }

    render () {
        return (
            <div>
                <div className='container'>
                <h1>For Loops</h1>
                <div className='row p-3' style={{'backgroundColor':'#A44A3F','color':'white'}}>
                    <div className='col-12'>
                    <p>For loops are blocks of code that execute over and over again until a certain condition is met.</p>
                    </div>
                    <div className='col-12'>
                    <p>Parts of a loop</p>
                    </div>
                    <div className='col-12'>
                        <code style={{'color':'lightblue'}}>for ( first statement; second statement (condition); third statement ) &#123; <br/> 
                        code that will be repeated
                        <br/> &#125;
                        </code>
                    </div>
                    </div>
                <div className='row m-0 p-3' style={{width:'100%',marginLeft:'10px',display:'flex'}}>
                    <div className='col-lg-6 col-sm-12 mb-5'>
                        <svg width="100%" height="319px" viewBox="0 0 528 319" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                            <path className="" fill="#FFFFFF" stroke="#000000" strokeWidth="2.5" strokeMiterlimit="10" 
                                d="M1,159.5
                                a263,158.5 0 1,0 526,0
                                a263,158.5 0 1,0 -526,0"
                            />
                            {!this.state.runLoop?<path className="" fill="#FFFFFF" stroke="green" strokeWidth="4" strokeMiterlimit="10" 
                            d="M1,159.5
                            a263,158.5 0 1,0 526,0
                            a263,158.5 0 1,0 -526,0"
                            />
                            :
                            <path className="path-click" fill="#FFFFFF" stroke="green" strokeWidth="4" strokeMiterlimit="10" 
                            d="M1,159.5
                            a263,158.5 0 1,0 526,0
                            a263,158.5 0 1,0 -526,0"
                            />}
                            
                        </svg>
                    </div>
                    <div className='row col-lg-6 col-sm-12 mt-2'>
                    <div className='col-4'>
                        <h6>First Statement</h6>
                        <pre><code>let i = 0;</code></pre>
                    </div>
                    <div className='col-4'>
                        <h6>Second Statement (conditional)</h6>
                        <pre><code> i &lt; 10;</code></pre>
                    </div>
                    <div className='col-4'>
                        <h6>Third Statement</h6>
                        <pre><code> i++</code></pre>
                    </div>
                    <div className='col-lg-5 col-sm-5'>
                    <label>Type a message to print </label>
                    <input placeholder='123 or abc...'onChange={this.setLoopVariable} type='text'/>
                    </div>
                        <div className='col-lg-7 col-sm-7 pl-3'><code>for(let i = 0; i &lt; 5; i++)&#123;<br/> console.log('{this.state.loopVariable}') <br/>&#125;</code></div>
                    
                    

                        <button className='col-12 p-0 btn btn-success mt-3' onClick={this.runCircle}>Run</button>
                        <div className='col-12'>
                            <p>Output</p>
                            <div className='pt-3 pl-2' style={{width:'100%',border:'1px solid black'}}>
                        
                            <p>{this.state.output}</p>
                            </div>
                        </div>
                        </div>
                </div>
            </div>

            </div>
        )
    }
}

export default ForLoop