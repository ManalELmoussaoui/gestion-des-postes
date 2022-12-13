import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import User from './User';


function ListUser() {
    const navigate = useNavigate()
    const { data } = useSelector(state => state.user)
    return (
        <div className='ListeUsers'>
            {data.length !== 0 && data.users.map(user => <User key={user.id} image={user.image} nom={`${user.firstName} ${user.lastName}`} details={e => navigate(`/DetailUser/${user.id}`)} listePosts={e => navigate(`/ListePosts/${user.id}`)} />)}
        </div>
    )
};


export default ListUser;