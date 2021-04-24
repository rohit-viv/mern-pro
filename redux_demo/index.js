const redux=require('redux');
const createStore=redux.createStore;
const combineReducers=redux.combineReducers;
const middleware=redux.applyMiddleware;
const Buy_Book="Buy_Book";
const Buy_Pens="Buy_Pens";
const intialStateBooks={
    numberOfBooks:10,
}
const intialStatePens={
    numberOfpens:15,
}
/*const action={
    type:Buy_Book,
    info:"My first Redux-App"
};*/
function buyBook(){
    return {
        type:Buy_Book,
        payload:"My first Redux-App"
    }
}
function buyPen(){
    return {
        type:Buy_Pens,
        payload:"My second Redux-App"
    }
}
const BookReducer=(state=intialStateBooks,action)=>{
    switch(action.type){
        case "Buy_Book":return{
            ...state,
            numberOfBooks:state.numberOfBooks-1
        }
    
    default:return state;
            
    }
}

const PenReducer=(state= intialStatePens,action)=>{
    switch(action.type){
                case "Buy_Pens":return{
                    ...state,
                    numberOfpens:state. numberOfpens-3
                }
            
        default:return state;
            
    }
}
const Reducer=combineReducers({
    book: BookReducer,
    pen:PenReducer
});
const logger=store=>{
    return next=>{
            return action=>{
                const result=next(action);
                console.log("middleware logger",result);
                return result;
            }
    }
}
const store=createStore(Reducer,middleware(logger));
console.log("intial State",store.getState());
const unsubscribe=store.subscribe(()=>{
    console.log("updated state value",store.getState())})
    store.dispatch(buyBook());
    store.dispatch(buyBook());
    store.dispatch(buyBook());
    store.dispatch(buyPen());
    store.dispatch(buyPen());
    store.dispatch(buyPen());
    unsubscribe();