import { Swiper, SwiperSlide } from "swiper/react";
import {
  SliderItem,
  BlogWrapper,
  BlogItem,
  ItemImg,
  ItemDescr,
  ItemLink,
  TextSliderItem,
} from "./CommonUsed.styled";
import Link from "next/dist/client/link";

import "swiper/css";
import "swiper/css/navigation";

import { Autoplay, Navigation } from "swiper";
export const ImageSlider = ({ data }) => {
  return (
    <Swiper
      spaceBetween={30}
      navigation={false}
      autoplay={{
        delay: 2500,
      }}
      breakpoints={{
        640: {
          slidesPerView: 1,
          navigation: true,
        },
        950: {
          slidesPerView: 2,
        },
      }}
      modules={[Autoplay, Navigation]}
      className="mySwiper"
    >
      {data.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            (
            <SliderItem
              style={{
                background: `url(${slide.imagePath}) center center / cover no-repeat`,
              }}
            >
              <h3>{slide.title}</h3>
            </SliderItem>
            )
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
export const TextSlider = ({ data }) => {
  return (
    <Swiper
      spaceBetween={30}
      autoplay={{
        delay: 2500,
      }}
      modules={[Autoplay, Navigation]}
    >
      {data.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <TextSliderItem>
              <div>
                <img src={slide.imagePath} alt="img" />
                <h3>
                  {slide.name}
                  <span>{slide.location}</span>
                </h3>
              </div>
              <p>{slide.descr}</p>
            </TextSliderItem>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

const MakeBlog = ({ data }) => {
  return (
    <BlogWrapper>
      {data.map((item, index) => (
        <BlogItem key={index}>
          <ItemImg>
            <img src={item.imagePath} alt="img" />
          </ItemImg>
          <ItemDescr>
            <h3>{item.title}</h3>
            <p>{item.descr}</p>
          </ItemDescr>
          <ItemLink>
            <Link href="/">Подробнее</Link>
          </ItemLink>
        </BlogItem>
      ))}
    </BlogWrapper>
  );
};
export default MakeBlog;
