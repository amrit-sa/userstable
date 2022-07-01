import React,{useState} from 'react'
import { useContext} from 'react';
import Globlecontext from '../context/Globlecontext';

const Search = () => {
    const myContext = useContext(Globlecontext);

    const [input, setInput] = useState("");

const HandleSearch=()=>{
    if(input !==''){
        let toPascal = input[0].toUpperCase()+input.substring(1,input.length);
        myContext.setSearch(toPascal);
    }else{
        myContext.setForcerender(!myContext.forceRender);
    }
}

return (
    <div className='container'>
            <h1>Users</h1>

        <div className='btn-group'>
            <input  value={input} onChange={(e)=>{
                setInput(e.target.value);
            }} placeholder="Enter user name to search" />
            <button className='btn btn-primary' onClick={HandleSearch}><i className="fa fa-search"></i></button>
        </div>
    </div>
  )
}

export default Search