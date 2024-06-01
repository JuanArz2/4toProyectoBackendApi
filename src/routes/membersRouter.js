import { Router } from "express";
import membersController from "../controllers/membersController.js";

const membersRouter = Router();

membersRouter.post("/", membersController.createMember);

//membersRouter.get("/", membersController.readAllMembers);

//membersRouter.get("/:id", membersController.readMember);

//membersRouter.put("/:id", membersController.updateMember);

//membersRouter.delete("/:id", membersController.deleteMember);

export default membersRouter;
