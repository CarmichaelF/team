// import GET_ARTICLES from "../../../queries/GET_ARTICLES";
// import client from "../../../apollo-client";

// export default async function handler(req, res) {
//   // Check for secret to confirm this is a valid request
//   if (req.query.secret !== process.env.NEXT_MY_SECRET_TOKEN) {
//     return res.status(401).json({ message: "Invalid token" });
//   }

//   try {
//     // Get the current data
//     const { data } = await client.query({
//       query: GET_ARTICLES,
//     });
//     const paths = data.articles.data.map((article) => article.attributes.slug);
//     paths.forEach(async (path) => {
//       // Revalidate each page
//       await res.revalidate(`/article/${path}`);
//     });
//     await res.revalidate("/");
//     await res.revalidate("/blog");
//     return res.json({ revalidated: true });
//   } catch (err) {
//     // If there was an error, Next.js will continue
//     // to show the last successfully generated page
//     console.log("error", err);
//     return res.status(500).send("Error revalidating");
//   }
// }
