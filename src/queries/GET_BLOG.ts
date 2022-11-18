import { gql } from "@apollo/client";

const GET_BLOG = gql`
  query getBlog {
    blog {
      data {
        id
        attributes {
          featured_post {
            data {
              id
              attributes {
                title
                summary
                article_image {
                  data {
                    id
                    attributes {
                      url
                      alternativeText
                      width
                      height
                    }
                  }
                }
                slug
              }
            }
          }
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
                      id
                      attributes {
                        url
                        alternativeText
                        width
                        height
                      }
                    }
                  }
                }
                article_image {
                  data {
                    id
                    attributes {
                      url
                      alternativeText
                      width
                      height
                    }
                  }
                }
                slug
                createdAt
              }
            }
          }
        }
      }
    }
  }
`;

export default GET_BLOG;