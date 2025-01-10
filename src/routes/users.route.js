import { Router } from "express";
import {
  deleteUser,
  editUser,
  findUserById,
  listUsers,
} from "../Controllers/usersControllers.js";


export const usersRoute = Router();



usersRoute.get("/users", listUsers);
usersRoute.get("/users/:id", findUserById);
usersRoute.put("/users/:id", editUser);
usersRoute.delete("/users/:id", deleteUser);
