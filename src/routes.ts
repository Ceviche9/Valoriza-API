import { Router } from "express";
import { UserController } from "./controllers/userController";
import { TagController } from "./controllers/tagController";
import { AuthenticateController } from "./controllers/AuthenticateController";
import { ensureAdmin } from "./middleware/admin";
import { ComplimentController } from "./controllers/ComplimentController";
import {ensureAuthenticate} from '../src/middleware/Ensure';
import {ListUserReceiveComplimentsController} from '../src/controllers/ReceiveComplimentsController';
import {ListUserSendComplimentsController} from '../src/controllers/SendedComplimentsController';

const router = Router();

const createUserController = new UserController();
const createTagController = new TagController();
const Authenticate = new AuthenticateController();
const Compliment = new ComplimentController();

const sendedList = new ListUserSendComplimentsController();
const receivedList = new ListUserReceiveComplimentsController();

router.post('/users', createUserController.handle);
router.post('/tags',ensureAuthenticate, ensureAdmin, createTagController.handle);
router.post('/login', Authenticate.handle);
router.post('/compliment',ensureAuthenticate, Compliment.handle);

router.get("/users/compliments/send",ensureAuthenticate, sendedList.handle );
router.get("/users/compliments/receive",ensureAuthenticate, receivedList.handle );

export {router}

