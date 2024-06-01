import express from "express";
import membersRouter from "./routes/membersRouter.js";
import morgan from "morgan";

const server = express(); //llamamos el server que nos aporta express

server.use(morgan("dev"));
server.use(express.json());
server.use("/members", membersRouter);

server.get("/", (req, res) => {
  //res.send("Success, server working"); //para provar el server al principio
  res.redirect(301, "/members");
});

export default server;
