import mongoose, { Schema } from "mongoose";

export interface Book {
	_id: Schema.Types.ObjectId,
	name: string;
	author: string;
	yearPublication: number;
	editorial: string;
	isbn: string;
}

export const BookSchema = new Schema<Book>({
	name: { type: String, required: true },
	author: { type: String, required: true },
	yearPublication: { type: Number, required: true },
	editorial: { type: String, required: true },
	isbn: { type: String, required: true },
});

export const BookModel = mongoose.model("Book", BookSchema);
