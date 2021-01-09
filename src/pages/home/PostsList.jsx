import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { PostCard } from '../../components'


const DataFetching = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/photos')
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
    <PostCard data={posts} />
  )
}

export default DataFetching
