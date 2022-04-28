import React from 'react'
class  Flipcart extends React.Component{
    state={
        mname:"Realme" ,
        mimage:"https://rukminim2.flixcart.com/image/416/416/ktbu6q80/mobile/2/m/c/8s-5g-rmx3381-realme-original-imag6zhgghpzegzp.jpeg?q=70",
        mprice:18000,
        mqty:1,
        totalprice:18000
    }
    inchandler=()=>{
        this.setState({mqty:this.state.mqty+1})
    }
    dechandler=()=>{
        this.setState({mqty:this.state.mqty-1})
    }
   

    render(){
        return<>
        <div className="container">
            <div className="row">
                <div className="col-md-8">
                  <table className="table table-hover mt-5">
                     <thead className='bg-dark text-white'>
                        
                            <th>mname</th>
                            <th>mimage</th>
                            <th>mprice</th>
                            <th>mqty</th>
                            <th>totalprice</th>

                        
                     </thead>
                  
                        <tbody>
                            <tr><td>{this.state.mname}</td>
                                <td> <img src={this.state.mimage} height="100px"alt=''/> </td>
                                <td>{this.state.mprice}</td>
                                <td> <i class="fa fa-plus-circle"onClick={this.inchandler}></i>{this.state.mqty}
                                <i class="fa fa-minus-circle"onClick={this.dechandler}></i></td>
                                <td >{this.state.totalprice*this.state.mqty}</td>
                            </tr>
                                
                            
                            </tbody>
                    </table>
                </div>
                    
                </div>
            </div>
        
        </>
    }

}
export default Flipcart 