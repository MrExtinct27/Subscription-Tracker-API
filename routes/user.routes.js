import { Router } from "express";
import { getUser, getUsers } from "../controller/user.controller.js";

import authorize from "../middleware/auth.middleware.js";

const userRouter = Router()

userRouter.get('/',authorize, getUsers)

userRouter.get('/:id',authorize, getUser)

userRouter.post('/',(req,res)=>{
    res.send({title : 'CREATE new user'})
})

userRouter.put('/:id',(req,res)=>{
    res.send({title : 'Update a user'})
})

userRouter.delete('/:id',(req,res)=>{
    res.send({title : 'Delete a user'})
})

export default userRouter