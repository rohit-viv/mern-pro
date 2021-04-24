import React from 'react';
import {Navbar,Nav,NavDropdown} from 'react-bootstrap';
import {Link,Route} from 'react-router-dom';
import { connect } from 'react-redux';
import {logoutUser} from '../redux/action/userAction'
import User_Profile from './User_Profile';
import AddPassContainer from './addPassContainer';

function Header(props) {
    return (
      <div>
<Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">Password Management System</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Link to="#home" className="nav-link">Home</Link>
      <Link to="/" className="nav-link">Category</Link>
      <NavDropdown title="Password" id="basic-nav-dropdown">
        <Link to="addnewpassword" className="dropdown-item" role="button">Add New Password </Link>
        <Link to="#" className="dropdown-item" role="button">View All Password</Link>
        <NavDropdown.Divider />
      </NavDropdown>
      <NavDropdown title= {props.userDetails.username} id="basic-nav-dropdown">
        <Link to="/userprofile" className="dropdown-item" role="button">View Profile</Link>
        <Link to="/login" onClick={()=>props.logoutUser()} className="dropdown-item" role="button">Logout</Link>

        <NavDropdown.Divider />
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
</Navbar>
<Route path="/userprofile" component={ User_Profile}/>
<Route path="/addnewpassword" component={AddPassContainer}/>
      </div>
    )
        
}
const mapStatetoProps=(state)=>{
  return{
      userDetails:state.user.userDetails,
     
  }
  }
  const mapDispatchtoProps=(dispatch)=>{
    return{
          logoutUser:function(username,password){
            dispatch(logoutUser());
          },
    }
}
  export default connect(mapStatetoProps,mapDispatchtoProps)(Header);