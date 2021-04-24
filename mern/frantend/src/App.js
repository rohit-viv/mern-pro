import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import {setcurrentUser,logoutUser} from "./redux"
import MainContainer from './components/MainContainer';
import setAuthenticationToken from './redux/action/setAuthenticationToken';
import jwt from 'jsonwebtoken';
function App() {
  if(localStorage.jwtToken){
    setAuthenticationToken(localStorage.jwtToken);
   
    jwt.verify(localStorage.jwtToken,'secret',function(err,decode){
      if(err){
        store.dispatch(logoutUser())
      }
      else{
        //console.log(decode)
        store.dispatch(setcurrentUser(decode));
      }
    })

  }
 
  return (
    <Provider store={store}>
 <div className="App">
  
   <MainContainer/>
 
    </div>
    </Provider>
   
  );
}

export default App;
