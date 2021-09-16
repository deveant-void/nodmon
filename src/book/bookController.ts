import { Request, Response, NextFunction } from "express";
import { BookModel } from "./bookSchema";

export const create = async (
	request: Request,
	response: Response,
	next: NextFunction
) => {
	const bookBody = request.body;
	const book = new BookModel(bookBody);
	const result = await BookModel.create(book);
	response.json(result);
};

export const remove = async (
	request: Request,
	response: Response,
	next: NextFunction
) => {
	const id = request.params.id;
	const result = await BookModel.findByIdAndRemove(id);
	response.json(result);
};

export const update = async (
	request: Request,
	response: Response,
	next: NextFunction
) => {
	const id = request.params.id;
	const body = request.body;
	const result = await BookModel.findByIdAndUpdate(id, body);
	response.json(result);
};
