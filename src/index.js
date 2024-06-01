import "dotenv/config";
import "./conectionDataBase.js";
import server from "./server.js";

server.listen(2999);
console.log("Server Port: 2999");
