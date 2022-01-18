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

export type ApiModels = PreviewRequest | ContentRequest ;