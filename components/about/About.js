import StyledAbout, {
  Content,
  AboutImage,
  Main,
  Text,
  WhyUs,
  IconsWrapper,
  Item
} from "./About.style";
import { Container, Button } from "../common/CommonUsed.styled";
import Image from "next/image";

const About = () => {
  return (
    <StyledAbout>
      <Container>
        <Main>
          <AboutImage src="/images/about_img.png" />
          <Text>
            <h2>Ukraine Travel Lab</h2>
            <p>
              это команда единомышленников, влюбленных в путешествия, мир и
              Украину. Работаем так, чтобы для организации корпоратива или
              учебной поездки Вам нужно было написать только один e-mail, а не
              терять время на поиск отелей и комфортных автобусов, охотиться за
              выгодными авиабилетами или продумывать сценарии тимбилдинга.
            </p>
            <Button primary>Подробнее</Button>
          </Text>
        </Main>

        <WhyUs>
            <h2>
                Почему выбирают путешествия с Ukraine Travel Lab?
            </h2>
            <IconsWrapper>
                <Item>
                    <img src="/images/item_1.png" alt="icon" />
                    <p>Кастомизированные программы</p>
                </Item>
                <Item>
                    <img src="/images/item_2.png" alt="icon" />
                    <p>Качество и безопасность</p>
                </Item>
                <Item>
                    <img src="/images/item_3.png" alt="icon" />
                    <p>Персонализированный сервис</p>
                </Item>
                <Item>
                    <img src="/images/item_4.png" alt="icon" />
                    <p>Эрудированные и веселые гиды</p>
                </Item>
            </IconsWrapper>
        </WhyUs>
      </Container>
    </StyledAbout>
  );
};

export default About;
