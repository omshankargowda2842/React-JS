import React from "react";
class Complifecycle extends React.Component{
    constructor(props){
        super(props)
       this.state={ time:0}
    }
    componentDidMount(){
        setInterval(() => {this.setState({time:0})
            
        }, 1000);
    }
    render(){
        return<>
<h1> Time={this.state.time}</h1>
        </>
    }

}
export default Complifecycle