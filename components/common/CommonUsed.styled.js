import styled from "styled-components";

export const Container = styled.div`
  max-width: 1400px;
  width: 95%;
  margin: 0 auto;
`;
export const Button = styled.button`
  background-color: ${(props) => (props.primary ? "transparent" : "#448e73")};
  border: ${(props) => (props.primary ? "1px solid white" : "none")};
  color: white;
  font-size: 1.8rem;
  padding: 1em 1.5em;
  border-radius: 4px;
`;
export const SliderItem = styled.div`
  background: rgba(0, 0, 0, 0.5);
  background-blend-mode: darken;
  position: relative;
  width: 100%;
  min-height: 50rem;
  padding: 3rem;
  border-radius: 10px;
  h3 {
    position: absolute;
    bottom: 6rem;
    color: white;
    font-size: 3.2rem;
    font-weight: 700;
  }
`;
export const TextSliderItem = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 800px) {
    width: 100%;
  }
  div {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    margin-bottom: 2rem;
    img {
      width: 10rem;
      height: 10rem;
      object-fit: cover;
      border-radius: 50%;
    }
  }
  h3 {
    font-size: 2.4rem;
    span {
      display: block;
    }
  }
  p {
    font-size: 1.6rem;
    line-height: 2.5rem;

  }
`;

export const BlogWrapper = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-bottom: 5rem;
`;

export const BlogItem = styled.div`
  width: 33%;
  height: 43rem;
  display: flex;
  flex-direction: column;
  box-shadow: 0 32px 64px rgb(0 0 0 / 12%);
  transition: 0.3s all;
  &:hover {
    box-shadow: 0 16px 32px rgb(0 0 0 / 12%);
    a {
      color: ${({ theme }) => theme.color.accent};
    }
  }
`;
export const ItemImg = styled.div`
  height: 45%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
export const ItemDescr = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  h3 {
    font-size: 2.4rem;
    margin-bottom: 2rem;
  }
  p {
    font-size: 1.4rem;
  }
`;
export const ItemLink = styled.div`
  margin-top: auto;
  padding: 0 0 3rem 2rem;
  font-size: 1.6rem;
  color: ${({ theme }) => theme.color.hovered};
`;
