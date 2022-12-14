import React from 'react'
import './ListeUser.css'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import User from './../User/User';
import Accueil from './../Accueil/Accueil';

export default function ListUser() {
    const navigate = useNavigate()
    const { data } = useSelector(state => state.user)
    return (
        <div className='ListeUsers'>
            {data.length != 0 && data.users.map(user => <User key={user.id} image={user.image} nom={`${user.firstName} ${user.lastName}`} details={e => navigate(`/DetailUser/${user.id}`)} listeTaches={e => navigate(`/ListeToDo/${user.id}`)} />)}
        </div>
    )
}
