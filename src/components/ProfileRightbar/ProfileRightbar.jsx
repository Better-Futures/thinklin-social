import React from 'react'
import { ProfileRightbarContainer, ProfileRightbarWrapper, ProfileRightbarTitle, ProfileRightbarInfo,ProfileRightbarInfoItem, ProfileRightbarInfoKey, ProfileRightbarFollowing, ProfileRightbarFollowings, ProfileRightbarInfoValue, ProfileRightbarFollowingImage, ProfileRightbarFollowingUserName } from './ProfileRightbar.elem';
import {SidebarFriend, UserInfo} from '../../utils/data';

const ProfileRightbar = () => {
  return (
    <ProfileRightbarContainer>
        <ProfileRightbarWrapper>
        
        <ProfileRightbarTitle>User information</ProfileRightbarTitle>
   <ProfileRightbarInfo>
   { 
     UserInfo.map((items, i) =>(
      <ProfileRightbarInfoItem>
        <ProfileRightbarInfoKey key={i}>
          {items.Key}
        </ProfileRightbarInfoKey>
        <ProfileRightbarInfoValue key={i}>
          {items.Value}
        </ProfileRightbarInfoValue>
     </ProfileRightbarInfoItem>
     ))   
}
    <ProfileRightbarTitle>User friends</ProfileRightbarTitle>
    <ProfileRightbarFollowings>
    {
      SidebarFriend.map((items, i) => (
      
        <ProfileRightbarFollowing key={i}>
          <ProfileRightbarFollowingImage key={i} src={items.image} alt={items.name}/>
          <ProfileRightbarFollowingUserName key={i}>{items.name}</ProfileRightbarFollowingUserName>
          </ProfileRightbarFollowing>
        
      ))
    }
    </ProfileRightbarFollowings>  
   </ProfileRightbarInfo>
    
        </ProfileRightbarWrapper>
    </ProfileRightbarContainer>
  )
}

export default ProfileRightbar