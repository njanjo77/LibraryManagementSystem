import * as userRepository from '../repositories/users.Repository'
import { newUser } from '../types/users.types'


export const getAdmins=async()=>{
 const admins=await userRepository.getAdmins()
 return admins
}

export const getAdminById=async(admin_id:number)=>{
    const admin=await userRepository.getAdminById(admin_id)
    return admin
}

export const getUser=async()=>{
    const users=await userRepository.getUsers()
    return users
}
export const getMembers=async()=>{
    const members=await userRepository.getMembers()
    return members
}

export const getMemberId=async(member_id:number)=>{
    const member=await userRepository.getMemberId(member_id)
    return member
}
export const getUserByEmail=async(user_email:string)=>{
    const users=await userRepository.getUserByEmail(user_email)
    return users
}

export const insertUser=async(user:newUser)=>{
    const newUser=await userRepository.insertUser(user)
    return newUser
}

export const deleteUser=async(user_id:number)=>{
   await userRepository.deleteUser(user_id)
}