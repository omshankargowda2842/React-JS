import React from 'react'
class Classexample extends React.Component{
     Employe='om'
     empid=101
     emp_dtls={ id:101, name:'om'}
    render(){
        return <div>
        <h1> employe={this.Employe}</h1>
        <h2>empdetails={this.emp_dtls.name}</h2>
        <h2>empdetails id={this.emp_dtls.id}</h2>
        <pre>{JSON.stringify(this.emp_dtls)}</pre>
        </div>
    }
}export default Classexample