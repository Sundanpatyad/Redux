import React, { useState } from 'react'
import { useCreatePostMutation, useDeletePostMutation, useGetApiByNameQuery, useUpdatePostMutation } from './services/Api'


const App = () => {
  const { data, error, isLoadding, isSuccess, isFetching } = useGetApiByNameQuery();
  const [count, setCount] = useState(0)
  return (
    <div>
      <h1>React Pratice For Redux RTK Query</h1>
      {isLoadding && <h2>Loading....</h2>}
      {isFetching && <h2>Fetching...</h2>}
      {error && <h2>Error...</h2>}
      {isSuccess && <div>
        {data?.map(posts => {
          return (<h2 key={posts.id}>{posts.title}</h2>

          )
        })}
      </div>}
      <Addpost/>
    </div>
  )
}

export default App


export const Addpost =()=>{
 
  const [addPost] = useCreatePostMutation();
  const [updatePost] = useUpdatePostMutation();
  const [deletePost] = useDeletePostMutation();
  const posts = {
    "id":2,
    "title":"Posted",
    "Author":"Me",
  }

  const updatePosts = {
    "id":2,
    "title":"Update",
    "Author":"Me Updated",
  }
  const handler = async()=>{
    await addPost(posts);
  }
  const handleUpdate = async()=>{
    await updatePost(updatePosts);
  } 
  const handleDelete = async()=>{
    await deletePost(posts.id);
  }
  return(
   <>
    <button onClick={handler}>Add Posts</button>
    <button onClick={handleDelete}>Delete Posts</button>
    <button onClick={handleUpdate}>UpdatePosts</button>
    
    </>
  )
}