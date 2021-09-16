import { Router } from "express";
import {
	create,
	remove,
	update,
    addBook,
	findOne,
} from "../../library/libraryController";

export const LibraryRouter: Router = Router();

LibraryRouter.post("/", create);
LibraryRouter.delete("/:id", remove);
LibraryRouter.put("/:id", update);
LibraryRouter.put("/book/:id", addBook);
LibraryRouter.get("/:id", findOne);

