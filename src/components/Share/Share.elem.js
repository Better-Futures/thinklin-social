import styled from "styled-components";

export const ShareContainer = styled.div`
    width: 100%;
    height: 170px;
    -webkit-box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
    box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
`;
export const ShareWrapper = styled.div`
    padding: 10px;
`;
export const ShareTop = styled.div`
    display: flex;
    align-items: center;
`;
export const ShareBottom = styled.div`
    
`;
export const ShareImage = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 10px;
`;
export const ShareInput = styled.input`
    border: none;
    width: 80%;
    &:focus{
        outline: none;
    }
`;
export const ShareHr = styled.hr`
    margin: 20px;
`;

export const ShareOptions = styled.div`
    display: flex;
    margin-left: 20px;
`;
export const ShareOption = styled.div`
    display: flex;
    align-items: center;
    margin-right: 15px;
    cursor: pointer;
`;
export const ShareOptionText = styled.div`
    
`;
export const ShareIcon = styled.div`
   font-size: 18px;
   margin-right: 3px;
`;
export const ShareButton = styled.button`
   background: green;
   border: none;
   color: #fff;
   font-weight: 500;
   border-radius: 5px;
   padding: 7px;
   margin: 5px 0 0 20px ;
   opacity: 0.8;
   cursor: pointer;
   &:hover{
        opacity: 1;
        transition: 0.3s all;
        
    }
   
`;