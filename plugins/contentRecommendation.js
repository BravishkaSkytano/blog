export default async function (eleventyConfig) {
  // add related posts collection
  eleventyConfig.addCollection('relatedPosts', function (collectionApi) {
    // get posts, filter out drafts
    return collectionApi
      .getAll()
      .filter((item) => !item.data.draft)
      .map((post) => {
        let related = [];

        // get related posts by tag
        if (post.data.tags) {
          post.data.tags.forEach((tag) => {
            collectionApi.getFilteredByTag(tag).forEach((item) => {
              if (item.url !== post.url && !related.includes(item) && !item.data.draft) {
                related.push(item);
              }
            });
          });
        }

        // Remove duplicates and limit to a specific number of related posts, for instance, 3

        related = [...new Set(related)].slice(0, 3);

        post.data.related = related;

        return post;
      });
  });
}
