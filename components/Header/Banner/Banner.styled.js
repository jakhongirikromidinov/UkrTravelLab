import styled, { css } from "styled-components";
import { IoArrowForward, IoArrowBack } from "react-icons/io5";

const StyledBanner = styled.section`
  height: 100vh;
  position: relative;
  overflow: hidden;
`;
export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
  color: white;
`;

export const BannerSlide = styled.div`
  z-index: 1;
  width: 100%;
  height: 100%;
`;
export const BannerSlider = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const BannerImage = styled.div`
  transition: 0.3s;
`;
export const BannerContent = styled.div`
  position: relative;
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 1950px;
  width: calc(100% - 100px);
  color: #fff;
  h1 {
    font-size: clamp(3rem, 2.5vw, 8rem);
    width: 70rem;
    margin-bottom: 2rem;
  }
  p {
    font-size: clamp(2rem, 2.5vw, 2.4rem);
    width: 70rem;
    margin-bottom: 4rem;
  }
  button {
    font-size: clamp(1.6rem, 2.5vw, 2.3rem);
  }
`;
const arrowButtons = css`
  width: 10rem;
  height: 10rem;
  color: #fff;
  cursor: pointer;
  background: "000d1a";
  border-radius: 50%;
  padding: 10px;
  margin-right: 1rem;
  user-select: none;
  transition: 0.3s;

  &:hover {
    transform: scale(1.05);
    background: #cd853f;
  }
`;
export const PrevArrow = styled(IoArrowBack)`
  ${arrowButtons};
`;
export const NextArrow = styled(IoArrowForward)`
  ${arrowButtons};
`;
export const SliderButtons = styled.div`
  position: absolute;
  bottom: 60px;
  right: 100px;
  display: flex;
  gap: 5rem;
  z-index: 3;
`;

export default StyledBanner;
