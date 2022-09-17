import Head from "next/head";
import { Container } from "../components/common/CommonUsed.styled";
import Header from "../components/Header/Header";
import { ThemeProvider } from "styled-components";
import About from "../components/about/About";
import SliderSection from "../components/SliderSection/SliderSection";
import Specific from "../components/specific/Specific";
import { SliderMiniData, SliderMaxiData, SliderReviewData } from "../data/SliderData";
import Blog from "../components/Blog/Blog";
import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <ThemeProvider
      theme={{
        fontWeight: {
          regular: "300",
          bold: "700",
        },
        color: {
          accent: "#448e73",
          hovered: "#474343",
          titleColor: "#272525",
          hoveredButton: "#49bd93"
        }
      }}
    >
      <Header />
      <About/>
      <SliderSection title="Любимые туры наших клиентов" ButtonText="Все туры" SliderData={SliderMiniData} imageSlider/>
      <Specific/>
      <SliderSection title="Наши услуги" ButtonText="Все услуги" SliderData={SliderMaxiData} imageSlider/>
      <Blog/>
      <SliderSection title="Отзывы Наших Клиентов" SliderData={SliderReviewData} textSlider differentBg/>
      <Footer />
    </ThemeProvider>
  );
}
