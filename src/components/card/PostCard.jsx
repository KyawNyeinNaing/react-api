
import React from 'react'
import { Card, CardImage, CardContent, CardText } from './style/CardStyle'

const PostCard = props => {
  const { data } = props

  console.log('post com data', data)

  return (
    data?.map((x, i) => (
      <Card key={i}>
        {/* <CardImage bgImage={x?.url} /> */}
        <CardContent>
          <CardText as="h5">{x?.title}</CardText>
          {x?.body && 
            <CardText>
              {x?.body}
            </CardText>
          }
          <button>Button</button>
        </CardContent>
      </Card>
    ))
  )
}

export default PostCard
