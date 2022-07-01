import React from 'react'
import { useParams } from 'react-router-dom'
import { useContext } from 'react';
import Globlecontext from '../../context/Globlecontext';
import {Link} from 'react-router-dom';

const UserDetail = () => {
    const myContext = useContext(Globlecontext)
    const userId = useParams('id');


    let userdetail = myContext.users[Number(userId.id) - 1];

    return (
        <div className='container'>
            <h1>
                <span> 
                    <Link to='/users'><i className='btn fa fa-arrow-left'></i></Link>
                </span> 
                Details: 
                <span>
                    {userdetail.first_name+" "+userdetail.last_name}
                </span>
            </h1>
            <table className='table table-bordered'>
                <tbody>
                    <tr>
                        <th>First Name:</th>
                        <td>{userdetail.first_name}</td>
                    </tr>
                    <tr>
                        <th>Last Name:</th><td>{userdetail.last_name}</td>
                    </tr>
                    <tr>
                        <th>Company Name:</th><td>{userdetail.company_name}</td>
                    </tr>
                    <tr>
                        <th>City:</th><td>{userdetail.city}</td>
                    </tr>
                    <tr>
                        <th>State:</th><td>{userdetail.state}</td>
                    </tr>
                    <tr>
                        <th>Zip:</th><td>{userdetail.zip}</td>
                    </tr>
                    <tr>
                        <th>Email:</th><td>{userdetail.email}</td>
                    </tr>
                    <tr>
                        <th>Web:</th><td>{userdetail.web}</td>
                    </tr>
                    <tr>
                        <th>Age:</th><td>{userdetail.age}</td>
                    </tr>

                </tbody>
            </table>
        </div>
    )
}

export default UserDetail