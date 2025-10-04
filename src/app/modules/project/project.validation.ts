
import z from "zod";

export const createProjectZodSchema = z.object({
    title: z.string({ error: "Title must be String" })
        .min(5, { error: "Title must be at least 5 characters long" })
        .max(50, { error: "Title cannot exceed 50 characters" }),

    thumbnail: z.string({ error: "Title must be String" }),

    backendCodeLink: z.string({ error: "beckendCodeLink must be String" }).optional(),
    frontendCodeLink: z.string({ error: "beckendCodeLink must be String" }).optional(),

    liveLink: z.string({ error: "liveLink must be String" }).optional(),

    description: z.string({ error: "liveLink must be String" })
        .min(30, { error: "Description must be at least 30 characters long" })
        .max(400, { error: "Description cannot exceed 400 characters" }),

    techStack: z.array(z.string()).optional(),

    features: z.array(z.string())
})


export const updateProjectZodSchema = z.object({
    title: z.string({ error: "Title must be String" })
        .min(5, { error: "Title must be at least 5 characters long" })
        .max(50, { error: "Title cannot exceed 50 characters" }).optional(),

    thumbnail: z.string({ error: "Title must be String" }).optional(),

    backendCodeLink: z.string({ error: "beckendCodeLink must be String" }).optional(),
    frontendCodeLink: z.string({ error: "beckendCodeLink must be String" }).optional(),

    liveLink: z.string({ error: "liveLink must be String" }).optional(),

    description: z.string({ error: "liveLink must be String" })
        .min(30, { error: "Description must be at least 30 characters long" })
        .max(400, { error: "Description cannot exceed 400 characters" }),

    techStack: z.array(z.string()).optional(),

    features: z.array(z.string()).optional(),
})