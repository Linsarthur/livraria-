import { Router } from "express";
import {
  addBooks,
  deleteBooks,
  editBooks,
  listBooks,
  listBooksById,
} from "../Controllers/livros.controllers.js";

export const livrosRouter = Router();

livrosRouter.get("/livros", listBooks);
livrosRouter.get("/livros/:id", listBooksById);
livrosRouter.post("/livros", addBooks);
livrosRouter.put("/livros/:id", editBooks);
livrosRouter.delete("/livros/:id", deleteBooks);
