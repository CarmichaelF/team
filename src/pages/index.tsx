import Home from "../layouts/Home";
import { client } from "../../prismicio";

export default Home;

export async function getStaticProps() {
  const page = await client.getByType("homepage");

  return {
    props: {
      homepage: page.results[0],
      revalidate: 10,
    },
  };
}
