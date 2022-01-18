
interface Row {
    name?: string
}

export interface FetchRequest {
    keyword?: string,
    zipcode: string,
    start?: string,
    bizType?: string,
    perPage: string
}

export interface FetchResponse {
    perPage: string,
    totalCount: number,
    start: string,
    data: any[],
    _id: string | number
}