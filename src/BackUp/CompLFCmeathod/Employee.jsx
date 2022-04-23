import React from "react";
class Employee extends React.Component{
    constructor(props){
        super(props)
        console.log("constructor meathod will executes first" );
       this.state={
           currentTime:new Date().toLocaleTimeString()
        }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({currentTime:new Date().toLocaleTimeString()})
        },1000)
    }
    render(){
        console.log("render meathod will executes second ");
        return<>
        <div className="container mt-5">
            <div className="row">
                <div className="col_md_12">
                    <div className="card">
                        <div className="card_header bg-dark text-white">
                            <h1>time program</h1>
                        </div>
                        <div className="card_bady">
                        <h1>
                         time={this.state.currentTime}
                        </h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        </>
    }
}
export default Employee