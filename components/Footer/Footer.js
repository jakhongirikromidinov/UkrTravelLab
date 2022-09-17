import StyledFooter, { Content, Info, Social } from "./Footer.styled";
import { Container } from "../common/CommonUsed.styled";
import Link from "next/link";
import { FaTripadvisor } from "react-icons/fa";
import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <Content>
          <Info>2022, Ukraine Travel Lab</Info>
          <Social>
            <Link href="/">
              <FaTripadvisor />
            </Link>
            <Link href="/">
              <AiFillInstagram />
            </Link>
            <Link href="/">
              <AiFillFacebook />
            </Link>
          </Social>
        </Content>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
