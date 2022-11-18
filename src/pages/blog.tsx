import client from "../apollo-client";
import Blog from "../layouts/Blog";
import GET_BLOG from "../queries/GET_BLOG";
export default Blog;

export async function getStaticProps() {
  const { data } = await client.query({
    query: GET_BLOG,
  });

  return {
    props: {
      blog: data.blog.data.attributes,
    },
    revalidate: 10,
  };
}
