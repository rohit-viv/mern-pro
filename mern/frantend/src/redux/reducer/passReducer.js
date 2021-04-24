import { ADD_PASSCAT,FETCH_PASSCAT,EDIT_PASSCAT,UPDATE_PASSCAT,DELETE_PASSCAT} from '../action/passType';
const initialState={
    category:'',
    allcategories:[],
    action:'Add',
    id:'',
    msg:''
  
}
const passReducer=(state=initialState,action)=>{
     
    switch(action.type){
        case ADD_PASSCAT:return{
            ...state,
            category:action.payload,
            msg:'Record inserted successfully...'
        }
        case FETCH_PASSCAT:return{
            ...state,
            allcategories:action.payload
        }
        case EDIT_PASSCAT:return{
            ...state,
            category:action.payload,
            id:action.id,
            action:'Edit'
        }
        case UPDATE_PASSCAT:return{
            ...state,
            category:action.payload,
            action:'Add'
        }
        case DELETE_PASSCAT:return{
            ...state,
            action:'Add' 
        }
        default:return state
         }
}
export default passReducer;