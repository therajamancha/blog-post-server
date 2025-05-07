import mongoose from "mongoose";
import { BlogPostType } from "./blogPostValidation";

const blogPostSchema = new mongoose.Schema<BlogPostType>(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const BlogPost = mongoose.model<BlogPostType>("BlogPost", blogPostSchema);
export default BlogPost;
