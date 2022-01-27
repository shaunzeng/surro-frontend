
export interface BlogPreview{
    title: string,
    subTitle: string,
    author: string,
    timestamp: Date,
    commentCount: number,
    likesCount: number
}

export interface BlogListResponse {
    id: string,
    totalCount: number,
    page: number,
    data: BlogPreview[]
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