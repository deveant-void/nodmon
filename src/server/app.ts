import { Application } from "express";
import { findAll } from "../library/libraryController";
import { serverConfig } from "./middleware/serverConfig";
import { BookRouter } from "./routes/bookRouter";
import { LibraryRouter } from "./routes/libraryRouter";

export const app: Application = serverConfig;

app.use("/book", BookRouter);
app.use("/library", LibraryRouter);
app.get("/", findAll);
