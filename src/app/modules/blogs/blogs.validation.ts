import { z } from "zod"


export const creatBlogZodSchema = z.object({
    //title
    title: z.string({
        error: "Not a string"
    })
        .min(5, { error: "TItle must be at least 6 characters long!" })
        .max(50, { error: "Title cannot exceed 50 characters!" }),
    //content
    content: z.string({
        error: "Content must be string!"
    })
        .min(10, { error: "Description must be at least 10 characters long!" })
        .max(150, { error: "Description cannot exceed 150 characters!" }),
    //thumbnail
    thumbnail: z.string({
        error: "Thumbnail must be string!"
    }).optional(),
    //tags
    tags: z.array(z.string())
})

export const UpdareBlogZodSchema = z.object({
    //title
    title: z.string({
        error: "Not a string"
    })
        .min(5, { error: "TItle must be at least 6 characters long!" })
        .max(50, { error: "Title cannot exceed 50 characters!" }).optional(),

    //conent
    content: z.string({
        error: "Content must be string!"
    })
        .min(10, { error: "Description must be at least 10 characters long!" })
        .max(150, { error: "Description cannot exceed 150 characters!" })
        .optional(),

    // thumbnail
    thumbnail: z.string({
        error: "Thumbnail must be string!"
    }).optional(),
    //tags
    tags: z.array(z.string())
        .optional(),
})