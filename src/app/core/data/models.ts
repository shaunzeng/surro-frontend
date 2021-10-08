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


export interface RootState {
    user: User
}