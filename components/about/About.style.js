import styled from "styled-components";

const StyledAbout = styled.section`
  min-height: 100vh;
  padding: 12rem 0 0 0;
`;
export const Main = styled.div`
  padding-bottom: 12rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4rem;
  @media screen and (max-width: 929px) {
    flex-direction: column;
  }
`;

export const AboutImage = styled.img`
  width: 40%;
  border-radius: 10px;
  @media screen and (max-width: 929px) {
        width: 70%;
    }
`;

export const Text = styled.div`
  width: 40%;
  h2 {
    margin-bottom: 2.5rem;
    @media screen and (max-width: 929px) {
        text-align: center;
    }
  }
  p {
    font-size: 2rem;
    margin-bottom: 3.5rem;
    line-height: 3.2rem;
  }
  button {
    border: 1px solid black;
    color: black;
    @media screen and (max-width: 929px) {
        display: block;
        margin: 0 auto;
    }
  }
  @media screen and (max-width: 929px) {
        width: 90%;
    }
`;

export const WhyUs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    width: 50%;
    text-align: center;
    margin-bottom: 10rem;
    @media screen and (max-width: 929px) {
        width: 100%;
    }
  }
`;

export const IconsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 17%;
  @media screen and (max-width: 929px) {
    width: 50%;
    margin-bottom: 5rem;
    }
  img {
    width: 30%;
  }
  p {
    font-size: 2rem;
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    text-align: center;
    @media screen and (max-width: 929px) {
        width: 100%;
    }
  }
`;

export default StyledAbout;
