import Home from "../layouts/Home";
import { gql } from "@apollo/client";
import client from "../apollo-client";

export default Home;

export async function getStaticProps() {
  const HOMEPAGE_QUERY = gql`
    {
      homepage {
        data {
          id
          attributes {
            hero {
              id
              title
              paragraph
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
  const { data } = await client.query({
    query: HOMEPAGE_QUERY,
  });

  return {
    props: {
      homepage: data.homepage,
    },
    revalidate: 1,
  };
}
