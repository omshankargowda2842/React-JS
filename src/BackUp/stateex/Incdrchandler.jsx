import React from "react";
class Incdrchandler extends React.Component{
    state={
        qty:1
    }
    inchandler=()=>{
        this.setState({qty:this.state.qty +1})

    }
    dechandler=()=>{
        this.setState({qty:this.state.qty -1})
    }
    render(){
        return<> 
        <h2>quantiy={this.state.qty}</h2>
        <button onClick={this.inchandler}>inc</button>
        <button onClick={this.dechandler}>dec</button>

        </>
    }


}
export default Incdrchandler