import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { PostCard } from '../../components'

const About = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
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

export default About
