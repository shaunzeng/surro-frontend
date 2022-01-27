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

export interface Blog {
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

export interface LandingState {
    zipcode: string;
    keyword: string;
    bizType: string;
    blogPosts: Blog[]
}

export interface SearchState {
    data: any;
    zipcode: string;
    keyword: string;
    bizType: string;
    isLoading: boolean;
}

interface BlogPreview{
    title: string,
    subTitle: string,
    author: string,
    timestamp: Date,
    commentCount: number,
    likesCount: number
}

export interface BlogList {
    id: string,
    totalCount: number,
    page: number,
    data: BlogPreview[]
}

interface BlogListEntity {
    entity: BlogList;
    isLoading: boolean,
    loadedAt: Date
}

interface BlogDetailsEntity {
    entity: Blog;
    isLoading: boolean,
    loadedAt: Date
}

interface CommentEntity {
    entity:any,
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