import {Request, Response } from 'express';
import { AuthenticateUser } from '../services/Authenticate';


class AuthenticateController{

    async handle(req: Request, res: Response){

        const {email, password} = req.body;

        const user = new AuthenticateUser();

        const token = await user.execute({
            email, password
        });

        return res.json(token);
    }

}

export {AuthenticateController}