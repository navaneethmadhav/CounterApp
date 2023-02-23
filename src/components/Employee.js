import React from 'react'
import './Employee.css'

function Employee() {
    const employee=[
        {'username':'Akash','Designation':'Tester'},
        {'username':'Manu','Designation':'Developer'},
        {'username':'Dipin','Designation':'Engineer'},
        {'username':'Anand','Designation':'Tester'},
    ]
  return (
    <div>
        {
            
            employee.map(item=>(
                <div>
                    <p>Username: {item.username}</p>
                    
                    <br/>
                    Designation: {item.Designation}
                </div>
            ))
        }
    </div>
  )
}

export default Employee