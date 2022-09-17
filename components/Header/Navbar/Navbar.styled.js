import styled from "styled-components";
import { FaBars } from "react-icons/fa";

const StyledNavbar = styled.nav`
  color: white;
  width: 100%;
  padding: 1rem 2rem;
  position: fixed;
  top: 0;
  left: 0;
  background: ${({navbarBg}) => navbarBg ? 'white' : 'transparent'};
  transition: 0.3s;
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 2;
  @media screen and (max-width: 768px) {
    justify-content: space-between;
  }

  button {
    font-size: clamp(1.6rem, 1.8vw, 2rem);
    background: ${({navbarBg, theme}) => navbarBg ? theme.color.accent : 'transparent'};
    border: ${({navbarBg}) => navbarBg ? 'none' : '1px solid white'};
    @media screen and (max-width: 768px) {
      display: none;
    }
  }
`;
export const NavbarList = styled.ul`
  display: flex;
  gap: 3em;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({navbarBg}) => navbarBg ? 'black' : 'white'};
  font-size: clamp(1.6rem, 1.8vw, 2.3rem);
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavbarLogo = styled.img`
  max-width: 10%;
`;

export const NavbarMenu = styled(FaBars)`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export default StyledNavbar;
