import React from 'react'
import './Blogcardstyle.css';

function blogCard(props) {
  return (
    <>
    <div className='card'>
        <h1>Name: {props.user.name}</h1>
        <h2>Username: {props.user.username}</h2>
        <p>Email: {props.user.email}</p>
        <p>City: {props.user.address.city}</p>
    </div>
    </>
  )
}

export default blogCard