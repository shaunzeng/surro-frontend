export interface PreviewRequest {
    query: string,
    zipcode: string,
    limit?: string
}

export interface ContentRequest {
    query?: string,
    zipcode: string,
    page?: string,
    type?: string,
    perPage?: string
}

export interface SearchPageParams {
    keyword?: string,
    zipcode: string,
    bizType: string
}

export interface BlogListRequest {
    filter: string,
    page: number
}

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

export type ApiModels = PreviewRequest | ContentRequest | BlogListRequest | BlogListResponse | BlogPreview;