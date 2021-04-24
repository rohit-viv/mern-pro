import React, { useState } from 'react';
import { connect } from 'react-redux';
import {Row,Col,Form,Button} from 'react-bootstrap';
import {fetchPassCat} from '../redux';
import {addPassword} from '../redux';
function AddPassContainer(props) {
    const[pass_cat,setPass_cat]=useState('');
    const[project_name,setProject_name]=useState('');
    const[pass_details,setPass_details]=useState('');
    return (
        <>
        <div className="container">
            <Row>
                <Col>
    <h2>Add Password</h2>
                <Form className="dform">
                {props.msg} 
                <Form.Group controlId="formcategory">
                <div className="form-group">
                  
          <label>Select Password:</label><br/>
          <select className="control-form" name="password_category" 
          defaultValue={props.pass_cat} onChange={e=>setPass_cat(e.target.value)}>
            <option value="">Choose Password Category</option>
            <option>youtube</option>
            <option>gmail</option>
            <option>facebook</option>
            <option>cpanel</option>
            <option>Node js</option>
           
          </select>
      </div>
             </Form.Group>
             <Form.Group controlId="formcategory">
                <Form.Label>Project Name</Form.Label>
                <Form.Control type="text" defaultValue={props.project_name} onChange={e=>setProject_name(e.target.value)}/>
             </Form.Group>
             <Form.Group controlId="formcategory">
                <Form.Label>Password Details</Form.Label>
                <Form.Control type="text" defaultValue={props.pass_details} onChange={e=>setPass_details(e.target.value)}/>
             </Form.Group>
             <Button onClick={()=>props.addPassword(pass_cat,project_name,pass_details)}>Add_Password</Button>
   
             </Form>
    </Col>
           <Col>
           </Col>
            </Row>
            </div>
            </>
    );
}
const mapStatetoProps=(state)=>{
return{
    pass_cat:state.addpass.pass_cat,
    project_name:state.addpass.project_name,
    pass_details:state.addpass.pass_details,
    msg:state.addpass.msg,
   allcategories:state.pass.allcategories
}
}
const mapDispatchtoProps=(dispatch)=>{
    return{
            addPassword:function(pass_cat,project_name,pass_details){
            dispatch(addPassword(pass_cat,project_name,pass_details));

        },
            fetchPassCat:function(allcategories){
            dispatch(fetchPassCat(allcategories));
        }
    
    }
}
export default connect(mapStatetoProps,mapDispatchtoProps)(AddPassContainer);

