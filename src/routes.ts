import { Router } from "express";
import { UserController } from "./controllers/userController";

const router = Router();

const createUserController = new UserController();

router.post('/users', createUserController.handle);




export {router}

