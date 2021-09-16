import mongoose, { PopulatedDoc, Schema, Document } from "mongoose";
import { Book } from "../book/bookSchema";

export interface Library {
	_id: Schema.Types.ObjectId,
	name: string;
	creationDate: Date;
	state: "Closed" | "Open" | "Suspended";
	books?: PopulatedDoc<Book & Document>[];
}

export const LibrarySchema = new Schema<Library>({
	name: { type: String, required: true },
	creationDate: { type: Date, required: true },
	state: { type: String, required: true },
	books: [
		{ type: Schema.Types.ObjectId, ref: "Book", enum: ["Closed", "Open", "Suspended"] },
	],
});

export const LibraryModel = mongoose.model("library", LibrarySchema);
