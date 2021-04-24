import {SIGNUP_USER,LOGIN_USER,SET_CURRENT_USER,LOGOUT_USER} from '../action/userType';
const initialState={
    isloggedIn:false,
    username:'',
    email:'',
    profileImage:'',
    password:'',
    confirmpassword:'',
    action:'signup',
    msg:'',
    userDetails:{}
   }
const userReducer=(state=initialState,action)=>{
     
    switch(action.type){
        case SIGNUP_USER:return{
            ...state,
           msg:action.payload
        }
        case LOGIN_USER:return{
            ...state,
           msg:action.payload,
           isloggedIn:action.isloggedIn
        }
        case SET_CURRENT_USER:return{
            ...state,
           userDetails:action.payload,
           isloggedIn:true
        }
        case LOGOUT_USER:return{
            ...state,
           isloggedIn:false
        }
        default:return state
         }
}
export default userReducer;