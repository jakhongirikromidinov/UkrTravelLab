import { Container } from "../common/CommonUsed.styled";
import StyledHeader from "./Header.styled";
import Navbar from "./Navbar/Navbar";
import Banner from "./Banner/Banner";
import Dropdown from "../dropdown/Dropdown";
import { SliderData } from "../../data/SliderData";
import { MenuData } from "../../data/MenuData";
import { useState } from "react";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  return (
    <StyledHeader>
      <Container>
        <Navbar links={MenuData} toggle={toggle} />
      </Container>
      <Banner slides={SliderData} />
      <Dropdown links={MenuData} isOpen={isOpen} toggle={toggle} />
    </StyledHeader>
  );
};

export default Header;
