import React from "react";
class Employe2 extends React.Component{
    constructor(props){
        super(props)
        this.state={
            datetime:new Date().toLocaleString()
        }
    }
    componentDidMount(){
        setInterval(() =>{
            this.setState({datetime:new Date().toLocaleString()})
         }, 1000);}

    
    render(){
        return<>
        <h1>date,time={this.state.datetime}</h1>
        </>
    }

}export default Employe2