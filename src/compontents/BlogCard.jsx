import React from 'react'
import './Blogcardstyle.css';

function blogCard(props) {
  return (
    <>
    <div className='card'>
        <h3>Name: {props.user.name}</h3>
        <p>Username: {props.user.username}</p>
        <p>Email: {props.user.email}</p>
        <p>City: {props.user.address.city}</p>
    </div>
    </>
  )
}

export default blogCard