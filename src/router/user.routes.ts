import { Router } from "express";
import * as userController from '../controllers/users.Controllers'
import { validateLoginUser, validateUser } from "../Middlewares/userValidate";
import { isAuthenticated } from "../Middlewares/bearAuth";
import { authorize } from "../Middlewares/roleAuth";
const userRouter=Router()


userRouter.post("/users/login", validateLoginUser, userController.userlogin); 
userRouter.post("/users/create", validateUser, userController.createUser); 

userRouter.get("/users", isAuthenticated,authorize, userController.getUsers); 
userRouter.get("/users/admins", isAuthenticated, authorize, userController.getAdmins)
userRouter.get("/users/admin/:admin_id", isAuthenticated, authorize, userController.getAdminById);
userRouter.get("/users/admin/", isAuthenticated, authorize, userController.getUserByEmail);
userRouter.get("/users/members", isAuthenticated, authorize, userController.getMembers); 
userRouter.get("/users/member/:member_id", isAuthenticated, authorize, userController.getMemberById);
userRouter.delete("/users/delete/:id", isAuthenticated, authorize, userController.deleteUser);


export default userRouter