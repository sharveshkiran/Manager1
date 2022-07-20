import './App.css';
import React from 'react'
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';
import ShowAllManager from './Manager/ShowAllManager';
import CreateManager from './Manager/CreateManager';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import EditManager from './Manager/EditManager';
import DeleteManager from './Manager/DeleteManager';
import SearchbyId from './Manager/SearchbyId';
import Login from './Manager/Login';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Managernav() {
    return (
        <>
        <div style={{ 
      
      
    }}></div>
        <BrowserRouter>
        <div className="App">
        <Navbar bg="dark" variant="dark">
        <nav className="me-auto">
              <div className="collapse navbar-collapse">
                <Link className="navbar-brand" to={'/sign-in'}>
                  RemoteStack
                </Link>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                      <Link className="nav-link" to={'/ShowAllManager'}>
                        show all Manager
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to={'/SearchbyId'}>
                        show specific Manager
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to={'/CreateManager'}>
                        Sign-up
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to={'/EditManager'}>
                        edit Manager profile
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to={'/DeleteManager'}>
                        delete Manager profile
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to={'/Login'}>
                        Sign-in
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              
            </nav>
             </Navbar>
        
          <Routes>
            <Route path='/ShowAllManager' element={<ShowAllManager/>}></Route>
            <Route path='/CreateManager' element={<CreateManager/>}></Route>
            <Route path='/EditManager' element={<EditManager/>}></Route>
            <Route path='/DeleteManager' element={<DeleteManager/>}></Route>
            <Route path='/SearchbyId' element={<SearchbyId/>}></Route>
            <Route path="/Login" element={<Login/>}></Route>
          </Routes>
    
        </div>
        </BrowserRouter>
        </>
    );
}