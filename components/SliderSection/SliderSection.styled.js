import styled from "styled-components";

const StyledSliderSection = styled.section`
  min-height: 70vh;
  background: ${(props) => (props.differentBg ? "#f3f3f3" : "#fffff")};
`;

export const Content = styled.div`
padding: 12rem 0 12rem 0;
  display: flex;
  align-items: center;
  @media screen and (max-width:800px) {
      flex-direction: column;
      justify-content: center;
    }
`;

export const Main = styled.div`
  width: 40%;
  @media screen and (max-width:950px) {
      width: 50%;
    }
  @media screen and (max-width:800px) {
    width: 100%;
  }
  h2 {
    width: 70%;
    margin-bottom: 4rem;
    color: ${({theme}) => theme.color.titleColor};
    @media screen and (max-width:950px) {
      width: 100%;
      text-align: center;
    }
  }
  button {
    @media screen and (max-width:950px) {
      display: block;
      margin: 0 auto;
    }
    @media screen and (max-width:800px) {
      display: none;
    }
  }
`;

export const SliderPosition = styled.div`
  width: 60%;
  @media screen and (max-width:950px) {
      width: 50%;
    }
  @media screen and (max-width:800px) {
    width: 70%;
  }
`;

export default StyledSliderSection;
