import {Request, Response} from 'express';
import { CreateComplimets } from '../services/CreateCompliments';

class ComplimentController{

    async handle(req: Request, res: Response) {

        const {tag_id,user_sender, user_receiver, message } = req.body;

        const Createcompliment = new CreateComplimets();

        const compliments = await Createcompliment.execute({tag_id,user_sender, user_receiver, message});


        return res.json(compliments);
    
    }
}

export {ComplimentController}