import React, {useEffect}from 'react';
import {useSelector,useDispatch}from 'react-redux';
import {Table,Button} from 'react-bootstrap';
import {fetchPassCat,editPassCat,deletePassCat} from '../redux';

function GetPassCatContainer(props) {
    const user_id=useSelector(state=>state.user.userDetails.userid);
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(fetchPassCat(user_id))
    });
    const allcategories=useSelector(state=>state.pass.allcategories);
    if(allcategories){
       var catData=allcategories.map((val,i)=>(
            <tr key={i}>
                <td>{i+1}</td>
                <td key={val._id}>{val._id}</td>
        <td key={i}>{val.password_category}</td>
       <td><Button className="btn btn-primary" onClick={()=>editCategory(val._id,val.password_category)}>
         Edit</Button>
        <Button className="btn btn-danger" onClick={()=>deleteCategory(val._id)}>Delete</Button></td>
            </tr>
        ));
    }else{
        catData=
         <tr >
                <td colSpan="4">No Records Founds... </td>remote
            </tr>
    }

    const editCategory=(id,category)=>{
        dispatch(editPassCat(id,category));

    }
    const deleteCategory=(id)=>{
        dispatch(deletePassCat(id));
    }
    return (
        <div>
            <h2> All Password CAtegory</h2>
            <Table striped bordered hover size="sm">
            <thead>
                <tr>
                <th>#</th>
                 <th>Category_ID</th>
                 <th>Category_Name</th>
                 <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                 catData
                }
            </tbody>
            </Table>
            
            
        </div>
    );
}

export default GetPassCatContainer;