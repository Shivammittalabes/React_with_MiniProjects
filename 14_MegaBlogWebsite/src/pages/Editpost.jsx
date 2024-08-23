import React, { useState, useEffect } from 'react'
import { Container, PostForm } from '../components'
import appwriteService from "../appwrite/conf"
import { useNavigate, useParams } from 'react-router-dom'

function Editpost() {
    const [post, setPosts] = useState(null)
     
    // extract value from url
    const {slug} = useParams();
    const navigate = useNavigate();
    
    // if change in slug received datavalue by useEffect (jb bhi slug chng ho datavalue lekr aoo )
    useEffect( () => {

        if (slug) {
            appwriteService.getPost(slug).then( (post) => {

                if (post) {
                    setPosts(post)
                }

            })
        }

    } , [slug, navigate])

  return post ? (
    <div className='py-8'>
        <Container>
            <PostForm post={post} />
        </Container>
    </div>
  ) : null
}

export default Editpost
