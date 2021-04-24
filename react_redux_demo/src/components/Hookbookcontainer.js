import React from 'react';
import {buyBook} from '../redux';
import {useSelector,useDispatch} from 'react-redux';

function Hookbookcontainer(props) {
    const numberofbook=useSelector(state=>state.numberofbook);
    const dispatch=useDispatch();
    return (
        <div>
            <h1> Hook Container </h1>
            <h2> Number Of Book:{numberofbook}</h2>
            <button onClick={()=>dispatch(buyBook())}>clickHere</button>
        </div>
    );
}

export default Hookbookcontainer;