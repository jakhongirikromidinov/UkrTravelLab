import { useState } from "react";
import Image from "next/image";

import StyledBanner, {
  Content,
  BannerSlide,
  BannerSlider,
  BannerContent,
  BannerImage,
  SliderButtons,
  NextArrow,
  PrevArrow,
} from "./Banner.styled";
import { Button } from "../../common/CommonUsed.styled";

const Banner = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <StyledBanner>
      <Content>
        {slides.map((slide, index) => {
          return (
            <BannerSlide key={index}>
              {index === current && (
                <BannerSlider>
                  <BannerImage>
                    <Image
                      src={slide.imagePath}
                      layout="fill"
                      objectFit="cover"
                    />
                  </BannerImage>
                  <BannerContent>
                    <h1>{slide.title}</h1>
                    <p>{slide.subtitle}</p>
                    <Button>Подробнее</Button>
                  </BannerContent>
                </BannerSlider>
              )}
            </BannerSlide>
          );
        })}
        <SliderButtons>
          <PrevArrow onClick={prevSlide} />
          <NextArrow onClick={nextSlide} />
        </SliderButtons>
      </Content>
    </StyledBanner>
  );
};

export default Banner;
