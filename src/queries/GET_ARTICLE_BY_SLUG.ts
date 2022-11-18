import { gql } from "@apollo/client";

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

export default GET_ARTICLE_BY_SLUG;