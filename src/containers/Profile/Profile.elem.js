import styled from "styled-components";

export const ProfileContainer = styled.div`
    display: flex;

`;
export const ProfileContainerRight = styled.div`
    flex: 9;
`;
export const ProfileContainerRightTop = styled.div`
    
`;
export const ProfileContainerRightBottom = styled.div`
    display: flex;
`;
export const ProfileCover = styled.div`
    height: 320px;
    position: relative;
`;
export const ProfileCoverImage = styled.img`
    width: 100%;
    height: 250px;
    object-fit: cover;
`;
export const ProfileUserImage = styled.img`
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
    position: absolute;
    right: 0;
    left: 0;
    margin: auto;
    top: 150px;
    border: 3px solid #fff;
`;
export const ProfileInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
`;
export const ProfileInfoName = styled.h1`
    font-size: 24px;
`;
export const ProfileInfoDesc = styled.span`
    font-weight: 300;
    color: #555;
`;


