import React from "react";
class Handling extends React.Component{
     state={
        message:"gm"
     }
    
    gmhandler=()=>{
        console.log("good");
        this.setState({message:"good morning"})
    }
    gnhandler=()=>{
        console.log("bad");
        this.setState({message:"good night"})
    }
   
    render(){
        return<>
        <h1>wish={this.state.message}</h1>
        <button onClick={this.gmhandler} >GM</button>
        <button onClick={this.gnhandler}>GN</button>
        </>
    }

}
export default Handling