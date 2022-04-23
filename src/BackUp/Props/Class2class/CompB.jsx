import React from 'react'

class CompB extends React.Component{
    render(){ 
        return<div>
           <h1>component B</h1>
           <pre>{JSON.stringify(this.props)}</pre>
        name=  {this.props.emname}<br/>
        id={this.props.e_id}
       </div>
    }
}

export default CompB