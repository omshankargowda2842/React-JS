import React from "react";
class Form extends React.Component{
    
    render(){
        return<>
        <h1>Form Handling</h1>
        <form action="">
           <label htmlFor="">email:</label> 
           <input type="text" /><br />
           <label htmlFor="">password:</label>
           <input type="text" />
           
        </form>
        </>
    }
}
export default Form