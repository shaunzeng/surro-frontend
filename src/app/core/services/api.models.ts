export interface PreviewRequest {
    query: string,
    zipcode: string,
    limit?: string
}

export interface ContentRequest {
    keyword?: string,
    zipcode: string,
    page?: string,
    perPage?: string,
    bizType?: string,
    languages?: string[],
    reviews?: string[],
    locations?: string[],
    cost?: string[],
}

export interface SearchPageParams {
    keyword?: string,
    zipcode: string,
    bizType: string
}

export interface BlogListRequest {
    filter?: string,
    page?: number,
    perPage?: number
}

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

export interface BlogListResponse {
    totalCount: number,
    page: number,
    perPage: number,
    source: BlogListRequest,
    data: BlogPreview[]
}

export interface GetCommentsRequest {
    postId: string,
    page?: number,
    perPage?: number
}

export interface Comment {
    id: string,
    author: {
        id: string,
        name: string
    },
    content: string,
    likes: number,
    likedByYou: boolean,
    parentId: string,
    publishedAt: string
}

export interface GetCommentsResponse {
    totalCount: number,
    page: number,
    perPage: number,
    source: GetCommentsRequest,
    data: Comment[]
}

export interface PostCommentRequest {
    postId: string,
    comment: string,
    parentId?: string
}

export interface LikeCommentRequest {
    commentId: string
}

export type ApiModels = PreviewRequest | ContentRequest | BlogListRequest | BlogListResponse | BlogPreview;