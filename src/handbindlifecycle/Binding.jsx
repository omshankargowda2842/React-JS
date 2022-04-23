import React from "react";
class Binding extends React.Component{
   state={emp:100} 
   buttonhandler=(value)=>{
       this.setState({emp:100+value})
   }
    render(){
        return<>
        <h1>employees={this.state.emp}</h1>
        <button onClick={this.buttonhandler.bind(this,200)}>inc 200</button>
        <button onClick={this.buttonhandler.bind(this,500)}>inc 500</button>
        <button onClick={this.buttonhandler.bind(this,0)}>inc 0</button>
        <button onClick={this.buttonhandler.bind(this,-100)} >dec 100</button>
        </>
    }

}
export default Binding