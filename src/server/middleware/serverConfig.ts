import express, { Application } from "express";

export const serverConfig: Application = express();

serverConfig
	.use(express.urlencoded({extended:true}))
	.use(express.json());