import { IImageProps } from "../../types";
import {
  AuthorSection,
  AuthorSectionText,
  BlogContainer,
  BlogImageWrapper,
  Container,
  Content,
  Divider,
  ImageWrapper,
  ReadingTime,
  WrittenBy,
} from "./style";
import readingTime from "reading-time";
import { Title } from "../../components/Generic/Title";
import { Text } from "../../components/Generic/Text";
import Image from "next/image";
import { getDateFormat } from "../../utils";
import { RTTextNodeBase } from "@prismicio/types";
import { PrismicRichText } from "@prismicio/react";

export interface IArticleData {
  id: string;
  data: {
    title: string;
    summary: string;
    article_author: {
      name: string;
      avatar: IImageProps;
      role: string;
    }[];
    article_image: IImageProps;
    article_content: any;
  };
  first_publication_date: string;
  uid: string;
}

interface IArticleProps {
  article: IArticleData;
}

export default function Article({ article }: IArticleProps) {
  const { first_publication_date } = article;
  const { article_author, article_content, article_image, summary, title } =
    article.data;

  // format date in the formate of "Day Month Date, Year"

  const date = getDateFormat(first_publication_date);

  //merge all the text nodes into one string adding a space between each node
  const content = article_content.reduce((acc : any, node : any) => {
    return acc + node.text;
  }, "");

  const { text: readingTimeText } = readingTime(content);

  return (
    <Container>
      <BlogContainer>
        <Title
          sx={{
            marginBottom: "30px",
            fontSize: "32px",
            "@media(max-width: 768px)": {
              lineHeight: "34px",
            },
            "@media (min-width: 768px)": {
              textAlign: "center",
            },
          }}
        >
          {title}
        </Title>
        <Text
          sx={{
            "@media (min-width: 768px)": {
              textAlign: "center",
            },
          }}
        >
          {summary}
        </Text>
      </BlogContainer>

      <AuthorSection>
        <ImageWrapper>
          <Image
            fill
            src={article_author[0].avatar.url}
            alt={article_author[0].avatar.alt}
          />
        </ImageWrapper>
        <AuthorSectionText>
          <Title
            as="span"
            sx={{
              textTransform: "uppercase",
            }}
          >
            {article_author[0].name}
          </Title>
          <Title
            as="span"
            sx={{
              fontSize: "0.875rem",
              fontWeight: "500",
              lineHeight: "18px",
            }}
          >
            {date}
          </Title>
        </AuthorSectionText>
      </AuthorSection>
      <BlogImageWrapper>
        <Image
          width={1160}
          height={544}
          src={article_image.url}
          alt={article_image.alt}
          layout="responsive"
          sizes="(max-width: 1160px) 100vw, 1160px
              (max-width: 768px) 100vw, 768px
              (max-width: 480px) 100vw, 480px
          "
        />
      </BlogImageWrapper>
      <ReadingTime>
        <span>Reading Time: </span>
        <span>{readingTimeText}</span>
      </ReadingTime>
      <Content>
        <PrismicRichText field={article_content} />
      </Content>
      <AuthorSection
        sx={{
          "@media (min-width: 768px)": {
            flexDirection: "row",
            alignItems: "flex-start",
            marginTop: "60px",
          },
        }}
      >
        <ImageWrapper>
          <Image
            fill
            src={article_author[0].avatar.url}
            alt={article_author[0].avatar.alt}
          />
        </ImageWrapper>
        <AuthorSectionText
          sx={{
            "@media (min-width: 768px)": {
              alignItems: "flex-start",
            },
          }}
        >
          <WrittenBy>Written by:</WrittenBy>
          <Title
            as="span"
            sx={{
              fontSize: "0.875rem",
              textTransform: "uppercase",
            }}
          >
            {article_author[0].name}
          </Title>
          <Title
            as="span"
            sx={{
              fontSize: "0.875rem",
              fontWeight: "500",
              lineHeight: "18px",
            }}
          >
            {date}
          </Title>
        </AuthorSectionText>
      </AuthorSection>
      <Divider />
    </Container>
  );
}
