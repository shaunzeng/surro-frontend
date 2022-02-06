
interface Row {
    name?: string
}

export interface FetchRequest {
    keyword?: string,
    zipcode: string,
    page?: string,
    bizType?: string,
    perPage?: string
}

export interface FetchResponse {
    perPage: string,
    totalCount: number,
    page: string,
    data: any[],
    _id: string | number
}