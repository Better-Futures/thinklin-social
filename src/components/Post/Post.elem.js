import styled from "styled-components";

export const PostContainer = styled.div`
    width: 100%;
    border-radius: 10px;
    -webkit-box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
    box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
    margin: 30px 0;
`;
export const PostWrapper = styled.div`
   padding: 10px; 
   
`;
export const PostTop = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
export const PostTopLeft = styled.div`
    display: flex;
    align-items: center;
`;
export const PostTopRight = styled.div`
    
`;
export const PostProfileImage = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 50%;
    object-fit: cover;
`;
export const PostUserName = styled.span`
    font-size: 15px;
    font-weight: 500;
    margin: 0 10px;
`;
export const PostDate = styled.div`
    font-size: small;
`;
export const PostCenter = styled.div`
    margin: 20px 0;
`;
export const PostText = styled.span`
    
`;
export const PostTextImage = styled.img`
    margin-top: 20px;
    max-width: 500px;
    width: 100%;
    object-fit: contain;
`;
export const PostBottom = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
export const PostBottomLeft = styled.div`
    display: flex;
    align-items: center;
`;
export const PostBottomRight = styled.div`
    
`;
export const PostLikeCounter = styled.span`
    font-size: 15px;
`;
export const PostComment = styled.span`
    cursor: pointer;
    border-bottom: 1px dashed gray;
    font-size: 15px;
`;
