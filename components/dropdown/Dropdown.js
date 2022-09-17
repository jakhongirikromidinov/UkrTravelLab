import { Content, Icon, CloseIcon, ContentList } from "./Dropdown.styled";
import Link from "next/link";

const Dropdown = ({ links, isOpen, toggle }) => {
  return (
    <Content isOpen={isOpen}>
      <Icon onClick={toggle}>
        <CloseIcon size={40} />
      </Icon>
      <ContentList>
        {links.map((link, index) => {
          return (
            <li key={index}>
              <Link href={link.path}>{link.title}</Link>
            </li>
          );
        })}
      </ContentList>
    </Content>
  );
};

export default Dropdown;
