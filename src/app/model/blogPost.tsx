import mongoose, { Schema } from "mongoose";

const BlogPostSchema = new Schema({
  id: String,
  title: {
    type: String,
    required: [true, "Title is required."],
    trim: true,
    minLength: [1, "Title must be larger than 1 characters"],
    maxLength: [50, "Title must be lesser than 50 characters"],
  },
  date: {
    type: String,
    // type: Date,
    // default: Date.now,
  },
  content: {
    type: Schema.Types.Mixed,
    required: [true, "task is required."],
    // trim: true,
    minLength: [1, "task must be larger than 1 characters"],
    maxlength: [1000000, "task must be smaller than 100000 characters"],
  },
  category: {
    type: String,
  },
  privacy: {
    type: String,
  },
});

const BlogPost =
  mongoose.models.blogposts || mongoose.model("blogposts", BlogPostSchema);
// 코드를 여러번 실행하더라도 동일 모델을 중복해서 생성하지 않고 기존 모델을 재사용
export default BlogPost;
