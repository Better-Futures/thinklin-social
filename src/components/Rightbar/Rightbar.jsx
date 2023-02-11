import React from 'react';
import {RightbarContainer, RightbarWrapper, BirthdayContainer, BirthdayImage, BirthdayText, RightbarAd, RightbarTittle, RightbarFriendList, RightbarProfileImageContainer, RightbarProfileImage, RightbarOnline, RightbarUserName} from './Rightbar.elem';
import img1 from '../../Images/red-gift.png';
import img2 from '../../Images/birthday.jpg';
import { SidebarFriend } from '../../utils/data';

const HomeRightbar = () =>{
  return(
    <>
    <BirthdayContainer>
    <BirthdayImage src={img1} alt='gift' />
    <BirthdayText>
      <b>Xi, Putin</b> and <b>3 other friends</b> have a birthday today.
    </BirthdayText>
  </BirthdayContainer>
  <RightbarAd src={img2} alt='Advertisment'/>
  <RightbarTittle>Online Friends</RightbarTittle>
  <RightbarFriendList>
    {SidebarFriend.map((items, i) =>(
      <>
      <RightbarProfileImageContainer>
        <RightbarProfileImage src={items.image} alt={items.name} key={i} />
        <RightbarOnline key={i} />
      
      <RightbarUserName key={i}>{items.name}</RightbarUserName>
      </RightbarProfileImageContainer>
      </>
    ))}
  </RightbarFriendList>
  </>
  )
}

const Rightbar = () => {
  return (
    <RightbarContainer>
      <RightbarWrapper>
        <HomeRightbar />
      </RightbarWrapper>
    </RightbarContainer>
  )
}

export default Rightbar