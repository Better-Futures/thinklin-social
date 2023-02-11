import React from 'react'
import { Button } from '../../globalStyles'
import { SidebarFriend, SidebarItems } from '../../utils/data'
import { SidebarContainer, SidebarFriendImage, SidebarFriendList, SidebarFriendName, SidebarHr, SidebarIcon, SidebarIconText, SidebarList, SidebarListItems, SidebarWrapper } from './Sidebar.elem'

const Sidebar = () => {
  return (
    <SidebarContainer>
      <SidebarWrapper>
        <SidebarList >
          {SidebarItems.map((items, i) => (
            <>
            <SidebarListItems>
              <SidebarIcon key={i}>
                {items.Icon}
                  <SidebarIconText key={i}>
                    {items.Icontext}
                  </SidebarIconText>
              </SidebarIcon>
            </SidebarListItems>
            </>
          ))}
        </SidebarList>
        <Button>Show more</Button>
        <SidebarHr/>
        <SidebarFriendList>
          {SidebarFriend.map((items, i) =>(
            <>
            <SidebarListItems>
              <SidebarFriendImage src={items.image} alt={items.name} key={i} />
              <SidebarFriendName key={i}>{items.name}</SidebarFriendName> 
            </SidebarListItems>
            </>
          ))}
        </SidebarFriendList>
      </SidebarWrapper>   
    </SidebarContainer>
  )
}

export default Sidebar