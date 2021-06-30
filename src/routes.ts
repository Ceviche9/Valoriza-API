import { Router } from "express";
import { UserController } from "./controllers/userController";
import { TagController } from "./controllers/tagController";
import { AuthenticateController } from "./controllers/AuthenticateController";
import { ensureAdmin } from "./middleware/admin";
import { ComplimentController } from "./controllers/ComplimentController";
import {ensureAuthenticate} from '../src/middleware/Ensure';

const router = Router();

const createUserController = new UserController();
const createTagController = new TagController();
const Authenticate = new AuthenticateController();
const Compliment = new ComplimentController();

router.post('/users', createUserController.handle);
router.post('/tags',ensureAuthenticate, ensureAdmin, createTagController.handle);
router.post('/login', Authenticate.handle);
router.post('/compliment',ensureAuthenticate, Compliment.handle);

export {router}

