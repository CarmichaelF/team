import { GetStaticProps } from "next";
import client from "../../apollo-client";
import Article from "../../layouts/Article";
import GET_ARTICLES from "../../queries/GET_ARTICLES";
import GET_ARTICLE_BY_SLUG from "../../queries/GET_ARTICLE_BY_SLUG";

export default Article;

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
