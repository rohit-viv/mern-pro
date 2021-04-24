import { SIGNUP_USER,LOGIN_USER,SET_CURRENT_USER,LOGOUT_USER} from './userType';
import setAuthentication from './setAuthenticationToken';
import jwt from 'jsonwebtoken';
const axios = require('axios');
export const signupUser=(username,email,password,confirmpassword)=> {
  return function(dispatch){

  var OPTIONS ={
    url: "http://localhost:5000/userapi/signup",
    method: "POST",
    data:{
      username:username,
      email:email,
      password:password,
      confirmpassword:confirmpassword
    },
    headers: {
      "Content-Type": "application/json",
    },
   
  }
axios(OPTIONS).then(res =>{
  const message=res.data.message;
  dispatch({
    type:SIGNUP_USER,
    payload:message,

  })
})
  .catch(err => console.log(err));

}
}

export const loginUser=(username,password)=> {
  return function(dispatch){

  var OPTIONS ={
    url: "http://localhost:5000/userapi/login",
    method: "POST",
    data:{
      username:username,
      password:password,
    },
    headers: {
      "Content-Type": "application/json",
    },
   
  }
axios(OPTIONS).then(res =>{
 
  const message=res.data.message;
  if(message==='User Found..'){
    const token=res.data.token;
    localStorage.setItem('jwtToken',token);
    setAuthentication(token);
    //console.log(jwt.decode(token));
    dispatch(setcurrentUser(jwt.decode(token)));
    dispatch({
      type:LOGIN_USER,
      payload:message,
      isloggedIn:true
  })

  } else{
    dispatch({
      type:LOGIN_USER,
      payload:message,
      isloggedIn:false
  }) 
    
  }
 
})
  .catch(err => console.log(err));

}
}

export const setcurrentUser=(user)=>{  
  return{
         type:SET_CURRENT_USER,
         payload:user
  }

}
export const logoutUser=(username,password)=> {
  return function(dispatch){
    localStorage.removeItem('jwtToken');
    setAuthentication(false);
    dispatch(setcurrentUser({}))

    dispatch({
      type:LOGOUT_USER
    })
    window.location.href="/";
  }
}