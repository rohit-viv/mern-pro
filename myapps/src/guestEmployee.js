import React from 'react';
const GusetEmp=(props)=>{
    return(
        <>
        <h1>Hello Guest Employee</h1>
        <h2>please Login</h2>
        <button onClick={props.loginHandler}>login</button>
        </>
    )

}
export default GusetEmp;