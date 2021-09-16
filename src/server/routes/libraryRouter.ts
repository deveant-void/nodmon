import { Router } from "express";
import {
	create,
	remove,
	update,
    addBook,
	findAll,
	findOne,
} from "../../library/libraryController";

export const LibraryRouter: Router = Router();

LibraryRouter.post("/", create);
LibraryRouter.delete("/:id", remove);
LibraryRouter.put("/:id", update);
LibraryRouter.put("/book/:id", addBook);
LibraryRouter.get("/", findAll);
LibraryRouter.get("/:id", findOne);

