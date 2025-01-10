import { Router } from "express";
import {login, addUser} from "../Controllers/usersControllers.js"

export const loginRoutes = Router()

loginRoutes.post("/login", login)
loginRoutes.post("/login/register", addUser)