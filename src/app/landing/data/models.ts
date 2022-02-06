export interface BlogPreview{
    id: string,
    category: string,
    summary: string,
    tags: string[],
    publishedAt: string,
    parentId: string,
    images: string[],
    title: string,
    subTitle: string,
    author: {
        id: string,
        name: string
    },
    commentCount: number,
}

export interface BlogListRequest {
    filter?: string,
    page?: number,
    perPage?: number
}

export interface BlogListResponse {
    totalCount: number,
    page: number,
    perPage: number,
    source: BlogListRequest,
    data: BlogPreview[]
}