export interface User {
    email:string,
    firstName:string,
    lastName:string,
    id:string,
    bookmarks:string[],
    img:string[],
    isLoggedIn:boolean,
    userType:string,
    accountType:string,
    zipcode:string
}

export interface LandingState {
    zipcode: string,
    keyword: string,
    bizType: string
}

export interface SearchState {
    data: any;
    zipcode: string;
    keyword: string;
    bizType: string;
    isLoading: boolean;
}

export interface RootState {
    user: User,
    landing: LandingState,
    search: SearchState,
}