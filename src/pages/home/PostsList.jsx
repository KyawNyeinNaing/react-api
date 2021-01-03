import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import PostSearchById from './PostSearchById'
import { PostForm } from '../../components'

const DataFetching = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      // .then(res => { // <!-- if (res) need to change json -->
      //   console.log('res', res)
      //   setLoading(true)
      //   res.json()
      // })
      // .then(res => {
      //   console.log('res', res)
      //   setPosts(res.data)
      //   setLoading(false)
      // })

      .then(res => {
        setLoading(true)
        setPosts(res.data)
        setLoading(false)
      })

      .catch(err => {
        setLoading(false)
        setError(err)
      })
  }, [])

  error && console.log('Error')

  return (
    !loading &&
      error ?
      <span>Network error!</span>
      :
      <div>
        <PostSearchById />
        <hr/>
        <PostForm />
        <ul>
          {posts?.length > 0 &&
            posts.map((x, i) => (
              <li key={i}>
                <Link to={`/home/posts/detail/${x.id}`}>
                  {x.title}
                </Link>
              </li>
            ))
          }
        </ul>
      </div>
  )
}

export default DataFetching
