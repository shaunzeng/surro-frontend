
interface Row {
    name?: string
}

export interface FetchRequest {
    keyword?: string,
    zipcode: string,
    page?: string,
    perPage?: string,
    category?: string,
    languages?: string[],
    reviews?: string[],
    locations?: string[],
    cost?: string[],
}

export interface FetchResponse {
    perPage: string,
    totalCount: number,
    page: string,
    data: any[],
}