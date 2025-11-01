import { Router } from "express";
import * as userController from '../controllers/users.Controllers'
import { validateLoginUser, validateUser } from "../Middlewares/userValidate";
import { isAuthenticated } from "../Middlewares/bearAuth";
const userRouter=Router()

userRouter.get("/users",isAuthenticated,userController.getUsers)
userRouter.get("/users/admins",isAuthenticated,userController.getAdmins)
userRouter.get("/users/admin/:admin_id",isAuthenticated,userController.getAdminById)
userRouter.get("/users/admin/",isAuthenticated,userController.getUserByEmail)
userRouter.get("/users/members",isAuthenticated,userController.getMembers)
userRouter.get("/users/member/:member_id",isAuthenticated,userController.getMemberById)
userRouter.post("/users/create",validateUser,isAuthenticated,userController.createUser)
userRouter.delete("/users/delete/:id",isAuthenticated,userController.deleteUser)
userRouter.post("/users/login",validateLoginUser,userController.userlogin)


export default userRouter