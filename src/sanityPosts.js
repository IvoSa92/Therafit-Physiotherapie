const { client: sanityClient, urlFor } = require("./sanityClient");

module.exports = async function fetchSanityPosts() {
  try {
    const query = `*[_type == "post"]{
      _id,
      title,
      description,
      keywords,
      slug,
      releaseDate,
      "author": author->name,
      "categories": categories[]->title,
      readingTime,
      body[]{
        ...,
        _type == "imageWithClass" => {
          asset->{
            url
          },
          alt,
          className
        }
      },
      "mainImage": mainImage,
      featured
    } | order(releaseDate desc)`;
    const posts = await sanityClient.fetch(query);

    // Log for debugging the keywords processing
    console.log(
      posts
        .map((post) => post.keywords)
        .filter(Boolean)
        .flat() // Flatten the arrays
        .join(", ")
    );

    // Process posts and ensure keywords and mainImage are properly formatted
    return posts.map((post) => ({
      ...post,
      mainImage: {
        asset: post.mainImage.asset,
        alt: post.mainImage.alt,
      },
      // Process keywords to join them into a comma-separated string
      keywords: post.keywords ? post.keywords.filter(Boolean).join(", ") : "",
    }));
  } catch (error) {
    console.error("Fehler beim Abrufen der Posts von Sanity:", error);
  }
};
