export function getPostsByCategory(category) {
  const allPosts = getAllPosts();
  return allPosts.filter((post) =>
    post.frontmatter.categories.includes(category)
  );
}
