import styled from "styled-components";

const StyledSpecific = styled.section`
  min-height: 50rem;
  background: rgba(0, 0, 0, 0.5) url("/images/specific_bg.jpg") center center /
    cover no-repeat;
  background-blend-mode: darken;
`;
export const Content = styled.div`
  display: flex;
  gap: 3rem;
  flex-direction: column;
  text-align: center;
  padding: 15rem 0 15rem 0;
  h2 {
    color: white;
  }
  p {
    color: white;
    font-size: 2rem;
  }
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: center;
  gap: 3rem;
`;
export default StyledSpecific;
