import axios from 'axios';
import React, { Component } from 'react'

export default class CreateManager extends Component {
    constructor(){
        super();
        this.state={
            Manager:[],
            managerid:'',
            firstName:'',
            lastName:'',
            e_Mail:'',
            contactNumber:'',
            department:'',
            manager:'',
            dateJoined:'',

            leaveBalance:'',
            password:'',
            checkPassword:''
        
        }
        this.create=this.create.bind(this);
        this.handleChanges=this.handleChange.bind(this);
    }
  
    create(e)
    {
        axios.post('http://localhost:50735/api/ManagerDetails/AddManager',{

            firstName:this.state.firstName,
            lastName:this.state.lastName ,
            e_Mail:this.state.e_Mail,
            contactNumber:this.state.contactNumber,
            department:this.state.department,
            manager:this.state.manager,
            dateJoined:this.state.dateJoined ,
            leaveBalance:this.state.leaveBalance ,
            password:this.state.password ,
            checkPassword:this.state.checkPassword

    }).then(response=>{
        console.warn(response);
        alert("New Manager Added Successsfully");
    })
    .catch(error=>{
        alert("error");
    })
    }

    handleChange(changeObject)
    {
        this.setState(changeObject);    
    }

    
    render() {
        
        return (
            
            <><div className="App-header">
          <form name="myForm" action="/action_page.php" onsubmit="return validateForm()" method="post">
            <table  >
            <tbody>
              <tr >
                <td ><label >First Name</label>
                <input className="spacer" type="text" name="firstName" onChange={(e)=>this.handleChange({firstName:e.target.value})}></input></td>
                </tr>
                <tr>
                <td ><label >Last Name</label>
                <input className="spacer" type="text" name="lastName" onChange={(e)=>this.handleChange({lastName:e.target.value})}></input></td>
                </tr>
                <tr>
                <td><label >E Mail</label>
                <input className="spacer" type="text" name="e_Mail" onChange={(e)=>this.handleChange({e_Mail:e.target.value})}></input></td>
                </tr>
                <tr>
                <td>
                  <label >Contact Number</label>
                  <input className="spacer" type="text" name="contactNumber"  onChange={(e)=>this.handleChange({contactNumber:e.target.value})}></input>
                </td>
              </tr>
              <tr>
                <td>
                  <label >Department</label>
                  <input className="spacer" type="text" name="department"  onChange={(e)=>this.handleChange({department:e.target.value})}></input>
                </td>
              </tr>
              <tr>
                <td>
                  <label >Manager</label>
                  <input className="spacer" type="text" name="manager"  onChange={(e)=>this.handleChange({manager:e.target.value})}></input>
                </td>
              </tr>
              <tr>
                <td>
                  <label >dateJoined</label>
                  <input className="spacer" type="date" name="dateJoined"  onChange={(e)=>this.handleChange({dateJoined:e.target.value})}></input>
                </td>
              </tr>
              <tr>
                <td>
                  <label >leaveBalance</label>
                  <input className="spacer" type="text" name="leaveBalance"  onChange={(e)=>this.handleChange({leaveBalance:e.target.value})}></input>
                </td>
              </tr>
              <tr>
                <td>
                  <label >password</label>
                  <input className="spacer" type="password" name="password"  onChange={(e)=>this.handleChange({password:e.target.value})} ></input>
                  </td>
              </tr>
              <tr>
                <td>
                  <label >check password</label>
                  <input className="spacer" type="password"  name="checkPassword"  onChange={(e)=>this.handleChange({checkPassword:e.target.value})}></input>
                </td>
              </tr>        
              <tr>
                <td><button type="button" onClick={this.create}>signup Manager</button> 
                </td>
              </tr>
              </tbody>
            </table>
          
          </form>
          </div>
          </>
          

          
        );
        

        }
}