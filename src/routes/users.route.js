import { Router } from "express";
import { addUser, deleteUser, editUser, findUserById, listUsers } from "../Controllers/usersControllers.js";


export const usersRoute = Router()

usersRoute.get("/users", listUsers)
usersRoute.get("/users/:id", findUserById)
usersRoute.post("/users/register", addUser)
usersRoute.put("/users/:id", editUser)
usersRoute.delete("/users/:id", deleteUser)