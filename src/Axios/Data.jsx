import React, { Component } from 'react'
import Axios from 'axios'

export class Data extends Component {
    constructor(props){
        super(props)
        this.state={
            users:[],
        }
    }
componentDidMount(){
    Axios.get('https://jsonplaceholder.typicode.com/photos')
    .then((response)=>{
        //console.log(response);
        this.setState({
            users:response.data
        })
    })
    .catch(()=>{})
}

  render() {
    return (
      <div>
        <div className="container">
            <div className="row">
                <pre>{JSON.stringify(this.state.users)}</pre>
              {
                  this.state.users.length >0 ? <React.Fragment>
                      <table className='table table-hover'>
                          <thead className='bg-success text-white'>
                          <tr>
                              <th>Id</th>
                              <th>Title</th>
                              <th>URl</th>
                              <th>Image</th>
                          </tr>
                          </thead>
                          <tbody>
                              {
                                  this.state.users.map((User)=>{
                                      return  <tr key={User.id}>
                                          <td>{User.id}</td>
                                          <td>{User.title}</td>
                                          <td>{User.url}</td>
                                          <td><img src={User.thumbnailUrl}  alt=""/></td>
                                          </tr>
                                  })
                              }
                          </tbody>
                      </table>
                  </React.Fragment>:null
              }
            </div>
        </div>
      </div>
    )
            }
}

export default Data
