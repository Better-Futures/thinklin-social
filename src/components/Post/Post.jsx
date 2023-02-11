import React, {useState} from 'react'
import { PostBottom, PostBottomLeft, PostBottomRight, PostCenter, PostComment, PostContainer, PostDate, PostLikeCounter, PostProfileImage, PostText, PostTextImage, PostTop, PostTopLeft, PostTopRight, PostUserName, PostWrapper } from './Post.elem'
import {FiMoreVertical} from 'react-icons/fi';
import {AiFillLike} from 'react-icons/ai';
import {FcLike} from 'react-icons/fc';

const Post = ({post}) => {
  const [like, setLike] = useState(post.like)
  const [isliked, setIsliked] = useState(false)

  const handleClick = () => {
    setLike(isliked? (like-1):(like+1))
  setIsliked((prev) =>!prev)
}
  return (
    <>
   
    <PostContainer>
      <PostWrapper>
     
        <PostTop>
             <PostTopLeft>
            <PostProfileImage src={post.image} alt={post.name}  />
            <PostUserName >{post.name}</PostUserName>
            <PostDate >{post.time}</PostDate>
            </PostTopLeft>
            <PostTopRight>
            <FiMoreVertical/>
          </PostTopRight>                  
        </PostTop>

        <PostCenter>
          <PostText >{post.text}</PostText>
          <PostTextImage  src= {post.image1} alt='image' />         
        </PostCenter>

        <PostBottom>
          <PostBottomLeft>
          <AiFillLike onClick={handleClick} style={{color: 'cyan', fontSize: '25px', cursor: 'pointer' }}/>
          <FcLike onClick={handleClick} style={{fontSize: '25px', margin: ' 0 5px 0 5px', cursor: 'pointer'}}/>
          <PostLikeCounter >{like} people like it</PostLikeCounter>
          </PostBottomLeft>
            <PostBottomRight>
              <PostComment>{post.comment} comments</PostComment>
            </PostBottomRight>         
        </PostBottom>

      </PostWrapper>
    </PostContainer>
  
    </>
  )
}

export default Post