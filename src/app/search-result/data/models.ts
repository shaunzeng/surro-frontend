
interface Row {
    name?: string
}

export interface FetchRquest {
    keyword: string,
    zipcode: string
}

export interface FetchResponse {
    is_preview: string,
    source: {
        keyword:string,
        zipcode:string
    },
    data: Row[]
}