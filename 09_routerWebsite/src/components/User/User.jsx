import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams() 
  return (
    <div className='bg-gray-600 text-white text text-3xl p-4 rounded-3xl'>
      User: {userid}
    </div>
  )
}

export default User
