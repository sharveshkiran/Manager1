import React, { Component } from 'react'
import axios from 'axios';
import Table from 'react-bootstrap/Table';


export default class ShowAllManager extends Component {
    constructor(){
        super();
        this.state={
            manager:[]
        }
    }
    componentDidMount(){
        axios.get('http://localhost:50735/api/ManagerDetails/Allmanager')
        .then(response=>{
            this.setState({manager:response.data})

        }).catch(error=>{
            console.warn(error)
        })
    }
    render() {
        return (
            <>
            <Table striped bordered hover>
            <thead>
                
                <tr>
                <th>Manager Id</th>
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
    
                {
                this.state.manager?this.state.manager.map(x=>
                    <tbody>
                    <tr>
                        
                    <td> {x.managerId} </td>
                    <td>{x.firstName+"  "+x.lastName}</td>
                    
                    <td> {x.e_Mail} </td>
                    <td> {x.contactNumber} </td>
                    <td> {x.department} </td>
                    <td> {x.manager} </td>
                    <td> {x.dateJoined} </td>
                    <td> {x.leaveBalance} </td>
                    <td> {x.password} </td>
                    </tr>
                    </tbody>
                
                ):null
                }
            </Table>
            </>
        )
    }
}