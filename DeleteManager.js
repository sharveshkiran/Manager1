import axios from 'axios';
import React, { Component } from 'react'

export default class DeleteManager extends Component {
    constructor()
    {
        super();
        this.state={
            
            managerId:''
            
    }
    this.delete=this.delete.bind(this);
    
}
    delete(){
        let managerId=this.state.managerId;
        axios.delete('http://localhost:50735/api/ManagerDetails/DeleteManager/'+managerId)
       .then(Response=>{
        alert("data deleted");
})
.catch(err=>{
    alert(err);
})

}

    render() {
        
        return (
            <div className="App-header">
          <form>
            <table  >
            <tr >
                <td ><label >Manager ID</label>
                <input className="spacer" type="text" name="managerId" onChange={(e)=>this.setState({managerId:e.target.value})}></input></td>
                </tr>
                <tr>
                <td><button type="button" onClick={this.delete}>Delete</button>
                
                 </td>
              
              </tr>
            </table>
           
          </form>
          </div>
            
        )
    }
}