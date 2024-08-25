import React, { useEffect, useState } from 'react'
import appwriteServices from "../appwrite/conf"
import { Container, PostCard } from "../components"

function Home() {
    const [posts, setPosts] = useState([])

    useEffect( () => {
        appwriteServices.getPosts().then((posts) => {
            if(posts){
                setPosts(posts.documents)
            }
        })   
    }, [])

    if (posts.length === 0) {
        return (
            <div className='w-full py-8 mt-4 text-center'>
                <Container>
                    <div className='flex flex-wrap'>
                        <div className='p-24 w-full'>
                            <h1 className='text-2xl font-bold hover:text-gray-500'>
                                Login to read posts.
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }

    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((posts) => (
                        <div key={posts.$id} className='p-2 w-1/4'>
                            <PostCard {...posts} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )

}

export default Home
