import { gql } from "@apollo/client";
import { GetStaticProps } from "next";
import client from "../../apollo-client";
import Article from "../../layouts/Article";

export default Article;

const GET_ARTICLES = gql`
  {
    articles {
      data {
        id
        attributes {
          title
          summary
          article_author {
            id
            name
            avatar {
              data {
                attributes {
                  url
                  width
                  height
                  alternativeText
                }
              }
            }
            role
            id
            name
            avatar {
              data {
                attributes {
                  url
                  width
                  height
                  alternativeText
                }
              }
            }
          }
          article_image {
            data {
              attributes {
                url
                width
                height
                alternativeText
              }
            }
          }
          article_content
          slug
          createdAt
        }
      }
    }
  }
`;

// Get article data from Strapi based on slug
const GET_ARTICLE_BY_SLUG = gql`
  query getArticleBySlug($slug: String!) {
    articles(filters: { slug: { eq: $slug } }) {
      data {
        id
        attributes {
          title
          summary
          article_author {
            id
            name
            avatar {
              data {
                attributes {
                  url
                  width
                  height
                  alternativeText
                }
              }
            }
            role
            id
            name
            avatar {
              data {
                attributes {
                  url
                  width
                  height
                  alternativeText
                }
              }
            }
          }
          article_image {
            data {
              attributes {
                url
                width
                height
                alternativeText
              }
            }
          }
          article_content
          slug
          createdAt
        }
      }
    }
  }
`;

export async function getStaticPaths() {
  const { data } = await client.query({
    query: GET_ARTICLES,
  });
  const paths = data.articles.data.map((article: any) => ({
    params: { slug: article.attributes.slug },
  }));

  return { paths, fallback: false };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data } = await client.query({
    query: GET_ARTICLE_BY_SLUG,
    variables: { slug: params?.slug },
  });

  return {
    props: {
      article: data.articles.data[0],
    },
  };
};
