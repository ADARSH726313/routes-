import React from 'react'
import { useParams } from 'react-router-dom'
function User() {

    const {id}= useParams();
  return (
    <div className=' text-center bg-green-400 p-6S'>User : {id}</div>
  )
}

export default User