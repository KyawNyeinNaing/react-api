import React, { useState, useEffect } from 'react'
import axios from 'axios'

const PostSearchById = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [post, setPost] = useState({})
  const [searchId, setSearchId] = useState('')

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${searchId}`)
      .then(res => {
        setLoading(true)
        setPost(res.data)
        setLoading(false)
      })
      .catch(err => {
        setError(err)
      })
  }, [searchId])

  const handleSearch = e => {
    setSearchId(e.target.value)
  }

  return (
    !loading &&
      error ?
      <span>Network Error!</span>
      :
      <>
        <input type="text" value={searchId} onChange={e => setSearchId(e.target.value)} placeholder="search title with id" />
        <div>{post.title}</div>
      </>
  )
}

export default PostSearchById
