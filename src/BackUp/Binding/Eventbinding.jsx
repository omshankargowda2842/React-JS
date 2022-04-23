import React from 'react'
class Eventbinding extends React.Component{
    state = {empsal:30000,};
    btnhandler(value){
        console.log("reading button data" , value);
        this.setState({
            empsal:30000+value,
        });
    }
    render(){
        return(
            <><h1>Employe-sal={this.state.empsal}</h1>
            <button onClick={this.btnhandler.bind(this, 50000)}>hike 50k</button>
            <button onClick={this.btnhandler.bind(this, 100000)}>hike 100k</button>
            <button onClick={this.btnhandler.bind(this, 0)}>hike 0k</button></>
        )
    }
}export default Eventbinding;