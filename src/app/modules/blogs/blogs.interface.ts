export interface IBlog {
    title: string,
    slug?: string,
    content: string,
    thumbnail?: string,
    tags: string[],
    author?: string
}