import { EleventyHtmlBasePlugin } from '@11ty/eleventy';
import eleventyNavigationPlugin from '@11ty/eleventy-navigation';
import contentRecommendation from './config/contentRecommendation.js';
import pluginFilters from './config/filters.js';

export default async function (eleventyConfig) {
  // Drafts
  eleventyConfig.addPreprocessor('drafts', '*', (data, content) => {
    if (data.draft && process.env.ELEVENTY_RUN_MODE === 'build') {
      return false;
    }
  });

  eleventyConfig.addPassthroughCopy('./assets/');

  // Watch CSS files
  eleventyConfig.addWatchTarget('./assets/css/**/*.css');

  // Layout aliases
  eleventyConfig.addLayoutAlias('base', 'base.njk');
  eleventyConfig.addLayoutAlias('page', 'page.njk');
  eleventyConfig.addLayoutAlias('post', 'post.njk');

  // Plugins
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.addPlugin(contentRecommendation);
  eleventyConfig.addPlugin(pluginFilters);

  eleventyConfig.addShortcode('currentBuildDate', () => {
    return new Date().toISOString();
  });

  // Collections
  eleventyConfig.addCollection('announcements', function (collectionApi) {
    return collectionApi.getFilteredByGlob('src/announcements/**/*.md');
  });

  eleventyConfig.addCollection('posts', function (collectionApi) {
    return collectionApi.getFilteredByGlob('src/posts/**/*.md');
  });

  eleventyConfig.addCollection('characters', function (collectionApi) {
    return collectionApi.getFilteredByGlob('src/characters/**/*.md');
  });

  eleventyConfig.addCollection('worlds', function (collectionApi) {
    return collectionApi.getFilteredByGlob('src/worlds/**/*.md');
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
