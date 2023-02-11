import styled from "styled-components";

export const SidebarContainer = styled.div`
    flex: 3;
    height: calc(100vh - 80px);
    overflow-y: scroll;
    position: sticky;
    
`;
export const SidebarWrapper = styled.div`
    padding: 20px;
`;
export const SidebarList = styled.ul`
    padding: 0;
    margin: 0;
    list-style: none;
`;
export const SidebarListItems = styled.li`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;
    &:hover{
        color: #1775ee;
        transition: 0.3s all;
        
    }
`;
export const SidebarIcon = styled.div`
   
`;
export const SidebarIconText = styled.span`
   margin-left: 15px; 
`;
export const SidebarHr = styled.hr`
   margin: 20px 0; 
`;
export const SidebarFriendList = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
`;
export const SidebarFriendListItems = styled.li`
    display: flex;
    align-items: center;
    margin-bottom: 15px;
`;
export const SidebarFriendImage = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 50%;
    object-fit: cover;
`;
export const SidebarFriendName = styled.span`
    margin-left: 15px;
`;