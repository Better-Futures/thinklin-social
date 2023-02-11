import styled from 'styled-components';

export const ProfileRightbarContainer = styled.div`
    flex: 3.5;
`;
export const ProfileRightbarWrapper = styled.div`
    padding: 20px 20px 0 0;
`;
export const ProfileRightbarTitle = styled.h1`
    font-size: 18px;
    margin-bottom: 10px;
`;
export const ProfileRightbarInfo = styled.div`
  margin-bottom: 30px;
`;
export const ProfileRightbarInfoItem = styled.div`
    margin-bottom: 10px;
`;
export const ProfileRightbarInfoKey = styled.span`
    font-weight: 500;
    margin-right: 15px;
    color: #555;
`;
export const ProfileRightbarInfoValue = styled.span`
  font-weight: 300;
`;
export const ProfileRightbarFollowings = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;
export const ProfileRightbarFollowing = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    cursor: pointer;
`;
export const ProfileRightbarFollowingImage = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 5px;
    object-fit: cover;
`;
export const ProfileRightbarFollowingUserName = styled.span`
    flex: 3.5;
`;