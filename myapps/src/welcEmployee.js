import React from 'react';
const WelcEmp=(props)=> {
   return(
        <>
        <h1>Hello Welcome </h1>
        <h2>login successfully</h2>
        <button onClick={props.logoutHandler}>logout</button>
        </>
    );

    }

export default WelcEmp;