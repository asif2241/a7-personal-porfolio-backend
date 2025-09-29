/* eslint-disable @typescript-eslint/no-explicit-any */
import { generateSlug } from "../../utils/generateSlug";
import { allowedSortFields, blogSearchableFields } from "./blogs.constant";
import { IBlog } from "./blogs.interface";
import { Blog } from "./blogs.model";

const createBlog = async (payload: Partial<IBlog>) => {
    const slug = generateSlug(payload.title as string)
    const blog = await Blog.create({ ...payload, slug })

    return blog
}

const getSingleBlog = async (slug: string) => {
    const blog = await Blog.findOne({ slug });

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    blog!.views += 1;

    await blog?.save()

    return blog
}

const deleteBlog = async (id: string) => {
    const deletedBlog = await Blog.findByIdAndDelete(id)
    return deletedBlog
}

const getAllBlog = async (query: Record<string, string>) => {
    const page = Number(query.page) || 1;
    const limit = Number(query.limit) || 10;
    const skip = (page - 1) * limit;
    const searchTerm = query.searchTerm || ""


    const userInputSort = query.sort || "-createdAt";

    //extracting the hypen for check sort field matched the allowed sort field
    const sortField = userInputSort.startsWith('-') ? userInputSort.substring(1) : userInputSort;
    let sort = "-createdAt";
    if (allowedSortFields.includes(sortField)) {
        sort = userInputSort;
    }

    // const filter: Record<string, any> = {};

    const searchQuery = {
        $or: blogSearchableFields.map(field => ({ [field]: { $regex: searchTerm, $options: "i" } }))
    }

    const blogs = await Blog.find(searchQuery).sort(sort).skip(skip).limit(limit)

    const total = await Blog.countDocuments(searchQuery);

    return {
        data: blogs,
        meta: {
            page,
            limit,
            total
        }
    }

}

const updateBlog = async (id: string, payload: Partial<IBlog>) => {
    const modifiedData: Partial<IBlog> = { ...payload };
    if (payload.title) {
        modifiedData.slug = generateSlug(payload.title)

    }
    const updatedBlog = await Blog.findByIdAndUpdate(id, modifiedData, { new: true })
    return updatedBlog

}

export const BlogServices = {
    createBlog,
    getSingleBlog,
    deleteBlog,
    getAllBlog,
    updateBlog

}