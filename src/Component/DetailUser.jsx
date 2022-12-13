import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

export default function DetailUser() {
    const { id } = useParams()
    const { data } = useSelector(state => state.user)
    const selectUser = data.users.filter(user => user.id == id)
    return (
        <div>
            {
                selectUser.map(user => <div className='details ' key={user.id}>
                    <div className='image'>
                        <img src={user.image} alt="Profile" />
                    </div>
                    <div>
                        <div className='detail'>
                            <label>Name: </label>
                            <span>{`${user.firstName} ${user.lastName}`}</span>
                        </div>
                        <div className='detail'>
                            <label>Age: </label>
                            <span>{user.age}</span>
                        </div>
                        <div className='detail'>
                            <label>gender: </label>
                            <span>{user.gender}</span>
                        </div>
                        <div className='detail'>
                            <label>Email: </label>
                            <span>{user.email}</span>
                        </div>
                        <div className='detail'>
                            <label>phone : </label>
                            <span>{user.phone}</span>
                        </div>
                        <div className='detail'>
                            <label>poids : </label>
                            <span>{user.weight}</span>
                        </div>
                        <div className='detail'>
                            <label>hauteur : </label>
                            <span>{user.height}</span>
                        </div>
                        <div className='detail'>
                            <label>date naissance : </label>
                            <span>{user.birthDate}</span>
                        </div>
                        <div className='detail'>
                            <label>groupe sanguin : </label>
                            <span>{user.bloodGroup}</span>
                        </div>
                        <div className='detail'>
                            <label>couleur de l'œil : </label>
                            <span>{user.eyeColor}</span>
                        </div>
                    </div>
                </div>)
            }
        </div>

    )
        }