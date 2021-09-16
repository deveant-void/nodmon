import { connect } from "mongoose";
import { environments } from "./config/environmentConfig";
import { app } from "./server/app";

const main = async () => {
	await connect(environments.mongoUrl,{
		dbName: "nodmondb"
	});
	app.listen(3000, () => {
		console.log(`server running on port 3000`);
	});
};

main().catch(console.error);
