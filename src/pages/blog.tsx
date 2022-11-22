import Blog from "../layouts/Blog";
export default Blog;

export async function getStaticProps() {

  return {
    props: {
      blog: {},
    },
  };
}
