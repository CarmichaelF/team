import LearnMore from "../../../../components/Generic/LearnMore";
import { Text } from "../../../../components/Generic/Text";
import { Title } from "../../../../components/Generic/Title";
import { ILinkProps } from "../../../../types";
import { Container } from "./style";

interface ITextCopyProps {
  title: string;
  highlighted_word: string;
  text: string;
  link: ILinkProps;
  highlightColor: string;
}

export default function TextCopy({
  title,
  highlighted_word,
  text,
  link,
  highlightColor,
}: ITextCopyProps) {
  return (
    <Container>
      <Title
        as="h3"
        highlightColor={highlightColor}
        dangerouslySetInnerHTML={{
          __html: title.replace(
            highlighted_word,
            `<span>${highlighted_word}</span>`
          ),
        }}
      ></Title>
      <Text
        sx={{
          marginTop: "15px",
          marginBottom: "15px",
        }}
      >
        {text}
      </Text>
      <LearnMore
        text={link.label}
        href={link.url}
        color={highlightColor}
        sx={{
          padding: "30px 0",
        }}
      />
    </Container>
  );
}
