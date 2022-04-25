import React from "react";
import employees from "./Data";
class  Employee extends  React.Component{
    render (){
        return<>
        <pre>{JSON.stringify(employees)}</pre>
        <div className="container">
            <div className="row">
                <div className="col-md-8">
                   <table className="table table-hover">
                      <thead className="ml-auto">
                          <th>id</th>
                          
                          <th>LastName</th>
                          <th>Email</th>
                          <th>Gender</th>
                      </thead>
                      <tbody>
                          {
                              employees.map((employee) =>{
                                 return <tr key={employee.id}>
                                      <td>{employee.id}</td>
                                      
                                      <td>{employee.last_name}</td>
                                      <td>{employee.email}</td>
                                      <td>{employee.gender}</td>
                                  </tr>
                              })
                          }
                      </tbody>
                   </table> 
                        
                    
                </div>
            </div>
        </div>
        </>
    }

}
export default Employee