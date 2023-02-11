import React from 'react'
import { Post, Share } from '..'
import { FeedContainer, FeedWrapper } from './Feed.elem'
import { PostInfo } from '../../utils/data'

const Feed = () => {
  return (
    <FeedContainer>
     <FeedWrapper>
        <Share/>
        {PostInfo.map((items, i) =>(
         <Post key={i} post={items}/>
        ))}
     </FeedWrapper>
    </FeedContainer>
  )
}

export default Feed