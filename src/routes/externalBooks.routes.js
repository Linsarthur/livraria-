import { Router } from "express";
import { listExternalBooks } from "../Controllers/listExternalBooks.contoller.js";

export const externalBooksRoute = Router();

externalBooksRoute.get('/livros-externos', listExternalBooks)