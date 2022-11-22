import Button from "../../../../components/Button";
import Input from "../../../../components/Generic/Input";
import { Text } from "../../../../components/Generic/Text";
import { Title } from "../../../../components/Generic/Title";
import { Wrapper } from "../../../../components/Wrapper";

import { IImageProps } from "../../../../types";
import { BottomContainer, Container, Content } from "./style";

interface IHeroProps {
  title: string;
  paragraph: string;
  image: IImageProps;
}

export default function Hero({ title, paragraph, image }: IHeroProps) {
  return (
    <Container backgroundURL={image.url}>
      <Wrapper>
        <Content>
          <Title
            sx={{
              marginBottom: "10px",
              color: "#ffffff",
            }}
          >
            {title}
          </Title>
          <Text
            sx={{
              color: "#ffffff",
              marginBottom: "90px",
              "@media (min-width: 768px)": {
                marginTop: "10px",
                marginBottom: "60px",
                maxWidth: "450px",
              },
            }}
          >
            {paragraph}
          </Text>
          <BottomContainer>
            <Input placeholder="Email" />
            <Button>Grant Early Access</Button>
          </BottomContainer>
        </Content>
      </Wrapper>
    </Container>
  );
}
