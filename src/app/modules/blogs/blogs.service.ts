import { generateSlug } from "../../utils/generateSlug";
import { IBlog } from "./blogs.interface";
import { Blog } from "./blogs.model";

const createBlog = async (payload: Partial<IBlog>) => {
    const slug = generateSlug(payload.title as string)
    const blog = await Blog.create({ ...payload, slug })

    return blog
}

export const BlogServices = {
    createBlog
}