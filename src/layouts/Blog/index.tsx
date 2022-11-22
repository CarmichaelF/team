import Image from "next/image";
import Link from "next/link";
import { Text } from "../../components/Generic/Text";
import { Title } from "../../components/Generic/Title";
import IsMobile from "../../components/IsMobile";
import { getDateFormat } from "../../utils";
import { IArticleData } from "../Article";
import {
  ArticleCard,
  ArticleImage,
  Articles,
  ArticleText,
  AuthorSection,
  AuthorText,
  AvatarImageWrapper,
  Container,
  Featured,
  InnerContainer,
} from "./style";

interface IBlogProps {
  blog: {
    featured_post: {
      data: IArticleData;
    };
    articles: {
      data: IArticleData[];
    };
  };
}

export default function Blog({ blog }: IBlogProps) {
  const { featured_post, articles } = blog;

  return (
    <Container>
      <InnerContainer>
        <Featured bgImage={featured_post.data.article_image.url}>
          <Link href={`/article/${featured_post.data.slug}`}>
            <Title
              as="h2"
              sx={{
                color: "#ffffff",
                fontSize: "0.75rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                "@media (min-width: 768px)": {
                  fontSize: "1rem",
                  lineHeight: "1rem",
                },
              }}
            >
              Featured post
            </Title>
            <IsMobile
              mobile={
                <Title
                  sx={{
                    color: "#ffffff",
                    fontSize: "1.5rem",
                  }}
                >
                  {featured_post.data.title.length > 38
                    ? featured_post.data.title.slice(0, 38) + "..."
                    : featured_post.data.title}
                </Title>
              }
              desktop={
                <Title
                  sx={{
                    color: "#ffffff",
                    fontSize: "1.5rem",
                  }}
                >
                  {featured_post.data.title}
                </Title>
              }
            />
            <IsMobile
              desktop={
                <Text
                  sx={{
                    marginTop: "15px",
                    color: "#ffffff",
                  }}
                >
                  {featured_post.data.summary}
                </Text>
              }
            />
          </Link>
        </Featured>
        <IsMobile
          mobile={
            <Text
              sx={{
                marginTop: "15px",
                marginBottom: "60px",
              }}
            >
              {featured_post.data.summary}
            </Text>
          }
        />
        <Title
          as="h2"
          sx={{
            fontSize: "0.875rem",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            marginBottom: "35px",
            "@media screen and (min-width: 768px)": {
              marginTop: "60px",
              marginBottom: "90px",
              fontSize: "1rem",
            },
          }}
        >
          Recent blog posts
        </Title>
        <Articles>
          {articles.data.map(
            ({
              id,
              title,
              article_image,
              summary,
              createdAt,
              article_author,
              slug,
            }) => (
              <ArticleCard href={`/article/${slug}`} key={id}>
                <ArticleImage bgImage={article_image.url} />
                <ArticleText>
                  <Title
                    as="span"
                    sx={{
                      "@media (min-width: 768px)": {
                        fontSize: "1.125rem",
                        lineHeight: "27px",
                      },
                    }}
                  >
                    {title}
                  </Title>
                  <Text
                    sx={{
                      marginTop: "15px",
                      "@media (min-width: 768px)": {
                        fontSize: "0.875rem",
                        lineHeight: "20px",
                      },
                    }}
                  >
                    {summary.length > 85
                      ? summary.slice(0, 85) + "..."
                      : summary}
                  </Text>
                  <AuthorSection>
                    <AvatarImageWrapper>
                      <Image
                        src={article_author.avatar.url}
                        alt={article_author.avatar.alt}
                        fill
                      />
                    </AvatarImageWrapper>
                    <AuthorText>
                      <Title
                        as="span"
                        sx={{
                          fontSize: "0.875rem",
                          lineHeight: "18px",
                          "@media (min-width: 768px)": {
                            fontSize: "0.875rem",
                            lineHeight: "18px",
                          },
                        }}
                      >
                        {article_author.name}
                      </Title>
                      <Text
                        as="span"
                        sx={{
                          fontSize: "0.75rem",
                          lineHeight: "12px",
                          "@media (min-width: 768px)": {
                            fontSize: "0.75rem",
                            lineHeight: "14px",
                          },
                        }}
                      >
                        {getDateFormat(createdAt)}
                      </Text>
                    </AuthorText>
                  </AuthorSection>
                </ArticleText>
              </ArticleCard>
            )
          )}
        </Articles>
      </InnerContainer>
    </Container>
  );
}
