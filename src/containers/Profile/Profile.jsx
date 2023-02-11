import React from 'react'
import { Feed, Navbar, Sidebar, ProfileRightbar} from '../../components'
import {ProfileContainer, ProfileContainerRight, ProfileContainerRightBottom, ProfileContainerRightTop, ProfileCover, ProfileCoverImage, ProfileInfo, ProfileInfoName, ProfileInfoDesc, ProfileUserImage} from './Profile.elem';
import img1 from '../../Images/img5.jpg';
import img2 from '../../Images/Clifb.jpg'


const Profile = () => {
  return (
    <>
    <Navbar />
    <ProfileContainer>
      <Sidebar />
      <ProfileContainerRight>
      <ProfileContainerRightTop>
        <ProfileCover>
          <ProfileCoverImage src={img1} alt='background-profile-image' />
            <ProfileUserImage src={img2} alt='profile-image' />      
        </ProfileCover>
        <ProfileInfo>
          <ProfileInfoName>Safak Kacaoglu</ProfileInfoName>
          <ProfileInfoDesc>Hello, there</ProfileInfoDesc>
        </ProfileInfo>
      </ProfileContainerRightTop>
      <ProfileContainerRightBottom>
      <Feed />
      <ProfileRightbar />
      </ProfileContainerRightBottom>
      </ProfileContainerRight>      
    </ProfileContainer>
    </>
  )
}

export default Profile