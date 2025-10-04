export interface IProject {
    title: string,
    thumbnail: string,
    backendCodeLink?: string,
    frontendCodeLink?: string,
    liveLink?: string,
    description: string,
    techStack?: string[],
    features: string[],
    views: number,
}