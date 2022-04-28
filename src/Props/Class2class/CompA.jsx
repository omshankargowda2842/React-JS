import React from "react";
import CompB from "./CompB";

class CompA extends React.Component{
    e_id=1011;
    name="omshankar";
    message='gm';
render(){
    return <div>
        <h1> component A</h1>
       < CompB e_id={101} emname={"shankar"}/>
        </div>
}
}
export  default CompA