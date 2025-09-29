import { z } from "zod"


export const creatBlogZodSchema = z.object({
    //title
    title: z.string({
        error: "Not a string"
    })
        .min(5, { error: "TItle must be at least 6 characters long!" })
        .max(60, { error: "Title cannot exceed 60 characters!" }),
    //content
    content: z.string({
        error: "Content must be string!"
    })
        .min(50, { error: "content must be at least 50 characters long!" }),
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
        .max(60, { error: "Title cannot exceed 60 characters!" }).optional(),

    //conent
    content: z.string({
        error: "Content must be string!"
    })
        .min(50, { error: "content must be at least 10 characters long!" })
        .optional(),

    // thumbnail
    thumbnail: z.string({
        error: "Thumbnail must be string!"
    }).optional(),
    //tags
    tags: z.array(z.string())
        .optional(),
})