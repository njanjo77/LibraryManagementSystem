export interface User{
    user_id:number,
    username: string,
    email: string,
    password:string,
    role: string,
    created_at?: Date ,
    updated_at?: Date
}

export interface newUser{
    username:string,
    email:string,
    password:string,
    role:string,
    created_at?:Date,
}

export interface updateUser{
    username?:string,
    password?:string,
    role?:string,
    updated_at?:Date
}