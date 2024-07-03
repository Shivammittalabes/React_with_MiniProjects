import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

    const data = useLoaderData()

// const [data, setData] = useState([])    
//
// useEffect( () => {
//     fetch('https://api.github.com/users/Shivammittalabes')
//     .then(Response => Response.json())
//     .then(data => {
//         console.log(data);
//         setData(data)
//     })
// }, [])

  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
      Github followers: {data.followers}
      <img className='' src={data.avatar_url} alt="Git Profile Pic" width={300} />
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
   const response = await fetch('https://api.github.com/users/Shivammittalabes')
    return response.json()
}
