import React from 'react'
import { useContext} from 'react';
import Globlecontext from '../context/Globlecontext';

const Pagination = () => {
    const myContext = useContext(Globlecontext)
    let prevbool = false , nextbool = false;

    if(myContext.page[0] ===0){
        prevbool = true;
    }else if(myContext.page[2] === 50){
        nextbool = true
    }else{

    }
    let prevbtn="<"
    let nextbtn=">"


let buttongrp=[];

let start = myContext.page[0];
let current = myContext.page[1];
let end = myContext.page[2];

for(let i=start ; i<end;i++){
    let marked = 'btn btn-secondary';
    if(current===i){
        marked = "btn btn-primary";
    }
    buttongrp.push(
        <button className={marked} name={i+1} onClick={myContext.pageclickHandle} > {i+1 < 10 ? 0+''+(i+1): i+1 }</button>
    )
}


  return (
    <div className='container'>

        <div className='button-group'>
            <button className='btn btn-secondary' name="prev" onClick={myContext.pageclickHandle} disabled={prevbool}>{prevbtn}</button>
            {
                buttongrp
            }
        
            <button className='btn btn-secondary' name="next" onClick={myContext.pageclickHandle} disabled={nextbool} >{nextbtn}</button>
        </div>
    </div>
  )
}

export default Pagination