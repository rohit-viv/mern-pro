import React,{useState} from 'react';
import { connect } from 'react-redux';
import {buyBook} from '../redux';

function BookContainer(props) {
    const[number,setNumber]=useState();
    return (
        <div>
            <h1>Book Container</h1>
            <h2>Number of Books:{props.numberofbook}</h2>
            <input type="text" value={number} onChange={e=>setNumber(e.target.value)}/>
            <button onClick={()=>props.buyBook(number)}>clichere</button>
        </div>
    );
}
const mapStatetoProps=(state)=>{
    return{
        numberofbook:state.numberofbook
    }
}
const mapDispatchtoProps=(dispatch)=>{
    return{
        buyBook:function(number){
            dispatch(buyBook(number));
        }
    }
}

export default connect(mapStatetoProps,mapDispatchtoProps)(BookContainer);