import React from 'react';
import {useSelector} from 'react-redux';
import PassCatContainer from './passCatContainer';
import LoginContainer from './LoginContainer';
import SignupContainer from './SignupContainer';
import Header from './header';
import {BrowserRouter as Router,Route} from 'react-router-dom';
function MainContainer(props) {
    const isUserLoggedIn=useSelector(state=>state.user.isloggedIn)
    if(isUserLoggedIn===false){
       var callContainer=<><Route exact path="/" component={LoginContainer}/>
        <Route path="/signup" component={SignupContainer}/>
         </>
    }
    else{
        callContainer=<><Header/><Route exact path="/" component={PassCatContainer}/></>  
    }
    return (
       <Router>
       {callContainer}
       </Router>
    );
}
export default MainContainer;

