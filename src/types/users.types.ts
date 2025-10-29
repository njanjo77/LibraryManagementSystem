export interface User{
    user_id:number,
    username: string,
    email: string,
    password_hash:string,
    role: string,
    created_at?: Date ,
    updated_at?: Date
}

export interface newUser{
    username:string,
    email:string,
    password_hash:string,
    role:string,
    created_at?:Date,
}

export interface updateUser{
    username?:string,
    password_hash?:string,
    role?:string,
    updated_at?:Date
}