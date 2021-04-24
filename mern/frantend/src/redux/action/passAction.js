import { ADD_PASSCAT,FETCH_PASSCAT,EDIT_PASSCAT,UPDATE_PASSCAT,DELETE_PASSCAT} from './passType';
const axios = require('axios');
export const addPassCat=(category,user_id)=> {
    var OPTIONS ={
        url: "http://localhost:5000/api/addNewCategory",
        method: "POST",
        data:{add_cat:category,user_id:user_id},
        headers: {
          "Content-Type": "application/json",
        },
       
      };
    axios(OPTIONS).then(res => console.log(res)).catch(err => console.log(err));
    return {
        type: ADD_PASSCAT,
        payload: category
    }
}
export const fetchPassCat=(user_id)=> {
  return function(dispatch){
    var OPTIONS = {
      url: "http://localhost:5000/api/addcategory/"+user_id,
      method: "GET",
      headers: {
     
},
    };
    axios(OPTIONS)
    .then(res => {
      const categories=res.data.result
      dispatch(getPassCat(categories))
      console.log(categories)
    })
    .catch(err => console.log(err));
   }
}
export const getPassCat=(categories)=> {
  return {
    type:FETCH_PASSCAT,
    payload:categories
}
}
export const editPassCat=(id,categories)=> {
  return {
    type:EDIT_PASSCAT,
    payload:categories,
    id:id
}
}
export const updatePassCat=(id,category)=> {
  var OPTIONS={
    url: "http://localhost:5000/api/add-update",
    method: "PATCH",
    data:{_id:id,add_cat:category},
    headers: {
    
    "Content-Type":"application/json",
    },
   
  };
axios(OPTIONS).then(res => console.log(res)).catch(err => console.log(err));
  return {
    type:UPDATE_PASSCAT,
    payload:category,

}
}
export const deletePassCat=(id)=> {
  var OPTIONS={
    url:"http://localhost:5000/api/delete",
    method:"DELETE",
    data:{_id:id},
    headers: {
    
    "Content-Type":"application/json",
    },
   
  };
axios(OPTIONS).then(res => console.log(res)).catch(err => console.log(err));
  return {
    type:DELETE_PASSCAT,
    payload:id,
  }
}