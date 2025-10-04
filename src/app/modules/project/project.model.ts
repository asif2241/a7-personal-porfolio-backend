// export interface IProject {
//     title: string,
//     thumbnail: string,
//     projectUrl: string,
//     liveLink?: string,
//     description: string,
//     techStack?: string[],
//     features: string[]
// }

import { model, Schema } from "mongoose";
import { IProject } from "./project.interface";

const projectSchema = new Schema<IProject>({
    title: {
        type: String,
        required: true,
        trim: true
    },
    thumbnail: {
        type: String,
        required: true
    },
    backendCodeLink: {
        type: String,
    },
    frontendCodeLink: {
        type: String,
    },
    liveLink: {
        type: String
    },
    description: {
        type: String,
        required: true
    },
    techStack: {
        type: [String],
        required: true
    },
    features: {
        type: [String],
        required: true
    },
    views: {
        type: Number,
        default: 0
    }
}, {
    timestamps: true,
    versionKey: false
})

export const Projects = model<IProject>("Projects", projectSchema)