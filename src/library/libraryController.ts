import { Request, Response, NextFunction } from "express";
import { LibraryModel } from "./librarySchema";

export const create = async (
	request: Request,
	response: Response,
	next: NextFunction
) => {
	const libraryBody = request.body;
	const library = new LibraryModel(libraryBody);
	const result = await LibraryModel.create(library);
	response.json(result);
};

export const addBook = async (
	request: Request,
	response: Response,
	next: NextFunction
) => {
	const id = request.params.id;
	const book = request.body.book;
	const library = await LibraryModel.findById(id);
	library.books = [...library.books, book];
	const result = await LibraryModel.findByIdAndUpdate(id, library);
	response.json(result);
};

export const remove = async (
	request: Request,
	response: Response,
	next: NextFunction
) => {
	const id = request.params.id;
	const result = await LibraryModel.findByIdAndRemove(id);
	response.json(result);
};

export const update = async (
	request: Request,
	response: Response,
	next: NextFunction
) => {
	const id = request.params.id;
	const libraryBody = request.body;
	const result = await LibraryModel.findByIdAndUpdate(id, libraryBody);
	response.json(result);
};

export const findAll = async (
	request: Request,
	response: Response,
	next: NextFunction
) => {
	const result = await LibraryModel.find({}).populate("books");
	response.json(result);
};

export const findOne = async (
	request: Request,
	response: Response,
	next: NextFunction
) => {
	const id = request.params.id;
	const result = await LibraryModel.findById(id).populate("books");
	response.json(result);
};
