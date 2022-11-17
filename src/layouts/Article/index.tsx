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
import ReactMarkdown from "react-markdown";
import { getStrapiMedia } from "../../lib/media";
import dateFormat, { masks } from "dateformat";

export interface IArticleData {
  id: string;
  attributes: {
    title: string;
    summary: string;
    article_author: {
      id: string;
      name: string;
      avatar: IImageProps;
      role: string;
    };
    article_image: IImageProps;
    article_content: string;
    createdAt: string;
  };
}

interface IArticleProps {
  article: IArticleData;
}

export default function Article({ article }: IArticleProps) {
  const {
    attributes: {
      article_author,
      article_content,
      article_image,
      summary,
      title,
      createdAt,
    },
  } = article;

  // format date in the formate of "Day Month Date, Year"

  const date = dateFormat(createdAt, "dd mmm. yyyy");

  const { text: readingTimeText } = readingTime(
    article.attributes.article_content
  );

  return (
    <Container>
      <BlogContainer>
        <Title
          sx={{
            marginBottom: "30px",
            fontSize: "32px",
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
            layout="fill"
            src={getStrapiMedia(article_author.avatar)}
            alt={article_author.avatar.data.attributes.alternativeText}
          />
        </ImageWrapper>
        <AuthorSectionText>
          <Title
            as="span"
            sx={{
              textTransform: "uppercase",
            }}
          >
            {article_author.name}
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
          src={getStrapiMedia(article_image)}
          alt={article_image.data.attributes.alternativeText}
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
        <ReactMarkdown>{article_content}</ReactMarkdown>
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
            layout="fill"
            src="/assets/jonathan-peters-avatar.png"
            alt="Img alt"
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
            {article_author.name}
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
