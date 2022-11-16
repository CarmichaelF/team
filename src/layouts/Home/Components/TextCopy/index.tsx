import LearnMore from "../../../../components/Generic/LearnMore";
import { Text } from "../../../../components/Generic/Text";
import { Title } from "../../../../components/Generic/Title";
import { ILinkProps } from "../../../../types";
import { Container } from "./style";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

interface ITextCopyProps {
  title: string;
  text: string;
  link: ILinkProps;
  highlightColor: string;
}

export default function TextCopy({
  title,
  text,
  link,
  highlightColor,
}: ITextCopyProps) {
  return (
    <Container>
      <Title as="h3" highlightColor={highlightColor}>
        <ReactMarkdown rehypePlugins={[rehypeRaw]}>{title}</ReactMarkdown>
      </Title>
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
