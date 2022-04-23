import React from "react";
class Handler extends React.Component{
   state={ message:"hello"}
gmHandler=()=>{
    console.log("test case 122");
    this.setState({message:"good morning"});
   

}
gnHandler=()=>{
    console.log("test case 123");
    this.setState({message:"good night"});
    
}

render(){
    console.log("test case 121");
    return<>
    
    <h2>message:{this.state.message}</h2>
    <button onClick={this.gmHandler}>gm</button>
    <button onClick={this.gnHandler}>gn</button>
    </>
}
}
export default Handler