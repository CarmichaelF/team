import { gql } from "@apollo/client";

const GET_HOMEPAGE = gql`
  {
    homepage {
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
          product_display(publicationState: LIVE) {
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
          testimonials(publicationState: LIVE) {
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
