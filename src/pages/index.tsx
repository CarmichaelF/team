import Home from "../layouts/Home";
import client from "../apollo-client";
import GET_HOMEPAGE from "../queries/GET_HOMEPAGE";

export default Home;

export async function getStaticProps() {
  
  const { data } = await client.query({
    query: GET_HOMEPAGE,
  });

  return {
    props: {
      homepage: data.homepage,
    },
  };
}
