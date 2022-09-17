import Link from "next/link";

import StyledNavbar, {
  NavbarLogo,
  NavbarList,
  NavbarMenu,
} from "./Navbar.styled";
import { Button } from "../../common/CommonUsed.styled";
import { useState, useEffect } from "react";

const Navbar = ({ links, toggle }) => {
  const [navbarBg, setNavbarBg] = useState(false);

  const changeBackground = () => {
    if(window.scrollY >= 90) {
      setNavbarBg(true);
    } else {
      setNavbarBg(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeBackground)
  }, []);


  return (
    <StyledNavbar navbarBg={navbarBg}>
      <NavbarLogo src="/images/costco_logo.png" />

      <NavbarList navbarBg={navbarBg}>
        {links.map((link, index) => {
          return (
            <li key={index}>
              <Link href={link.path}>{link.title}</Link>
            </li>
          );
        })}
      </NavbarList>

      <Button primary>Отправить запрос</Button>

      <NavbarMenu size={35} onClick={toggle} />
    </StyledNavbar>
  );
};

export default Navbar;
