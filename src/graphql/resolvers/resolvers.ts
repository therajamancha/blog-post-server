import {
  createBlogPost,
  deleteBlogPost,
  getBlogPost,
  getBlogPosts,
  updateBlogPost,
} from "../../collections/blogsPost/blogPostController";

export const graphQlResolvers = {
  Mutation: {
    createBlogPost,
    deleteBlogPost,
    updateBlogPost,
  },

  Query: {
    getBlogPosts,
    getBlogPost,
  },
};
