export interface BlogPreview{
    id: string,
    category: string,
    images: string[],
    parentId: string,
    summary: string,
    title: string,
    subTitle: string,
    author: {
        id: string,
        name: string
    },
    publishedAt: string,
    tags: string[]
}

export interface BlogListRequest {
    filter?: string, 
    page?: number, 
    perPage?: number
}

export interface BlogListResponse {
    totalCount: number,
    page: number,
    data: BlogPreview[],
    source: BlogListRequest,
    perPage: number,
}

export interface BlogDetailsResponse {
    _id: string,
    title: string,
    subtitle: string,
    summary: string,
    author:{
        id: string,
        name: string
    },
    parentId: string,
    category: string,
    tags: string,
    content: string,
    publishedAt: Date,
    images: string[],
    commentCount: number
}