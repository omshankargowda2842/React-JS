import React from "react";
class Binding extends React.Component{
    state={
        emp_sal:30000
    }
    updatehandler(om){
        this.setState({emp_sal:30000+om})
    }
    render(){
        return <>
        <h2>salary={this.state.emp_sal}</h2>
        <button onClick={this.updatehandler.bind(this,20000)}>hike 20000</button>
        <button onClick={this.updatehandler.bind(this,30000)}>hike 30000</button>
        <button onClick={this.updatehandler.bind(this,0)}>hike 0</button>
        </>
    }
}
export default Binding