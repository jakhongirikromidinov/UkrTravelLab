import StyledSpecific, { Content, Buttons } from "./Specific.styled";
import { Container, Button } from "../common/CommonUsed.styled";

const Specific = () => {
  return (
    <StyledSpecific>
      <Container>
        <Content>
          <h2>Ищешь что-то особенное?</h2>
          <p>
            Мы можем организовать путешествие в любую точку мира - от вас нужны
            только даты и цель поездки
          </p>
          <Buttons>
            <Button>Сделать запрос</Button>
            <Button primary>Консультация</Button>
          </Buttons>
        </Content>
      </Container>
    </StyledSpecific>
  );
};

export default Specific;
