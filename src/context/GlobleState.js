import Globlecontext from "./Globlecontext";
import {useEffect, useState} from 'react'


const GlobleState = (props)=>{

const[users, setUsers] = useState([]);
const[currentusers, setCurrentuser] = useState([])
const[search, setSearch]=useState("");
const[forceRender, setForcerender] = useState(false);

const[page , setPage] = useState([0,0,5]);

  if(users.length === 0){
    (async()=>{
        const response = await fetch('https://datapeace-storage.s3-us-west-2.amazonaws.com/dummy_data/users.json');
        const data = await response.json();
        setUsers(data);
        
    })();
  }
  

 
  
  
  useEffect(()=>{
    if(users.length !==0){
        let arr = [];
        // page = 0 ,10, 20,30 
        // page = 0 , 1, 2 , 3
        for(let i=page[1]*10; i<(page[1]*10+10);i++){
            arr.push(users[i])
        }
        setCurrentuser(arr);
    }
  },[page,users,forceRender])
  

  useEffect(()=>{
    if(users.length !==0){

        let arr = users.filter((user)=>{
            return (user.first_name===search || user.last_name===search )
        })
        setCurrentuser(arr);
    }
  },[search])
  


      
   function pageclickHandle(e){
    e.preventDefault();
    let value = e.target.name;

    if(value==='prev'){
        setPage([page[0]-5, page[1]-5, page[2]-5]);

    }else if(value==='next'){
        setPage([page[0]+5, page[0]+5, page[2]+5]);
        // setPage(page +1);

    }else{
        let pagenum = Number(value);

        setPage([page[0], pagenum-1 , page[2]]);
        // setPage((pagenum-1));
    }

   } 
    
  

return(

    <Globlecontext.Provider value={ {users , setUsers ,pageclickHandle , currentusers, page , setSearch , setForcerender ,forceRender }}>
        {props.children}
    </Globlecontext.Provider>
)

}

export default GlobleState;