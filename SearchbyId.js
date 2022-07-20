import axios from 'axios';
import React, { Component } from 'react'
import Table from 'react-bootstrap/Table';
import Alert from 'react-bootstrap/Alert';

export default class SearchbyId extends Component {
    constructor(){
        super();
        this.state={
            // manager:[],
            managerId: '',
            firstName: '',
            lastName: '',
            e_Mail: '',
            contactNumber: '',
            department: '',
            manager:'',
            dateJoined: '',
            leaveBalance: '',
            password: ''         
        }
        this.SearchById=this.SearchById.bind(this);
    }
    SearchById(e){
        e.preventDefault();
        let managerId=this.state.managerId;
        axios.get('http://localhost:50735/api/ManagerDetails/ShowSpecific/'+managerId)
        .then(Response=>{
            this.setState({
                managerId:Response.data.managerId,
                firstName:Response.data.firstName,
                lastName:Response.data.lastName,
                e_Mail:Response.data.e_Mail,
                contactNumber:Response.data.contactNumber,
                department:Response.data.department,
                manager:Response.data.manager,
                dateJoined:Response.data.dateJoined,
                leaveBalance:Response.data.leaveBalance,
                password:Response.data.password 
            })
        })
    }
    render() {
        const{managerId}=this.state;
        const{firstName}=this.state;
        const{lastName}=this.state;
        const{e_Mail}=this.state;
        const{contactNumber}=this.state;
        const{department}=this.state;
        const{manager}=this.state;
        const{dateJoined}=this.state;
        const{leaveBalance}=this.state;
        const{password}=this.state;
        return (
            <>  <div className="App-header">
            <form>
              <table > 
                  <thead>
              <tr >
                  <td ><label >Manager ID</label>
                  <input className="spacer" type="text" name="managerId" onChange={(e)=>this.setState({managerId:e.target.value})}></input></td>
                  </tr>
                  <tr>
                  <td><button type="button" onClick={(e)=>this.SearchById(e)}>search</button>
                  
                   </td>
                
                </tr>
                </thead>
              </table> 
            
            </form>
            </div>
              {/* //id displayer */}
              
              <Table striped bordered hover>
                  <thead>
                  
              <tr>
              <th>manager Id</th>
              <th>full name</th>
              
              <th>E_Mail</th>
              <th>Phone number</th>
              <th>Department</th>
              <th>Manager</th>
              <th>Date Joined</th>
              <th>Leave Balance</th>
              <th>Password</th>
              </tr>
             </thead>
            
            
                    <tbody>
                     <tr>
                     <td>{managerId}</td>
                     <td>{firstName+"  "+lastName}</td>
                     <td>{e_Mail}</td>
                     <td>{contactNumber}</td>
                     <td>{department}</td>
                     <td>{manager}</td>
                     <td>{dateJoined}</td>
                     <td>{leaveBalance}</td>
                     <td>{password}</td>
                     </tr>
                    </tbody>
              {/* {
              this.state.manager?this.state.manager.map(x=>
                  <tbody>
                  <tr>
                      
                  <td> {x.managerId} </td>
                  <td>{x.firstName+"  "+x.lastName}</td>
                  
                  <td> {x.e_Mail} </td>
                  <td> {x.contactNumber} </td>
                  <td> {x.department} </td>
                  <td> {x.dateJoined} </td>
                  <td> {x.leaveBalance} </td>
                  <td> {x.password} </td>
                  </tr>
                  </tbody>
                  
                  ):null
                  } */}
              </Table>
              </>
        )
    }
}