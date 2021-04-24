import { ADD_PASSWORD } from '../action/addPassType';
const initalState = {
    pass_cat: '',
    project_name:'',
    pass_details:'',
    action:'Add_Password',
    msg:''
}

export const addPassReducer=(state=initalState,action)=>{

       switch(action.type){
           case ADD_PASSWORD:return{
               ...state,
               msg:action.payload,
               project_name:action.project_name
           }
           default:return state
       }
     
    

}
export default addPassReducer;