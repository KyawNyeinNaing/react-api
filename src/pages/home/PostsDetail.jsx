import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const PostDetail = () => {
  const params = useParams()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [postsId, setPostsId] = useState([])

  console.log('param', params)

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
      .then(res => {
        setLoading(true)
        setPostsId(res.data)
        setLoading(false)
      })
      .catch(err => {
        setLoading(false)
        setError(err)
        console.log('err', err)
      })
  }, [])

  return (
    !loading &&
      error ?
      <span>Nerwork Error!</span>
      :
      <>
        <div>
          <span>ID :</span>
          {
            <span> {postsId?.id}</span>
          }
        </div>
        <div>
          <span>Title :</span>
          {
            <span> {postsId?.title}</span>
          }
        </div>
        <div>
          <span>Body :</span>
          {
            <span> {postsId?.body}</span>
          }
        </div>
      </>
  )
}

export default PostDetail
