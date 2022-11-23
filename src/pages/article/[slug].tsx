import { GetStaticProps } from "next";
import { client } from "../../../prismicio";
import Article from "../../layouts/Article";

export default Article;

export async function getStaticPaths() {
  const articles = await client.getAllByType("article");

  const paths = articles.map((article) => ({
    params: { slug: article.uid },
  }));

  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const articles = await client.getAllByType("article");

  const article = articles.find((article) => article.uid === params?.slug);

  return {
    props: {
      article,
      revalidate: 10,
    },
  };
};
