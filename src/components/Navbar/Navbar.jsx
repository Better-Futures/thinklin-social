import React from 'react';
import { NavbarContainer, NavbarLeft, NavLogo, NavbarCenter,NavbarSearch, NavSearch, NavInput, NavbarRight, NavLink, NavLinks, NavIcon, NavIconItem, TopbarNumber, TopbarImage } from './Navbar.elem';
import img1 from '../../Images/favicon.png';
import { TopbarItems } from '../../utils/data';
import img2 from '../../Images/Clifb.jpg';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
   
    <NavbarContainer>
     <NavbarLeft>
     <Link to='/' style={{textDecoration: 'none'}}>
        <NavLogo src={img1} alt='logo'/>
        </Link>
     </NavbarLeft> 

      <NavbarCenter>
        <NavbarSearch>
        <NavSearch />
        <NavInput type='text' placeholder='Search for friend, post or video' />
        </NavbarSearch>        
     </NavbarCenter> 
     
     <NavbarRight>
      <NavLinks>
        <NavLink>Home Page</NavLink>
        <NavLink>Timeline</NavLink>
      </NavLinks>
        
          <NavIconItem>
            {TopbarItems.map((item)=>(
            <>
            <NavIcon key={item.number}>{item.icon}
             <TopbarNumber key={item.number}> {item.number} </TopbarNumber>
             </NavIcon>
                </>
               
            ) )}
          </NavIconItem>
          <Link to='/profile' style={{textDecoration: 'none'}}>
        <TopbarImage src={img2} alt='person' />
        </Link>
     </NavbarRight> 
    </NavbarContainer>
  )
}

export default Navbar