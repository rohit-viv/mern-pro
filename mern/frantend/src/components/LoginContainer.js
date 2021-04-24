import React,{useState} from 'react';
import {Row,Col,Form,Button,Container} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import {loginUser} from '../redux';


function LoginContainer(props) {
  const[username,setUsername]=useState('');
  const[password,setPassword]=useState('');
 
   return (
    <Container>
        <Row>
          <Col>
          <h2>Login</h2>
          <Form className="dform">
           <p>{props.msg}</p>
          <Form.Group controlId="formcategory5">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" defaultValue={props.username} onChange={e=>setUsername(e.target.value)}/>
       </Form.Group>
          <Form.Group controlId="formcategory6">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" defaultValue={props.password} onChange={e=>setPassword(e.target.value)}/>
       </Form.Group>
       <Link to="/signup">Create New Account</Link>
        <Button onClick={()=>props.loginUser(username,password)}>Login</Button>
       </Form>
          </Col>
          <Col></Col>
          
      </Row>
   </Container>
    );
}
const mapStatetoProps=(state)=>{
  return{
      username:state.user.username,
      password:state.user.password,
      msg:state.user.msg
  }
  }
  const mapDispatchtoProps=(dispatch)=>{
      return{
              loginUser:function(username,password){
              dispatch(loginUser(username,password));
            },
      }
  }
  export default connect(mapStatetoProps,mapDispatchtoProps)(LoginContainer);
  
  
