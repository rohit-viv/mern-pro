export const BUY_BOOK="BUY_BOOK";
const initialstate={
    numberofbook:15
}
const bookReducer=(state=initialstate,action)=>{
    switch(action.type){
        case BUY_BOOK:return{
            ...state,
            numberofbook:state.numberofbook-action.payload
        }
        default:return state
    }
}
export default bookReducer;