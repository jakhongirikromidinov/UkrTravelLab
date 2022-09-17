import StyledSliderSection, { Content, Main, SliderPosition } from "./SliderSection.styled";
import { ImageSlider, TextSlider } from "../common/CommonUsed";
import { Container, Button } from "../common/CommonUsed.styled";

const SliderSection = ({title, ButtonText, SliderData, imageSlider, textSlider, differentBg}) => {
  return (
    <StyledSliderSection differentBg={differentBg}>
      <Container>
        <Content>
          <Main>
            <h2>
                {title}
            </h2>
            {ButtonText && <Button>{ButtonText}</Button>}
          </Main>
          <SliderPosition>
            {imageSlider && <ImageSlider data={SliderData}/>}
            {textSlider && <TextSlider data={SliderData}/>}
          </SliderPosition>
        </Content>
      </Container>
    </StyledSliderSection>
  );
};

export default SliderSection;
