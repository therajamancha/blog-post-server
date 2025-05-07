import BlogPost from "./blogPostModal";
import { BlogPostType, blogPostValidation } from "./blogPostValidation";

export const getBlogPost = async (_: any, { id }: { id: string }) => {
  return await BlogPost.findById(id);
};

export const getBlogPosts = async () => {
  return await BlogPost.find();
};

export const createBlogPost = async (_: any, body: { body: BlogPostType }) => {
  const validatedData = blogPostValidation.parse(body);
  const blogPost = new BlogPost(validatedData);
  await blogPost.save();
  return blogPost;
};

export const updateBlogPost = async (
  _: any,
  { _id, ...body }: BlogPostType & { _id: string }
) => {
  const validatedData = blogPostValidation.parse(body);
  return await BlogPost.findByIdAndUpdate(_id, validatedData, {
    new: true,
    runValidators: true,
  });
};

export const deleteBlogPost = async (_: any, { id }: { id: string }) => {
  return await BlogPost.findByIdAndDelete(id);
};
