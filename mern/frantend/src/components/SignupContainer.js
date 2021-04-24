import React,{useState} from 'react';
import {Row,Col,Form,Button,Container} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import {signupUser} from '../redux';

function SignupContainer(props) {
  const[username,setUsername]=useState('');
  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('');
  const[confirmpassword,setConfirmpassword]=useState('');
   return (
    <Container>
        <Row>
          <Col>
          <h2>Signup</h2>
          <Form className="dform">
           <p>{props.msg}</p>
          <Form.Group controlId="formcategory1">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" defaultValue={props.username} onChange={e=>setUsername(e.target.value)}/>
       </Form.Group>

       <Form.Group controlId="formcategory2">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" defaultValue={props.email} onChange={e=>setEmail(e.target.value)}/>
       </Form.Group>

       <Form.Group controlId="formcategory3">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" defaultValue={props.password} onChange={e=>setPassword(e.target.value)}/>
       </Form.Group>

       <Form.Group controlId="formcategory4">
          <Form.Label>ConfirmPassword</Form.Label>
          <Form.Control type="password" defaultValue={props.confirmpassword} onChange={e=>setConfirmpassword(e.target.value)}/>
       </Form.Group>
       <Link to="/">Login Here</Link>
       <Button onClick={()=>props.signupUser(username,email,password,confirmpassword)}>Signup</Button>
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
      emai:state.user.email,
      password:state.user.password,
      confirmpassword:state.user.confirmpassword,
      msg:state.user.msg
  }
  }
  const mapDispatchtoProps=(dispatch)=>{
      return{
        signupUser:function(username,email,password,confirmpassword){
              dispatch(signupUser(username,email,password,confirmpassword));
              },
        
      }
  }
  export default connect(mapStatetoProps,mapDispatchtoProps)(SignupContainer);
  
  
