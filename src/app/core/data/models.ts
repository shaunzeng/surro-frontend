import { GetCommentsResponse } from "../services/api.models";

export interface User {
    email:string;
    firstName:string;
    lastName:string;
    id:string;
    bookmarks:string[];
    img:string[];
    isLoggedIn:boolean;
    userType:string;
    accountType:string;
    zipcode:string
}

export interface LandingState {
    zipcode: string;
    keyword: string;
    bizType: string;
    trendingBlogs: {
        entity: BlogListResponse,
        isLoading: boolean,
        loadedAt: Date
    },
    recentComments: {
        entity: any,
        isLoading: boolean,
        loadedAt: Date
    }
}

export interface SearchState {
    results:{
        entity: any,
        isLoading: boolean,
        loadedAt: Date
    },
    filter: any
}

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

interface BlogListEntity {
    entity: BlogListResponse;
    isLoading: boolean,
    loadedAt: Date
}

interface BlogDetailsEntity {
    entity: any;
    isLoading: boolean,
    loadedAt: Date
}

interface GetCommentsRequest {
    postId: string,
    page?: number,
    perPage?: number
}

interface CommentEntity {
    entity: GetCommentsResponse,
    isLoading: boolean,
    loadedAt: Date
}

export interface BlogState {
    blogs: BlogListEntity;
    details: BlogDetailsEntity;
    comments: CommentEntity;
}

export interface RootState {
    user: User;
    landing: LandingState;
    search: SearchState;
    blogs: BlogState;
}

export interface Option {
    label: string,
    value: string | number
}

export interface ProfileState {
    reviews: {
        entity: any,
        isLoading: boolean,
        loadedAt: Date
    },
    profile:{
        entity: any,
        isLoading: boolean,
        loadedAt: Date,
    },
    stats:{
        entity: any,
        isLoading: boolean,
        loadedAt: Date
    }
}