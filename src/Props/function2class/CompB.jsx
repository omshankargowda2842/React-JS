import React from "react";
class CompB extends React.Component{
    render(props){
        return <div>
           <h1> <p>component B</p>
            <pre>{JSON.stringify(this.props)}</pre>
           eid= {this.props.id}<br/>
           ename={this.props.name}</h1>
        </div>
    }
}export default CompB