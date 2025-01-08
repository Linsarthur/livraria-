import { Router } from "express";
import {
  addBook,
  addBooks,
  deleteBooks,
  editBooks,
  listBooks,
  listBooksById,
} from "../Controllers/livros.controllers.js";

export const livrosRouter = Router();

livrosRouter.get("/livros", listBooks);
livrosRouter.post("/livros", addBook);
livrosRouter.post("/livros/lotes", addBooks);
livrosRouter.get("/livros/:id", listBooksById);
livrosRouter.put("/livros/:id", editBooks);
livrosRouter.delete("/livros/:id", deleteBooks);
