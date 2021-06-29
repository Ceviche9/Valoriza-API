import { Router } from "express";
import { UserController } from "./controllers/userController";
import { TagController } from "./controllers/tagController";
import { AuthenticateController } from "./controllers/AuthenticateController";
import { ensureAdmin } from "./middleware/admin";

const router = Router();

const createUserController = new UserController();
const createTagController = new TagController();
const Authenticate = new AuthenticateController();

router.post('/users', createUserController.handle);
router.post('/tags',ensureAdmin, createTagController.handle);
router.post('/login', Authenticate.handle);

export {router}

