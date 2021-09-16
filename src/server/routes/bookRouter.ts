import { Router } from "express";
import { create, remove, update } from "../../book/bookController";

export const BookRouter: Router = Router();

BookRouter.post("/", create);
BookRouter.delete("/:id", remove);
BookRouter.put("/:id", update);
