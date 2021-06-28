import { Router } from "express";
import { UserController } from "./controllers/userController";
import { TagController } from "./controllers/tagController";

const router = Router();

const createUserController = new UserController();
const createTagController = new TagController();

router.post('/users', createUserController.handle);
router.post('/tags', createTagController.handle);

export {router}

