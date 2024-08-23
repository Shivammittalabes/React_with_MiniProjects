import React from 'react' 
import appwriteService from "../appwrite/conf"
import { Link } from 'react-router-dom'

// rfce = react functional component

function PostCard({$id, title, featuredImage}) {
  return (

     // here href = to={}

    <Link to={`/post/${$id}`}> 
    
     // internal dollar is for syntax

        <div className='w-full bg-gray-100 rounded-xl p-4 '>
            <div className='w-full justify-center mb-4'>
                <img src={appwriteService.getFileReview(featuredImage)} alt={title} className='rounded-xl' />

            </div>

            <h2 className='text-xl font-bold'
            >{title}</h2>

        </div> 
      
    </Link>
  )
}

export default PostCard
