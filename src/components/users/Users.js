import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import Globlecontext from '../../context/Globlecontext';
import Pagination from '../Pagination';
import Search from '../Search';
const Users = () => {
    const[sorted, setSorted] = useState('ASC');
    const myContext = useContext(Globlecontext)

    function handlesort(column_name){
        if(sorted==='ASC'){
            let sortedarr = [];
            sortedarr = myContext.users.sort((a,b)=> a[column_name] > b[column_name] ?1:-1 )
            myContext.setUsers(sortedarr);
            setSorted('DESC')
            myContext.setForcerender(!myContext.forceRender);
        }else{
            let sortedarr = [];
            sortedarr = myContext.users.sort((a,b)=> a[column_name] < b[column_name] ?1:-1 )
            myContext.setUsers(sortedarr);
            setSorted('ASC')
            myContext.setForcerender(!myContext.forceRender);
        }
    }

    return (
        <>
        <Search/>
        
        <div className='container'>
            <table className='table table-bordered main-table'>
                <thead>
                    <tr>
                        <th onClick={()=>handlesort('first_name')}>First Name  <i className="fa fa-sort"></i></th>
                        <th onClick={()=>handlesort('last_name')}>Last Name  <i className="fa fa-sort"></i></th>
                        <th onClick={()=>handlesort('age')}>Age  <i className="fa fa-sort"></i></th>
                        <th onClick={()=>handlesort('email')}>Email  <i className="fa fa-sort"></i></th>
                        <th onClick={()=>handlesort('web')}>Website  <i className="fa fa-sort"></i></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        myContext.currentusers.map((user, index) => {
                            return (
                                <tr key={index}>
                                    <td><Link to={user.id.toString()}>{user.first_name}</Link></td>
                                    <td>{user.last_name}</td>
                                    <td>{user.age}</td>
                                    <td>{user.email}</td>
                                    <td><a target="_blank" rel="noreferrer" href={user.web}>{user.web}</a></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
            <Pagination/>
        </>
    )
}

export default Users



