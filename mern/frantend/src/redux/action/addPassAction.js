import {ADD_PASSWORD} from './addPassType';
const axios=require('axios');
export const addPassword=(pass_cat,project_name,pass_details)=>{
  return function(dispatch){
    var OPTIONS ={
        url: "http://localhost:5000/api/Add_New_password",
        method: "POST",
        data:{pass_cat:pass_cat,project_name:project_name,pass_details:pass_details},
        headers:{
          "Content-Type": "application/json",
        },
       };
    axios(OPTIONS).then(res =>{
      const msg=res.data.message
      dispatch({
        type:ADD_PASSWORD,
        payload:msg,
        
    
      })

    }).catch(err => console.log(err));
    
    return {
        type:ADD_PASSWORD,
        msg:'Record Inserted Successfully...'
        }
}
}