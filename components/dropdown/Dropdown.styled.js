import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { isOpen } from "../Header/Header";

export const Content = styled.div`
  position: relative;
  display: none;
  position: fixed;
  z-index: 4;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.color.accent};
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  left: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;
export const Icon = styled.div`
  position: absolute;
  top: 6px;
  right: 9px;
  color: white;
`;

export const CloseIcon = styled(FaTimes)``;

export const ContentList = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  font-size: 6rem;
`;
