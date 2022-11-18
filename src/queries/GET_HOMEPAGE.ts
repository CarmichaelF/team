import { gql } from "@apollo/client";

const GET_HOMEPAGE = gql`
  {
    homepage(publicationState: LIVE) {
      data {
        id
        attributes {
          hero {
            id
            title
            paragraph
            background_image {
              data {
                attributes {
                  url
                  alternativeText
                  width
                  height
                }
              }
            }
          }
          product_display {
            id
            title
            paragraph
            desktop_image {
              data {
                attributes {
                  url
                  alternativeText
                  width
                  height
                }
              }
            }
            mobile_image {
              data {
                attributes {
                  url
                  alternativeText
                  width
                  height
                }
              }
            }
            link {
              id
              label
              url
            }
            highlight_color
            offset
            reversed
          }
          testimonials {
            id
            stars
            paragraph
            avatar {
              data {
                attributes {
                  url
                  alternativeText
                  width
                  height
                }
              }
            }
            author
            role
          }
        }
      }
    }
  }
`;

export default GET_HOMEPAGE;
