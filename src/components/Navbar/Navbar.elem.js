import styled from 'styled-components';
import {FaSearch} from 'react-icons/fa'


export const NavbarContainer = styled.nav`
    height: 80px;
    width: 100%;
    background: #1877f2;
    display: flex;
    position: sticky;
    top: 0;
    z-index: 12;
`;
export const NavbarLeft = styled.div`
    flex: 3;
    align-self: center;
`;
export const NavLogo = styled.img`
  margin-left: 20px;
  height: 40px;
  width: 100px;
  border-radius: 5px;
`;
export const NavbarCenter = styled.div`
    flex: 5;
    align-self: center;
`;
export const NavbarSearch = styled.div`
    width: 100%;
    height: 30px;
    background: #fff;
    border-radius: 30px;
    display: flex;
    align-items: center;
`;
export const NavSearch = styled(FaSearch)`
    font-size: 15px !important;
    margin: 0 10px;
    
`;
export const NavInput = styled.input`
    border: none;
    width: 70%;
    
    &:focus {
        outline: none;
    }
`;
export const NavbarRight = styled.div`
    flex: 4;
    align-items: center;
    justify-content: space-around;
    color: #fff;
    display: flex;
`;
export const NavLinks = styled.div`
    display: flex;
`;
export const NavLink = styled.span`
    margin-right: 10px;
    font-size: 14px;
    cursor: pointer;
`;
export const NavIcon = styled.div`
    font-size: 20px;
    margin-right: 15px;
    cursor: pointer;
    position: relative;
    display: flex;
`;
export const NavIconItem = styled.div`
   display: flex;
`;
export const TopbarNumber = styled.span`
    width: 15px;
    height: 15px;
    background: red;
    border-radius: 50%;
    color: #fff;
    position: absolute;
    top: -5px;
    right: -5px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
`;
export const TopbarImage = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 50%;
    object-fit: cover;
    cursor: pointer;
`;
