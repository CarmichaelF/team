import Blog from "../layouts/Blog";
import { client } from "../../prismicio";
export default Blog;

export async function getStaticProps() {
  const page = await client.getAllByType("blog");

  const articles = await client.getAllByIDs(
    page.map(({ data }) => data.articles.id)
  );

  const featuredPost = await client.getAllByIDs(
    page.map(({ data }) => data.articles.id)
  );

  return {
    props: {
      blog: {
        articles,
        featuredPost,
      },
    },
  };
}
