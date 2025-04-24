import { EleventyHtmlBasePlugin } from '@11ty/eleventy';
import eleventyNavigationPlugin from '@11ty/eleventy-navigation';
import { DateTime } from 'luxon';

export default async function (eleventyConfig) {
  eleventyConfig.setInputDirectory('src');
  eleventyConfig.setIncludesDirectory('_includes'); // This is relative to your input directory!
  eleventyConfig.addPassthroughCopy('assets');
  eleventyConfig.addPassthroughCopy('bundle.css');

  // Layout aliases
  eleventyConfig.addLayoutAlias('base', 'base.njk');
  eleventyConfig.addLayoutAlias('page', 'page.njk');
  eleventyConfig.addLayoutAlias('post', 'post.njk');

  // Plugins
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  eleventyConfig.addCollection('posts', function (collectionApi) {
    return collectionApi.getFilteredByGlob('src/posts/**/*.md');
  });

  eleventyConfig.addFilter('excerpt', (post) => {
    const content = post.replace(/(<([^>]+)>)/gi, '');
    return content.substr(0, content.lastIndexOf(' ', 200)) + '...';
  });
}

export const config = {
  dir: {
    input: 'src',
    output: '_site',
    // relative to input directory
    includes: '_includes',
    pathPrefix: '/blog/',
  },
};
