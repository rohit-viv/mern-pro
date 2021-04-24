import React, { useState } from 'react';
import { connect } from 'react-redux';
import {Row,Col,Form,Button} from 'react-bootstrap';
import {addPassCat,updatePassCat} from '../redux';
import GetPassCatContainer from './GetPassCatContainer';

function PassCatContainer(props) {
    const[category,setCategory]=useState('');
    if(props.action==='Add'){
        var btn=<Button onClick={()=>props.addPassCat(category,props.user_id)}>Add_Category</Button>;
    }
    else{
        btn=<Button onClick={()=>props.updateCat(props.id,category,props.user_id)}>Update_Category</Button>;
    }
    return (
        <>
        <div className="container">
            <Row>
                <Col>
                <h2>{props.action} Password Category</h2>
                <Form className="dform">
                <p>{props.msg}</p>
                <h3>Category:{props.category}</h3>
                <Form.Group controlId="formcategory">
                <Form.Label>Enter Password Category</Form.Label>
                <Form.Control type="text" defaultValue={props.category} onChange={e=>setCategory(e.target.value)}/>
             </Form.Group>
                 {btn}
             </Form>
    </Col>
           <Col>
           <GetPassCatContainer/>
           </Col>
            </Row>
            </div>
            </>
    );
}
const mapStatetoProps=(state)=>{
return{
    category:state.pass.category,
    action:state.pass.action,
    id:state.pass.id,
    user_id:state.user.userDetails.userid,
    msg:state.pass.msg
}
}
const mapDispatchtoProps=(dispatch)=>{
    return{
        addPassCat:function(category,user_id){
            dispatch(addPassCat(category,user_id));

        },
        updateCat:function(id,category,user_id){
            dispatch(updatePassCat(id,category,user_id));
        }
    }
}
export default connect(mapStatetoProps,mapDispatchtoProps)(PassCatContainer);

