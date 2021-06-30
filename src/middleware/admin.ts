import {Request, Response, NextFunction, request} from 'express';
import { getCustomRepository } from 'typeorm';
import { UsersRepositories } from '../repositories/UsersRepositories';

export async function ensureAdmin(req: Request, res: Response, next: NextFunction) {

    const {user_id} = req;
    console.log(user_id);

    const userRepo = getCustomRepository(UsersRepositories);

    const {admin} = await userRepo.findOne(user_id);
    
    //Verify

    if(admin) {

        return next();
    }

    return res.status(401).json({error: 'Only admin can create a Tag'});

}